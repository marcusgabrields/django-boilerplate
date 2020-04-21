const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');

const baseConfig = require('./webpack.base.config');

const nodeModulesDir = path.resolve(__dirname, 'node_modules')

baseConfig.mode = 'development';

baseConfig.entry = [
  'react-hot-loader/patch',
  'whatwg-fetch',
  '@babel/polyfill',
  './frontend/js/index.js',
];

baseConfig.output = {
  path: path.resolve('./frontend/bundles/'),
  publicPath: 'http://localhost:3000/frontend/bundles/',
  filename: '[name].js',
};

baseConfig.optimization = {
  splitChunks: {
    chunks: 'all',
  },
};

baseConfig.module.rules.push(
  {
    test: /\.jsx?$/,
    exclude: [nodeModulesDir],
    use: {
      loader: 'babel-loader',

    }
  },
  {
    test: /\.(woff(2)?|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 100000
      }
    }
  }
);

baseConfig.plugins.push(
  new webpack.EvalSourceMapDevToolPlugin({
    exclude: /node_modules/
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
  new BundleTracker({
    path: __dirname,
    filename: './webpack-stats.json',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname,
      postcss: [autoprefixer],
    },
  }),
);

module.exports = baseConfig;
