<template>
  <div id="app">
    <!-- <a-breadcrumb  :breadData="breadData"></a-breadcrumb> -->
    <!-- <div class="main" style="height:500px;border:1px solid red;overflow:auto">
      <p v-for="item in 1000" :key="item">{{item}}</p>
    </div> -->
    <!-- <a-backtop target=".main"></a-backtop> -->
    <!-- <div class="block">
      <h5>基础用法</h5>
      <div class="wrap">
        <a-button
          type="default"
          @click="handleClick('success')"
          style="float: left"
          >默认按钮</a-button
        >
        <a-button
          type="primary"
          @click="handleClick('warning')"
          style="float: left"
          >主要按钮</a-button
        >
        <a-button
          type="warning"
          @click="handleClick('info')"
          style="float: left"
          >警告按钮</a-button
        >
        <a-button type="error" @click="handleClick('error')" style="float: left"
          >错误按钮</a-button
        >
      </div>
    </div>
    <div class="block">
      <h5>圆角按钮</h5>
      <div class="wrap">
        <a-button
          type="default"
          @click="handleClick('success')"
          round
          style="float: left"
          >默认按钮</a-button
        >
        <a-button
          type="primary"
          @click="handleClick('warning')"
          round
          style="float: left"
          >主要按钮</a-button
        >
        <a-button
          type="warning"
          @click="handleClick('info')"
          round
          style="float: left"
          >警告按钮</a-button
        >
        <a-button
          type="error"
          @click="handleClick('error')"
          round
          style="float: left"
          >错误按钮</a-button
        >
      </div>
    </div>
    <div class="block">
      <h5>文字按钮</h5>
      <div class="wrap">
        <a-button
          @click="handleClick('success')"
          type="text"
          style="float: left"
          >默认按钮</a-button
        >
      </div>
    </div>
    <div class="block">
      <h5>禁用状态</h5>
      <div class="wrap">
        <a-button
          type="default"
          disabled
          @click="handleClick('success')"
          style="float: left"
          >默认按钮</a-button
        >
        <a-button
          type="primary"
          disabled
          @click="handleClick('warning')"
          style="float: left"
          >主要按钮</a-button
        >
        <a-button
          type="warning"
          disabled
          @click="handleClick('info')"
          style="float: left"
          >警告按钮</a-button
        >
        <a-button
          type="error"
          disabled
          @click="handleClick('error')"
          style="float: left"
          >错误按钮</a-button
        >
      </div>
    </div> -->
    <div style="padding:20px">
    <a-table :data="tableData" :columns="columns" class="printTable" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const self = this;
    return {
      num: 20,
      breadData: [
        {
          path: "/index",
          name: "首页",
        },
        {
          path: "/index2",
          name: "首页2",
        },
        {
          path: "/index3",
          name: "首页3",
        },
      ],
            tableData: [
        {
          name: "广东融合通讯大厦新装",
          clientName: "融合通信",
          address: "珠海市xx区明珠南路2025号金嘉创意谷3栋3楼",
          getData: "2020-02-19 16:00:00",
          capacity: "100kVA",
          setData: "2020-12-12",
          import: "互联网",
          account: "江小白",
          idCard: "1415656168781",
          phone: "xxx",
          status: -1,
          warning: -1,
        },
        {
          name: "广东融合通讯大厦新装",
          clientName: "融合通信",
          address: "珠海市xx区明珠南路2025号金嘉创意谷3栋3楼",
          getData: "2020-02-19 16:00:00",
          capacity: "100kVA",
          setData: "2020-12-12",
          import: "互联网",
          account: "江小白",
          idCard: "1415656168781",
          phone: "xxx",
          status: 0,
          warning: 0,
        },
        {
          name: "广东融合通讯大厦新装",
          clientName: "融合通信",
          address: "珠海市xx区明珠南路2025号金嘉创意谷3栋3楼",
          getData: "2020-02-19 16:00:00",
          capacity: "100kVA",
          setData: "2020-12-12",
          import: "互联网",
          account: "江小白",
          idCard: "1415656168781",
          phone: "xxx",
          status: 1,
          warning: 1,
        },
      ], //表格数据
            columns: [
        // {
        //   key: "warning", //复制status状态保存 重新渲染
        //   label: "预警",
        //   width: 40,
        //   render: (row, column, cellValue) => {
        //     if (cellValue == -1) {
        //       return '<div class="error"></div>';
        //     } else if (cellValue == 0) {
        //       return '<div class="warning"></div>';
        //     } else {
        //       return '<div class="success"></div>';
        //     }
        //   },
        // },
        {
          key: "name",
          label: "项目名称",
        },
        {
          key: "clientName",
          label: "用户名称",
        },
        {
          key: "address",
          label: "业务类型",
        },
        {
          key: "capacity",
          label: "当前环节",
        },
        {
          key: "getData",
          label: "传入时间",
        },
        {
          key: "status",
          label: "任务状态",
          // render: (row, column, cellValue) => {
          //   if (cellValue == -1) {
          //     return (cellValue = "超时");
          //   } else if (cellValue == 0) {
          //     return (cellValue = "今天到期");
          //   } else {
          //     return "剩余" + cellValue + "天";
          //   }
          // },
        },
        {
          key: "account",
          label: "客户经理",
        },
        {
          key: "options",
          label: "操作",
          type: "button", // 类型
          width: 120, // 宽度
          buttons: [
            {
              text: "查看详情", // 按钮名称
              click: self.viewClick, // 按钮事件
              type: "tipButton", // 按钮类型
            },
          ],
        },
        {
           key:"status",
           label:"测试状态",
           width:80,
           type: 'centerSwitch',
           value: 'status',
           activeText: '关闭',
           inactiveText: '开启',
           click: self.enableHandler
         }
      ],
        options: {
        color: ["#003366", "#006699"], // 颜色调整
        tooltip: {
          show: true, // 移动显示详情
        },
        label: {
          show: true,
          position: "insideBottom",
          distance: 15,
          align: "left",
          verticalAlign: "middle",
          rotate: 90,
          formatter: "{c}  {name|{a}}",
          fontSize: 16,
          rich: {
            name: {
              textBorderColor: "#fff",
            },
          },
        },
        xAxis: ["2012", "2013", "2014", "2015", "2016", "2017"],
        series: [
          {
            barGap: 0,
            data: [5, 20, 360, 10, 10, 200],
          },
          {
            data: [15, 25, 460, 200, 200, 30],
          },
        ],
      },
    };
  },
  components: {},
  created() {},
  methods: {
    viewClick(row){
      console.log(row)
    },
    enableHandler(row){
      let index = this.tableData.indexOf(row);
      this.tableData[index].status = !row.status;
      // 获取当前的点击之后的状态重新发起请求获取一次数据
    },
    handleClick(type) {
      this.$Message[type]({
        message: "测试消息",
        center: true,
        verticalOffset: 60,
      });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  display: flex;
  justify-content: space-between;
  color: #ccc;
  font-size: 12px;
  padding: 0 10px;
}
.footer span:nth-child(1) {
  color: orange;
}
.block {
  width: 50%;
  border: 1px solid#ebebeb;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  h5{
    font-size: 18px;
    font-weight: 400;
    color: #5e6d82;
  }
  .wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
