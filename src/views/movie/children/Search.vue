<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo" />
        <input
          placeholder="请点击搜索按钮搜索内容"
          type="text"
          v-model.lazy="message"
        />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li :key="index" v-for="(item, index) in moviesList">
          <div class="img">
            <img :src="item.img | setPicWidth('128.180')" alt="" />
          </div>
          <div class="info">
            <p>
              <span class="name">{{ item.nm | filterName }}</span>
              <span>{{ Number(item.sc).toFixed(1) }}</span>
            </p>
            <p>主演：{{ item.dir | filterDir }}</p>
            <p>分类：{{ item.cat || "暂无分类" }}</p>
            <p>{{ item.pubDesc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      message: "",
      moviesList: []
    };
  },
  filters: {
    filterName(name) {
      if (name.length >= 24) {
        return name.substr(0, 24) + "...";
      }
      return name;
    },
    filterDir(dir) {
      if (dir.length > 20) {
        return dir.substr(0, 20) + "...";
      } else if (dir.length <= 0) {
        return "暂无主演";
      } else {
        return dir;
      }
    }
  },
  watch: {
    message(newVal) {
      const cityId = this.$store.state.city.id;
      axios
        .get(`/api/searchList?cityId=${cityId}&kw=${newVal}`)
        .then(res => {
          let movies = res.data.movies;
          if (movies) {
            this.moviesList = movies.list;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#content .search_body {
  overflow: auto;
  flex: 1;
}

.search_body .search_input {
  padding: 8px 10px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f5f5f5;
}

.search_body .search_input_wrapper {
  line-height: 20px;
  display: flex;
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #ffffff;
}

.search_body .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}

.search_body .search_input_wrapper input {
  font-size: 13px;
  width: 100%;
  margin-left: 5px;
  padding: 4px 0;
  color: #333333;
  border: none;
  outline: none;
}

.search_body .search_result {
}

.search_body .search_result h3 {
  font-size: 15px;
  padding: 9px 15px;
  color: #999999;
  border-bottom: 1px solid #e6e6e6;
}

.search_body .search_result ul {
}

.search_body .search_result li {
  display: flex;
  box-sizing: border-box;
  padding: 10px 15px;
  border-bottom: 1px #c9c9c9 dashed;
}

.search_body .search_result .img {
  float: left;
  width: 60px;
}

.search_body .search_result .img img {
  width: 100%;
}

.search_body .search_result .info {
  float: left;
  flex: 1;
  margin-left: 15px;
}

.search_body .search_result .info p {
  font-size: 12px;
  line-height: 22px;
  display: flex;
  height: 22px;
}

.search_body .search_result .info p:nth-of-type(1) .name {
  font-size: 16px;
  flex: 1;
  color: red;
}

.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2) {
  font-size: 16px;
  color: #fc7103;
}
</style>
