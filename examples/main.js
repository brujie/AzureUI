import Vue from 'vue'
import App from './App.vue'
import Card from '../components/lib/card/index.js'
import backTop from '../components/lib/backtop/index.js'
import '../components/css/card.scss'
import '../components/css/backtop.scss'
Vue.use(Card).use(backTop)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
