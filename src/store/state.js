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
  // addressInfo: localStorage.setItem('addressInfo', JSON.stringify(addressInfo))
  rootUrl: 'http://39.102.38.113:8088/',
  // 登录状态
  isLogin: Boolean(localStorage.getItem('isLogin')) || false,
  // 用户相关信息
  userId: localStorage.getItem('userId') || '', // 用户id
  userName: localStorage.getItem('userName') || '', // 用户名
  userAccount: localStorage.getItem('userAccount') || '', // 用户账号
  userSex: localStorage.getItem('userSex') || '', // 用户性别
  userBirthday: localStorage.getItem('userBirthday') || '' ,//用户生日
  userIntroduce: localStorage.getItem('userIntroduce') || '' //用户签名
}
