module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "./app/dist/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
