<template>
  <div class="goods-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>
