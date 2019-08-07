import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router';
import store from './store/index.js';
//过滤器
import "./filters"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
