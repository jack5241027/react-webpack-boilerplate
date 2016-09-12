const path = require('path')
const config = require('./webpack.config.js')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Remove react-hot-loader/patch
config.entry.app = config.entry.app[0]

var lastIndex = config.module.loaders.length - 1
config.module.loaders[lastIndex] = {
    test: /^((?!font-awesome).)*\.[s]?css$/,
    loaders: [
        'style?sourceMap',
        ExtractTextPlugin.extract('style', 'css?modules&camelCase=dashes&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        'postcss'
    ]
}

module.exports = {
	// devtool: "source-map"
	// devtool: "cheap-source-map"
    devtool: 'cheap-module-source-map',
    entry: config.entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    module: config.module,
    resolve: config.resolve,
    postcss: config.postcss,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ].concat(config.plugins)
}
