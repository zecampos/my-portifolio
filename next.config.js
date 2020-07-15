const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportTrailingSlash: true,
  assetPrefix: !debug ? "/my-portifolio/" : "",
};
