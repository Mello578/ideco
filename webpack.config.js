'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist/',
    publicPath: __dirname + '/dist/',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          useRelativePath: false,
          emitFile: false
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ]
};