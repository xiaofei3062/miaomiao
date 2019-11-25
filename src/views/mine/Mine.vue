<template>
  <div id="main">
    <app-header title="我的"></app-header>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import AppHeader from "@/components/header/AppHeader";
  import TabBar from "@/components/tabBar/TabBar";

  export default {
    name: "Mine",
    components: { TabBar, AppHeader }
  };
</script>

<style scoped>

</style>
