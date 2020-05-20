const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'https://www.ele.me',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  )
}
