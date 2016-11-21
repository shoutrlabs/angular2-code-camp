/* global __dirname */
/*eslint no-var:0*/
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

module.exports = {
	entry: {
		app: './src/boot.js',
		vendor: './src/vendor.js',
		polyfill: './src/polyfills.js',
  },
	output: {
		filename: 'app.js',
		path: './dist',
	},
	plugins: [
		new CopyWebpackPlugin([
			{ context: './src/static/byte', from: '**/*', to: './' },
		]),
    new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'polyfill'],
			filename: '[name].boxx-frontend.js',
			minChunks: Infinity,
		}),
		new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      // exclude: /a\.js/,
      // add errors to webpack instead of warnings
      failOnError: true
    }),
  ],
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js']
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		module: 'empty',
	},
	module: {
		loaders: [
			{ test: /\.sass$/, loaders: ['to-string', 'css', 'sass'] },
			{ test: /\.css$/, loader: 'raw-loader' },
			{ test: /\.html$/, loader: 'raw-loader' },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015'],
				},
			},
		],
	},
};
