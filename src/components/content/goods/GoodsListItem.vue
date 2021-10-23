<template>
  <div
    class="goods-list-item"
    @click="routeToDetail(goodsIId)"
  >
    <img :src="goodsImg">
    <div class="other-info">
      <p class="title">{{ goodsObj.title }}</p>
      <span class="price">{{ goodsObj.price }}</span>
      <span class="cfav">{{ goodsObj.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsObj: {
      type: Object
    }
  },
  methods: {
    routeToDetail (iid) {
      this.$router.push(`/detail/${iid}`);
    }
  },
  computed: {
    goodsImg () {
      return this.goodsObj.image || this.goodsObj.show.img;
    },
    goodsIId () {
      return this.goodsObj.iid || this.goodsObj.item_id;
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  text-align: center;
  padding-bottom: calc(72% + 40px);
  height: 0;
  position: relative;
}

.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-list-item .other-info {
  color: grey;
  font-size: 14px;
  width: 100%;
  position: absolute;
  bottom: 2px;
}

p {
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.price {
  color: #ff5777;
}

.cfav::before {
  content: "";
  display: inline-block;
  background: url(../../../assets/img/home/cfav.svg);
  background-size: 100%;
  width: 14px;
  height: 14px;
  line-height: 14px;
  margin: 0 2px;
}
</style>
