const Cinema = () => import("@/views/cinema/Cinema");
const CinemaList = () => import("@/views/cinema/children/CinemaList");

export default {
  path: "/cinema",
  name: "cinema",
  component: Cinema,
  children: [
    { path: "cinemaList", name: "cinemaList", component: CinemaList },
    { path: "/cinema", redirect: "/cinema/cinemaList" }
  ]
};
