<template>
  <div
    class="tab-bar-item"
    :class="{ active: isActive }"
    @click="routeToPath"
  >
    <div
      class="default-icon"
      v-show="!isActive"
    >
      <slot name="default-icon"></slot>
    </div>
    <div
      class="active-icon"
      v-show="isActive"
    >
      <slot name="active-icon"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.path;
    }
  },
  methods: {
    routeToPath () {
      this.$router.push(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item i,
.tab-bar-item img {
  font-size: 22px;
  vertical-align: middle;
}

.tab-bar-item i {
  color: grey;
}

.tab-bar-item img {
  width: 22px;
  height: 22px;
}

div.text {
  color: #6e6e6e;
  font-size: 14px;
}

.active i {
  color: rgb(255, 129, 152);
}

.active .text {
  color: rgb(255, 87, 119);
}
</style>
