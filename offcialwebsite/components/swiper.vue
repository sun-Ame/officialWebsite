<template>
  <div class="uyswiper" v-swiper:mySwiper="swiperOption" @slideChange="callback">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :style="{backgroundImage: 'url('+ banner.url +')'}" v-for="(banner,index) in banners" :key="index">
        <!-- <img :src="banner.url" :alt="banner.alt"> -->
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.component('uyswiper', {
  props: {
    banners: {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      // slides: banners,
      swiperOption: {
        initialSlide: 0,
        direction: 'horizontal',
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    callback(e) {
      console.log('ee-----', e)
    }
  }
})
</script>