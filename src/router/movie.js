// 一级路由
const Movie = () => import("@/views/movie/Movie");

// 二级路由
const City = () => import("@/views/movie/children/City");
const Search = () => import("@/views/movie/children/Search");
const ComingSoon = () => import("@/views/movie/children/ComingSoon");
const NowPlaying = () => import("@/views/movie/children/NowPlaying");
const MovieDetail = () => import("@/components/movieDetail/MovieDetail");

export default {
  path: "/movie",
  name: "movie",
  component: Movie,
  children: [
    { path: "city", name: "city", component: City },
    { path: "search", name: "search", component: Search },
    { path: "comingSoon", name: "comingSoon", component: ComingSoon },
    { path: "nowPlaying", name: "nowPlaying", component: NowPlaying },
    {
      path: "movieDetail/1/:movieId",
      components: {
        default: NowPlaying,
        movieDetail: MovieDetail
      },
      props: {
        movieDetail: true
      }
    },
    {
      path: "movieDetail/2/:movieId",
      components: {
        default: ComingSoon,
        movieDetail: MovieDetail
      },
      props: {
        movieDetail: true
      }
    },
    { path: "/movie", redirect: "/movie/nowPlaying" }
  ]
};
