const webpack = require('webpack')
const path = require('path')

const outputPath = path.resolve(__dirname, 'app')
const mainPath = path.resolve(__dirname, 'src', 'main')
const mainFile = path.resolve(__dirname, 'src', 'main', 'index.ts')

module.exports = {
  entry: {
    main: mainFile
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules', mainPath, path.resolve(__dirname, 'src')],
    extensions: ['.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
  },
  externals: {
    "fs": "require('fs')",
    "electron": "require('electron')",
    "child_process": "require('child_process')",
    "fs": "require('fs')",
    "path": "require('path')"
  },
  module: {
    strictExportPresence: true,
    rules: [{
      oneOf: [{
          test: /\.(ts|tsx)$/,
          include: mainPath,
          loader: require.resolve('ts-loader')
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
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    __dirname: false
  }
}