<template>
  <div ref="chartRadar" :style="{width: width+'px', height: height+'px'}"></div>
</template>

<script>
export default {
  name: "a-chart-radar",
  props: {
    chartId: {
      default: "myChart",
      type: String,
    },
    width: {
      default: 300,
    },
    height: {
      default: 300,
    },
    ecData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  watch: {
    ecData(opt) {
      this.myChart.setOption(this.chartOption(opt));
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例 document.getElementById(this.chartId)
      this.myChart = this.$echarts.init(this.$refs.chartRadar);
      // 绘制图表
      this.myChart.setOption(this.chartOption());
    },
    chartOption() {
      var {  tooltip, title, series, legend, radar,label} = this.ecData;
      var serData = [];
      series.map((item) => {
        serData.push({
          name: item.name,
          type: "radar",
          data: item.data,
        });
      });
      return {
         grid:{
          containLabel : false
        },
        radar: radar,
        title: title,
        tooltip: tooltip,
        legend: {data: legend.data},
        label:label,
        series: serData,
      };
    },
  },
};
</script>

<style scoped>
</style>