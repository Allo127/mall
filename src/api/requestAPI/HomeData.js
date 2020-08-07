import axios from '../http.js'

const homeData = {
	// 首页banner
	async banner() {
		return await axios
			.get('/mall/banner')
	},
	//首页活动商品
	async activeGoodsById(id) {
		var data = JSON.stringify({
			theme_id: id
		})
		return await axios
			.post('/mall/goodsactivitybyid/', data)
	},
  //不通过id查
  async activeGoods() {
		return await axios
			.get('/mall/goodsactivity')
	}
}
export default homeData
