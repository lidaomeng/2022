const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WebpackDevServer = require('webpack-dev-server');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./src/todolist.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: 'file-loader',
      }
    ],
  },
  resolve: {
    alias: {
      jquery$: path.resolve(__dirname, "assets/js/jquery-1.12.4.min.js"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[id].css'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/todolist.html"),
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public/favicon.ico") }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: 9000,
    hot: true,
  },
};
