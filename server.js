const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const routes = require('./routes');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios')
const Przelewy24 = require('./prz24lib.js')
// const {Przelewy24} = require('node-przelewy24')
// const P24 = new Przelewy24('133651', '133651', '8a57fa651d374455', false)
const MailerLite = require("mailerlite-api-v2-node").default;
require('dotenv').config()
const mailerLite = MailerLite(process.env.MAILERLITE_API_KEY || 'test');
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = routes.getRequestHandler(app);
const buingOptions = require('./buyingOptions');
const NodeCache = require("node-cache");
const serverCache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

app.prepare().then(() => {
    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));


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
        var newSubEmail = req.body.newEmail
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
                        mailerLite.getGroupSubscribers(process.env.GROUP_ID).then(async (groupSubList) => {
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
                var action = await takeAction(newSubEmail, status)
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
        var state = serverCache.get(req.query.id);

        if (state) {
            res.json({ status: state.status });
        } else {
            res.json({ status: -1 });
        }
    })

    server.post("/api/verify", async (req, res) => {
        console.log('verify')
        const result = await verify(req.body)
        console.log('verify result')
        console.log(result)

        if (result) {
            var id = req.body.p24_session_id;
            var state = serverCache.get(id);

            if (state) {
                state.statement = req.body.p24_statement;
                sendAuthorEmail(state)
                sendEmail(state.template, state.email, state.cname)
                state.status = 1;
                serverCache.set(id, state);
            }
        }
    })

    server.post("/api/buy/:p", async (req, res) => {

        const quantity = req.body.quantity;
        const id = uuidv4();

        var body = req.body

        let product;

        for(var property in buingOptions){
            if(buingOptions[property].sku == req.params.p){
                product = buingOptions[property];
            }
        }

        if (product) {

            let extraProduct;

            if(product.extra && req.body.extra) {
                extraProduct = buingOptions[product.extra.key];
            }

            var total = (quantity * Math.round(product.price * 100));

            if(extraProduct) {
                var total2 = (req.body.extra.quantity * Math.round(extraProduct.price * 100));
                total = total + total2;
            }

            if (product.shipping || (extraProduct && extraProduct.shipping)) {

                let extraShipping = 0;
                if(extraProduct && extraProduct.shipping)
                {
                    extraShipping = extraProduct.shipping;
                }

                let shipping = 0;
                if(product.shipping){
                    shipping = product.shipping;
                }

                total = total + (Math.max(shipping, extraShipping) * 100)
            }

            var state = {
                id: id,
                price: total,
                description: body.description,
                cname: body.name,
                email: body.email,
                phone: body.phone,
                address: body.address,
                city: body.city,
                state: body.state,
                zip: body.zip,
                newsletter: body.newsletter,
                product: body.product,
                quantity: body.quantity,
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
                extra: body.extra
            };

            var u = await getPaymentLink(state)

            res.json({ "link": u })

            serverCache.set(id, state);

            if (body.newsletter) {
                subscribeUser(body.email)
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
async function getPaymentLink(state) {
    const P24 = new Przelewy24(process.env.P24_MERCHANT_ID, process.env.P24_POS_ID, process.env.P24_SALT, true) // todo dev zamiast true
    const PORT = process.env.PORT || 3006;
    // Set obligatory data
    P24.setSessionId(state.id)
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
        P24.setUrlReturn(`http://localhost:${PORT}/api/thankyou?id=${state.id}`)
    } else {
        P24.setUrlStatus(`https://sekretyrozwojuosobistego.pl/api/verify`)
        P24.setUrlReturn(`https://sekretyrozwojuosobistego.pl/api/thankyou?id=${state.id}`)
    }

    // What about adding some products?
    // P24.addProduct('Book', 'Product description', 1, price * 100)

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

async function sendEmail(tid, email, name) {
    await axios.post("https://api.sendgrid.com/v3/mail/send", {
        "personalizations": [
            {
                "to": [
                    {
                        "email": email,
                        "name": name
                    }
                ],
            }
        ],
        "from": {
            "email": "sergio@sergiosdorje.com",
            "name": "Sergio S Dorje"
        },
        "template_id": tid
    }, {
        headers: {
            "Authorization": process.env.SENDGRID_AUTH_TOKEN
        }
    })
}
async function sendAuthorEmail({ cname, email, phone, address, city, state, zip, newsletter, product, quantity, privacy, terms, comment, statement, vat, vatCompany, vatNip, vatAddress, vatCity, vatState, vatZip }) {
    await axios.post("https://api.sendgrid.com/v3/mail/send", {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "sergio@sergiosdorje.com",
                        "name": "Sergio S Dorje"
                    }
                ],
                "dynamic_template_data": {
                    "data": `<h2>Wyślij do:</h2>
                    <div>
                    Imię i nazwisko: ${cname} <br/>
                    Adres: ${address} <br/>
                    Kod: ${zip} <br/>
                    Miejscowość: ${city} <br/>
                    <br/>
                    Tel: ${phone} <br/>
                    Email: ${email}
                    </div>
                    <br/>
                    <div>
                    <h2>Zamówienie</h2>
                    Produkt zamówiony: ${product}<br/>
                    Ilość sztuk: ${quantity}<br/>
                    Komentarz: ${comment}
                    </div>
                    <br/>
                    <div>
                    <h2>Dodatkowe informacje</h2>
                    Polityka prywatnośći zaznaczona: ${privacy}<br/>
                    Regulamin zaakceptowany: ${terms}<br/>
                    Zapisał się do newslettera: ${newsletter}
                    <br/>
                    <br/>
                    <h2>Dane do faktury</h2>
                    Wystawić fakturę: ${vat}</br>
                    Firma: ${vatCompany}</br>
                    NIP: ${vatNip}</br>
                    Adres: ${vatAddress} <br/>
                    Kod: ${vatZip} <br/>
                    Miejscowość: ${vatCity} <br/>
                    <br/>
                    <br/>
                    Tytuł przelewu: ${statement}
                    </div>
                    `

                    // "data": "Name: "+cname+" <br/> Email: "+email+"<br/> Phone: "+phone+"<br/> Address: "+address+"<br/> City: "+city+"<br/> State: "+state+"<br/>ZIP: "+zip+ "<br/> Subscribed to newsletter: "+newsletter +"<br/> Product:" + product + "<br/> Quantity:" + quantity + "<br/> Privacy:" + privacy + "<br /> Terms:" +  terms+ "<br/> Comment: "+comment
                },
            },
        ],
        "from": {
            "email": "sergio@sergiosdorje.com",
            "name": "Sergio S Dorje"
        },
        "template_id": "d-e915b50ef86944e6a1c1b050174aca00"
    }, {
        headers: {
            "Authorization": process.env.SENDGRID_AUTH_TOKEN
        }
    })
}

async function subscribeUser(email) {
    mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
        "email": email
    })
}
async function takeAction(newSubEmail, status) {

    switch (status) {
        case '200_sub':
            mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
                "email": newSubEmail
            })
            return { "message": "success" }
        case '404_sub':
            mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
                "email": newSubEmail
            })
            return { "message": "success" }
        case '200_sub_404_group':
            mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
                "email": newSubEmail
            })
            return { "message": "success" }
        case '200_sub_200_group':
            return { "message": "already_subscribed" }
        default:
            return { "message": "error", "error": "case default" }
    }
}