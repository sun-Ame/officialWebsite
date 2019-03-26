<template>
  <div class="list-item">
    <div class="img-content">
      <img :src="item.img.url" :alt="item.img.alt">
      <h2>{{ item.title }}</h2>
    </div>
    <p>{{ item.content }}</p>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.component("uylistitem", {
  props: {
    item: {
      type: Object,
      required: true,
      default: function() {
        return {
          id: 1,
          img: {
            url: "",
            alt: ""
          },
          title: "",
          content: ""
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
});
</script>