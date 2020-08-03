import axios from '../http.js'

const address = {
	// 获取所有地址
	async addressList() {
		return await axios
			.get('/address/addressList')
	},
	//编辑地址信息
	editAddress(item) {
		return axios.post('/address/editAddress', item)
	},
	//删除地址
	delAddress(id) {
		return axios.delete('/address/delAddress?address_id=' + id)
	},
	//更改默认地址
	changeBase(id) {
		return axios.post('/address/defAddress?id=' + id)
	},
	//添加地址
	addAddress(item) {
		return axios.post('/address/addAddress', item)
	}
}
export default address
