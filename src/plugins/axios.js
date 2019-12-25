import axios from "axios";
import { Toast } from "vant";

let config = {
  // baseURL:""
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    Toast.loading({
      forbidClick: true,
      message: "加载中..."
    });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function (response) {
    if (response.data.msg === "ok") {
      Toast.clear();
      return response.data;
    }
  },
  function (error) {
    Toast.clear();
    return Promise.reject(error);
  }
);

window.axios = _axios;
