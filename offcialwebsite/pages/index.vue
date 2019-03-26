<template>
  <div>
    <uy-swiper :banners='sliders'></uy-swiper>
    <div class="main-content">
      <div class="lists">
        <list-item v-for="(item,index) in listItem" :key="item.id+index" :item="item"></list-item>
      </div>
      <div class="ad">
        <div class="ad-item" v-for="i in 4" :key="i"></div>
      </div>
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
  import swiper from '~/components/swiper.vue'
  import list from '~/components/list.vue'
  export default {
    components: {
      'uy-swiper': swiper,
      'list-item': list
    },
    data() {
      return {
        lists: [],
        listItem: [],
        sliders: [],
      }
    },
    async mounted() {
      const list = await this.$store.dispatch('getList')
      const slider = await this.$store.dispatch('getSliders')
      console.log('÷data-----', slider)
      this.listItem = list.data
      this.sliders = slider.data
    }
    // async asyncData({ store, error }) {
      //   let data = await store.dispatch('getList')
    //   return {
    //     lists: data
    //   }
    // }
  }
</script>