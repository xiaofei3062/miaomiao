<template>
  <div class="movie_menu">
    <router-link
      active-class="active"
      class="city_name"
      tag="div"
      to="/movie/city"
    >
      <span>{{ $store.state.city.name }}</span>
      <i class="iconfont icon-lower-triangle" />
    </router-link>
    <div class="hot_swtich">
      <router-link
        active-class="active"
        class="hot_item"
        tag="div"
        to="/movie/nowPlaying"
      >
        正在热映
      </router-link>
      <router-link
        active-class="active"
        class="hot_item"
        tag="div"
        to="/movie/comingSoon"
      >
        即将上映
      </router-link>
    </div>
    <router-link
      active-class="active"
      class="search_entry"
      tag="div"
      to="/movie/search"
    >
      <i class="iconfont icon-sousuo" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieMenu"
};
</script>

<style scoped>
#content .movie_menu {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  background: white;
}

.movie_menu .city_name {
  line-height: 45px;
  height: 100%;
  margin-left: 20px;
}

.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.movie_menu .hot_swtich {
  line-height: 45px;
  display: flex;
  height: 100%;
}

.movie_menu .hot_item {
  font-size: 15px;
  font-weight: 700;
  width: 80px;
  margin: 0 12px;
  text-align: center;
  color: #666666;
}

.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.movie_menu .search_entry {
  line-height: 45px;
  height: 100%;
  margin-right: 20px;
}

.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
