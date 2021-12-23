<template>
  <div class="center-switch-main" @click="clickHandler" :class="{open: value, close: !value, disable: disable}"
       :style="inlineStyle1()">
    <span class="text" v-show="value" :style="activeText.length === 1 ? 'left: 17px' : ''">{{activeText}}</span>
    <span class="text" v-show="!value" :style="activeText.length === 1 ? 'right: 17px' : ''">{{inactiveText}}</span>
    <span class="circle" :style="!value && activeText.length > 4 ? 'right: 80px' : ''"></span>
  </div>
</template>
<script>
  export default {
    name:'center-switch',
    data () {
      return {
        mark: false
      }
    },
    props: [
      'needTip', // 改变状态前是否需要提示 type boolean
      'activeTip', // 打开开关提示的文字 需要needTip为true
      'inactiveTip', // 关闭开关提示的文字 需要needTip为true
      'activeText', // 开关打开时的文字 string
      'inactiveText', // 开关关闭时的文字 string
      'value', // 绑定的值 boolean
      'disable', // 禁用点击事件 boolean
      'inactiveColor' // 关闭时开关的背景色
    ],
    methods: {
      clickHandler: function () {
        if (this.disable) {
          return
        }
        if (this.needTip) {
          // let tip = this.value ? this.inactiveTip : this.activeTip
          this.$ConfigWarn().then(() => {
            this.$emit('confirmHandler')
          }).catch(() => {})
        } else {
          this.$emit('confirmHandler')
        }
      },
      inlineStyle1 () {
        const backgroundColor = this.inactiveColor && !this.value ? 'background-color:' + this.inactiveColor + ';' : ''
        const width = this.activeText.length > 4 || this.inactiveText.length > 4 ? 'width: 100px;' : ''
        return backgroundColor + width
      }
    },
    computed: {
    }
  }
</script>
<style scoped lang="scss">
  .center-switch-main{
    position: relative;
    padding: 0 10px;
    border-radius: 15px;
    color: #fff;
    width: 60px;
    height: 22px;
    cursor: pointer;
    .circle{
      position: absolute;
      display: inline-block;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 50%;
      transition: all 150ms linear;
    }
    .text{
      position: absolute;
      font-size: 12px;
      user-select:none;
    }
    &.open{
      background-color: #4e9bf5;
      .circle{
        top: 3px;
        right: 5px;
      }
      .text{
        top: 1px;
        left: 7px;
      }
      &.disable{
        background-color: #c8cbcf;
        cursor: auto;
        color: #4e9bf5;
      }
    }
    &.close{
      background-color: #999999;
      .circle{
        top: 3px;
        right: 39px;
      }
      .text{
        top: 1px;
        right: 7px;
      }
      &.disable{
        background-color: #c8cbcf;
        cursor: auto;
      }
    }
  }
</style>
