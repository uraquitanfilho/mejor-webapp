
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port:5001,
    contentBase: './public',
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  resolve: {
    extensions: ['','.js', '.jsx' ],
    "alias": {
      "modules": __dirname + '/node_modules',
      "jquery": 'modules/jquery/dist/jquery.min.js',
      "bootstrap": 'modules/bootstrap/dist/js/bootstrap.min.js'

    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      jQuery:"jquery"
    }),
     
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ["es2015", 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    },{ test: /\.(jpe?g|png|gif|svg)$/, loader: "file" }
     ,{ test: /jquery[\\\/]src[\\\/]selector\.js$/, loader: 'amd-define-factory-patcher-loader' }]
  }
}
