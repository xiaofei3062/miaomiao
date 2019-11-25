<template>
  <div id="main">
    <app-header title="喵喵影院"></app-header>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import AppHeader from "@/components/header/AppHeader";
  import TabBar from "@/components/tabBar/TabBar";

  export default {
    name: "Cinema",
    components: { TabBar, AppHeader }
  };
</script>

<style scoped>

</style>
