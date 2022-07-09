const path = require("path");

module.exports = {
  /**
   * defining entries can be done in several ways
   */
  // 1
  //   entry: {
  //     main: "./src/index.js",
  //     second: "./path/to/another/entry",
  //   },
  // 2
  // entry: "./src/index.js",
  // 3 (better way)
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/index.js"),
    },
  },
};
