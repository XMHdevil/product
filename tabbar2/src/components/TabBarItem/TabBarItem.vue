<!--  -->
<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    type: String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      //判断活跃中的路由是否包含该path，不等于-1时就为true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>
<style>
#tab-bar-item{
  margin-top: 3px;
  flex: 1;
  height: 49px;
  font-size: 14px;
}
#tab-bar-item img{
  width: 24px;
  height: 24px;
}

</style>