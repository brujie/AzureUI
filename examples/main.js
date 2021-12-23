import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Card from '../components/lib/card/index.js'
import BackTop from '../components/lib/backtop/index.js'
import Beadcrumb from '../components/lib/breadcrumb/index.js'
import Button from '../components/lib/button/index.js'
import Message from '../components/lib/message/index.js'
import EchartBar from '../components/lib/echartbar/index.js'
import TipButton from '../components/lib/tipbutton/index.js'
import CenterSwitch from '../components/lib/centerSwitch/index.js'
import Table from '../components/lib/table/index.js'
import '../components/css/card.scss'
import '../components/css/backtop.scss'
import '../components/css/breadcrumb.scss'
import '../components/css/message.scss'
import '../components/css/button.scss'
Vue.prototype.$echarts = echarts;
Vue.prototype.$Message = Message;
Vue.use(Card).use(BackTop).use(Beadcrumb).use(Button).use(EchartBar).use(Table).use(TipButton).use(CenterSwitch);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
