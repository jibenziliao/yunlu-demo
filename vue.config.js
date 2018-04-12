module.exports = {
  baseUrl: './',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8083,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => {
      // app is an express instance
    }
  },
  configureWebpack: {
    entry: {
      iconfont: './src/common/iconfont.js'
    }
  }
}
