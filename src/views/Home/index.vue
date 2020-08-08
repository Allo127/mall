<template>
  <div class="home">
    <div class="head">
      <!-- 搜索栏 -->
      <searchbar :showBgColor="showBgColor" @changeshowBgColor='changeshowBgColor($event)'></searchbar>
      <!-- <searchbar :showBgColor="showBgColor"></searchbar> -->
      <!-- 轮播图 -->
      <div class="swiper-wrapper-w">
        <sowing :sowing_list="sowing_list"></sowing>
      </div>
    </div>
    <!-- 图标导航 -->
    <iconnav :icons="icons"></iconnav>
    <!-- 秒杀 -->
    <spike :goods="spike_product_list"></spike>
    <!-- 人气推荐 -->
    <popular :goods="popular_product_list"></popular>
    <!-- 优选推荐 -->
    <wellgoods :goods="well_product_list"></wellgoods>
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import searchbar from '../../components/SearchBar.vue'
  import sowing from './base/Sowing.vue'
  import iconnav from './base/IconNav.vue'
  import Spike from "./base/Spike"
  import popular from "./base/Popular.vue"
  import wellgoods from "./base/WellGoods.vue"
  // import {
  //   mapState
  // } from 'vuex'

  export default {
    computed: {},
    data() {
      return {
        showBgColor: false,
        sowing_list: [], // 首页轮播图数据
        spike_product_list: [], // 限时抢购
        popular_product_list: [], //人气推荐
        well_product_list: [], //优选推荐
        specialZone: {}, // 特色专区数据
        home_ad: '', // 首页广告
        icons: [{
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50",
            url: '/spike'
          }, {
            name: '人气推荐',
            iconUrl: "http://t00img.yangkeduo.com/goods/images/2019-04-12/80f3af132fae04453792464bb837ca02.png?imageMogr2/format/webp/quality/50",
            url: '/topPro'
          }, {
            name: '优选推荐',
            iconUrl: "http://t00img.yangkeduo.com/goods/images/2018-08-29/119a4937b493cc0fcc968a4545657922.png?imageMogr2/format/webp/quality/50",
            url: '/goodTopic'
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          },
          {
            name: '敬请期待',
            iconUrl: "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50",
            url: ''
          }
        ] //首页图标导航
      }
    },
    components: {
      searchbar,
      menubar,
      sowing,
      iconnav,
      Spike,
      popular,
      wellgoods
    },
    methods: {
      changeshowBgColor(val) {
        this.showBgColor = val
      }
    },
    mounted() {
      //获取轮播图的数数据
      this.$api.homeData.banner().then(
        (
          data
        ) => {
          this.sowing_list = data.data
          // console.log(this.sowing_list)
        })
      //获取活动的产品
      this.$api.homeData.activeGoods().then(
        (
          data
        ) => {
          console.log(data)
          this.spike_product_list = data.data[0].child
          this.popular_product_list = data.data[1].child
          this.well_product_list = data.data[2].child
          console.log(this.popular_product_list)
        })
    }
  }
</script>

<style>
  .swiper-wrapper-w {
    width: 95%;
    margin: auto;
    height: 170px;
    border-radius: 5px;
    overflow: hidden;
  }

  .home {
    padding-bottom: 30px;
  }

  .head {
    width: 100%;
    padding-bottom: 10px;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
</style>
