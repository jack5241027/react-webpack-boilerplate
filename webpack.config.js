const webpack = require('webpack')
const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer');
const path = require('path')

module.exports = {
	// devtool: "inline-source-map"
	devtool: 'eval',
	entry: {
		app:[path.join(__dirname, 'client' ,'index'),
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'react-hot-loader/patch'],
		vendors: [
			"react",
			"redux"
		]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name]-bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
		{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel',
            include: __dirname,
			query: {
			    presets: [  "es2015-loose", "stage-0", "react" , "react-optimize"],
			    plugins: [  "react-hot-loader/babel",
			    			"transform-decorators-legacy",
			    			"transform-react-constant-elements",
			    			"transform-runtime",
			    			"add-module-exports"]
			}
		},
        {
            test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        },

		{
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        },
 		{
            test: /\.json$/,
            loader: 'json-loader'
        },
		{
			test: /\.(png|jpg|jpeg|gif|woff)$/,
			loader: 'url-loader?limit=8192?name=[name].[ext]'
		},
		{
            test: /font-awesome\.css$/,
            loaders: [
                'style?sourceMap',
                'css?importLoaders=1',
                'postcss'
            ]
        },
        {
            test: /^((?!font-awesome).)*\.[s]?css$/,
		    loaders: [
		        'style?sourceMap',
		        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
		        'postcss'
		    ]
        }],
	},
	postcss: [
		postcssNested,
		require('postcss-font-magician'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
    	autoprefixer({ browsers: ['last 2 versions'] })
	],
    resolve: {
        root: path.resolve(__dirname),
        alias: {},
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        modulesDirectories: ['node_modules']
    },
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom",
            CSSModules: "react-css-modules"
		}),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors-bundle.js', Infinity),
        new webpack.DefinePlugin({
          'GLOBAL.__CLIENT__':true
        })
	]
}
