'use strict';
let webpack = require('webpack');

module.exports = {
  entry: {
    'subttribute': './index.js',
    'subttribute.min': './index.js'},
  output: {
    path: './dist',
    filename: '[name].js'},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })]
};
