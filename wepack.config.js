const path = require("path");

module.exports = {
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/index.js"),
    },
  },
  output: {
    path: path.resolve("__dirname", "./dist"), // the path to the output file(s)
    filename: "bundle.js", // the name of the output file. for multiple output chunks it is better to use the below format
    // filename: "[name].js", -> would become main.js in this code. now if we had another entry point named 'second', out output chucks would be sth like this: main.js - second.js
  },
};
