<template>
  <div class="home">
    <div class="head">
      <!-- 搜索栏 -->
      <searchbar :showBgColor="true" @changeshowBgColor='changeshowBgColor($event)'></searchbar>
      <!-- 轮播图 -->
      <div class="swiper-wrapper-w">
        <sowing :sowing_list="sowing_list"></sowing>
      </div>
    </div>
    <!-- 图标导航 -->
    <iconnav :icons="icons"></iconnav>
    <!-- 秒杀 -->
    <spike></spike>
<!--    这是首页1{{this.showBgColor}} -->
    <!-- 人气推荐 -->
    <popular></popular>
    <!-- 优选推荐 -->
    <wellgoods></wellgoods>
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
    mounted: { // 创建完成时是
    },
    data() {
      return {
        showBgColor: false,
        sowing_list: [
          'http://picasso.alicdn.com/imgextra/i3/357713/O1CNA1RtCyMq100e8223db2c0b1b2e8a000l_!!357713-0-picassobanner.jpg',
          'http://gw.alicdn.com/imgextra/i1/174/O1CN01D1yNiN1D9jWqw3xQ4_!!174-0-lubanu.jpg',
          'http://gw.alicdn.com/imgextra/i4/47/O1CN01mw51IB1CDZEJkAQMu_!!47-0-lubanu.jpg'
        ], // 首页轮播图数据
        flash_sale_product_list: [], // 限时抢购
        tabbar_all_product_list: [],
        specialZone: {}, // 特色专区数据
        home_ad: '', // 首页广告
        icons: [{
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          }, {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
          },
          {
            name: '限时秒杀',
            iconUrl: "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
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
        // console.log('changeshowBgColor' + this.showBgColor)
      }
    }
  }
</script>

<style>
  .swiper-wrapper-w {
    width: 95%;
    margin: auto;
    height: 140px;
    margin-bottom: 5px;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .home{
    padding-bottom: 30px;
  }
  .head {
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
</style>
