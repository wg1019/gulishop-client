import Vue from 'vue'
import App from './App.vue'
import router from './router'

import TypeNav from './components/TypeNav'
//全局注册组件
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
