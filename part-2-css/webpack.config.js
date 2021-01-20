const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
	entry: {
		index: './src/pages/index/index.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      inject: false,
      filename: 'index.html',
      template: 'src/pages/index/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/'
  },
}
