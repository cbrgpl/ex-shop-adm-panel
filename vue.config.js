const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@scss/utils/_utils.scss";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve( __dirname, 'src' ),
        '@images': path.resolve( __dirname, 'src', 'assets', 'images' ),
        '@scss': path.resolve( __dirname, 'src', 'assets', 'scss' ),
        '@components': path.resolve( __dirname, 'src', 'components' ),
        '@functions': path.resolve( __dirname, 'src', 'utils', 'functions' ),
        '@modules': path.resolve( __dirname, 'src', 'utils', 'modules' ),

        'js_utils': path.resolve( __dirname, 'src', 'utils', 'js_utils' ),
      }
    }
  }
})
