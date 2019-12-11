const path = require('path')
const webpack = require('webpack')
module.exports = {
  name: 'No-create-react-app',
  mode: 'development',// 배포모드 hidden-source-map
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', {
          targets: {
            browsers: ['>5% in KR', 'last 2 chrome versions']
          },
          debug: true, // related with development
        }], '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties',
                  'react-hot-loader/babel',
        ]
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: 'app.js',
    publicPath: '/dist/', // 가상경로 - app.use('/dist', express,static(__dirname, 'dist')
  },
  devServer: {
    open: 'Google Chrome'
  }
}