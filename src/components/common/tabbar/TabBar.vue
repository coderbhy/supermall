<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped>
#tab-bar {
  display: flex;
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 0 0 rgb(100, 100, 100, 0.1);
  background: #f2f2f2;
}
</style>
