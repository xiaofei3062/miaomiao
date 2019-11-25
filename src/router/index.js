import Vue from "vue";
import VueRouter from "vue-router";

// 一级路由
const Movie = () => import("@/views/movie/Movie");
const Cinema = () => import("@/views/cinema/Cinema");
const Mine = () => import("@/views/mine/Mine");

// 二级路由
const City = () => import("@/views/movie/children/City");
const Search = () => import("@/views/movie/children/Search");
const ComingSoon = () => import("@/views/movie/children/ComingSoon");
const NowPlaying = () => import("@/views/movie/children/NowPlaying");

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/movie"
  },
  {
    path: "/movie",
    component: Movie,
    children: [
      { path: "city", name: "city", component: City },
      { path: "search", name: "search", component: Search },
      { path: "comingSoon", name: "comingSoon", component: ComingSoon },
      { path: "nowPlaying", name: "nowPlaying", component: NowPlaying }
    ]
  },
  {
    path: "/cinema",
    component: Cinema
  },
  {
    path: "/mine",
    component: Mine
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
