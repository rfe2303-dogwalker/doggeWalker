// For node to know our absolute file path we will be using the internal module path
const path = require('path');

// Our export here is the configuration webpack will use
module.exports = {
  // [mode] will determine how our code will be bundled.
  // "development" will be human readable
  // "production" will be minified
  mode: 'development',
  // [entry] this is the file where the bundling starts from.
  entry: './client/src/index.jsx',
  // [output] is a configuration object to determine how and where to bundle our code
  output: {
    // [path] is where to output
    path: path.join(__dirname, './client/dist'),
    // [filename] is the name of the file
    filename: 'bundle.js'
  },
  module: {
    // [rules] will determine the rules around those external modules
    rules: [
      // First rule is to idenify js and jsx files and turn on babel
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Second rule is to check for css files and load them with the following loaders
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
