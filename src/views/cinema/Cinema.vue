<template>
  <div id="main">
    <app-header title="喵喵影院" />
    <div id="content">

      <!-- 二级导航 -->
      <cinema-menu />

      <!-- 路由切换 -->
      <keep-alive>
        <router-view />
      </keep-alive>

    </div>
    <tab-bar />
  </div>
</template>

<script>
  import AppHeader from "@/components/header/AppHeader";
  import TabBar from "@/components/tabBar/TabBar";
  import CinemaMenu from "./children/CinemaMenu";

  export default {
    name: "Cinema",
    components: { CinemaMenu, TabBar, AppHeader }
  };
</script>

<style scoped>

</style>
