<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div
        class="left-item"
        v-for="item in menuList"
        :key="item.text"
      >
        <i
          class="iconfont"
          :class="item.icon"
        ></i>
        <p>{{ item.text }}</p>
      </div>
    </div>
    <div
      class="center"
      @click="addToCart"
    >加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          icon: 'icon-kefu',
          text: '客服'
        },
        {
          icon: 'icon-dianpu',
          text: '店铺'
        },
        {
          icon: 'icon-shoucang',
          text: '收藏'
        }
      ]
    }
  },
  methods: {
    addToCart () {
      this.$emit('add-to-cart');
    }
  }
}
</script>

<style scoped>
.detail-bottom-bar {
  height: 44px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 100;
  box-shadow: 0 -1px 0 0 rgba(100, 100, 100, 0.1);
  display: flex;
}

.center,
.right {
  width: 25%;
  line-height: 44px;
  text-align: center;
  color: rgba(100, 100, 100, 0.9);
}

.left {
  flex: 1;
  display: flex;
}

.center {
  background: #ffe817;
}

.right {
  background: #ff5777;
}

.left-item {
  flex: 1;
  text-align: center;
}

p {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: rgba(100, 100, 100, 0.9);
}

i {
  font-size: 22px;
  vertical-align: middle;
}
</style>
