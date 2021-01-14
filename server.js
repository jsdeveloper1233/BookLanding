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
            .then(async(subList) => {
                await subList.some(async (singleSub) => {
                    // Find the needed subscriber
                    if (singleSub.email === newSubEmail) {
                        // Means he's subscribed
                        status = "200_sub"
                        // Loops over the subscribers in the choosed group
                        mailerLite.getGroupSubscribers(process.env.GROUP_ID).then(async(groupSubList)=> {
                            await groupSubList.some((groupSingleSub)=> {
                                if(groupSingleSub.email === newSubEmail){
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
                res.json({"message":"error", "error":error})
            });
    })
    server.post("/api/buy/:p", async (req, res)=> {
        switch (req.params.p) {
            case "ebook":
                var u = await getPaymentLink(38.90)
                res.json({"link":u})
                break;
            case "pdf":
                var u = await getPaymentLink(39.90)
                res.json({"link":u})
                break;
            case "hard":
                var u = await getPaymentLink(69.90)
                res.json({"link":u})
                break;

            default:
                res.status(400).json({"message":"error", "error":"unsupported product"})
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
async function getPaymentLink(price, product){
    const P24 = new Przelewy24('133651', '133651', '8a57fa651d374455', true)
    // Set obligatory data
    P24.setSessionId(uuidv4())
    P24.setAmount(price * 100)
    P24.setCurrency('PLN')
    P24.setDescription('Simple payment.')
    P24.setEmail('test@gmail.com')
    P24.setCountry('PL')
    // P24.setUrlStatus('https://myshop.com/api/v1/store/callback_p24')
    P24.setUrlStatus('https://sekretyrozwojuosobistego.pl/api/verifyprz24')
    P24.setUrlReturn('https://sekretyrozwojuosobistego.pl/?paymentSuccess=true')
    
    // What about adding some products?
    P24.addProduct('Product no.1', 'Product description', 1, price * 100)

    // Register our order
    try {
        const token = await P24.register()
        const url = P24.getPayByLinkUrl(token)

        console.log(token)
        console.log(url)
        // var reqbody = {
        //     "merchantId":"133651",
        //     "posId":"133651",
        //     "sessionId":uuidv4(),
        //     "amount":price,
        //     "currency":"PLN",
        //     "description":"Book",
        //     "email":"ahmedmgh67@gmail.com",
        //     "country":"PL",
        //     "language":"pl",
        //     "urlReturn":"https://google.com",
        //     "sign":"",
        // }
        return url
    } catch (e) {
        console.log(e.message)
    }

}
async function takeAction(newSubEmail, status){
    
    switch (status) {
        case '200_sub':
            mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
                "email":newSubEmail
            })
            return {"message":"success"}
        case '404_sub':
            mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
                "email":newSubEmail
            })
            return {"message":"success"}
        case '200_sub_404_group':
            mailerLite.addSubscriberToGroup(process.env.GROUP_ID, {
                "email":newSubEmail
            })
            return {"message":"success"}
        case '200_sub_200_group':
            return{"message":"already_subscribed"}
        default:
            return{"message":"error", "error":"case default"}
    }
}