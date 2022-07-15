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
    clean: true,
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
  optimization: {
    runtimeChunk: "single", // this option is used to extract runtime logic to a separete chunk
    moduleIds: "deterministic", // this option is used to avoid hashcontenet change in vendor chunk
    // this option is used to split 3rd party libraries to a vendor chunk as they are less likely to change in local code
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devtool: "inline-source-map",
};
