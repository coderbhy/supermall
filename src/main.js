import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper';

import { router } from './router';
import { store } from './store';

import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue({});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
