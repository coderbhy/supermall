<template>
  <div class="cart-list">
    <div
      v-show="!goodsTotalNum"
      class="tip"
    >
      <p>
        购物车居然是空的(○´･д･)ﾉ<br>
        再忙，也记得买点什么犒赏自己
      </p>
      <input
        type="button"
        value="去逛逛"
        @click="routeToHome"
      >
    </div>
    <div
      class="content"
      v-show="goodsTotalNum"
    >
      <div
        class="list-item"
        v-for="item in cartContentList"
        :key="item.iid"
      >
        <input
          type="checkbox"
          @change="modifyGoods(item.iid)"
          :checked="item.isChose"
        >
        <img :src="item.img">
        <div class="other-info">
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
          <span>￥{{ item.price }}</span>
          <span>X{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    cartContentList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    ...mapGetters([
      'goodsTotalNum'
    ])
  },
  methods: {
    routeToHome () {
      this.$router.push('/home');
    },
    modifyGoods (iid) {
      console.log(iid);
      this.$store.commit('modifyGoodsStatus', iid);
    }
  }
}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}

.tip {
  text-align: center;
}

.tip p {
  font-size: 18px;
  padding: 40px 0;
}

.tip input {
  background: #f3f3f3;
  border: 2px solid #aaaaaa;
  border-radius: 6px;
  font-size: 18px;
  padding: 6px 10px;
}

.list-item {
  display: flex;
  padding: 10px 6px;
  height: 120px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.2);
}

.list-item:last-child {
  border-bottom: none;
}

.list-item input {
  align-self: center;
}

.list-item img {
  height: 100%;
  margin: 0 18px 0 6px;
  border-radius: 10px;
}

.list-item .other-info {
  flex: 1;
  position: relative;
}

.other-info p {
  width: 238px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.other-info p:first-child {
  margin-bottom: 20px;
  font-size: 18px;
}

.other-info p:nth-child(2) {
  font-size: 16px;
  color: grey;
}

.other-info span {
  position: absolute;
  bottom: 0;
}

.other-info span:nth-child(3) {
  color: #ff5777;
}

.other-info span:nth-child(4) {
  right: 0;
}
</style>
