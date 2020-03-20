const merge = require("webpack-merge");
const common = require("./webpack.common.js");

/**
 * Using a config for development and production each, merging them with webpack-merge
 */
module.exports = merge(common, {
  mode: "production"
});
