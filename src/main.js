// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index.js'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import comFun from './assets/util.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// 屏幕高度和宽度
Vue.prototype.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
Vue.prototype.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
