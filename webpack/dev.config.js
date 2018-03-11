const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',

    devServer: {
        inline: true, // Make sure we auto reload the page
        contentBase: path.join(__dirname, '../../public'),
        port: '3000',
        historyApiFallback: true, // Always server something (index)
        compress: true // Gzips things
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new DashboardPlugin({port: 8081})
    ]
});
