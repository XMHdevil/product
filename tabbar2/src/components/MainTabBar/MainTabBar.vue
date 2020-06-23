<!--  -->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <img slot="item-icon" src="../../assets/img/home.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img slot="item-icon" src="../../assets/img/category.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="deepPink">
      <img slot="item-icon" src="../../assets/img/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="../../assets/img/profile.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../TabBar/TabBar"
import TabBarItem from "../TabBarItem/TabBarItem"
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
</style>