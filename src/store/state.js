export default {
	//分类数据
	catagoryData: JSON.parse(localStorage.getItem('catagoryData')) || [],
	//商品优惠卷列表显隐
	isShowCoupon: false,
	// 收货人地址列表
	addressList: JSON.parse(localStorage.getItem('addressList')) || [],
	// 编辑收货人信息
	editAddressInfo: JSON.parse(localStorage.getItem('editAddressInfo')) || [],
	// addressInfo: localStorage.setItem('addressInfo', JSON.stringify(addressInfo))
	bannerImages: JSON.parse(localStorage.getItem('bannerImages')) || [
		'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
		'http://picasso.alicdn.com/imgextra/i3/357713/O1CNA1RtCyMq100e8223db2c0b1b2e8a000l_!!357713-0-picassobanner.jpg',
		'http://gw.alicdn.com/imgextra/i1/174/O1CN01D1yNiN1D9jWqw3xQ4_!!174-0-lubanu.jpg',
		'http://gw.alicdn.com/imgextra/i4/47/O1CN01mw51IB1CDZEJkAQMu_!!47-0-lubanu.jpg'
	]
}
