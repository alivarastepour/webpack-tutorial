const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: {
      import: path.resolve(__dirname, "src/index.js"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true, //this will automatically delete and rebuild dist folder on every build
  },
  module: {
    rules: [
      { test: /\.ts$/, use: ["ts-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(jpeg|jpg|png)$/, type: "asset/resource" },
      { test: /\.TTF$/, type: "asset/resource" },
      { test: /\.csv$/, use: "csv-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      title: "webpack tutorial",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
  },

  devtool: "inline-source-map", // using this tool will let us know the origin of problable errors in development phase
};
