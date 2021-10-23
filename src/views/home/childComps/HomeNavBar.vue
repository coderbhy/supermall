<template>
  <nav-bar class="home-nav-bar">
    <template #center>
      <span>购物街</span>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.home-nav-bar {
  background: rgb(255, 129, 152);
  color: white;
}

.home-nav-bar span {
  line-height: 44px;
}
</style>
