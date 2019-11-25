<template>
  <div id="main">
    <app-header></app-header>
    <div id="content">

      <!-- 二级导航 -->
      <movie-menu></movie-menu>

      <!-- 路由切换 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import AppHeader from "@/components/header/AppHeader";
  import TabBar from "@/components/tabBar/TabBar";
  import MovieMenu from "./children/MovieMenu";

  export default {
    name: "Movie",
    components: { MovieMenu, TabBar, AppHeader }
  };
</script>

<style scoped>

</style>
