<template>
  <div id="category-page">
    <category-nav-bar />
    <div class="category-content">
      <category-title
        :title-list="titleList"
        @change-key="changeContent"
      />
      <category-content :content-list="contentList" />
    </div>
  </div>
</template>

<script>
import CategoryNavBar from './childComps/CategoryNavBar.vue';
import CategoryTitle from './childComps/CategoryTitle.vue';
import CategoryContent from './childComps/CategoryContent.vue';

import { getCategory, getContent } from 'network/category';

export default {
  data () {
    return {
      titleList: [],
      contentList: []
    }
  },
  created () {
    getCategory()
      .then(res => {
        // console.log(res);
        this.titleList = res.data.category.list;
        return this.titleList[0].maitKey;
      })
      .then(res => {
        this.getGoodsFromKey(res);
      })
  },
  methods: {
    getGoodsFromKey (maitKey) {
      getContent(maitKey)
        .then(res => {
          // console.log(res);
          this.contentList = res.data.list;
        })
    },
    changeContent (key) {
      this.getGoodsFromKey(key);
    }
  },
  components: {
    CategoryNavBar,
    CategoryTitle,
    CategoryContent
  }
}
</script>

<style scoped>
.category-content {
  display: flex;
}
</style>
