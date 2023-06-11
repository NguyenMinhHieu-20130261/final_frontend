const {createProxyMiddleware} = require("http-proxy-middleware");
const options = {
    target: "https://nld.com.vn/", // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
        "^/api" : "/"
    }
};
const apiProxy = createProxyMiddleware(options);

module.exports = function (app){
    app.use("/api", apiProxy)
}