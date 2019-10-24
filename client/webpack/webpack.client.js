const HtmlWebpackPlugin = require("html-webpack-plugin");
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");

const res = p => path.resolve(__dirname, p);
const minify = (bool = false) => ({
  collapseWhitespace: bool,
  removeComments: bool,
  removeRedundantAttributes: bool,
  removeScriptTypeAttributes: bool,
  removeStyleLinkTypeAttributes: bool,
  useShortDoctype: bool
});

module.exports = {
  entry: res("../src/index.js"),
  output: {
    path: res("../dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  externals: {
    "aws-sdk": "AWS",
    "moment": "moment",
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  plugins: [
    // generate index.html for us
    new HtmlWebpackPlugin({
      title: "Squeezing web performance",
      template: res("./template.html"),
      minify: minify(false),
      prefetch: ["*.js", "react*"],
      preload: "*.*"
    }),
    // include packages from CDN, instead of being bundled to main app
    // improves build process and possibly app load in production env
    new DynamicCdnWebpackPlugin(),
    // generate favicons for every device
    new FaviconsWebpackPlugin(res("./fire.svg")),
    new ScriptExtHtmlWebpackPlugin({}), // properly setup later
    new ResourceHintWebpackPlugin(),
    new PreloadWebpackPlugin({
      rel: "preload",
      as(entry) {
        if (/\.css$/.test(entry)) return "style";
        if (/\.woff$/.test(entry)) return "font";
        if (/\.png$/.test(entry)) return "image";
        return "script";
      }
    })
  ]
};
