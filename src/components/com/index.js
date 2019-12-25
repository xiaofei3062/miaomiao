import Vue from "vue";
import MessageBox from "./message/MessageBox";

export const MessageBoxToast = (function () {
  // 默认值
  let defaults = {
    title: "",
    content: "",
    cancel: "取消",
    ok: "确认",
    handleCancel: null,
    handleOk: null
  };

  // 创建一个component
  let MyComponent = Vue.extend(MessageBox);

  // 配置参数
  return function (options) {
    // 将配置赋值给defaults
    for (let attr in options) {
      defaults[attr] = options[attr];
    }

    let vm = new MyComponent({
      el: document.createElement("div"),
      data: {
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        handleCancel() {
          defaults.handleCancel && defaults.handleCancel.call(this);
          document.body.removeChild(vm.$el);
        },
        handleOk() {
          defaults.handleOk && defaults.handleOk.call(this);
          document.body.removeChild(vm.$el);
        }
      }
    });

    document.body.appendChild(vm.$el);
  };
})();
