import Vue from "vue";
import Vuex from "vuex";

// 引入模块化 vuex
import city from "./city";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    city
  }
});
