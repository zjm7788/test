import Vue from 'vue'
import App from "./App.vue"

/**
 * @description router
 */
import router from "./router"

/**
 * @description design
 */
// import "./design/index.scss"
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})