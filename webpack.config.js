var webpack = require('webpack');
module.exports = {
  entry: {
    app: ["./app/index.js"]
  },
  output: {
    filename: "./app/dist/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      { test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
    node: {
        fs: "empty"
    }


};
