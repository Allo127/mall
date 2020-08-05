import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import flexible from 'lib-flexible'
import api from './api/index.js'

import {
	ActionSheet,
	AddressEdit,
	AddressList,
	Area,
	Button,
	Card,
	Col,
	Cell,
	Checkbox,
	CheckboxGroup,
	Divider,
	Field,
<<<<<<< HEAD
=======
  Loading,
>>>>>>> 91de17c3c1c055951a81412b2440bb82aabe6d28
	Grid,
	GridItem,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Image,
	ImagePreview,
	Icon,
	Tab,
	Tabs,
	Tabbar,
	Tag,
	TabbarItem,
	Toast,
	Step,
	Steps,
	Stepper,
	Swipe,
	SwipeItem,
	SwipeCell,
	SwitchCell,
	SubmitBar,
	Sku,
	Lazyload,
	Loading,
	NavBar,
	Sticky,
	Search,
	Row,
	Sidebar,
	SidebarItem,// 添加的组件
  CountDown,
  Progress
} from 'vant'

Vue.use(flexible).use(Tabbar).use(TabbarItem).use(SwipeItem).use(Swipe).use(Lazyload).use(Sticky).use(AddressEdit).use(
	AddressList).use(Area).use(Grid).use(GridItem).use(Search).use(Row).use(Col).use(Sidebar).use(SidebarItem).use(Icon).use(
	NavBar).use(Button).use(Toast).use(Image).use(ImagePreview).use(Tag).use(Divider).use(GoodsAction).use(
	GoodsActionIcon).use(GoodsActionButton).use(Sku).use(Tab).use(Tabs).use(Card).use(Field).use(ActionSheet).use(Cell).use(
	Checkbox).use(CheckboxGroup).use(SwipeCell).use(SwitchCell).use(Step).use(Steps).use(Stepper).use(SubmitBar).use(
<<<<<<< HEAD
	CountDown).use(Loading)
=======
	CountDown).use(Loading).use(Progress)
>>>>>>> 91de17c3c1c055951a81412b2440bb82aabe6d28

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
