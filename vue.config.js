const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  },

  devServer: {
    client: {
      webSocketURL: {
        hostname: 'localhost',
        protocol: 'ws'
      }
    }
  }
})
