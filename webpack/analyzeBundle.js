// in case when we need webpack analayzer we call this script to build project for production and output us
// analyser to see size of bundles, "npm run analyze-bundle"
const config = require('./prod.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
config.plugins.push(new BundleAnalyzerPlugin());
module.exports = config;
