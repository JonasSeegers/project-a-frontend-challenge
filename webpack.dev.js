const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

/**
 * Using a config for development and production each, merging them with webpack-merge
 */
const config = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    publicPath: "/",
    port: 3000
  }
};

module.exports = merge(common, config);
