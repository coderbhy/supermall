<template>
  <div class="category-title">
    <div
      class="title-item"
      v-for="(item, index) in titleList"
      :key="item.maitKey"
      :class="{ active: currentIndex === index }"
      @click="changeCategory(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleList: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeCategory (index) {
      this.currentIndex = index;
      this.$emit('change-key', this.titleList[index].maitKey);
    }
  }
}
</script>

<style scoped>
.category-title {
  width: 26%;
  height: calc(100vh - 44px - 44px);
  overflow: hidden;
  overflow-y: scroll;
}

.category-title::-webkit-scrollbar {
  /* width: 0 !important; */
  display: none;
}

.title-item {
  background: #f6f6f6;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 18px;
}

.active {
  background: white;
  position: relative;
}

.active::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 4px;
  left: 0;
  background: #ff8198;
}
</style>
