const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

const dev = {
  mode: 'development',
  /* 开发环境设置sourceMap */
  devtool: 'eval-cheap-module-source-map',
  // devServer: {
  //   port: 9000,
  //   proxy: {
  //     /* 本地开发环境设置代理，解决CORS的问题 */
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       pathRewrite: { '^/api': '' },
  //     },
  //   },
  // },
}

module.exports = merge(common, dev)
