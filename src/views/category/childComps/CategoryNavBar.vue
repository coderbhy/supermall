<template>
  <nav-bar class="category-nav-bar">
    <template #center>
      <div class="center">商品分类</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.category-nav-bar {
  background: #ff8198;
  z-index: 100;
}

.center {
  color: white;
  line-height: 44px;
}
</style>
