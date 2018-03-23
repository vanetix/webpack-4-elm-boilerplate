const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { join, resolve } = require('path');

const paths = {
  src: resolve(__dirname),
  dest: resolve(join(__dirname, 'dist'))
};

module.exports = {
  entry: join(paths.src, 'index.js'),

  output: {
    path: paths.dest,
    filename: 'js/[name].js'
  },

  resolve: {
    extensions: ['.js', '.elm', '.scss', '.png'],
    modules: [
      paths.src,
      'node_modules'
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: join(paths.src, 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.elm$/,
        use: [
          {
            loader: 'elm-webpack-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
};
