<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

</script>

<style>
.nav-bar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  box-shadow: 0 1px 0 0 rgb(100, 100, 100, 0.01);
}

.nav-bar .left {
  width: 20%;
}

.nav-bar .right {
  width: 20%;
}

.nav-bar .center {
  flex: 1;
  text-align: center;
}
</style>
