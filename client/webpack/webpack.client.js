const HtmlWebpackPlugin = require("html-webpack-plugin");
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const path = require("path");

const res = p => path.resolve(__dirname, p);

module.exports = {
  entry: res("../src/index.js"),
  output: {
    path: res("../dist"),
    filename: "index_bundle.js"
  },
  plugins: [
    // generate index.html for us
    new HtmlWebpackPlugin({
      template: res("./template.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    // include packages from CDN, instead of being bundled to main app
    // improves build process and possibly app load in production env
    new DynamicCdnWebpackPlugin()
  ]
};
