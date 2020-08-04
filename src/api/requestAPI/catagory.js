import axios from '../http.js'
const catagoryData = {
	async cataData() {
		return await axios.get('/mall/goodscateory/')
			// .get('/goods/goodsList')
	}
}
export default catagoryData
