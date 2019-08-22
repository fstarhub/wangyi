import Vue from 'vue'
import App from './App.vue'
// import { Field } from 'mint-ui'

import router from './router'
// import 'lib-flexible/flexible'
// Vue.component(Field.name, Field)
import store from './store'

import { Button } from 'mint-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //配置路由
  store,
}).$mount('#app')
