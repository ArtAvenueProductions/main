var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');



module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'app.js', 
    path: DIST_DIR 
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};
