<template>
  <div class="movie_body">
    <my-scroll
      :handleToScroll="handleToScroll"
      :handleToTouchEnd="handleToTouchEnd"
    >
      <ul>
        <li class="msg-show" v-show="msgShow">{{ pullDownMsg }}</li>
        <li
          :key="movieIndex"
          @tap="handleToDetail"
          v-for="(movie, movieIndex) in movieList"
        >
          <div class="pic_show">
            <img :src="movie.img | setPicWidth('128.180')" alt="" />
          </div>
          <div class="info_list">
            <h2>
              {{ movie.nm }}
              <img alt="" src="@/assets/images/maxs.png" v-if="movie.version" />
            </h2>
            <p>
              观众评
              <span class="grade">{{ Number(movie.sc).toFixed(1) }}</span>
            </p>
            <p>主演: {{ movie.star }}</p>
            <p>{{ movie.showInfo }}</p>
          </div>
          <div class="btn_mall">
            购票
          </div>
        </li>
      </ul>
    </my-scroll>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
      pullDownMsg: "",
      msgShow: false
    };
  },
  methods: {
    handleToDetail() {
      console.log("tap");
    },
    handleToScroll(pos) {
      if (pos.y > 20) {
        this.pullDownMsg = "数据更新中...";
        this.msgShow = true;
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 20) {
        setTimeout(() => {
          this.pullDownMsg = "数据更新成功";
          setTimeout(() => {
            this.msgShow = false;
            this.pullDownMsg = "";
          }, 1000);
        }, 1000);
      }
    }
  },
  mounted() {
    axios
      .get("/api/movieOnInfoList?cityId=10")
      .then(res => {
        // console.log(res.data.movieList);
        this.movieList = res.data.movieList;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#content .movie_body {
  overflow: hidden;
  flex: 1;
}

.movie_body ul {
  overflow: hidden;
  margin: 0 12px;
}

.movie_body ul .msg-show {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  border: none;
}

.movie_body ul li {
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding-bottom: 10px;
  border-bottom: 1px #e6e6e6 solid;
}

.movie_body .pic_show {
  width: 64px;
  height: 90px;
}

.movie_body .pic_show img {
  width: 100%;
}

.movie_body .info_list {
  position: relative;
  flex: 1;
  margin-left: 10px;
}

.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  overflow: hidden;
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.movie_body .info_list p {
  font-size: 13px;
  line-height: 22px;
  overflow: hidden;
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666666;
}

.movie_body .info_list .grade {
  font-size: 15px;
  font-weight: 700;
  color: #faaf00;
}

.movie_body .info_list img {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 50px;
}

.movie_body .btn_mall,
.movie_body .btn_pre {
  font-size: 12px;
  line-height: 28px;
  width: 47px;
  height: 27px;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  border-radius: 4px;
  background-color: #f03d37;
}

.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>
