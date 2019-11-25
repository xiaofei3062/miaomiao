// 一级路由
const Movie = () => import("@/views/movie/Movie");

// 二级路由
const City = () => import("@/views/movie/children/City");
const Search = () => import("@/views/movie/children/Search");
const ComingSoon = () => import("@/views/movie/children/ComingSoon");
const NowPlaying = () => import("@/views/movie/children/NowPlaying");

export default {
  path: "/movie",
  name: "movie",
  component: Movie,
  children: [
    { path: "city", name: "city", component: City },
    { path: "search", name: "search", component: Search },
    { path: "comingSoon", name: "comingSoon", component: ComingSoon },
    { path: "nowPlaying", name: "nowPlaying", component: NowPlaying },
    { path: "/movie", redirect: "/movie/nowPlaying" }
  ]
};
