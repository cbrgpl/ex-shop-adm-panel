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

        '@enums': path.resolve(__dirname, 'src', 'enums'),

        '@general_components': path.resolve( __dirname, 'src', 'components', 'general' ),
        '@admin_components': path.resolve( __dirname, 'src', 'components', 'admin', ),


        '@functions': path.resolve( __dirname, 'src', 'utils', 'functions' ),
        '@mixins': path.resolve(__dirname, 'src', 'utils', 'mixins'),
        '@modules': path.resolve( __dirname, 'src', 'utils', 'modules' ),
        '@validators': path.resolve(__dirname, 'src', 'utils', 'validators'),

        'js_utils': path.resolve( __dirname, 'src', 'utils', 'js_utils' ),
      }
    }
  }
})
