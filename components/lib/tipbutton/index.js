import TipButton from './src/main.vue';

TipButton.install = function(Vue){
    Vue.component(TipButton.name,TipButton);
}

export default TipButton;