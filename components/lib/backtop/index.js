import backTop from './src/main.vue';

backTop.install = function(Vue){
    Vue.component(backTop.name,backTop);
}

export default backTop;