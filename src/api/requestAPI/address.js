import axios from '../http.js'

const address = {
	// 获取所有地址
	async addressList(id) {
		var data = JSON.stringify({
			user_id: id
		})
		return await axios
			.post('/address/addressList/', data)
	},
	//编辑地址信息
	editAddress(item) {
		return axios.post('/address/editAddress/', item)
	},
	//删除地址
	delAddress(id) {
		var data = JSON.stringify({
			address_id: id
		})
		return axios.post('/address/delAddress/', data)
	},
	// //更改默认地址
	// changeBase(id) {
	// 	return axios.post('/address/defAddress?id=' + id)
	// },
	//添加地址
	addAddress(item) {
		return axios.post('/address/addAddress/', item)
	},
	//获取默认地址
	async defaultAddress(id) {
		var data = JSON.stringify({
			user_id: id
		})
		return await axios
			.post('/address/defaddressList/', data)
	}
}
export default address
