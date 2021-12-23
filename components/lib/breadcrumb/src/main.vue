<template>
  <div class="a-breadcrumb">
    <div
      class="a-breadcrumb-item"
      ref="link"
      v-for="(item, index) in breadData"
      :key="index"
      @click="clickLink(item)"
    >
      {{ item.name }}
      <span class="a-breadcrumb-close" @click="closeItem(item)"> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-breadcrumb",
  props: {
    breadData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closeItem(item) {
      let index = this.breadData.indexOf(item);
      this.breadData.splice(index, 1);
    },
    clickLink(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style>
</style>