const {createProxyMiddleware}=require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'httpL//localhost:3001',
            changeOrigin: true,
        })
    )
}