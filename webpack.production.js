const webpack = require('webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const config = {
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    }),
    new Dotenv({ path: './.env' }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              [
                'gifsicle',
                {
                  interlaced: false,
                },
              ],
              [
                'mozjpeg',
                {
                  progressive: true,
                  arithmetic: false,
                },
              ],
              [
                'pngquant',
                {
                  floyd: 0.5,
                  speed: 2,
                },
              ],
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: 'http://www.w3.org/2000/svg' },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
        minify: TerserPlugin.esbuildMinify,
      }),
      new TerserPlugin({
        parallel: true,
        minify: TerserPlugin.uglifyJsMinify,
      }),
      new TerserPlugin({
        parallel: true,
        minify: TerserPlugin.terserMinify,
        terserOptions: {
          compress: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
        json: {
          type: 'json',
        },
        default: {
          minChunks: 2,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: false,
  },
  mode: 'production', //production,development
  devtool: 'cheap-module-source-map', //cheap-module-source-map
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  devServer: {
    compress: true,
    before(app) {
      app.get('*.js', function (req, res, next) {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/javascript');
        next();
      });

      app.get('*.css', function (req, res, next) {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/css');
        next();
      });
      app.use(
        compression({
          level: 2, // set compression level from 1 to 9 (6 by default)
          filter: shouldCompress, // set predicate to determine whether to compress
        }),
      );
    },
  },
};
module.exports = merge(common, config);
