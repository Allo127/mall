import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Cart from '../views/Cart/cart.vue'
import Me from '../views/Me/index.vue'
import Address from '../views/address/Address.vue'
import AddressAdd from '../views/address/AddressAdd.vue'
import AddressEdit from '../views/address/AddressEdit.vue'
import server from '../views/SystemSet/server.vue'
import quesInfo from '../views/SystemSet/quesInfo.vue'
import proList from '../views/proList/index.vue'
import aboutUs from '../views/SystemSet/aboutUs.vue'
import version from '../views/SystemSet/version.vue'
import advice from '../views/SystemSet/pushAdvice.vue'
import searchbar from '../components/SearchBar.vue'
import topPro from '../views/proList/topWelPro.vue'
import goodTopic from '../views/proList/goodTopic.vue'
import Topic from '../views/proList/topic.vue'
import proD from '../views/Detail/goodsDetail.vue'
import Order from '../views/Order/Order.vue'
import Set from '../views/Set/Set.vue'
import submitOrder from '../views/Order/base/SubmitOrder.vue'
import orderPay from '../views/Order/base/OrderPay.vue'
import paySuccess from '../views/Order/base/PaySuccess.vue'
Vue.use(VueRouter)
const routes = [{
		path: '/',
		redirect: '/Home'
	},
	{
		path: '/Search',
		name: 'Search',
		component: searchbar
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
    component: Order
    // beforeEnter: (to, from, next) => {
    //   const isLogin = localStorage.getItem("isLogin")
    //   isLogin ? next() : next("/login")
    // }
  },
  {
    path: "/Set",
    name: "Set",
    component: Set
    // beforeEnter: (to, from, next) => {
    //   const isLogin = localStorage.getItem("isLogin")
    //   isLogin ? next() : next("/login")
    // }
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
  }
]

const router = new VueRouter({
	routes
})

export default router
