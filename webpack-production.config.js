var devConfig = require('./webpack.config.js');
var WebPackStrip = require('strip-loader');
var stripLoader = {
  enforce: 'pre',
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebPackStrip.loader('console.log')
};
devConfig.module.rules.push(stripLoader);
module.exports = devConfig;
