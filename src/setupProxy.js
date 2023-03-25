const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/en/product-inventory/',
    createProxyMiddleware({
      target: 'https://www.wlknstore.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/rest/v2/*/products/*/stock',
    createProxyMiddleware({
      target: 'https://www.tous.com/',
      changeOrigin: true,
    })
  );
};