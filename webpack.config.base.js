const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
    entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins:
   [new HtmlWebpackPlugin({
    title: '你好 ',
    template: 'src/assets/index.html'
  }),
],
module: {
    rules: [
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
          },
        {
           test: /\.styl$/,
           loader: ['style-loader', 'css-loader', 'stylus-loader']
        },
      {  test: /\.less$/i,
        loader: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
    },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
              loader: "sass-loader",
              options: {
                  implementation: require('dart-sass')
              }
          },
        ],
      },
    ],
  },
};