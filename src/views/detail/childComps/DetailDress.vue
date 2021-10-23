<template>
  <div class="detail-dress">
    <div class="dress-title">穿着效果</div>
    <img
      :src="item"
      v-for="item in dressing"
      :key="item"
      @load="imgLoad"
    >
  </div>
</template>

<script>
export default {
  props: {
    dressing: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    imgLoad () {
      this.$bus.$emit('itemImgLoad');
    }
  }
}
</script>

<style scoped>
.detail-dress .dress-title {
  padding: 10px 0;
  text-align: center;
  color: grey;
  position: relative;
}

.dress-title::before,
.dress-title::after {
  position: absolute;
  content: "";
  width: 60px;
  height: 2px;
  background: rgba(100, 100, 100, 0.2);
}

.dress-title::before {
  left: 2px;
  top: 5px;
}

.dress-title::after {
  right: 2px;
  bottom: 5px;
}

.detail-dress img {
  width: 100%;
  vertical-align: center;
}
</style>
