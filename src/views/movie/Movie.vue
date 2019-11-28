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

    <!-- 命名视图路由 -->
    <router-view name="movieDetail" />
  </div>
</template>

<script>
import AppHeader from "@/components/header/AppHeader";
import TabBar from "@/components/tabBar/TabBar";
import MovieMenu from "./children/MovieMenu";
import MessageBox from "../../components/com/message/MessageBox";
import { MessageBoxToast } from "../../components/com";

export default {
  name: "Movie",
  components: { MovieMenu, TabBar, AppHeader },
  mounted() {
    const that = this;
    axios
      .get("/api/getLocation")
      .then(res => {
        // console.log(res);
        const nm = res.data.nm;
        const id = res.data.id;
        if (this.$store.state.city.id === id) {
          return false;
        } else {
          setTimeout(() => {
            MessageBoxToast({
              title: "定位",
              content: nm,
              cancel: "取消",
              ok: "切换定位",
              handleOk() {
                const obj = {
                  name: nm,
                  id: id
                };
                that.$store.state.city.name = nm;
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
