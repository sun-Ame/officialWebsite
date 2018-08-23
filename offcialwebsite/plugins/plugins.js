import Vue from 'vue'
import element from 'element-ui'
import 'swiper/dist/css/swiper.css'
if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    Vue.use(VueAwesomeSwiper)
}
Vue.use(element)