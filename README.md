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


