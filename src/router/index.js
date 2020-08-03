import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Cart from '../views/Cart/index.vue'
import Me from '../views/Me/index.vue'
import Address from '../views/address/Address.vue'
import AddressAdd from '../views/address/AddressAdd.vue'
import AddressEdit from '../views/address/AddressEdit.vue'
import productDetail from '../views/Detail/Detail.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/Home'
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
		path: '/productDetail',
		name: 'productDetail',
		component: productDetail
	}
]

const router = new VueRouter({
	routes
})

export default router
