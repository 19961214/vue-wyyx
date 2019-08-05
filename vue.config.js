const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
  },
  //配置代理
  devServer: {
    proxy: {
      '/api': {
        target: ' http://m.you.163.com',
        changeOrigin: true, //是否支持跨域
        pathRewrite: {
          '^/api': '', // rewrite path
        },
      },
    }
  }

}