var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('js'),
  entry: {
    about: './about_page.js',
    home: './home_page.js',
    contact: './contact_page.js'
  },
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public'
  },
  plugins: [commonsPlugin, new ExtractTextPlugin('styles.css')],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
};
