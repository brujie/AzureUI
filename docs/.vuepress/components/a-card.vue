<template>
  <div class="a-card" :style="width ? `width:${width}px` : ''">
    <div class="a-card-img" :style="imgHeight ? `height:${imgHeight}px` : ''">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="a-card-summary">{{summary}}</div>
    <div v-else>
      <slot />
    </div>
    <slot name="footer"> </slot>
  </div>
</template>

<script>
export default {
  name: "a-card",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import './a-card.scss'
</style>