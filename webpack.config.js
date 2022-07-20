const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode || "development",
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
        title: env.title || "webpack tutorial",
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
      runtimeChunk: "single",
      moduleIds: "deterministic",

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
};
