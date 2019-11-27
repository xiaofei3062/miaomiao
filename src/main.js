import Vue from "vue";
import "./plugins/axios";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MyScroll from "@/components/myScroll/MyScroll";

Vue.use(Vant);

// 全局过滤器
Vue.filter("setPicWidth", (url, msg) => {
  return url.replace(/w\.h/, msg);
});

// 全局组件
Vue.component("MyScroll", MyScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
