// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/store'
import VueNativeSock from 'vue-native-websocket'
import VueCircleSlider from 'vue-circle-slider'
import SocialSharing from 'vue-social-sharing'
 
Vue.use(SocialSharing)
Vue.use(VueNativeSock, "wss://ws.blockchain.info/inv")
Vue.use(VueCircleSlider)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
