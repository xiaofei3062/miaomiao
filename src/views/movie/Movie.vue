<template>
  <div id="main">
    <app-header></app-header>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import AppHeader from "@/components/header/AppHeader";
  import TabBar from "@/components/tabBar/TabBar";

  export default {
    name: "Movie",
    components: { TabBar, AppHeader }
  };
</script>

<style scoped>

</style>
