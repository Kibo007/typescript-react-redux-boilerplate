const path = require('path');
const APP_DIR = path.resolve(__dirname, '../ui');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                minimize: true || {/* CSSNano Options */}
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {test: /\.tsx?$/, use: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, use: "source-map-loader"},
      {test: /\.svg$/, use: "url-loader?limit=10000&mimetype=image/svg+xml"}
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    HtmlWebpackPluginConfig
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [__dirname, 'node_modules']
  }
};
