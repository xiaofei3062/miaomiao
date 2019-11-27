const types = {
  CITY_INFO: "city_info"
};

// 获取本地存储城市名跟id
const name_id = localStorage.getItem("name_id");
const obj = {};
if (name_id) {
  obj.name = JSON.parse(name_id).name;
  obj.id = JSON.parse(name_id).id;
}

export default {
  state: {
    name: obj.name || "合肥",
    id: obj.id || 1
  },
  getters: {},
  mutations: {
    [types.CITY_INFO](state, { name, id }) {
      state.name = name;
      state.id = id;
    }
  },
  actions: {}
};
