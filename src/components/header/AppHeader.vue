<template>
  <header id="header">
    <slot />
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: {
      type: String,
      default: "喵喵电影"
    }
  }
};
</script>

<style scoped>
#header {
  position: relative;
  width: 100%;
  height: 50px;
  color: #ffffff;
  border-bottom: 1px solid #e54847;
  background: #e54847;
}

#header h1 {
  font-size: 18px;
  font-weight: normal;
  line-height: 50px;
  text-align: center;
}

#header i {
  font-size: 26px;
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -13px;
}
</style>
