import EchartLine from './src/main.vue';

EchartLine.install = function(Vue){
    Vue.component(EchartLine.name,EchartLine);
}

export default EchartLine;