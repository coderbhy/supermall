<template>
  <div id="cart-page">
    <cart-nav-bar :count="goodsTotalNum" />
    <cart-list
      :cart-content-list="cartContentList"
      class="cart-list"
    />
    <cart-bottom-bar :chose-goods-num="getChoseGoodsNum" />

  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar.vue';
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

import { mapGetters } from 'vuex';

export default {
  data () {
    return {

    }
  },
  components: {
    CartNavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartContentList () {
      return this.$store.state.cartList;
    },
    ...mapGetters([
      'goodsTotalNum',
      'getChoseGoodsNum',

    ])

  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 88px - 34px);
  overflow: hidden;
  overflow-y: scroll;
}
</style>
