import axios from '../http.js'

const cart = {
	// 获取购物车所有数据
	async cartList(id) {
		var data = JSON.stringify({
			user_id: id
		})
		return await axios
			.post('/cart/goodscartbyid/', data)
	},
	//添加编辑购物车
	addCart(uid, pid, num) {
		var data = JSON.stringify({
			user_id: uid,
			goods_id: pid,
			goods_count: num

		})
		return axios.post('/cart/addcart/', data)
	},
	//删除购物车某信息
	delCart(ids) {
		var data = JSON.stringify({
			cart_item_id: ids
		})
		return axios.post('/cart/delcart/', data)
	}
}
export default cart
