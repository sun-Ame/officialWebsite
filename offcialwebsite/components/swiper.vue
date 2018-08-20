<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default Vue.component('swiper', {
        data() {
            return {
                swiperOption: {

                }
            }
        },
        methods: {
        }
    })
</script>