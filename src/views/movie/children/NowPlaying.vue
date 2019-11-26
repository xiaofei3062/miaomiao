<template>
  <div class="movie_body">
    <ul>
      <li :key="movieIndex" v-for="(movie,movieIndex) in movieList">
        <div class="pic_show"><img :src="movie.img | setPicWidth('128.180')" alt=""></div>
        <div class="info_list">
          <h2>{{movie.nm}} <img alt="" src="@/assets/images/maxs.png" v-if="movie.version"></h2>
          <p>观众评 <span class="grade">{{Number(movie.sc).toFixed(1)}}</span></p>
          <p>主演: {{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NowPlaying",
    data() {
      return {
        movieList: []
      };
    },
    mounted() {
      axios.get("/api/movieOnInfoList?cityId=10").then(res => {
        // console.log(res.data.movieList);
        this.movieList = res.data.movieList;
      }).catch(err => {
        console.log(err);
      });
    }
  };
</script>

<style scoped>
  #content .movie_body {
    flex: 1;
    overflow: auto;
  }

  .movie_body ul {
    margin: 0 12px;
    overflow: hidden;
  }

  .movie_body ul li {
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 10px;
  }

  .movie_body .pic_show {
    width: 64px;
    height: 90px;
  }

  .movie_body .pic_show img {
    width: 100%;
  }

  .movie_body .info_list {
    margin-left: 10px;
    flex: 1;
    position: relative;
  }

  .movie_body .info_list h2 {
    font-size: 17px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .movie_body .info_list p {
    font-size: 13px;
    color: #666666;
    line-height: 22px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .movie_body .info_list .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
  }

  .movie_body .info_list img {
    width: 50px;
    position: absolute;
    right: 10px;
    top: 5px;
  }

  .movie_body .btn_mall, .movie_body .btn_pre {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    color: #ffffff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }

  .movie_body .btn_pre {
    background-color: #3c9fe6;
  }
</style>
