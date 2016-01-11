var webpack = require('webpack');
var path = require('path');

var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
  entry: {
    server: [
      './src/server/app.js',
    ],
  },
  output: {
      path: path.join(__dirname, '/'),
      filename: '[name].js'
  },
  resolve: {
      extensions: ['', '.js'],
      alias: {
        "react": __dirname + '/node_modules/react'
      }
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
  },
  externals: nodeModules,
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
