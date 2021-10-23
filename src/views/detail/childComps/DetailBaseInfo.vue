<template>
  <div class="detail-base-info">
    <p class="title">{{ baseInfo.title }}</p>
    <div class="price-info">
      <p class="price">{{ baseInfo.price }}</p>
      <p class="old-price">{{ baseInfo.oldPrice }}</p>
      <p
        class="discount-desc"
        :style="{ background: baseInfo.discountBgColor }"
      >{{ baseInfo.discountDesc }}</p>
    </div>
    <div class="columns-info">
      <p
        v-for="item in columns"
        :key="item"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default () {
        return {};
      }
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-base-info {
  padding: 5px;
}

p {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.price-info {
  margin: 5px 0;
  display: flex;
  align-items: center;
}

.price {
  color: #ff5777;
  font-size: 20px;
}

.old-price {
  color: grey;
  text-decoration: line-through;
  margin-left: 5px;
}

.discount-desc {
  color: white;
  padding: 1px 3px;
  border-radius: 10px;
  margin-left: 5px;
}

.columns-info {
  display: flex;
  justify-content: space-between;
  color: grey;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(100, 100, 100, 0.2);
}
</style>
