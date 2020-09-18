import Vue from 'vue'
import App from './App.vue'
// 套件
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
// Aos scroll animate 套件
import Aos from 'aos'
import 'aos/dist/aos.css'
// jQuery
import $ from 'jquery'
import router from './router'
// Bootstrap JS
import 'bootstrap'
// Bus
import './bus'
// 轉換千分號
import thousandsFilter from './thousands'
// 表單驗證 start
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import TW from 'vee-validate/dist/locale/zh_TW.json'
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
localize('zh_TW', TW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
// Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
// end
Vue.config.productionTip = false

// 掛載 jQuery
window.$ = $

// Vue.use(Loading)
Vue.use(VueAxios, axios)

Vue.component('Loading', Loading)

Vue.filter('thousands', thousandsFilter)

new Vue({
  created () {
    Aos.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
