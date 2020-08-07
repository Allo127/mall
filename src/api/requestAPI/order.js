import axios from '../http.js'

const order = {
	// 提交订单
	async subimitOrder(list) {
    var data = JSON.stringify({
        user_id: parseInt(localStorage.getItem('userId')),
        cart_item_id: list
    })
		return await axios
			.post('/cart/addorder/',data)
	},
  //改变订单状态
  async changeOrderStatue(id,status) {
    var data = JSON.stringify({
        order_no: id,
        pay_status: status
    })
  	return await axios
  		.post('/cart/editorderstatus/',data)
  }
}
export default order
