const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/341-2', {
      target: 'https://route.showapi.com',
      changeOrigin: true,
    }),
  )
}
