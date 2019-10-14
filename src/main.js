import Vue from 'vue'
import App from './App.vue'
import './lib/css/mui.min.css'
import { Button, Header } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router
}).$mount('#app')
