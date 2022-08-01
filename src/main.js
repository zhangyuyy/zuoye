import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import "./styles/index.css";
import ZyUi from "./components"
import Zyprogress from "./components"
Vue.use(ZyUi)
Vue.use(Zyprogress)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
