<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions"
    class="wrapper"
  >
    <swiper-slide
      v-for="item in banners"
      :key="item.title"
    >
      <a :href="item.link">
        <img :src="item.image || item">
      </a>
    </swiper-slide>
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'bullets',
        paginationClickable: true,

        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        initialSlide: 1,
      }
    }
  }
}
</script>

<style>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 52%;
  position: relative;
  --swiper-pagination-color: rgb(255, 87, 119); /* 两种都可以 */
}

.swiper-pagination {
  position: absolute;
  left: 0;
  bottom: 5%;
  width: 100%;
  left: 0;
  text-align: center;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 5px;
}

.wrapper img {
  width: 100%;
}
</style>
