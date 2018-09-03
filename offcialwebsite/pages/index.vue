<template>
  <div>
    <uy-swiper :banners='sliders'></uy-swiper>
    <div class="main-content">
      <div class="lists">
        <list-item v-for="(item,index) in listItem" :key="'item'+index" :item="item"></list-item>
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
  import axois from 'axios'
  export default {
    components: {
      'uy-swiper': swiper,
      'list-item': list
    },
    data() {
      return {
        lists: [],
        listItem: [{
          img: {
            url: 'http://uploads.5068.com/allimg/171116/1-1G116111U3.jpg',
            alt: '111'
          },
          title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        },
        {
          img: {
            url: 'http://uploads.5068.com/allimg/171116/1-1G116111U3.jpg',
            alt: '111'
          },
          title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        },
        {
          img: {
            url: 'http://uploads.5068.com/allimg/171116/1-1G116111U3.jpg',
            alt: '111'
          },
          title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        },
        {
          img: {
            url: 'http://uploads.5068.com/allimg/171116/1-1G116111U3.jpg',
            alt: '111'
          },
          title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        }],
        sliders: [{
          url: 'http://uploads.5068.com/allimg/151027/57-15102G45304-52.jpg',
          alt: '海贼王'
        }, {
          url: 'http://uploads.5068.com/allimg/151027/57-15102G45304-52.jpg',
          alt: '海贼王'
        },
        {
          url: 'http://uploads.5068.com/allimg/151027/57-15102G45304-52.jpg',
          alt: '海贼王'
        }],
      }
    },
    async asyncData({ store, error }) {
      // let [ res ] = await Promise.all([
      //   store.dispatch('getList')
      // ])
      // console.log('res00---', res)
      // return {
      //   lists: res
      // }
    }
  }
</script>