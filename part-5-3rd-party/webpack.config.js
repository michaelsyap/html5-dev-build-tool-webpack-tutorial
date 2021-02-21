const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
	entry: {
		index: './src/pages/index/index.js',
		carousel: './src/pages/carousel/carousel.js'
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        //This is a regex of file extensions for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
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
    new HtmlWebpackPlugin({
      chunks: ['carousel'],
      inject: false,
      filename: 'carousel.html',
      template: 'src/pages/carousel/carousel.html',
    }),
  ],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets")
    }
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/'
  },
}
