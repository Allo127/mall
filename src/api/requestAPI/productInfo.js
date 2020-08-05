import axios from '../http.js'
const productInfo = {
	async productInfo(id) {
		var data = JSON.stringify({
			goods_id: id
		})
		return await axios.post('/mall/goodinfo/', data)
	}
}
export default productInfo
