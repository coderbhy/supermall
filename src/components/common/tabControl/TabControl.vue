<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in menu"
      :key="item.type"
      :class="{ active: currentIndex === index }"
      @click="changeMenu(index)"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeMenu (index) {
      this.currentIndex = index;
      this.$emit('change-tab-bar', index);
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: rgb(100, 100, 100);
}

.tab-control-item {
  flex: 1;
  text-align: center;
  height: 26px;
}

.active {
  color: #ff5777;
  position: relative;
  display: inline-block;
}

.active::before {
  position: absolute;
  content: "";
  width: 60%;
  height: 2px;
  background: #ff5777;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
