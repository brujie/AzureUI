<template>
  <div ref="chartPie" :style="{width: width+'px', height: height+'px'}"></div>
</template>

<script>
export default {
  name: "a-chart-pie",
  props: {
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
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.chartPie);
      // 绘制图表
      this.myChart.setOption(this.chartOption());
    },
    chartOption() {
      var {
          serData,
          serName,
          series,
          tooltip,
          legend,
          labelLine,
          dataset,
          type,
        } = this.ecData,
        legData = []

      serData.map((item) => {
        legData.push(item.name)
        // 当传入的type值为false的时候,不需要显示类别状态
        if (type == false) {
          legData = []
        }
      });

      return {
        dataset: dataset,
        legend: { data: legData },
        tooltip: tooltip,
        labelLine: labelLine,
        series: {
          name: series.name,
          radius: series.radius || "55%",
          emphasis: series.emphasis, // 中心文字配置项
          label: series.label, // 配置显示 位置
          type: "pie",
          center: ["40%", "50%"],
          data: serData,
        },
      };
    },
  },
};
</script>

<style scoped>
</style>