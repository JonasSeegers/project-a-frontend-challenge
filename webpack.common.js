const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * This is my default webpack config that I use as boilerplate for TypeScript projects
 */
const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["cache-loader", "ts-loader"], // this increases build time
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".mjs", ".tsx", ".ts", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html", inject: "body" }) // this plugin injects the bundle inside a given html file
  ]
};

module.exports = config;
