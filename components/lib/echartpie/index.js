import EchartPie from './src/main.vue';

EchartPie.install = function(Vue){
    Vue.component(EchartPie.name,EchartPie);
}

export default EchartPie;