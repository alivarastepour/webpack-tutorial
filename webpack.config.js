const path = require("path");

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
    rules: [{ test: /\.ts$/, use: ["ts-loader"] }],
  },
};
