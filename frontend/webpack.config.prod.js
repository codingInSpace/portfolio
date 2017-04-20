const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

const styleLoaders = [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  	options: {
      localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
      modules: true
    }
  }, {
    loader: 'postcss-loader',
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
}];

module.exports = {
	devtool: '',
	entry: [
    'react-hot-loader/patch',
		'webpack-hot-middleware/client',
    'babel-polyfill',
		path.resolve(ROOT_PATH, 'src/index')
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css']
	},
	output: {
		path: path.resolve(ROOT_PATH, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: 'babel-loader',
			},
			{
				test: /\.module\.scss$/,
        use: styleLoaders
			},
			{
				test: /\.scss$/,
				exclude: [/\.module\.scss$/],
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  __dirname + '/node_modules'
                ],
                outputStyle: 'compressed'
              }
            }
          ]
			},
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]'
      }
		]
	}
};
