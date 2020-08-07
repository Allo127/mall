import axios from '../api/http.js'
export default {
  async getOrderlist(context, id) {
    var data = JSON.stringify({
      user_id: 1
    })
    await axios
      .post('/cart/orderbyuid/', data).then(({
        data
      }) => {
        // val = data
        var orderInfo = []
        data.forEach((item) => {
          console.log(item)
          var orderItem = {}
          orderItem.total_price = item.total_price
          orderItem.order_no = item.order_no
          orderItem.pay_status = item.pay_status
          orderItem.goodsList = []
          item.order_info.forEach((good) => {
            var goodItem = {}
            goodItem.goods_id = good.goods_id
            goodItem.goods_count = good.goods_count
            goodItem.goods_name = good.goods_info[0].goods_name
            goodItem.selling_price = good.goods_info[0].selling_price
            goodItem.goods_cover_img = good.goods_info[0].goods_cover_img
            orderItem.goodsList.push(goodItem)
          })
          orderInfo.push(orderItem)
        })
        // console.log(orderInfo)
        context.commit('SET_USER_ORDER_LIST', orderInfo)
      })
  }
}
