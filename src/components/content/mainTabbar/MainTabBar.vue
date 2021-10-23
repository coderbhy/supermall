<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #default-icon>
        <i class="iconfont icon-shouyefill"></i>
      </template>
      <template #active-icon>
        <i class="iconfont icon-shouyefill"></i>
      </template>
      <template #text>
        <span>首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template #default-icon>
        <i class="iconfont icon-yingyong"></i>
      </template>
      <template #active-icon>
        <i class="iconfont icon-yingyong"></i>
      </template>
      <template #text>
        <span>分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template #default-icon>
        <i class="iconfont icon-gouwuchefill"></i>
      </template>
      <template #active-icon>
        <i class="iconfont icon-gouwuchefill"></i>
      </template>
      <template #text>
        <span>购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #default-icon>
        <i class="iconfont icon-wodexiao"></i>
      </template>
      <template #active-icon>
        <i class="iconfont icon-wodexiao"></i>
      </template>
      <template #text>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import { TabBar, TabBarItem } from 'components/common/tabbar';
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
