import axios from '../http.js'
const catagoryData = {
	async cataData() {
		return await axios
			.get('/goods/goodsList')
	}
}
export defaul catagoryData
