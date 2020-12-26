const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const routes = require('./routes');
const MailerLite = require("mailerlite-api-v2-node").default;
const mailerLite = MailerLite("457a48add32c952f9ad9617afc9e6ec0");

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
        mailerLite
            .getSubscribers()
            .then((subList) => {
                subList.filter((singleSub) => {
                    if (singleSub.email === newSubEmail) {
                        // setUserType(singleSub.type);
                        // setUserID(singleSub.id);
                        res.status(200).json({"type": singleSub.type, 'id':singleSub.id})
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({"message":"an error happened"})
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