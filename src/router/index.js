import Vue from "vue";
import VueRouter from "vue-router";

// 引入模块化路由
import MovieRouter from "./movie";
import CinemaRouter from "./cinema";
import MineRouter from "./mine";

Vue.use(VueRouter);

// 路由配置
const routes = [
  MovieRouter,
  CinemaRouter,
  MineRouter,
  { path: "*", redirect: "/movie" }
];

const router = new VueRouter({
  routes
});

export default router;
