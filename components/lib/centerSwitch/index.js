import CenterSwitch from './src/main.vue';

CenterSwitch.install = function(Vue){
    Vue.component(CenterSwitch.name,CenterSwitch);
}

export default CenterSwitch;