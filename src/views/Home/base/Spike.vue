<template>
  <div class="spike">
    <!-- 秒杀倒计时 -->
    <van-row type="flex" justify="space-between">
      <van-col class="title">
        <van-icon name="clock" color="#ff5500" />
        <span>限时秒杀</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="time-item">{{ timeData.hours }}</span>:
            <span class="time-item">{{ timeData.minutes }}</span>:
            <span class="time-item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-col>
      <van-col class="more" @click="()=>{this.$router.push('/spike')}">
        <span>查看更多</span>
        <van-icon name="arrow" />
      </van-col>
    </van-row>
    <!-- 秒杀商品 -->
    <van-row class="spike-goods" type="flex" justify="space-between">
      <van-col class="spike-goods-item" @click="goDetail(item.goods_id)" v-for="(item,index) in goods" :key="index">
        <van-image width="3rem" fit="contain" lazy-load radius="5px" :src="rootUrl + item.goods_carousel" />
        <div class="van-multi-ellipsis--l2">{{item.goods_name}}</div>
        <div class="price">
          <span>￥{{item.selling_price}}</span>
          <s>￥{{item.original_price}}</s>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    props: {
      // 接受父组件传过来的数据
      goods: Array
    },
    mounted() {
    },
    data() {
      return {
        time: 30 * 60 * 60 * 1000
      }
    },
    computed: {
      ...mapState(['rootUrl'])
    },
    methods: {
      goDetail(id) {
        this.$router.push({
          name: 'proD',
          params: {
            pid: id
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .spike {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;

      .van-icon {
        font-size: 18px;
        margin-right: 5px;
      }

      span {
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
      }

      .time-item {
        display: inline-block;
        width: 20px;
        border-radius: 3px;
        margin-right: 3px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #ff5500;
      }
    }

    .more {
      color: #bbb;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
    }

    .spike-goods {
      overflow-x: auto;

      .spike-goods-item {
        padding: 10px 0;
        margin-right: 7px;
        width: 50%;

        img {
          border-radius: 5px;
        }

        .price {
          margin-top: 5px;
          display: flex;
          justify-content: space-between;

          span {
            font-size: 14px;
            color: #ff5500;
          }

          s {
            color: #bbb;
          }
        }
      }
    }
  }
</style>
