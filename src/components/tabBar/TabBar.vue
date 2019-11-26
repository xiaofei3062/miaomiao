<template>
  <footer id="footer">
    <ul>
      <router-link active-class="active" tag="li" to="/movie">
        <i class="iconfont icon-dianying" />
        <p>电影</p>
      </router-link>
      <router-link active-class="active" tag="li" to="/cinema">
        <i class="iconfont icon-yingyuan" />
        <p>影院</p>
      </router-link>
      <router-link active-class="active" tag="li" to="/mine">
        <i class="iconfont icon-wode" />
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 2px #ebe8e3 solid;
  background: white;
}

#footer ul {
  display: flex;
  align-items: center;
  height: 50px;
  text-align: center;
}

#footer ul li {
  flex: 1;
  height: 40px;
  margin-bottom: 5px;
}

#footer ul li.active {
  color: #f03d37;
}

#footer ul i {
  font-size: 20px;
}

#footer ul p {
  font-size: 12px;
  line-height: 18px;
  margin-top: 2px;
}
</style>
