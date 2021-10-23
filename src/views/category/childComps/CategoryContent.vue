<template>
  <div class="category-content">
    <goods-list>
      <goods-list-item
        v-for="item in contentList"
        :key="item.image"
        :goods-obj="item"
        class="category-content-item"
      ></goods-list-item>
    </goods-list>
  </div>
</template>

<script>
import { GoodsList, GoodsListItem } from 'components/content/goods';

export default {
  props: {
    contentList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsList,
    GoodsListItem
  }
}
</script>

<style scoped>
.category-content {
  flex: 1;
  padding: 6px;
  height: calc(100vh - 44px - 44px - 12px);
  overflow: hidden;
  overflow-y: scroll;
}

.category-content-item {
  padding-bottom: 62%;
}
</style>
