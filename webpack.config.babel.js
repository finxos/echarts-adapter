const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/export.js',
  devtool: 'cheap-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/'),
    libraryTarget: 'commonjs',
    library: 'echartsAdapter'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  performance: {
    hints: false
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    'date-fns': {
      commonjs: 'date-fns',
      commonjs2: 'date-fns',
      amd: 'date-fns'
    }
  }
};
