<template>
  <div class="cart-bottom-bar">
    <div class="left">
      <input
        type="checkbox"
        @change="allChose"
      >
      <span>全选</span>
    </div>
    <div class="center">
      <span>合计:￥{{ getChoseGoodsPrice }}</span>
    </div>
    <div class="right">
      <span>去结算({{ choseGoodsNum }})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    choseGoodsNum: {
      type: Number
    }
  },
  computed: {
    ...mapGetters([
      'getChoseGoodsPrice'
    ])
  },
  methods: {
    allChose (e) {
      // console.log(e.target.checked);
      this.$store.commit('choseAllGoods', e.target.checked);
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  height: 34px;
  display: flex;
  position: fixed;
  bottom: 44px;
  left: 0;
  right: 0;
  align-items: center;
  background: #f6f6f6;
  text-align: center;
  box-shadow: 0 -1px 0 0 rgba(100, 100, 100, 0.1);
}

.left {
  width: 25%;
}

.center {
  width: 45%;
}

.right {
  width: 30%;
  background: #ff0000;
  color: white;
  height: 100%;
  line-height: 34px;
}
</style>
