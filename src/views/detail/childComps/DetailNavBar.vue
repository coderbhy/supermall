<template>
  <nav-bar class="detail-nav-bar">
    <template #left>
      <div class="left">
        <img
          src="~assets/img/detail/back.svg"
          @click="back"
        >
      </div>
    </template>
    <template #center>
      <div class="center">
        <div
          class="menu-item"
          v-for="(item, index) in menu"
          :key="item"
          :class="{active: index === currentIndex}"
          @click="scrollTo(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  data () {
    return {
      menu: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    scrollTo (index) {
      this.currentIndex = index;
      this.$emit('scroll-to-title', index);
    },
    back () {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.detail-nav-bar {
  background: white;
  z-index: 100;
  box-shadow: 0 1px 0px 0px rgba(100, 100, 100, 0.1);
}

.left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  width: 32px;
  height: 32px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 44px;
}

.menu-item {
  flex: 1;
}

.active {
  color: #ff5777;
}
</style>
