/**
 * 入口文件，引入全局插件，UI库，实例化Vue，启动应用
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import { constantPlugin } from 'src/common/constant'
import 'src/common/common'
import router from './router'
import App from './App'

Vue.use(ElementUI)
Vue.use(constantPlugin)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
