<template>
  <div class="detail-recommend">
    <goods-list>
      <goods-list-item
        v-for="item in recommendList"
        :key="item.item_id"
        :goods-obj="item"
      >
      </goods-list-item>
    </goods-list>
  </div>
</template>

<script>
import { GoodsList, GoodsListItem } from 'components/content/goods';

export default {
  props: {
    recommendList: {
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
.detail-recommend {
  padding: 10px 5px;
}
</style>
