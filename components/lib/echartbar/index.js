import EchartBar from './src/main.vue';

EchartBar.install = function(Vue){
    Vue.component(EchartBar.name,EchartBar);
}

export default EchartBar;