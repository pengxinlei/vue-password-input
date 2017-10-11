import Vue from 'vue'
import App from './App.vue'

import vuePasswordInput from './lib/index.js'
Vue.use(vuePasswordInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
