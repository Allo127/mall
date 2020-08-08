<template>
  <div >
    <van-sticky>
      <van-nav-bar ref="navbar" title="限时秒杀" left-arrow @click-left="back" />
    </van-sticky>
    <img src="../../images/home/banner2.jpg" />
    <div class="popular">
      <!-- 标题 -->
      <van-row type="flex" justify="space-between">
      </van-row>
      <!-- 热门商品 -->
      <div class="hot-goods">
        <van-row v-for="(item,index) in goods" :key="index" @click="goDetail(item.goods_id)" class="hot-goods-item m-b-10 bg-white">
          <van-col :span="8">
            <van-image lazy-load radius="3px" :src="rootUrl + item.goods_carousel" />
          </van-col>
          <!-- 抢购商品信息 -->
          <van-col :span="16" class="goods-info">
            <div class="van-ellipsis goods-title">{{item.goods_name}}</div>
            <!-- 标题下面内容部分 -->
            <van-row type="flex" justify="space-between" align="center">
              <van-col :span="14">
                <div class="price">
                  <span>￥{{item.selling_price}}</span>
                  <s>￥{{item.original_price}}</s>
                </div>
                <van-progress color="#f2826a" stroke-width="7" pivot-text :percentage="item.stock_num / item.selling_num * 100 >100 ? 100 : item.stock_num / item.selling_num * 100" />
                <div class="purchased">已抢购{{item.selling_num}}</div>
              </van-col>
              <van-col :span="10" class="buy-btn">
                <van-button round size="mini" color="#ff5500">立即抢购</van-button>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        goods: []
      }
    },
    computed: {
      ...mapState(['rootUrl'])
    },
    mounted() {
      this.$api.homeData.activeGoodsById(2).then((data) => {
        console.log(data)
        this.goods = data.data[0].child
      })
    },
    methods: {
      back() {
        this.$router.back()
      },
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
  img{
    width: 100%;
  }
  .popular {
    padding: 0 10px;

    .title {
      display: flex;
      align-items: center;

      span {
        font-size: 16px;
        font-weight: bold;
      }

      .van-icon {
        font-size: 18px;
        margin-right: 5px;
      }
    }

    .more {
      color: #bbb;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
    }

    .tips {
      color: #bbb;

      span {
        padding: 0 3px;
      }
    }

    .hot-goods {
      margin-top: 10px;

      .hot-goods-item {
        border-radius: 10px;

        .goods-info {
          padding: 8px;

          .goods-title {
            font-size: 14px;
            margin-bottom: 10px;
            color: #000;
          }

          .price {
            display: flex;
            align-items: center;

            span {
              font-size: 20px;
              color: #ff5500;
              margin-bottom: 5px;
              margin-right: 10px;
            }

            s {
              color: #bbb;
            }
          }

          .purchased {
            color: #bbb;
            margin-top: 5px;
          }

          .buy-btn {
            text-align: center;

            .van-button--mini {
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
</style>
