<template>
  <div id="app">
    <main-swiper></main-swiper>
    <router-view/>
  </div>
</template>

<script>
import mainSwiper from '@/components/mainSwiper/mainSwiper'
export default {
  components: {
    mainSwiper
  }
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
