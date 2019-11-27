<template>
  <div class="movie_body">
    <my-scroll>
      <ul>
        <li
          :key="index"
          @tap="handleToDetail(item.id)"
          v-for="(item, index) in comingList"
        >
          <div class="pic_show">
            <img :src="item.img | setPicWidth('128.180')" alt="" />
          </div>
          <div class="info_list">
            <h2>
              {{ item.nm }}
              <img alt="" src="@/assets/images/maxs.png" v-if="item.version" />
            </h2>
            <p>
              <span class="person">{{ item.wish }}</span>
              人想看
            </p>
            <p>主演: {{ item.star }}</p>
            <p>{{ item.rt }}上映</p>
          </div>
          <div class="btn_pre">
            预售
          </div>
        </li>
      </ul>
    </my-scroll>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  data() {
    return {
      comingList: [],
      prevCityId: -1
    };
  },
  methods: {
    handleToDetail(movieId) {
      this.$router.push("/movie/movieDetail/2/" + movieId).catch(err => {});
    }
  },
  activated() {
    const cityId = this.$store.state.city.id;

    // id相同就不重复请求数据了
    if (this.prevCityId === cityId) {
      return false;
    } else {
      axios
        .get("/api/movieComingList?cityId=" + cityId)
        .then(res => {
          // console.log(res.data.comingList);
          this.comingList = res.data.comingList;
          this.prevCityId = cityId;
        })
        .catch(err => {
          console.log(err);
        });
    }
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
