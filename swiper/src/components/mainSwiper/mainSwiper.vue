<!--  -->
<template>
  <swiper>
    <swiper-item v-for="item in imgs" :key="item.id">
      <img :src="item" alt="" @load="imageLoad">
    </swiper-item>
    <!-- <swiper-item>
      <img src="@/assets/img/swiper1.jpg" alt="">
    </swiper-item> -->
  </swiper>
</template>

<script>
import Swiper from '../swiper/Swiper';
import SwiperItem from '../swiper/SwiperItem';
export default {
  name: "mainSwiper",
  data() {
    return {
      isLoad:false,
      imgs: [
        require('@/assets/img/swiper1.jpg'),
        require('@/assets/img/swiper2.jpg'),
        require('@/assets/img/swiper3.jpg')
      ]
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>
<style>
</style>