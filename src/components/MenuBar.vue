<template>
  <van-tabbar v-model="active" router>
    <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/Category" icon="apps-o" dot>分类</van-tabbar-item>
    <van-tabbar-item replace to="/Cart" icon="shopping-cart-o" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/Me" icon="user-o" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>

  export default {
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style>
</style>
