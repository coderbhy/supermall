<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar v-show="showTabBar" />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
export default {
  components: {
    MainTabBar
  },
  computed: {
    showTabBar () {
      return !this.$route.path.includes('/detail');
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  padding-top: 44px;
  padding-bottom: 44px;
}
</style>
