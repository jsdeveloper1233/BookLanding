module.exports = {
    siteUrl: process.env.SITE_URL || process.env.development.SITE_URL,
    generateRobotsTxt: true, // (optional)
    exclude: ['/checkout', '/czy-grupa-jest-sekta', '/thankyou'],
  }
