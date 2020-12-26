const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const routes = require('./routes');
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
        mailerLite
            .getSubscribers()
            .then(async(subList) => {
                await subList.some(async (singleSub) => {
                    if (singleSub.email === newSubEmail) {
                        status = "200_sub"
                        mailerLite.getGroupSubscribers(process.env.GROUP_ID).then(async(groupSubList)=> {
                            await groupSubList.some((groupSingleSub)=> {
                                if(groupSingleSub.email === newSubEmail){
                                    status = "200_sub_200_group"
                                    return
                                } else {
                                    status = "200_sub_404_group"
                                }
                            })
                        })
                        return
                    } else {
                        status = "404_sub"
                    }
                });
                var action = await takeAction(newSubEmail, status)
                res.json(action)
            })
            .catch((error) => {
                res.json({"message":"error", "error":error})
            });
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