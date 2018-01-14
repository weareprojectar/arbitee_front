var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');


module.exports = {
  // entry: ['./src/index.js', './src/style.css'],
  entry: ['./src/index.js', './src/style.css'],

  // devtool: "#eval-source-map",

  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + '/dist/',
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015", "stage-0"],
          plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin()
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
    ]


  // resolve: {
  //   modules: [node_modules],
  //   extensions: ['.js', '.json', '.jsx', '.css']
  // }

};
