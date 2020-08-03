import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index.js'

import {
	AddressEdit,
	AddressList,
	Area,
	Button,
	Col,
	Divider,
	Grid,
	GridItem,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Image,
	ImagePreview,
	Icon,
	Tabbar,
	Tag,
	TabbarItem,
	Toast,
	Swipe,
	SwipeItem,
	Sku,
	Lazyload,
	NavBar,
	Sticky,
	Search,
	Row,
	Sidebar,
	SidebarItem
} from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(SwipeItem).use(Swipe).use(Lazyload).use(Sticky).use(AddressEdit).use(AddressList).use(
	Area).use(Grid).use(GridItem).use(Search).use(Row).use(Col).use(Sidebar).use(SidebarItem).use(Icon).use(NavBar).use(
	Button).use(Toast).use(Image).use(ImagePreview).use(Tag).use(Divider).use(GoodsAction).use(GoodsActionIcon).use(
	GoodsActionButton).use(Sku)

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
