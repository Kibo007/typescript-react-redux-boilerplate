const path = require('path');
const APP_DIR = path.resolve(__dirname, '../ui');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPrefix = '[name]';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'ui/index.html',
    filename: './index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: [`${APP_DIR}/index.tsx`]
    },
    output: {
        filename: `${outputPrefix}.bundle.js`,
        publicPath: '/',
        path: path.join(__dirname, '../../dist')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [__dirname, 'node_modules']
    }
};
