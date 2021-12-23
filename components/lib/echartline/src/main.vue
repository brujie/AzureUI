<template>
  <div ref="chartLine" :style="{width: width+'px', height: height+'px'}"></div>
</template>

<script>
export default {
  name: "a-chart-line",
  props: {
    chartId:{
        default:'myChart',
        type:String
    },
    width: {
        default:300
    },
    height: {
        default:300
    },
    ecData:{
        type:Object,
        default: function () {
            return {}
        }
    },
  },
  data() {
    return {
        myChart:null
    };
  },
  watch:{
    ecData(opt){
        this.myChart.setOption(this.chartOption(opt))
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例 document.getElementById(this.chartId)
      this.myChart = this.$echarts.init(this.$refs.chartLine);
      // 绘制图表
      this.myChart.setOption(this.chartOption());
    },
    chartOption(){
        var {xAxis,series} = this.ecData
        var legData = [],serData = [];
        series.map((item)=>{
            legData.push(item.name);
            serData.push({
                name: item.name,
                type: "line",
                data: item.data
            })
        })
        return {
            tooltip: {},
            legend: {
                data: legData
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxis
            },
            yAxis: {},
            series: serData
      }
    }
  }
};
</script>

<style scoped>
</style>