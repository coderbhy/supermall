<template>
  <div id="home-page">
    <home-nav-bar class="home-nav-bar"></home-nav-bar>
    <swiper :banners="banners"></swiper>
    <home-recommend :recommend-lists="recommendLists"></home-recommend>
    <home-feature></home-feature>
    <tab-control
      :menu="menu"
      class="home-tab-control"
      @change-tab-bar="changeCurrentType"
    />
    <goods-list
      ref="goods-list"
      class="home-goods-list"
      @scroll.native="scroll"
    >
      <goods-list-item
        v-for="item in goods[currentType].list"
        :key="item.iid"
        :goods-obj="item"
      ></goods-list-item>
    </goods-list>
    <back-top @click.native="backTop" />
  </div>
</template>

<script>
import Swiper from 'components/content/swiper/Swiper';
import TabControl from 'components/common/tabControl/TabControl';
import { GoodsList, GoodsListItem } from 'components/content/goods';
import BackTop from 'components/content/backTop/BackTop'

import HomeNavBar from './childComps/HomeNavBar.vue';
import HomeRecommend from './childComps/HomeRecommend';
import HomeFeature from './childComps/HomeFeature.vue';

import { getMultiData, getGoodsData } from 'network/home';
import { scrollAnimation } from 'service/utils'

export default {
  data () {
    return {
      banners: [],
      recommendLists: [],
      menu: [{
        type: 'pop',
        title: '流行'
      }, {
        type: 'new',
        title: '新款'
      }, {
        type: 'sell',
        title: '精选'
      }],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',

      isLoading: false
    }
  },
  methods: {
    getMultiData () {
      getMultiData()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommendLists = res.data.recommend.list;
          // console.log(res);
        })
    },
    getGoodsData (type) {
      getGoodsData(type, ++this.goods[type].page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
        })
    },
    changeCurrentType (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    scroll (e) {
      const scrollHeight = this.$refs['goods-list'].$el.scrollHeight;
      if (e.target.scrollTop + e.srcElement.offsetHeight > scrollHeight - 10) {
        if (!this.isLoading) {
          // console.log('加载中...');
          this.isLoading = true;
          new Promise((resolve) => {
            resolve(this.getGoodsData(this.currentType));
          })
            .then(res => {
              this.isLoading = false;
              // console.log('加载完成');
            })
        }
      }
    },
    backTop () {
      scrollAnimation(0);
    }
  },
  components: {
    Swiper,
    TabControl,
    GoodsList,
    GoodsListItem,
    BackTop,

    HomeNavBar,
    HomeRecommend,
    HomeFeature
  },
  created () {
    this.getMultiData();
    this.getGoodsData('new');
    this.getGoodsData('pop');
    this.getGoodsData('sell');
  }
}
</script>

<style scoped>
.home-nav-bar {
  z-index: 100;
}

.home-tab-control {
  position: sticky;
  top: 44px;
  z-index: 100;
  background: white;
  box-shadow: 0 1px 0 0 rgba(100, 100, 100, 0.1);
}

.home-goods-list {
  height: calc(100vh - 44px - 44px - 46px);
  overflow: hidden;
  overflow-y: scroll;
}
</style>
