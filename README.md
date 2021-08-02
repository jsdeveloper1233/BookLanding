# BookLanding

Most important instructions

## Starting the project

On Local machine run.

```bashd
npm run dev
```

On the Server run.

```bashd
git pull && npm run build && pm2 restart npm
```

Or (rebuilding the sitemap)
```bashd
git pull && npm run build && npm run postbuild && pm2 restart npm
```

## Database

To reset (delete everything and start from 0 orders) the database run:

```bashd
lorem ipsum
```

## Turn on Off reak Przelewy24 payments
To turn off/on real P24 payments change the following variable in the file `yyyyyy.js`:

```javascript
const P24isProductionAndAcceptingRealMoney = false;
```

## Problems on production? Add a temporary unavailable page

To redirect all users to a single page with the information that there are works in progress in the site change the variable `xyz` in the file `xxxxx.js` to true:

```javascript
const turnOnWorkInProgress = false;
```

## Sample .env file

```bashd
SITE_URL=https://www.sekretyrozwojuosobistego.pl
MAILERLITE_API_KEY=
GROUP_ID=
PORT=3006
P24_MERCHANT_ID=
P24_POS_ID=
P24_SALT=
SENDGRID_AUTH_TOKEN=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=localhost
DB_PORT=3306
NEXT_PUBLIC_CAPTCHA_CLIENT=
CAPTCHA_SERVER=
PIXEL_ACCESS_TOKEN=
PIXEL_ADS_PIXEL_ID=
P24_USE_SANDBOX=1
MAINTENANCE_MODE=1
```