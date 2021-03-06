module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './',
    port: 1234,
    host: "0.0.0.0",
    hot: true
  },
  devtool: '#eval-source-map', // to show component line number in console logs, than bundle.js line number
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'] // stage-2 is to support ES6 arrow function
        }
      },

      { test: /\.scss|.css$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpe?g|png|gif|svg|woff|ttf|eot$/, loader: ['url-loader'] }
    ]
  }
}