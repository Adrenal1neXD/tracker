'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 300
  },
  debug: true,
  devtool: "eval",

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts'
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' 
    })
  ]
}