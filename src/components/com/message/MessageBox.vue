<template>
  <div @touchmove.prevent class="messageBox">
    <div class="messageBox-item">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div>
        <div @touchstart="handleCancel">{{ cancel }}</div>
        <div @touchstart="handleOk">{{ ok }}</div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "MessageBox"
};
</script>

<style scoped>
.messageBox {
  font-size: 16px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.messageBox .messageBox-item {
  position: absolute;
  z-index: 510;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 120px;
  margin: -60px 0 0 -100px;
  border: 1px #cccccc solid;
  border-radius: 4px;
  background: white;
}

.messageBox .mask {
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.messageBox .messageBox-item h2 {
  font-size: 18px;
  line-height: 40px;
  text-align: center;
}

.messageBox .messageBox-item p {
  line-height: 40px;
  text-align: center;
}

.messageBox .messageBox-item > div {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  border-top: 1px #cccccc solid;
}

.messageBox .messageBox-item > div div {
  line-height: 30px;
  flex: 1;
  text-align: center;
  border-right: 1px #cccccc solid;
}

.messageBox .messageBox-item > div div:last-child {
  border: none;
}
</style>
