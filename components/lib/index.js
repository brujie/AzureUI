import Card from './card/index.js'
import Backtop from './backtop/index.js'
import Message from './message/index.js'
import Button from './button/index.js'
import EchartBar from './echartbar/index.js'
import EchartLine from './echartline/index.js'
import EchartRadar from './echartradar/index.js'
import EchartPie from './echarpie/index.js'
const components = {
    Card,
    Backtop,
    Button,
    EchartBar,
    EchartLine,
    EchartRadar,
    EchartPie,
}

const install = function(Vue){
    if(install.installed) return;
    Object.keys(components).forEach((key)=>{
        Vue.component(components[key].name,components[key]);
    })
    Vue.prototype.$message = Message;
}

export default install;