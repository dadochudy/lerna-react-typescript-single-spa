const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: {
    "single-spa.config": "./packages/single-spa.config.js",
    "common-dependencies": [
      /* Just one version of react, too. react-router is fine to have multiple versions of,
       * though, so no need to put it in common dependencies
       */
      "react",
      "react-dom"
    ]
  },
  output: {
    publicPath: "/build/",
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true
  }
};
