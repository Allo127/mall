import {
	SET_BANNER_IMAGES,
	ADDRESS_LIST,
	ADDRESS_INFO,
	EDIT_ADDRESS_INFO,
	DELELETE_ADDRESS,
	SAVE_CHANGE_DETAIL,
	//分类数据
	CATAGOTY_DATA
} from './types.js'
export default {
	[SET_BANNER_IMAGES](state, images) {
		state.bannerImages = images
		localStorage.setItem('bannerImages', JSON.stringify(images))
	},
	[CATAGOTY_DATA](state, data) {
		state.catagoryData = data
		localStorage.setItem('catagoryData', JSON.stringify(data))
	},
	// 收货地址列表
	[ADDRESS_LIST](state, data) {
		state.addressList = data
		localStorage.setItem('addressList', JSON.stringify(data))
	},
	// 收货人信息
	[ADDRESS_INFO](state, addressInfo) {
		state.addressList.push(addressInfo)
	},
	// 编辑收货人信息
	[EDIT_ADDRESS_INFO](state, item) {
		state.editAddressInfo = item
	},
	// 删除联系人地址
	[DELELETE_ADDRESS](state, editIndex) {
		state.addressList.splice(editIndex, 1)
	},
	// 修改联系人地址
	[SAVE_CHANGE_DETAIL](state, item) {
		const editIndex = localStorage.getItem("editIndex")
		state.addressList.splice(editIndex, 1, item)
		console.log(editIndex)
	}
}
