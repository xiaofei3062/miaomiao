<template>
  <div id="main">
    <app-header />
    <div id="content">
      <!-- 二级导航 -->
      <movie-menu />

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
import MovieMenu from "./children/MovieMenu";
import { MessageBoxToast } from "@/components/com";

export default {
  name: "Movie",
  components: { MovieMenu, TabBar, AppHeader },
  mounted() {
    const that = this;
    axios
      .get("/api/getLocation")
      .then(res => {
        // console.log(res.data);
        if (this.$store.state.city.id === res.data.id) {
          return false;
        } else {
          setTimeout(() => {
            MessageBoxToast({
              title: "当前定位",
              content: res.data.nm,
              ok: "切换定位",
              handleOk() {
                const obj = {
                  name: res.data.nm,
                  id: res.data.id
                };
                that.$store.state.city.name = res.data.nm;
                localStorage.setItem("name_id", JSON.stringify(obj));
                setTimeout(() => {
                  location.reload();
                }, 1000);
              }
            });
          }, 1500);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
