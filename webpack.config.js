var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    client: [
      './src/client/render_ui.js',
    ]
  },
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle_[name].js'
  },
  resolve: {
      extensions: ['', '.js', '.scss', '.css'],
      alias: {
        "react": __dirname + '/node_modules/react'
      }
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader"
          },
          {
            test: /\.scss$/,
            loader: 'style!css!sass'
          }
        ]
  },
  devServer: {
      contentBase: "./public"
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
