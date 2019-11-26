"use strict";

import Vue from "vue";
import axios from "axios";
import { Toast } from "vant";

let config = {
  timeout: 10000
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    Toast.loading({
      forbidClick: true,
      message: "加载中..."
    });
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    // 保证最少500毫秒的加载时间
    if (response.data.msg === "ok") {
      setTimeout(() => {
        Toast.clear();
      }, 500);
      return response.data;
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
