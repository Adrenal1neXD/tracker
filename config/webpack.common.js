'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.css$/,
      loaders: ['to-string-loader', 'css-loader']
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