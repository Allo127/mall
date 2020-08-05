import axios from '../http.js'

const proList = {
	// 综合
	async getProList() {
		return await axios
			.get('mall/goodsinfo/')
	},
	async getProListByPri() {
		return await axios
			.get('mall/goodsinfobyprice/')
	},
	async getProListByNum() {
		return await axios
			.get('mall/goodsinfobyselling/')
	},
	// 按分类查询
	async getProListC(id) {
		var data = JSON.stringify({
			goods_category_id: id
		})
		return await axios
			.post('mall/goodsinfoc/', data)
	},
	async getProListByPriC(id) {
		var data = JSON.stringify({
			goods_category_id: id
		})
		return await axios
			.post("mall/goodsinfocbyprice/", data)
	},
	async getProListByNumC(id) {
		var data = JSON.stringify({
			goods_category_id: id
		})
		return await axios.post("/mall/goodsinfocbyselling/", data)
	},
	async getTopic() {
		return await axios
			.get('mall/goodstheme/')
	},
	async getOneTopic(id) {
		var data = JSON.stringify({
			theme_id: id
		})
		return await axios
			.get('mall/goodstheme/', data)
	}
}
export default proList
