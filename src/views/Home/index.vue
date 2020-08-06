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
    <spike></spike>
    这是首页1{{showBgColor}}{{_uid}}
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
    data() {
      return {
        showBgColor: false,
        sowing_list: [], // 首页轮播图数据
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
      }
    },
    mounted() {
      //获取轮播图的数数据
      this.$api.homeData.banner().then(
      (
        data
      ) => {
        this.sowing_list = data.data
        console.log(this.sowing_list)
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
