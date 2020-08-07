import {
  ADDRESS_LIST,
  ADDRESS_INFO,
  EDIT_ADDRESS_INFO,
  DELELETE_ADDRESS,
  SAVE_CHANGE_DETAIL,
  CHOOSE_ADDRESS,
  SET_CONFIRM_ORDER_INFO
} from "./types"
import axios from '../api/http.js'

export default {
  // 收货人列表
  addressList({
    commit
  }, data) {
    commit(ADDRESS_LIST, data)
  },
  // 收货人信息
  addressInfo({
    commit
  }, addressInfo) {
    commit(ADDRESS_INFO, addressInfo)
  },
  // 编辑收货人信息
  editAddressInfo({
    commit
  }, item) {
    commit(EDIT_ADDRESS_INFO, item)
  },
  // 删除联系人地址
  deleteAddress({
    commit
  }, editIdex) {
    commit(DELELETE_ADDRESS, editIdex)
  },
  //修改联系人地址
  saveChangeDetail({
    commit
  }, item) {
    commit(SAVE_CHANGE_DETAIL, item)
  },
  // 选择的地址
  chooseAddress({
    commit
  }, item) {
    commit(CHOOSE_ADDRESS, item)
  },
  // 订单数据
  order({
    commit
  }, item) {
    commit(SET_CONFIRM_ORDER_INFO, item)
  },
  //获得个人所有订单数据
  async getOrderlist(context, id) {
    var data = JSON.stringify({
      user_id: id
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
