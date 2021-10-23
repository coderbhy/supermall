import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cartList: [
      // { count: 1, iid: '1m70y5k', title: '2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装', desc: '2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装', price: '59.00', img: '//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg' },
      // { count: 2, iid: '1m745k0', title: '2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮', desc: '你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮…助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~', price: '68.00', img: '//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg' }
    ]
  },
  mutations: {
    addGoodsToCart (state, goods) {
      let origin = state.cartList.find(item => {
        return item.iid == goods.iid;
      })
      if (origin) {
        origin.count++;
      } else {
        Vue.set(goods, 'count', 1);
        // goods.count = 1;
        state.cartList.push(goods);
      }
    },
    modifyGoodsStatus (state, iid) {
      let goods = state.cartList.find(item => {
        return item.iid == iid;
      })
      goods.isChose = !goods.isChose;
      // Vue.set(goods, 'isChose', !goods.isChose);
    },
    // 全选
    choseAllGoods (state, isChoseAll) {
      state.cartList.forEach(item => {
        // Vue.set(item, 'isChose', isChoseAll);
        item.isChose = isChoseAll;
      })
      console.log(state.cartList);
    }
  },
  getters: {
    goodsTotalNum (state) {
      return state.cartList.reduce((sum, current) => sum + current.count, 0);
    },
    // 结算的货物
    getChoseGoods (state) {
      return state.cartList.filter(item => {
        return item.isChose == true;
      })
    },
    // 结算的货物数量
    getChoseGoodsNum (state, getters) {
      return getters.getChoseGoods.reduce((sum, current) => sum + current.count, 0);
    },
    // 结算的总价格
    getChoseGoodsPrice (state, getters) {
      return getters.getChoseGoods.reduce((sum, current) => sum + +((current.price * current.count).toFixed(2)), 0)
    }
  }
})

export { store };
