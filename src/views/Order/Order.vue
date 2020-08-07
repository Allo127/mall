<template>
  <div class="my-order">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar ref="navbar" title="我的订单" left-arrow @click-left="back" />
    </van-sticky>
    <!-- 订单tabs选项卡 -->
    <van-tabs v-model="active" animated :sticky="true" :offset-top="offsetTop" ellipsis swipeable lazy-render
      :swipe-threshold="6" @click="changeList">
      <!-- 全部订单 -->
      <van-tab title="全部">
        <order-card></order-card>
      </van-tab>
      <!-- 待付款订单 -->
      <van-tab title="待付款">
        <order-card></order-card>
      </van-tab>
      <van-tab title="待发货">
        <order-card></order-card>
      </van-tab>
      <van-tab title="待收货">
        <order-card></order-card>
      </van-tab>
      <van-tab title="待评价">
        <order-card></order-card>
      </van-tab>
      <van-tab title="售后">
        <order-card></order-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  import OrderCard from "./base/OrderCard"
  export default {
    mounted() {
      this.offsetTop = this.$refs.navbar.offsetHeight
      // 获取用户订单列表
      this.getOrderlist(parseInt(localStorage.getItem('userId')))
    },
    components: {
      OrderCard
    },
    data() {
      return {
        active: 0,
        offsetTop: null
      }
    },
    methods: {
      ...mapActions(['getOrderlist']),
      // 路由返回
      back() {
        this.$router.back()
      },
      changeList(tid, title) {
        console.log(tid)
        this.$store.commit('changeViewkey', tid)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-order {

    // 顶部导航左图标颜色
    .van-icon-arrow-left {
      color: #000;
    }
  }
</style>
