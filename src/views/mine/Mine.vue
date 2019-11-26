<template>
  <div id="main">
    <app-header title="个人中心" />
    <div id="content">
      <mine-login />
    </div>
    <tab-bar />
  </div>
</template>

<script>
import AppHeader from "@/components/header/AppHeader";
import TabBar from "@/components/tabBar/TabBar";
import MineLogin from "./children/MineLogin";

export default {
  name: "Mine",
  components: { MineLogin, TabBar, AppHeader }
};
</script>

<style scoped></style>
