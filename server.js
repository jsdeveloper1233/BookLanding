const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const routes = require('./routes');
const axios = require('axios')
const Przelewy24 = require('./prz24lib.js')
const moment = require('moment');
// const {Przelewy24} = require('node-przelewy24')
const MailerLite = require("mailerlite-api-v2-node").default;
require('dotenv').config()
const mailerLite = MailerLite(process.env.MAILERLITE_API_KEY || 'test');
const dev = process.env.NODE_ENV !== 'production';
var uuid = require('uuid');
const app = next({ dir: '.', dev });
const handle = routes.getRequestHandler(app);
const buingOptions = require('./buyingOptions');
const newsletterOptions = require('./newsletterOptions');

const Mails = require('./mail');
const mail = new Mails();

const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

const pixel_access_token = process.env.PIXEL_ACCESS_TOKEN;
const pixel_id = process.env.PIXEL_ADS_PIXEL_ID;

let useSandbox = true;
if(process.env.P24_USE_SANDBOX == 0) {
    useSandbox = false;
}

let current_timestamp = Math.floor(new Date() / 1000);

var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        var filename = file.originalname;
        var now = new Date();
        filename = `${now.getFullYear()}_${now.getMonth()}_${now.getDate()}_${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}_${filename}`;
        callback(null, filename);
    }
});

var upload = multer({ storage: storage });

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderNumber: {
        type: Sequelize.BIGINT
    },
    body: {
        type: DataTypes.STRING(2048),
        allowNull: false
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {

})

const Link = sequelize.define('Link', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    link: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    file: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {

})

const Download = sequelize.define('Download', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    time: {
        type: Sequelize.DATE,
        allowNull: false
    },
    linkId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {

})

Order.sync();
Link.sync();
Download.sync();

setInterval(async () => {
    await synchronize();
}, 1000 * 60);

