import Vue from 'vue'
import App from './App.vue'
import store from './store'
import index from "./styles/index.css";
Vue.use(index)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
