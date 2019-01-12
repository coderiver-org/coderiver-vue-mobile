import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import 'lib-flexible' // rem适配

import 'common/scss/index.scss' // 公共css样式
import VueLazyload from 'vue-lazyload' // 图片懒加载

import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/logo.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
