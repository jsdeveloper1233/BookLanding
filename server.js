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
const mailerLite = MailerLite(process.env.MAILERLITE_API_KEY);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());


    server.post('/api/stripe/checkout', async (req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'Mojosa - React Next Landing Page Templates',
            source: req.body.token.id
        });
        res.send({})
    });
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
    server.post("/api/buy/:p", async (req, res) => {
        switch (req.params.p) {
            case "ebook":
                var u = await getPaymentLink(38.90, req.body.email)
                var body = req.body
                res.json({ "link": u })
                sendEmail("d-43a4ce7ca5344d3c89282454be042e30", req.body.email, req.body.name)
                sendAuthorEmail({cname: body.name, email: body.email, phone: body.phone, address: body.address, city: body.city, state: body.state, zip: body.zip, newsletter: body.newsletter})
                if(body.newsletter){
                    subscribeUser(body.email)
                }
                sendAuthorEmail({cname: body.name, email: body.email, phone: body.phone, address: body.address, city: body.city, state: body.state, zip: body.zip, newsletter: body.newsletter})
                if(body.newsletter){
                    subscribeUser(body.email)
                }
                break;
            case "pdf":
                var u = await getPaymentLink(39.90, req.body.email)
                var body = req.body

                res.json({ "link": u })
                sendEmail("d-889a4f6a165a425cb98e7dae11baa998", req.body.email, req.body.name)
                sendAuthorEmail({cname: body.name, email: body.email, phone: body.phone, address: body.address, city: body.city, state: body.state, zip: body.zip, newsletter: body.newsletter})
                if(body.newsletter){
                    subscribeUser(body.email)
                }
                break;
            case "hard":
                var u = await getPaymentLink(69.90, req.body.email)
                var body = req.body
                res.json({ "link": u })
                sendEmail("d-58f0808630ff4b2483efc4b88e8995f0", req.body.email, req.body.name)
                sendAuthorEmail({cname: body.name, email: body.email, phone: body.phone, address: body.address, city: body.city, state: body.state, zip: body.zip, newsletter: body.newsletter})
                if(body.newsletter){
                    subscribeUser(body.email)
                }
                break;

            default:
                res.status(400).json({ "message": "error", "error": "unsupported product" })
                break;
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
async function getPaymentLink(price, email) {
    const P24 = new Przelewy24('133651', '133651', '8a57fa651d374455', true)
    // Set obligatory data
    P24.setSessionId(uuidv4())
    P24.setAmount(price * 100)
    P24.setCurrency('PLN')
    P24.setDescription('Sekrety Rozwoju Osobistego')
    P24.setEmail(email)
    P24.setCountry('PL')
    P24.setUrlStatus('https://sekretyrozwojuosobistego.pl/api/verifyprz24')
    P24.setUrlReturn('http://localhost:3006/thankyou')
    // P24.setUrlReturn('https://sekretyrozwojuosobistego.pl/thankyou')

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
            "email": "ahmedmgh67@gmail.com",
            "name": "Sergio L"
        },
        "template_id": tid
    }, {
        headers: {
            "Authorization": "Bearer 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"
        }
    })
}
async function sendAuthorEmail({cname, email, phone, address, city, state, zip, newsletter}) {
    await axios.post("https://api.sendgrid.com/v3/mail/send", {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "ahmedmgh67@gmail.com",
                        "name": "Sergio L"
                    }
                ],
                "dynamic_template_data": {
                    "data": "Name: "+cname+" <br/> Email: "+email+"<br/> Phone: "+phone+"<br/> Address: "+address+"<br/> City: "+city+"<br/> State: "+state+"<br/>ZIP: "+zip+ "<br/> Subscribed to newsletter: "+newsletter
                },
            },
        ],
        "from": {
            "email": "ahmedmgh67@gmail.com",
            "name": "Sergio L"
        },
        "template_id": "d-e915b50ef86944e6a1c1b050174aca00"
    }, {
        headers: {
            "Authorization": "Bearer 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"
        }
    })
}

async function subscribeUser(email){
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