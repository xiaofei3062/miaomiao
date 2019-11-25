module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.97.33.178",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
