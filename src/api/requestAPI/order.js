import axios from '../http.js'

const order = {
	// 首页banner
	async subimitOrder(list) {
    var data = JSON.stringify({
        user_id: parseInt(localStorage.getItem('userId')),
        cart_item_id: list
    })
		return await axios
			.post('/cart/addorder/',data)
	}
}
export default order
