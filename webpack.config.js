'use strict';
let webpack = require('webpack');

module.exports = {
  
  entry: {
    'subttribute': './index.js',
    'subttribute.min': './index.js'},
  
  output: {
    path: './dist',
    filename: '[name].js'},

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['eslint']}
    ]
  },
  
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })],
};
