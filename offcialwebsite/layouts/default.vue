<template>
  <div class="uy-root">
    <uy-header></uy-header>
    <nuxt/>
  </div>
</template>
<script>
  import header from '~/components/header.vue'
  export default {
    components: {
      'uy-header': header
    }
  }
</script>
<style>
html,body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
</style>

