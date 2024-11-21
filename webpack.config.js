const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    home: "./src/js/home.js",
    menu: "./src/js/menu.js",
  },
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
    new HtmlWebpackPlugin({
      title: "resto",
      filename: "menu.html",
      template: "./src/template.html",
    }),  
  ],
  module: {
    rules: [
        {
            test: /.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        }
    ]
  }
}