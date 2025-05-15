const isProd                  = process.env.NODE_ENV === 'production';
const devMode                 = !isProd;
const vueConfig               = require('./vue-loader.config');
const vueContext              = require('./vue-context.js');
const path                    = require('path');
const webpack                 = require('webpack');
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const PreloadWebpackPlugin    = require('@vue/preload-webpack-plugin');
const VueSSRClientPlugin      = require('vue-server-renderer/client-plugin');
const { GenerateSW }          = require('workbox-webpack-plugin');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');
const VueLoaderPlugin         = require('vue-loader/lib/plugin');
const CssMinimizerPlugin      = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const TerserPlugin            = require('terser-webpack-plugin');

console.log("isProd", isProd)

const webpackConfig = {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: './src/entry-client.js'
    },
    devtool: isProd ? false : 'cheap-module-source-map',
    output: {
        path      : path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename  : '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'root'    : path.resolve(__dirname, '..'),
            'public'  : path.resolve(__dirname, '..', 'public'),
            'src'     : path.resolve(__dirname, '..', 'src'),
            'consts'  : path.resolve(__dirname, '..', 'src', 'consts'),
            'models'  : path.resolve(__dirname, '..', 'src', 'models'),
            'client'  : path.resolve(__dirname, '..', 'src', 'client'),
            'store'   : path.resolve(__dirname, '..', 'src', 'store'),
            'modules' : path.resolve(__dirname, '..', 'src', 'modules'),
            'services': path.resolve(__dirname, '..', 'src', 'services'),
        }
    },
    performance: {
        maxEntrypointSize: 300000,
        hints            : isProd ? 'warning' : false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                manifest: {
                    test: /manifest/
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
            new CssMinimizerPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': devMode ? '"development"' : '"production"',
            'VUE_ENV' : '"client"'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : 'common.[chunkhash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new VueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.hbs',
            templateParameters: vueContext
        }),
        new PreloadWebpackPlugin(),
        new webpack.ProvidePlugin({}),
        new CopyPlugin({
          patterns: [
            { from: 'public', to: 'public'}
        ]}),
        new VueLoaderPlugin()
    ],
    module: {
        noParse: [
            /es6-promise\.js$/
        ],
        rules: [
            {
                test   : /\.vue$/,
                loader : 'vue-loader',
                options: vueConfig
            },
            {
                test   : /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-regenerator', '@babel/plugin-transform-runtime']
                }
            },
            {
                test   : /\.(png|jpg|gif|svg)$/,
                loader : 'url-loader',
                options: {
                    limit: 10000,
                    name : '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ]
    }
};

if (isProd)
{
    webpackConfig.plugins.push(new GenerateSW({
        cacheId: 'WebDollar-PWA',
        swDest: 'service-worker.js',
        dontCacheBustURLsMatching: /./,
        ignoreURLParametersMatching: [/\.map$/, /\.json$/],
        runtimeCaching: [
            {
                urlPattern: '/',
                handler: 'NetworkFirst'
            },
            {
                urlPattern: /\/(top|new|show|ask|jobs)/,
                handler: 'NetworkFirst'
            },
            {
                urlPattern: '/item/:id',
                handler: 'NetworkFirst'
            },
            {
                urlPattern: '/user/:id',
                handler: 'NetworkFirst'
            }
        ]
    }));

}

module.exports = webpackConfig;
