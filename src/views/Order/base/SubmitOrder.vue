<template>
  <div class="submit-order">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar title="提交订单" left-arrow @click-left="onClickLeft">
        <template slot="left">
          <van-icon name="arrow-left" size=".48rem" color="#000" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!-- 收货地址 -->
    <van-contact-card @click="onContactCard" :type="type" :name="chooseAddress.name" :tel="chooseAddress.tel"
      :add-text="chooseAddress.address" />
    <!-- 商品信息 -->
    <van-panel title="商品信息">
      <div>
        <van-card v-for="(item,index) in order" :key="index" :num="item.goods_count" :price="item.goods_info[0].selling_price"
          desc="绿色" :title="item.goods_info[0].goods_name" :thumb="rootUrl + item.goods_info[0].goods_cover_img" />
      </div>
    </van-panel>
    <!-- 商品cell -->
    <van-cell title="商品总价" value-class="text-color" :value="'￥' + totalPrice" size="large" />
    <!-- 优惠卷 -->
    <goods-coupon></goods-coupon>
    <!-- 发票 -->
    <van-cell title="发票" is-link value-class="text-color-red" value="不开发票" size="large" />
    <!-- 运费 -->
    <van-cell title="运送配" value-class="text-color" value="￥0.00" size="large" />
    <!-- 订单备注留言 -->
    <van-cell-group>
      <van-field v-model="message" rows="1" autosize label="订单备注" type="textarea" placeholder="请输入留言" />
    </van-cell-group>
    <!-- 确认支付 -->
    <van-submit-bar safe-area-inset-bottom :price="totalPrice * 100" :loading='loading' button-text="提交订单" @submit="onSubmitPay" />
  </div>
</template>

<script>
  import GoodsCoupon from "./GoodsCoupon"
  import {
    mapState
  } from "vuex"
  export default {
    components: {
      GoodsCoupon
    },
    data() {
      return {
        type: "edit",
        message: "", //下单留言信息
        loading: false
      }
    },
    mounted() {
      // 判断是否有地址
      Object.keys(this.chooseAddress).length ? this.type = "edit" : this.type = "add"
      console.log(this.order)
    },
    methods: {
      // 返回上一页
      onClickLeft() {
        this.$router.go(-1)
      },
      //获得购物车id列表
      getCartId() {
        var list = []
        this.order.forEach(item => {
          console.log(item)
          list.push(item.cart_item_id)
        })
        return list
      },
      // 提交支付订单
      onSubmitPay() {
        console.log("提交哦啊")
        this.loading = true
        this.$api.order.subimitOrder(this.getCartId())
        setTimeout(() => {
          this.$router.push("/orderPay")
        }, 1000)
      },
      // 点击联系人卡片
      onContactCard() {
        this.$router.push("/address")
      }
    },
    computed: {
      ...mapState(["chooseAddress", "order", 'rootUrl', 'totalPrice'])
    }
  }
</script>

<style lang="scss" scoped>
  .submit-order {
    padding-bottom: 50px;

    .text-color {
      color: #000;
    }

    .text-color-red {
      color: red;
    }
  }
</style>
