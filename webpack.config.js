const HtmlWebPackPlugin = require('html-webpack-plugin')
const moduleFederationPlugin = require('./webpack-mf.config')

module.exports = (env, args) => {
  require('dotenv').config({
    // eslint-disable-next-line no-undef
    path: './.env',
  })

  return {
    output: {
      publicPath: `http://localhost:${process.env?.PORT || 3000}/`,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: process.env?.PORT || 3000,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },

    plugins: [
      moduleFederationPlugin,
      new HtmlWebPackPlugin({
        template: './public/index.html',
      }),
    ],
  }
}
