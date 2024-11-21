const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html", "./src/menu.html", "./src/css/home.css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "resto",
      filename: "index.html",
      template: "./src/template.html",
    }), 
  ],
}