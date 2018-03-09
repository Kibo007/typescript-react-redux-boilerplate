const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./base.config.js');

const BUILD_DIR = path.resolve(__dirname, '../../dist');

baseConfig.module.rules.push({
    test: /(\.css|\.scss)$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
            loader: 'postcss-loader',
            options: {plugins: [require('autoprefixer')]}
        }, 'sass-loader']
    })
});

module.exports = merge(baseConfig, {
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.[chunkhash].js'
    },

    plugins: [
        // Copy assets from public folder to dist
        new CopyWebpackPlugin([
            {from: 'public/', to: ''}
        ]),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        // Extract imported CSS into own file
        new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
        // Minify JS
        new UglifyJsPlugin({
            uglifyOptions: {
                parallel: true,
                mangle: false,
                compress: {
                    warnings: false
                },
                sourceMap: false
            }
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[hash].vendor.js',
            minChunks: m => /node_modules/.test(m.context)
        })
    ],
    stats: {
        warnings: false
    }
});
