import EchartRadar from './src/main.vue';

EchartRadar.install = function(Vue){
    Vue.component(EchartRadar.name,EchartRadar);
}

export default EchartRadar;