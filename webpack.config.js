const webpack = require('webpack')

module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
