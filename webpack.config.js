const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WebpackDevServer = require('webpack-dev-server');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

module.exports = {
  mode: "none",
  entry: {
    todolist: "./src/todolist.js",
    item: "./src/item.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[contenthash:8].js",
  },
  module: {
    noParse: /jquery|lodash/,
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      jquery$: path.resolve(__dirname, "assets/js/jquery-1.12.4.min.js"),
    },
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".json", ".wasm"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ["todolist"],
      template: path.resolve(__dirname, "public/todolist.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["item"],
      template: path.resolve(__dirname, "public/item.html"),
      filename: "item.html",
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public/favicon.ico") }],
    }),

    // new BundleAnalyzerPlugin(),

    // new TerserPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: 9000,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  cache: {
    type: "filesystem",
  },
};
