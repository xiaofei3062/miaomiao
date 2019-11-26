<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li :key="hotIndex" v-for="(hot,hotIndex) in hotList">{{hot.nm}}</li>
        </ul>
      </div>
      <div class="city_sort" ref="citySort">
        <div :key="cityIndex" v-for="(city,cityIndex) in cityList">
          <h2>{{city.index}}</h2>
          <ul :key="index" v-for="(item,index) in city.list">
            <li>{{item.nm}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li :key="barIndex" @touchstart="handleToIndex(barIndex)" v-for="(bar,barIndex) in cityList">{{bar.index}}</li>
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
      axios.get("/api//cityList").then(res => {
        // console.log(res.data);
        let cities = res.data.cities;
        let { cityList, hotList } = this.formatCityList(cities);
        this.cityList = cityList;
        this.hotList = hotList;
      }).catch(err => {
        console.log(err);
      });
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
          if (toCom(firstLetter)) {  //新添加index
            cityList.push(
              {
                index: firstLetter,
                list: [
                  {
                    nm: cities[i].nm,
                    id: cities[i].id
                  }
                ]
              });
          } else {   //累加到已有index中
            for (let j = 0; j < cityList.length; j++) {
              if (cityList[j].index === firstLetter) {
                cityList[j].list.push(
                  {
                    nm: cities[i].nm,
                    id: cities[i].id
                  }
                );
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
        let h2 = this.$refs.citySort.getElementsByTagName("h2");
        this.$refs.citySort.parentNode.scrollTop = h2[index].offsetTop;
      }
    }
  };
</script>

<style scoped>
  #content .city_body {
    margin-top: 45px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .city_body .city_list {
    flex: 1;
    overflow: auto;
    background: #fff5f0;
  }

  .city_body .city_list::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
  }

  .city_body .city_hot {
    margin-top: 20px;
  }

  .city_body .city_hot h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: normal;
  }

  .city_body .city_hot ul li {
    float: left;
    background: #ffffff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 3%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
  }

  .city_body .city_sort div {
    margin-top: 20px;
  }

  .city_body .city_sort h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: normal;
  }

  .city_body .city_sort ul {
    padding-left: 10px;
    margin-top: 10px;
  }

  .city_body .city_sort ul li {
    line-height: 30px;
  }

  .city_body .city_index {
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px #e6e6e6 solid;
  }
</style>
