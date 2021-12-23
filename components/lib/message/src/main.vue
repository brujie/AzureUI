<template>
  <transition @after-leave="handleAfterLeave">
    <div
      :class="['a-message', type ? `a-message-${type}` : '',center ? 'isCenter':'']"
      v-show="visible"
      :style="positionStyle"
    >
      <div class="a-message-content" >
          <span
            :class="['a-message-icon', type ? `a-message-status-${type}` : '']"
          >
          </span
          >{{ message }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      visible: false,
      message: "提示信息!",
      duration: 1500,
      verticalOffset: 20,
      center:false
    };
  },
  mounted() {
    this.show();
  },
  beforeDestroy() {
    this.hide();
  },
  computed: {
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`,
      };
    }
  },
  methods: {
    show() {
      this.visible = true;
      setTimeout(() => {
        this.hide();
      }, this.duration);
    },
    hide() {
      this.visible = false;
    },
    handleAfterLeave() {
      this.$el.parentNode.removeChild(this.$el);
    },
  },
};
</script>

<style>
</style>