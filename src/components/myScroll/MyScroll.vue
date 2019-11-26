<template>
  <div class="wrapper" ref="wrapper">
    <slot />
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "MyScroll",
  props: {
    handleToScroll: {
      type: Function,
      default() {
        return function() {};
      }
    },
    handleToTouchEnd: {
      type: Function,
      default() {
        return function() {};
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let scroll = new BScroll(this.$refs.wrapper, {
        tap: true,
        probeType: 1
      });

      this.scroll = scroll;

      scroll.on("scroll", pos => {
        this.handleToScroll(pos);
      });

      scroll.on("touchEnd", pos => {
        this.handleToTouchEnd(pos);
      });
    });
  },
  methods: {
    handleToElement(pos, delay) {
      this.scroll.scrollToElement(pos, delay);
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
