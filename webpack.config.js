var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared');

module.exports = {
  context: path.resolve('js'),
  entry: {
    about: './about_page.js',
    home: './home_page.js',
    contact: './contact_page.js'
  },
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public'
  },
  plugins: [commonsPlugin],
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
};
