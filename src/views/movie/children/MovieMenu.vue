<template>
  <div class="movie_menu">
    <router-link active-class="active" class="city_name" tag="div" to="/movie/city">
      <span>大连</span><i class="iconfont icon-lower-triangle" />
    </router-link>
    <div class="hot_swtich">
      <router-link active-class="active" class="hot_item" tag="div" to="/movie/nowPlaying">正在热映</router-link>
      <router-link active-class="active" class="hot_item" tag="div" to="/movie/comingSoon">即将上映</router-link>
    </div>
    <router-link active-class="active" class="search_entry" tag="div" to="/movie/search">
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
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    z-index: 10;
  }

  .movie_menu .city_name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
  }

  .movie_menu .city_name.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }

  .movie_menu .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 45px;
  }

  .movie_menu .hot_item {
    font-size: 15px;
    color: #666666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
  }

  .movie_menu .hot_item.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }

  .movie_menu .search_entry {
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
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
