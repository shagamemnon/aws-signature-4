// webpack.config.js
var webpack = require('webpack')
var path = require('path')

var config = {
  entry: path.join(__dirname, '/src', 'awsS3auth.js'),
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js'
  },
  target: 'webworker'
}

module.exports = config
