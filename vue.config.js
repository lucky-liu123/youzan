module.exports = {
  // 配置本地服务的反向代理
  devServer: {
    proxy: {
      '/youzan': {
        target: 'http://10.36.136.170:9999',
        changeOrigin: true
      }
    }
  }
}
