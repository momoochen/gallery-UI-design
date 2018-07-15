import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/sass/main.scss'
import vSelect from 'vue-select'
import VueScrollTo from 'vue-scrollto'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false

Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
