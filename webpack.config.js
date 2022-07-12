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
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.ts$/, use: ["ts-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(jpeg|jpg|png)$/, type: "asset/resource" },
      { test: /\.TTF$/, type: "asset/resource" }, // according to the webpack documentation this line is neccasry, however removing it didn't cause any problem
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
};
