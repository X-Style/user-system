<template>
  <i :class="iconClassName"></i>
</template>
<script>
export default {
  name: 'ZIcon',
  props: {
    type: String,
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClassName () {
      return `iconfont icon-${this.type} ${this.className}`
    }
  }
}
</script>
<style>
@import "../../theme/css/fonts/iconfont.css";
</style>
