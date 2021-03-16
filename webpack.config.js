// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path'); //node path module 가져옴

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  }
};