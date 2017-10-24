var path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: ['./utils', './app'],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
};
