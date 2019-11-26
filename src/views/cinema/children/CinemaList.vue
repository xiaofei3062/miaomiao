<template>
  <div class="cinema_body">
    <my-scroll>
      <ul>
        <template v-for="(item, index) in cinemaList">
          <li :key="index">
            <div>
              <span>{{ item.nm | filterName }}</span>
              <span class="q">
                <span class="price">
                  {{ Number(item.sellPrice).toFixed(1) }}
                </span>
                元起
              </span>
            </div>
            <div class="address">
              <span>{{ item.addr | filterAddr }}</span>
              <span>{{ item.distance }}</span>
            </div>
            <div class="card">
              <template v-for="(num, key) in item.tag" v-if="num === 1">
                <div :class="key | filterColor" :key="key">
                  {{ key | filterKey }}
                </div>
              </template>
            </div>
          </li>
        </template>
      </ul>
    </my-scroll>
  </div>
</template>

<script>
export default {
  name: "CinemaList",
  data() {
    return {
      cinemaList: []
    };
  },
  filters: {
    // 过滤地址
    filterAddr(addr) {
      if (addr.length >= 18) {
        return addr.substr(0, 18) + "...";
      }
      return addr;
    },
    // 过滤电影名称
    filterName(name) {
      if (name.length >= 15) {
        return name.substr(0, 15) + "...";
      }
      return name;
    },
    // 过滤卡片
    filterKey(key) {
      const card = [
        { key: "allowRefund", val: "改签" },
        { key: "endorse", val: "退票" },
        { key: "sell", val: "折扣卡" },
        { key: "snack", val: "小吃" }
      ];

      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].val;
        }
      }
      return "";
    },
    // 过滤卡片颜色
    filterColor(key) {
      if (key === "allowRefund" || key === "endorse") {
        return "bl";
      }
      return "ol";
    }
  },
  mounted() {
    axios.get("/api/cinemaList?cityId=10").then(res => {
      // console.log(res.data.cinemas);
      this.cinemaList = res.data.cinemas;
    });
  }
};
</script>

<style scoped>
#content .cinema_body {
  overflow: hidden;
  flex: 1;
}

.cinema_body ul {
  padding: 20px;
}

.cinema_body li {
  margin-bottom: 20px;
  border-bottom: 1px solid #e6e6e6;
}

.cinema_body div {
  margin-bottom: 10px;
}

.cinema_body .q {
  font-size: 11px;
  margin-left: 5px;
  color: #f03d37;
}

.cinema_body .price {
  font-size: 18px;
}

.cinema_body .address {
  font-size: 13px;
  color: #666666;
}

.cinema_body .address span:nth-of-type(2) {
  float: right;
}

.cinema_body .card {
  display: flex;
}

.cinema_body .card div {
  font-size: 13px;
  margin-right: 5px;
  padding: 2px 3px;
  text-align: center;
  color: #ff9900;
  border: 1px solid #ff9900;
  border-radius: 2px;
}

.cinema_body .card div.or {
  color: #ff9900;
  border: 1px solid #ff9900;
}

.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
