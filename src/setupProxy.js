<<<<<<< HEAD
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/341-2', {
      target: 'https://route.showapi.com',
      changeOrigin: true,
=======
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'https://www.ele.me',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
    }),
  )
}
