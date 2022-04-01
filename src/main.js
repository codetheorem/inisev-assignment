import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'



Vue.config.productionTip = false

new Vue({
  VueRouter,
  router,
  render: h => h(App),
}).$mount('#app')
