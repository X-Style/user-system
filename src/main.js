import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import plugins from './plugins'

Vue.use(iView)
Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