app.prepare().then(() => {
    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));



    server.post('/api/review', upload.single('sendphoto'), async (req, res) => {

        let key = process.env.CAPTCHA_SERVER;
        let googleUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=` + req.body.captcha;

        let captchaResponse = await axios({
            url: googleUrl
        });

        if (captchaResponse.data.success) {

            if (!!req.body.newsletter) {
                await subscribeUser(req.body.email, newsletterOptions.defaultGroup)
            }

            mail.reviewEmail(req.body.name, req.body.email, req.body.message, req.body.client, req.file, req.body.newsletter, req.body.zgoda, req.body.product, req.body.selectAll)
            res.json({error: ''});
        }
        else {
            res.status(401);
            res.json({error: 'no captcha'});
        }
    });

    // server.post('/api/stripe/checkout', async (req, res) => {
    //     await stripe.charges.create({
    //         amount: req.body.amount,
    //         currency: 'usd',
    //         description: 'Mojosa - React Next Landing Page Templates',
    //         source: req.body.token.id
    //     });
    //     res.send({})
    // });
    server.post('/api/newSubscriber', async (req, res) => {
        var newSubEmail = req.body.newEmail;
        var group = req.body.group || process.env.GROUP_ID;
        var status = null
        // loops on all subscribers to find the current one
        mailerLite
            .getSubscribers()
            .then(async (subList) => {
                await subList.some(async (singleSub) => {
                    // Find the needed subscriber
                    if (singleSub.email === newSubEmail) {
                        // Means he's subscribed
                        status = "200_sub"
                        // Loops over the subscribers in the choosed group
                        mailerLite.getGroupSubscribers(group).then(async (groupSubList) => {
                            await groupSubList.some((groupSingleSub) => {
                                if (groupSingleSub.email === newSubEmail) {
                                    // Means that he's subscribed and in the group
                                    status = "200_sub_200_group"
                                    return
                                } else {
                                    // Means that he's subscribed but not in the group
                                    status = "200_sub_404_group"
                                }
                            })
                        })
                        return
                    } else {
                        // Means he's not subscribed
                        status = "404_sub"
                    }
                });
                // A function that takes action based on the status and returns the result
                var action = await takeAction(newSubEmail, status, group)
                res.json(action)
            })
            .catch((error) => {
                res.json({ "message": "error", "error": error })
            });
    })

    server.get("/api/thankyou", async (req, res) => {
        res.redirect('/thankyou?id=' + req.query.id);
    })

    server.get("/api/status", async (req, res) => {
        var orderNumber = parseInt(req.query.id);
        var state = await Order.findOne({ where: { orderNumber: orderNumber } });

        if (state) {
            res.json({ status: state.status });
        } else {
            res.json({ status: -1 });
        }
    })

    server.get("/api/download", async (req, res) => {
        let id = req.query.id;

        let link = await Link.findOne({ where: { link: id } });
        if (link) {
            await Download.create({ linkId: link.id, time: new Date() });

            let file = `${__dirname}/public/${link.file}`;
            res.download(file);

        } else {
            res.status(404);
        }
    })

    server.post("/api/verify", async (req, res) => {
        console.log('verify')
        const result = await verify(req.body)
        console.log('verify result')
        console.log(result)

        if (result) {
            var id = req.body.p24_session_id;
            var order = await Order.findByPk(parseInt(id));

            if (order) {
                let state = JSON.parse(order.body);
                state.statement = req.body.p24_statement;

                let files = [];
                let names = [];

                if (state.product.links) {
                    state.product.links.forEach(l => {
                        if (!files.some(f => f == l.file)) {
                            files.push(l.file);
                            names.push(l.name);
                        }
                    });
                }

                if (state.extra && state.extra.product.links) {
                    state.extra.product.links.forEach(l => {
                        if (!files.some(f => f == l.file)) {
                            files.push(l.file);
                            names.push(l.name);
                        }
                    });
                }

                let links = [];

                for (let fff = 0; fff < files.length; fff++) {
                    downloadLink = uuid.v4();
                    await Link.create({ link: downloadLink, orderId: order.id, file: files[fff] });
                    downloadLink = `https://sekretyrozwojuosobistego.pl/api/download?id=${encodeURI(downloadLink)}`;
                    links.push(`<a href="${downloadLink}">${names[fff]}</a>`);
                }

                await mail.sendAuthorEmail(state, order.id, order.orderNumber)
                await mail.sendEmail(order, state, links);
                state.status = 1;
                await Order.update({ body: JSON.stringify(state), state: 1 }, { where: { id: parseInt(id) } });

                await sendPixelEvent('zam??wienie - p??atno???? potwierdzona', req);
            }
        }
    })

    server.post("/api/buy/:p", async (req, res) => {

        const quantity = req.body.quantity;

        var body = req.body

        let product;

        for (var property in buingOptions) {
            if (buingOptions[property].sku == req.params.p) {
                product = buingOptions[property];
            }
        }

        if (product) {

            let extraProduct;

            if (product.extra && req.body.extra) {
                extraProduct = buingOptions[product.extra.key];
            }

            var total = (quantity * Math.round(product.price * 100));

            if (extraProduct) {
                var total2 = (req.body.extra.quantity * Math.round(extraProduct.price * 100));
                total = total + total2;
            }

            let shipping = 0;

            if (product.shipping || (extraProduct && extraProduct.shipping)) {

                let extraShipping = 0;
                if (extraProduct && extraProduct.shipping) {
                    extraShipping = extraProduct.shipping;
                }

                shipping = 0;
                if (product.shipping) {
                    shipping = product.shipping;
                }

                shipping = Math.max(shipping, extraShipping);

                total = total + (shipping * 100)
            }

            var electronicShipping = product.electronicShipping;
            if (extraProduct) {
                electronicShipping = electronicShipping && extraProduct.electronicShipping;
            }

            var state = {
                price: total,
                quantity: quantity,
                shipping: shipping,
                electronicShipping: electronicShipping,
                description: body.description,
                cname: body.name,
                email: body.email,
                phone: body.phone,
                address: body.address,
                city: body.city,
                state: body.state,
                zip: body.zip,
                newsletter: body.newsletter,
                product: product,
                privacy: body.privacy,
                terms: body.terms,
                comment: body.comment,
                template: product.template,
                vat: body.vat,
                vatCompany: body.vatCompany,
                vatNip: body.vatNip,
                vatAddress: body.vatAddress,
                vatCity: body.vatCity,
                vatState: body.vatState,
                vatZip: body.vatZip,
                status: 0,
                extra: body.extra,
                selectAll: body.selectAll
            };

            let order = await Order.create({
                body: JSON.stringify(state),
                state: 0
            });

            order.orderNumber = reverseBits(order.id);

            await Order.update({orderNumber: order.orderNumber}, { where: { id: order.id } });

            var u = await getPaymentLink(order, state);

            await mail.sendNewOrderEmail(order, state);

            res.json({ "link": u, "order": order.orderNumber });
            await sendPixelEvent('nowe zam??wienie', req);

            if (body.newsletter) {
                var subscribed = false;
                
                if(product.mailerLiteGroupID) {
                    await subscribeUser(body.email, product.mailerLiteGroupID)
                    subscribed = true;
                }

                if(extraProduct && extraProduct.mailerLiteGroupID && extraProduct.mailerLiteGroupID != product.mailerLiteGroupID) {
                    await subscribeUser(body.email, extraProduct.mailerLiteGroupID)
                    subscribed = true;
                }

                if(!subscribed){
                    await subscribeUser(body.email, newsletterOptions.defaultGroup)
                }
            }

        } else {
            res.status(400).json({ "message": "error", "error": "unsupported product" })
        }
    })
    server.get('*', (req, res) => {
        return handle(req, res)
    });
    const PORT = process.env.PORT || 3006;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
})

