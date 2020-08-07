import axios from '../http.js'
// 搜索结果查询
const search = {
	async searchWin(name) {
		var data = JSON.stringify({
			goods_name: name
		})
		return await axios.post('/mall/goodsinfobyname/', data)
		// .get('/goods/goodsList')
	}
}
export default search
