var webpack = require('webpack');
var path = require('path') ;
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
	entry: ['./client/index.js',hotMiddlewareScript],
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
    	publicPath: '/',
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015'
					]
				}
			}
		]
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
	],
	watch: true
}