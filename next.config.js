const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // trailingSlash: true,
    // basePath: "/out",
  assetPrefix: process.env.BASE_PATH || "",
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || "",
  },
  
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
        : null,
    ].filter(Boolean);
  }
};
