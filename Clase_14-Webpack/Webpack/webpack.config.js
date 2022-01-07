// Configuracion Webpack

const path = require("path");

module.exports = {
  // Confi punto de entrada
  entry: "./src/index.js",

  // Confi piunto de salida
  output: {
    path: path.resolve(__dirname, "dist"),
    // archivo donde se va enpaquetar el codigo
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
