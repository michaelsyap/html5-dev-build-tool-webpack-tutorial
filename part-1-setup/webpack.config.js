const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
	entry: {
		index: "./src/pages/index/index.js",
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
  output: {
    filename: "[name]/[name].bundle.js",
    publicPath: "/"
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["index"],
      inject: false,
      filename: "index.html",
      template: "src/pages/index/index.html",
    }),
  ]
}
