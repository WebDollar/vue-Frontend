const webpack            = require('webpack')
const { merge }          = require('webpack-merge')
const base               = require('./webpack.base.config')
const nodeExternals      = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueLoaderPlugin    = require('vue-loader/lib/plugin')

const path = require('path')

module.exports = merge(base, {
  target: 'node',
  devtool: 'source-map',
  entry: './src/entry-server.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      createApi: path.resolve(__dirname + '/../src/services/hackernews-api/create-api-server.js'),
      communicationService: path.resolve(__dirname + '/../src/services/communication/http/http.service.js'),
      //communicationService: path.resolve(__dirname + '/../src/services/communication/server-socket-worker/ServerSocketWorker.service.js'),
    }
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    allowlist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin(),
    new VueLoaderPlugin()
  ]
});
