const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 transpileDependencies: true,

 pluginOptions: {
    vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
 }
})

module.exports = {
 chainWebpack: config => {
   config.module.rules.delete('eslint');
  },

 pluginOptions: {
   vuetify: {}
 }
}
'use strict'

const { VueLoaderPlugin } = require('vue-loader')
