<template>
  <div id="app">
    <div class="test" style="border:1px solid red;height:500px;overflow:auto">
      <p v-for="i in 1000" :key="i">123</p>
    </div>
    <a-backtop target=".test"></a-backtop>
    <a-card :width="200" imgSrc="./img/vue.png" summary="vue-cli组件开发">
    </a-card>
    <br />
    <a-card :width="200" imgSrc="./img/python.png" summary="Python数据分析与展示">
      <div>
        1688
      </div>
    </a-card>
    <br />
    <a-card :width="200" :imgHeight="230" imgSrc="./img/bigdata.png" summary="大数据基础与应用">
      <template v-slot:footer>
      <p class="footer">
        <span>进行至第9周</span>
        <span>2233人参加</span>
      </p>
      </template>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer{
  display: flex;
  justify-content: space-between;
  color: #ccc;
  font-size: 12px;
  padding:0 10px;
}
.footer span:nth-child(1){
  color: orange;
}
</style>
