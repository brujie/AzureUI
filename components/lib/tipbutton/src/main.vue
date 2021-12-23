<template>
  <span class="am_button_main">
      <el-button :disabled="disabled" :id="id" :class="className" @click="click" size="mini">
        <slot />
      </el-button>
  </span>
</template>

<script>
export default {
  name:"tip-button",
  props: [
    'id',
    'className',
    'disabled'
  ],
  methods: {
    click: function (e) {
      if (this.disabled) {
        return
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
// @import '@/assets/styles/variable.scss';
  .am_button_main{
    i {
      transition: 0.3s;
      color: rgb(165, 165, 165);
      padding: 9px;
      background-color: #ecefef;
      border-radius: 20px;
    }
    .el-button:hover i{
      background-color: rgb(165, 165, 165);
      color: #fff;
    }
    .el-button{
      color:rgb(165, 165, 165);
      background:transparent;
      border:none;
      height:35px;
      padding-left:0;
      padding-right:0;
    }
  }
  .tipButton_tip.is-light{
    border: none;
    box-shadow: 0px 0px 8.2px 0.8px rgba(0, 0, 0, 0.08);

    .popper__arrow{
      border-top-color: white !important;
    }
  }
</style>
