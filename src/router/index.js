import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue' // 首页
import Category from '../views/Category/index.vue' //分类
import Cart from '../views/Cart/cart.vue' // 购物车
import Me from '../views/Me/index.vue' // 我的界面
import Address from '../views/address/Address.vue' // 所有地址
import AddressAdd from '../views/address/AddressAdd.vue' // 添加地址
import AddressEdit from '../views/address/AddressEdit.vue' // 编辑地址
import server from '../views/SystemSet/server.vue' // 服务中心
import quesInfo from '../views/SystemSet/quesInfo.vue' // 常见问题
import proList from '../views/proList/index.vue' // 点击某个具体分类的界面
import aboutUs from '../views/SystemSet/aboutUs.vue' // 关于我们
import version from '../views/SystemSet/version.vue' // 版本介绍
import advice from '../views/SystemSet/pushAdvice.vue' // 问题反馈
import Search from '../views/Search/Search.vue' // 搜索
import searchWin from '../views/proList/searchWin.vue' //搜索结果界面
import topPro from '../views/proList/topWelPro.vue' // 人气推荐
import goodTopic from '../views/proList/goodTopic.vue' // 所有主题界面
import Topic from '../views/proList/topic.vue' // 某一个具体的主题界面
import proD from '../views/Detail/goodsDetail.vue' // 商品详情
import Order from '../views/Order/Order.vue' // 我的订单列表
import Set from '../views/Set/Set.vue' // 设置
import submitOrder from '../views/Order/base/SubmitOrder.vue' // 提交订单
import orderPay from '../views/Order/base/OrderPay.vue' // 支付订单
import paySuccess from '../views/Order/base/PaySuccess.vue' // 支付成功
import Login from '../views/Login/Login.vue' // 登录
import Register from '../views/Login/Register.vue' // 注册
import Spike from '../views/Spike/Spike.vue' //秒杀详情界面
import myInfo from '../views/Me/myInfo.vue'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Me',
    name: 'Me',
    component: Me
  },
  {
    path: '/Address',
    name: 'Address',
    component: Address
  },
  {
    path: '/AddressAdd',
    name: 'AddressAdd',
    component: AddressAdd
  },
  {
    path: '/AddressEdit',
    name: 'AddressEdit',
    component: AddressEdit
  },
  {
    path: '/server',
    name: 'server',
    component: server
  },
  {
    path: '/quesInfo',
    name: 'quesInfo',
    component: quesInfo
  },
  {
    path: '/proList',
    name: 'proList',
    component: proList
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: aboutUs
  },
  {
    path: '/version',
    name: 'version',
    component: version
  },
  {
    path: '/advice',
    name: 'advice',
    component: advice
  },
  {
    path: '/topPro',
    name: 'topPro',
    component: topPro
  },
  {
    path: '/goodTopic',
    name: 'goodTopic',
    component: goodTopic
  },
  {
    path: '/Topic',
    name: 'Topic',
    component: Topic
  },
  {
    path: '/proD',
    name: 'proD',
    component: proD
  },
  {
    path: "/Order",
    name: "Order",
    component: Order,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/Login")
    }
  },
  {
    path: "/Set",
    name: "Set",
    component: Set,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/Login")
    }
  },
  {
    path: "/submitOrder",
    name: "submitOrder",
    component: submitOrder
  },
  {
    path: "/orderPay",
    name: "orderPay",
    component: orderPay
  },
  {
    path: "/paySuccess",
    name: "paySuccess",
    component: paySuccess
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/searchWin/:Searchvalue",
    name: "searchWin",
    component: searchWin
  },
  {
    path: "/spike",
    name: "Spike",
    component: Spike
  },
  {
    path: "/myInfo",
    name: "myInfo",
    component: myInfo
    // beforeRouteLeave: (to, from, next) => {
    //   this.$api.user.updataUserInfo(this.userId, this.userIntroduce, this.userPwd, this.userName, this.userSex,
    //     this.userBirthday).then((data) => {
    //     console.log(data)
    //   })
    //   this.$toast('修改成功')
    // }
  }
]
const router = new VueRouter({
  routes
})

export default router
