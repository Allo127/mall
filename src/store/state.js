export default {
	bannerImages: JSON.parse(localStorage.getItem('bannerImages')) || [],
	//商品优惠卷列表显隐
	isShowCoupon: false,
	// 收货人地址列表
	addressList: JSON.parse(localStorage.getItem('addressList')) || [],
	// 编辑收货人信息
	editAddressInfo: JSON.parse(localStorage.getItem('editAddressInfo')) || []
	// addressInfo: localStorage.setItem('addressInfo', JSON.stringify(addressInfo))
}
