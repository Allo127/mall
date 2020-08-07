export default {
	// 编辑收货人信息
	editAddressInfo: {},
	//分类数据
	catagoryData: JSON.parse(localStorage.getItem('catagoryData')) || [],
	//商品展示
	proList: JSON.parse(localStorage.getItem('proList')) || [],
	proListByNum: JSON.parse(localStorage.getItem('proListByNum')) || [],
	proListByPri: JSON.parse(localStorage.getItem('proListByPri')) || [],
	activeList: [],
	viewKey: 0,
	proListC: JSON.parse(localStorage.getItem('proListC')) || [],
	proListByNumC: JSON.parse(localStorage.getItem('proListByNumC')) || [],
	proListByPriC: JSON.parse(localStorage.getItem('proListByPriC')) || [],
	//商品优惠卷列表显隐
	isShowCoupon: false,
	//订单数据
	order: [],
	// 收货人地址列表
	addressList: JSON.parse(localStorage.getItem('addressList')) || [],
	// addressInfo: JSON.parse(localStorage.getItem('addressInfo')) || [],
	chooseAddress: JSON.parse(localStorage.getItem('chooseAddress')) || [],
	rootUrl: 'http://39.102.38.113:8088/'
}
