const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
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
      template: "./src/template.html",
    }), 
    new HtmlWebpackPlugin({
      filename: "menu.html",
      template: "./src/menu.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
        {
            test: /.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
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