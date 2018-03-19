const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'app', 'dist')
const renderPath = path.resolve(__dirname, 'src', 'renderer')
const indexPath = path.resolve(__dirname, 'src', 'renderer', 'index.tsx')
const tmpPath = path.resolve(__dirname, 'config', 'render', 'index.html')
module.exports = {
  entry: {
    index: indexPath
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    pathinfo: true
  },
  resolve: {
    modules: ['node_modules', renderPath, path.resolve(__dirname, 'src')],
    extensions: ['.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [{
      oneOf: [{
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.(ts|tsx)$/,
          include: renderPath,
          loader: require.resolve('ts-loader')
        },
        {
          test: /\.less$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1
              }
            },
            {
              loader: require.resolve('less-loader'),
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          exclude: [/\.js$/, /\.html$/, /\.json$/],
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: tmpPath,
      inject: true
    })
  ]
}