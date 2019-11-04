const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    "single-spa.config": "./packages/single-spa.config.ts"
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
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
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    //modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin()
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true
  }
};
