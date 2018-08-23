<template>
  <div>
    <uy-swiper :banners='sliders'></uy-swiper>
  </div>
</template>

<script>
import swiper from '~/components/swiper.vue'

export default {
  components: {
      'uy-swiper': swiper
  },
  data(){
    return {
      sliders:[{
        url:'http://uploads.5068.com/allimg/171116/1-1G116111U3.jpg',
        alt:'海贼王'
      },{
        url:'http://static.oneplus.cn/data/attachment/forum/201704/15/122635k2dge172109hq11q.jpg',
        alt:'海贼王'
      },
      {
        url:'http://uploads.5068.com/allimg/151027/57-15102G45304-52.jpg',
        alt:'海贼王'
      }]
    }
  }
}
</script>

