// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
// Webpack Plugins
var DefinePlugin  = require('webpack/lib/DefinePlugin');
var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/*
 * Config
 */
module.exports = {
	resolve: {
		cache: false,
		extensions: ['', '.js', '.json', '.css', '.html'],
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{test: /\.sass$/, loaders: ['to-string', 'css', 'sass'] },
			{
				test: /\.js$/,
				exclude: [/\.e2e\.js$/, /node_modules/],
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015'],
				},
			},
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.html$/, loader: 'raw-loader' },
		],
		postLoaders: [
			// instrument only testing sources with Istanbul
			{
				test: /\.js$/,
				include: root('../src'),
				loader: 'istanbul-instrumenter-loader',
				exclude: [
					/\.e2e\.js$/,
					/node_modules/,
				],
			},
		],
		noParse: [
			/zone\.js\/dist\/.+/,
			/angular2\/bundles\/.+/,
		],
	},
	stats: { colors: true, reasons: true },
	debug: false,
	plugins: [
		new DefinePlugin({
			// Environment helpers
			'process.env': {
				'ENV': JSON.stringify(ENV),
				'NODE_ENV': JSON.stringify(ENV),
			},
			'global': 'window',
			// TypeScript helpers
			'__metadata': 'Reflect.metadata',
			'__decorate': 'Reflect.decorate',
		})
	],
		// we need this due to problems with es6-shim
	node: {
		global: 'window',
		progress: false,
		crypto: 'empty',
		// module: false,
		clearImmediate: false,
		setImmediate: false,
		// mongodb is trying to use these node only packages
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		module: 'empty'
	}
};

// Helper functions

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return root.apply(path, ['node_modules'].concat(args));
}
