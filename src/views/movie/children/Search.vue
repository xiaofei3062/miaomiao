<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input placeholder="请点击搜索按钮搜索内容" type="text" v-model.lazy="message">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li :key="index" v-for="(item,index) in moviesList">
          <div class="img"><img :src="item.img | setPicWidth('128.180')" alt=""></div>
          <div class="info">
            <p><span class="name">{{item.nm | filterName}}</span><span>{{Number(item.sc).toFixed(1)}}</span></p>
            <p>主演：{{item.dir | filterDir}}</p>
            <p>分类：{{item.cat || "暂无分类"}}</p>
            <p>{{item.pubDesc}}</p>
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

        axios.get(`/api/searchList?cityId=10&kw=${newVal}`).then(res => {
          let movies = res.data.movies;
          if (movies) {
            this.moviesList = movies.list;
          }
        }).catch(err => {
          console.log(err);
        });

      }
    }
  };
</script>

<style scoped>
  #content .search_body {
    flex: 1;
    overflow: auto;
  }

  .search_body .search_input {
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
  }

  .search_body .search_input_wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    line-height: 20px;
  }

  .search_body .search_input_wrapper i {
    font-size: 16px;
    padding: 4px 0;
  }

  .search_body .search_input_wrapper input {
    border: none;
    font-size: 13px;
    color: #333333;
    padding: 4px 0;
    outline: none;
    margin-left: 5px;
    width: 100%;
  }

  .search_body .search_result {
  }

  .search_body .search_result h3 {
    font-size: 15px;
    color: #999999;
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;
  }

  .search_body .search_result ul {
  }

  .search_body .search_result li {
    border-bottom: 1px #c9c9c9 dashed;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
  }

  .search_body .search_result .img {
    width: 60px;
    float: left;
  }

  .search_body .search_result .img img {
    width: 100%;
  }

  .search_body .search_result .info {
    float: left;
    margin-left: 15px;
    flex: 1;
  }

  .search_body .search_result .info p {
    height: 22px;
    display: flex;
    line-height: 22px;
    font-size: 12px;
  }

  .search_body .search_result .info p:nth-of-type(1) .name {
    font-size: 16px;
    color: red;
    flex: 1;
  }

  .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2) {
    font-size: 16px;
    color: #fc7103;
  }
</style>
