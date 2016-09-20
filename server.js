require('babel-register')
var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
})

server.listen(3000, '0.0.0.0', (err, result) => {
    if (err) {
        return console.log(err)
    }
    console.log('Listening at http://0.0.0.0:3000/')
})
