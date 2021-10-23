<template>
  <nav-bar class="cart-nav-bar">
    <template #center>
      <div class="center">
        <span>购物车</span>
        <span>({{ count }})</span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.cart-nav-bar {
  background: #ff8198;
  line-height: 44px;
  color: white;
  z-index: 100;
}
</style>
