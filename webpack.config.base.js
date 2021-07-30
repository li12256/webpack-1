const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
    entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins:
   [new HtmlWebpackPlugin({
    title: '你好 ',
    template: 'src/assets/index.html'
  }),
],
  module: {
    rules: [
    ],
  },
};