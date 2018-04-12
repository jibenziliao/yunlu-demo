import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import 'normalize.css'
import router from './router'
import store from './store'

Vue.use(VueLazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
