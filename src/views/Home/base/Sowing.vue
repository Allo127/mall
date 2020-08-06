<template>
  <div class="swiper-wrapper">
    <van-swipe :autoplay="3000" indicator-color="#f60">
      <van-swipe-item v-for="(image, index) in sowing_list" :key="index">
        <img v-lazy="rootUrl + image.carousel_url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    props: {
      // 接受父组件传过来的数据
      sowing_list: Array
    },
    data() {
      return {
        images: [] //banner 轮播图
      }
    },
    created() {},
    mounted() {},
    computed: {
      ...mapState(['rootUrl'])
    }
  }
</script>
<style lang="scss" scoped>
  .swiper-wrapper {
    img {
      width: 100%;
      height: 170px;
    }
  }
</style>
