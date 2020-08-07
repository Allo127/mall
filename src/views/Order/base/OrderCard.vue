<template>
  <div class="order-card">
    <van-panel :title="'订单号' + item.order_no" :status="item.pay_status === 5 ? '已完成': item.pay_status === 1 ? '待付款' : item.pay_status === 2 ? '待发货':item.pay_status === 3 ? '待收货' :item.pay_status === 4 ? '待评价' : '售后' "
      class="m-b-10 b-r-10" v-for="(item,index) in orderList" :key="index">
      <div class="content">
        <van-card class="bg-white" :num="good.goods_count" :price="good.selling_price" desc="黑色" :title="good.goods_name"
          :thumb="rootUrl + good.goods_cover_img" v-for="(good,index) in item.goodsList" :key="index" />
      </div>
      <div slot="footer" class="footer">
        <div class="info">
          <div class="total">共{{item.goodsList.length}}件商品合计：￥{{item.total_price}}</div>
          <div class="btn">
            <van-button plain size="mini" round>查看发票</van-button>
            <van-button plain size="mini" round type="danger">评价晒单</van-button>
            <van-button plain size="mini" round type="danger">再次购买</van-button>
          </div>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapState(['rootUrl']),
      ...mapGetters(['orderList'])
    }
  }
</script>

<style lang="scss" scoped>
  .order-card {
    padding: 10px;

    .content {
      background-color: #ffffff;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .info {
        .total {
          margin-bottom: 10px;
          text-align: right;
        }
      }
    }
  }
</style>
