<template>
  <div class="cinema_menu">
    <div class="city_switch">
      全城
      <i class="iconfont icon-lower-triangle" />
    </div>
    <div class="brand_swtich">
      品牌
      <i class="iconfont icon-lower-triangle" />
    </div>
    <div class="feature_switch">
      特色
      <i class="iconfont icon-lower-triangle" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CinemaMenu"
};
</script>

<style scoped>
#content .cinema_menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  background: white;
}
</style>
