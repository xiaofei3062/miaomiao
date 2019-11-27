<template>
  <div class="city_body">
    <div class="city_list">
      <my-scroll ref="myScroll">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li
                :key="hotIndex"
                @tap="handleToHotCity(hot.nm, hot.id)"
                v-for="(hot, hotIndex) in hotList"
              >
                {{ hot.nm }}
              </li>
            </ul>
          </div>
          <div class="city_sort" ref="citySort">
            <div :key="cityIndex" v-for="(city, cityIndex) in cityList">
              <h2>{{ city.index }}</h2>
              <ul
                :key="index"
                @tap="handleToHotCity(item.nm, item.id)"
                v-for="(item, index) in city.list"
              >
                <li>{{ item.nm }}</li>
              </ul>
            </div>
          </div>
        </div>
      </my-scroll>
    </div>
    <div class="city_index">
      <ul>
        <li
          :key="barIndex"
          @touchstart="handleToIndex(barIndex)"
          v-for="(bar, barIndex) in cityList"
        >
          {{ bar.index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  mounted() {
    // 获取城市数据本地存储
    const cityList = localStorage.getItem("cityList");
    const hotList = localStorage.getItem("hotList");

    // 本地存储存在 就直接获取数据 否则请求数据
    if (cityList && hotList) {
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
    } else {
      axios
        .get("/api/cityList")
        .then(res => {
          // console.log(res.data);
          let cities = res.data.cities;
          let { cityList, hotList } = this.formatCityList(cities);
          this.cityList = cityList;
          this.hotList = hotList;

          // 将数据本地存储 提升性能
          localStorage.setItem("cityList", JSON.stringify(cityList));
          localStorage.setItem("hotList", JSON.stringify(hotList));
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    formatCityList(cities) {
      let cityList = [];
      let hotList = [];

      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }

      for (let i = 0; i < cities.length; i++) {
        let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          //新添加index
          cityList.push({
            index: firstLetter,
            list: [
              {
                nm: cities[i].nm,
                id: cities[i].id
              }
            ]
          });
        } else {
          //累加到已有index中
          for (let j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({
                nm: cities[i].nm,
                id: cities[i].id
              });
            }
          }
        }
      }

      // 索引排序
      cityList.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        } else if (a.index < b.index) {
          return -1;
        } else {
          return 0;
        }
      });

      function toCom(firstLetter) {
        for (let i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }

      // console.log(cityList, hotList);

      return {
        cityList,
        hotList
      };
    },
    handleToIndex(index) {
      // h2是个类数组
      let h2 = this.$refs.citySort.getElementsByTagName("h2");
      // 调用BScroll封装的滚动到指定元素方法
      this.$refs.myScroll.handleToElement(h2[index], 300);
    },
    handleToHotCity(name, id) {
      this.$store.commit("city_info", { name, id });
      this.$router.push("/movie/nowPlaying").catch(err => {
        return false;
      });
      const obj = {
        name,
        id
      };
      localStorage.setItem("name_id", JSON.stringify(obj));
    }
  }
};
</script>

<style scoped>
#content .city_body {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  margin-top: 45px;
}

.city_body .city_list {
  overflow: auto;
  flex: 1;
  background: #fff5f0;
}

.city_body .city_list::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}

.city_body .city_hot {
  margin-top: 20px;
}

.city_body .city_hot h2 {
  font-size: 14px;
  font-weight: normal;
  line-height: 30px;
  padding-left: 15px;
  background: #f0f0f0;
}

.city_body .city_hot ul li {
  line-height: 33px;
  float: left;
  box-sizing: border-box;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  background: #ffffff;
}

.city_body .city_sort div {
  margin-top: 20px;
}

.city_body .city_sort h2 {
  font-size: 14px;
  font-weight: normal;
  line-height: 30px;
  padding-left: 15px;
  background: #f0f0f0;
}

.city_body .city_sort ul {
  margin-top: 10px;
  padding-left: 10px;
}

.city_body .city_sort ul li {
  line-height: 30px;
}

.city_body .city_index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20px;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
