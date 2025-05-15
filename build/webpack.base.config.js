const path                        = require('path')
const vueConfig                   = require('./vue-loader.config')
const MiniCssExtractPlugin        = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const TerserPlugin                = require("terser-webpack-plugin")
var BundleAnalyzerPlugin          = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production'
console.log("isProd", isProd)
//const isAnalyze = process.argv.includes('--analyze') || process.argv.includes('--analyse');
const isAnalyze = false;

module.exports = {
  entry: ['babel-regenerator-runtime'],

  devtool: isProd
    ? false
    : 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'root': path.resolve(__dirname, '../'),
      'public': path.resolve(__dirname, '../public'),
      'src': path.resolve(__dirname + '/../src'),
      'consts': path.resolve(__dirname + '/../src/consts'),
      'models': path.resolve(__dirname + '/../src/models'),
      'client': path.resolve(__dirname + '/../src/client'),
      'store': path.resolve(__dirname + '/../src/store'),
      'modules': path.resolve(__dirname + '/../src/modules'),
      'services': path.resolve(__dirname + '/../src/services'),
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //exclude: /node_modules/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: isProd
          ? [ { loader: MiniCssExtractPlugin.loader }, 'css-loader']
          : ['vue-style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins:
       isProd
        ? [
            ...isAnalyze ? [new BundleAnalyzerPlugin()] : [],
            new TerserPlugin({
              terserOptions: { compress: { warnings: false } },
            }),
            new MiniCssExtractPlugin({
              filename: 'common.[chunkhash].css'
            }),
             new webpack.DefinePlugin({
               __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
             }),
        ]
        : [
            ...isAnalyze ? [new BundleAnalyzerPlugin()] : [],
            new FriendlyErrorsWebpackPlugin()
          ]
}