async function sendPixelEvent(event, request) {
    var response = await axios.post(`https://graph.facebook.com/v11.0/${pixel_id}/events`, {
        access_token: pixel_access_token,
        data: [{
            event_name: event,
            event_time: current_timestamp,
            opt_out: true,
            user_data: {
                client_ip_address: request.connection.remoteAddress,
                client_user_agent: request.headers['user-agent']
            }
        }],
    });

    console.log(response);
}

async function synchronize() {
    var time = new Date();
    time = moment(time).add(-15, 'm').toDate();
    var result = await Order.findAll({ where: { state: 0, createdAt: { [Op.lt]: time } } });

    for (let i = 0; i < result.length; i++) {
        let item = result[i];
        await rejectOrder(item);
    }
}

async function rejectOrder(order) {
    await mail.sendRejectOrderEmail(order, JSON.parse(order.body));
    await Order.update({ state: -1 }, { where: { id: order.id } });
}

async function getPaymentLink(order, state) {
    const P24 = new Przelewy24(process.env.P24_MERCHANT_ID, process.env.P24_POS_ID, process.env.P24_SALT, useSandbox)
    const PORT = process.env.PORT || 3006;
    // Set obligatory data
    P24.setSessionId(order.id + '')
    P24.setAmount(state.price)
    P24.setCurrency('PLN')

    if (state.description) {
        P24.setDescription(state.description)
    }

    P24.setEmail(state.email)
    P24.setCountry('PL')
    P24.setWaitForResult(1)

    if (state.cname) {
        P24.setClient(state.cname)
    }

    if (state.address) {
        P24.setAddress(state.address)
    }

    if (state.zip) {
        P24.setZip(state.zip)
    }

    if (state.city) {
        P24.setCity(state.city)
    }

    if (state.phone) {
        // P24.setPhone(state.phone)
    }

    P24.setEncoding('UTF-8')

    if (dev) {
        P24.setUrlStatus(`http://localhost:${PORT}/api/verify`)
        P24.setUrlReturn(`http://localhost:${PORT}/api/thankyou?id=${order.orderNumber}`)
    } else {
        P24.setUrlStatus(`https://www.sekretyrozwojuosobistego.pl/api/verify`)
        P24.setUrlReturn(`https://www.sekretyrozwojuosobistego.pl/api/thankyou?id=${order.orderNumber}`)
    }

    P24.addProduct(state.product.name, state.product.description, state.quantity, state.product.price * 100);

    if (state.extra) {
        P24.addProduct(state.extra.product.name, state.extra.product.description, state.extra.quantity, state.extra.product.price * 100);
    }

    // Register our order
    try {
        const token = await P24.register()
        const url = P24.getPayByLinkUrl(token)

        console.log(token)
        console.log(url)
        return url
    } catch (e) {
        console.log(e.message)
    }

}

async function verify(state) {
    const P24 = new Przelewy24(process.env.P24_MERCHANT_ID, process.env.P24_POS_ID, process.env.P24_SALT, true) //todo dev zamiast true

    P24.setSessionId(state.p24_session_id)
    P24.setAmount(state.p24_amount)
    P24.setCurrency(state.p24_currency)
    P24.setOrderId(state.p24_order_id)

    try {
        const result = await P24.verify();
        console.log(result)
        return true;
    } catch (e) {
        console.log(e.message)
    }

    return false;
}

function reverseBits(num) {
    let reversed = num.toString(2);
    const padding = "0";
    reversed = padding.repeat(32 - reversed.length) + reversed;
    return parseInt(reversed.split('').reverse().join(''), 2);
}

async function subscribeUser(email, group) {
    await mailerLite.addSubscriberToGroup(group, {
        "email": email
    })
}
async function takeAction(newSubEmail, status, group) {

    switch (status) {
        case '200_sub':
            await subscribeUser(newSubEmail, group)
            return { "message": "success" }
        case '404_sub':
            await subscribeUser(newSubEmail, group)
            return { "message": "success" }
        case '200_sub_404_group':
            await subscribeUser(newSubEmail, group)
            return { "message": "success" }
        case '200_sub_200_group':
            return { "message": "already_subscribed" }
        default:
            return { "message": "error", "error": "case default" }
    }
}
