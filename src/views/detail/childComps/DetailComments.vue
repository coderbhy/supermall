<template>
  <div class="detail-comments">
    <div class="head">
      <p>用户评价</p>
      <p>更多</p>
    </div>
    <div
      class="content"
      v-for="(item, index) in userInfo"
      :key="index"
    >
      <div class="user-info">
        <img :src="item.user.avatar">
        <p>{{ item.user.uname }}</p>
      </div>
      <p class="comment-content">
        {{ item.content }}
      </p>
      <div class="other-info">
        <span>{{ item.created | dateFilter }}</span>
        <span>{{ item.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { calcDate } from 'service/utils'

export default {
  props: {
    userInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  filters: {
    dateFilter (value) {
      return calcDate(+value);
    }
  }
}
</script>

<style scoped>
.detail-comments {
  padding: 10px;
  color: grey;
  border-bottom: 4px solid rgba(100, 100, 100, 0.2);
}

.head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.2);
}

p {
  margin: 0;
  padding: 0;
}

img {
  width: 40px;
  height: 40px;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.user-info p {
  margin-left: 5px;
}

.comment-content,
.other-info {
  font-size: 14px;
}
</style>
