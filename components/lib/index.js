import Card from './card/index.js'
import backTop from './backtop/index.js'

const components = {
    Card,
    backTop
}

const install = function(Vue){
    if(install.installed) return;
    Object.keys(components).forEach((key)=>{
        Vue.component(components[key].name,components[key]);
    })
}

export default install;