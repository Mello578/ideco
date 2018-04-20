'use strict';

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx']
	},
	entry: './src/index.jsx',
	output: {
		path:  __dirname + '/dist/js/',
		publicPath: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/]
			},
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          useRelativePath: false,
          emitFile: false
        }
      },
		]
	}
};