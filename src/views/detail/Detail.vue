<template>
  <div id="detail-page">
    <detail-nav-bar
      @scroll-to-title="scrollTo"
      ref="detail-nav-bar"
    />
    <swiper
      :banners="banners"
      class="detail-swiper"
    />
    <detail-base-info
      :base-info="baseInfo"
      :columns="columns"
    />
    <detail-dress :dressing="dressing" />
    <detail-params
      :goods-params="goodsParams"
      ref="detail-params"
    />
    <detail-comments
      :user-info="userInfo"
      ref="detail-comments"
    />
    <detail-recommend
      :recommend-list="recommendList"
      ref="detail-recommend"
    />
    <detail-bottom-bar @add-to-cart="addToCart" />
  </div>
</template>

<script>
import Swiper from 'components/content/swiper/Swiper'

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailDress from './childComps/DetailDress.vue';
import DetailParams from './childComps/DetailParams.vue';
import DetailComments from './childComps/DetailComments.vue';
import DetailRecommend from './childComps/DetailRecommend.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';

import { getGoodsDetail, getRecommendGoods } from 'network/detail';

import { scrollAnimation } from 'service/utils';

export default {
  data () {
    return {
      banners: [],
      baseInfo: {},
      columns: [],
      dressing: [],
      goodsParams: {},
      userInfo: [],
      recommendList: [],

      menuY: [0, 0, 0, 0],
      menuYisLoad: false
    }
  },
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailDress,
    DetailParams,
    DetailComments,
    DetailRecommend,
    DetailBottomBar,

    Swiper
  },
  created () {
    getGoodsDetail(this.$route.params.iid)
      .then(res => {
        // console.log(res);
        this.banners = res.result.itemInfo.topImages;
        this.baseInfo = res.result.itemInfo;
        this.columns = res.result.columns;
        this.dressing = res.result.detailInfo.detailImage[0].list;
        this.goodsParams = {
          set: res.result.itemParams.info.set,
          tables: res.result.itemParams.rule.tables
        };
        this.userInfo = res.result.rate.list;
      })
    getRecommendGoods()
      .then(res => {
        // console.log(res);
        this.recommendList = res.data.list;
      })
  },
  mounted () {
    let calcMenuY = this.debounce(this.itemImgLoad, 500);
    this.$bus.$on('itemImgLoad', calcMenuY);

    document.addEventListener('scroll', (e) => {
      this.onScroll(e);
    })
  },
  methods: {
    debounce (fn, delay) {
      let timer = null;
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn.call(this);
        }, delay);
      }
    },
    itemImgLoad () {
      this.menuYisLoad = true;
      this.menuY[1] = this.$refs['detail-params'].$el.offsetTop - 44;
      this.menuY[2] = this.$refs['detail-comments'].$el.offsetTop - 44;
      this.menuY[3] = this.$refs['detail-recommend'].$el.offsetTop - 44;
    },
    scrollTo (index) {
      scrollAnimation(this.menuY[index]);
    },
    onScroll (e) {
      if (this.menuYisLoad) {
        let scrollDistance = +e.target.defaultView.scrollY;
        for (let i = 0; i < this.menuY.length - 1; i++) {
          if (scrollDistance >= this.menuY[i] && scrollDistance <= this.menuY[i + 1]) {
            this.$refs['detail-nav-bar'] && (this.$refs['detail-nav-bar'].currentIndex = i);
          }
        }
        if (scrollDistance >= this.menuY[this.menuY.length - 1]) {
          this.$refs['detail-nav-bar'] && (this.$refs['detail-nav-bar'].currentIndex = this.menuY.length - 1);
        }
      }
    },
    addToCart () {
      let obj = {};
      obj.iid = this.baseInfo.iid;
      obj.title = this.baseInfo.title;
      obj.desc = this.baseInfo.desc;
      obj.price = this.baseInfo.lowNowPrice;
      obj.img = this.baseInfo.topImages[0];
      this.$set(obj, 'isChose', false);
      // console.log(obj);
      this.$store.commit('addGoodsToCart', obj);
    }
  },
  beforeDestroy () {
    this.$bus.$off('itemImgLoad');
  }
}
</script>

<style scoped>
.detail-swiper {
  padding-bottom: 75%;
}
</style>
