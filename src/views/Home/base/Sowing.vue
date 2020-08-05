<template>
  <div class="swiper-wrapper">
    <van-swipe :autoplay="3000" indicator-color="#f60">
      <van-swipe-item v-for="(image, index) in sowing_list" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
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
    created() {
      // this.$api.homeData.banner().then(({ data: { banner } }) => {
      //   this.images = banner;
      // });
    },
    mounted() {
      console.log(this.sowing_list)
    }
  }
</script>
<style lang="scss" scoped>
  .swiper-wrapper {
    img {
      width: 100%;
    }
  }
</style>
