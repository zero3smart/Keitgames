const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();

module.exports = {
  devtool: 'inline-sourcemap',
  mode: 'development',
  entry: [
    path.join(__dirname, '/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, '/src/assets'),
      path.join(__dirname, '/src/components'),
      path.join(__dirname, '/node_modules')
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Kite',
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      favicon: 'public/favicon.png',
      hash: true,
      cache: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL)
      }
    })/*,
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })*/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        exclude: /(node_modules|bower_components)/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/,
        include: [
          /node_modules/
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        include: [
          path.join(__dirname, 'src')
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          },
        ]
      },
      {
        test: /\.tsv$/,
        include: [
          path.join(__dirname, 'src/data')
        ],
        use: ["dsv-loader"]
      }
    ]
  },
  resolve: {

  },
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty'
  }
}
