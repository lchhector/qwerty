const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const files = ['login', 'signup'];
const entryObject = {};
files.forEach((filename) => {
  entryObject[filename] = `./src/${filename}.js`;
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[contentHash:5].bundle.js',
    filename: 'bundle.js',
    publicPath: '',
  },
  mode: 'development',
  plugins: [
    // ...files.map((filename) => (
    //   new HtmlWebpackPlugin({
    //     chunks: [`${filename}`],
    //     filename: `${filename}.html`,
    //     template: './public/index.html',
    //   })
    // )),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
  },
};
