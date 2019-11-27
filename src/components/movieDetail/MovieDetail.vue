<template>
  <div class="slide-enter-active" id="detailContrainer">
    <app-header title="影片详情">
      <i @touchstart="handleToBack" class="iconfont icon-right" />
    </app-header>
    <div class="contentDetail" id="content">
      <div class="detail_list">
        <div class="detail_list_bg"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.img | setPicWidth('106.148')" alt="" />
          </div>
          <div class="detail_list_info">
            <h2>{{ detailMovie.nm }}</h2>
            <p>{{ detailMovie.enm }}</p>
            <p>{{ Number(detailMovie.sc).toFixed(1) }}分</p>
            <p>{{ detailMovie.cat }}</p>
            <p>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
            <p>{{ detailMovie.pubDesc }}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{ detailMovie.dra }}</p>
      </div>
      <div class="detail_player swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div>
              <img alt="" src="@/assets/images/person_1.webp" />
            </div>
            <p>陈建斌</p>
            <p>马先勇</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../header/AppHeader";

export default {
  name: "MovieDetail",
  components: { AppHeader },
  props: ["movieId"],
  data() {
    return {
      detailMovie: {}
    };
  },
  methods: {
    // 返回上一页
    handleToBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    const movieId = this.movieId;
    axios
      .get("/api/detailmovie?movieId=" + movieId)
      .then(res => {
        this.detailMovie = res.data.detailMovie;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#detailContrainer {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: white;
}

#detailContrainer.slide-enter-active {
  animation: 0.3s slideMove;
}

@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

#content.contentDetail {
  display: block;
  margin-bottom: 0;
}

#content .detail_list {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
}

.detail_list .detail_list_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 0 40%;
  background-size: cover;
  filter: blur(20px);
}

.detail_list .detail_list_filter {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.55;
  background-color: #40454d;
}

.detail_list .detail_list_content {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
}

.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  margin: 20px;
  border: solid 1px #f0f2f3;
}

.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}

.detail_list .detail_list_info {
  margin-top: 20px;
}

.detail_list .detail_list_info h2 {
  font-size: 20px;
  font-weight: normal;
  line-height: 40px;
  color: white;
}

.detail_list .detail_list_info p {
  font-size: 14px;
  line-height: 20px;
  color: #cccccc;
}

#content .detail_intro {
  padding: 10px;
}

#content .detail_player {
  margin: 20px;
}

.detail_player .swiper-slide {
  font-size: 14px;
  width: 70px;
  margin-right: 20px;
  text-align: center;
}

.detail_player .swiper-slide img {
  width: 100%;
  margin-bottom: 5px;
}

.detail_player .swiper-slide p:nth-of-type(2) {
  color: #999999;
}
</style>
