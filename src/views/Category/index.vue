<template>
	<div class="category">
		<!-- 搜索框 -->
		<van-sticky>
			<van-search @focus="goSearch" input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="Searchvalue" />
		</van-sticky>
		<!-- 分类 -->
		<van-row type="flex">
			<!-- 分类导航 -->
			<van-col span="6">
				<div ref="menu" class="menu-wrapper">
					<van-sidebar v-model="activeKey" @change="change">
						<van-sidebar-item :title="item.category_name" v-for="(item,index) in catagoryData" :key="index" />
					</van-sidebar>
				</div>
			</van-col>
			<!-- 分类内容 -->
			<van-col span="18">
				<div ref="content" class="content-wrapper">
					<div class="category-content">
						<div class="catrgory-swipe">
							<van-swipe :autoplay="3000" indicator-color="white">
								<van-swipe-item>
									<img class="swipe-img" :src="img1" />
								</van-swipe-item>
								<van-swipe-item>
									<img class="swipe-img" :src="img2" />
								</van-swipe-item>
							</van-swipe>
						</div>
						<div class="content-item">
							<GridCart :title="item.category_name" v-for="(item,index) in content" :key="index" :Data="item.children"></GridCart>
						</div>
					</div>
				</div>
			</van-col>
		</van-row>
		<menubar></menubar>
	</div>
</template>

<script>
	// import CategoryContent from "./base/CategoryContent"
	import BScroll from "better-scroll"
	import menubar from '../../components/MenuBar.vue'
	import GridCart from "./base/GridCart.vue"
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		components: {
			menubar,
			GridCart
			// CategoryContent
		},
		data() {
			return {
				Searchvalue: "",
				activeKey: 0,
				contentActive: 0,
				menu: [],
				content: [],
				img1: "",
				img2: ""
			}
		},
		created() {
			this.$nextTick(() => {
				this.initScroll()
			})
		},
		methods: {
			...mapMutations(['CATAGOTY_DATA']),
			async getCataList() {
				this.$api.catagory.cataData().then(({
					data
				}) => {
					console.log(data)
					this.CATAGOTY_DATA(data)
					this.content = this.catagoryData[this.contentActive].children
					this.img1 = "http://39.102.38.113:8088/" + this.catagoryData[this.contentActive].carousel_1
					this.img2 = "http://39.102.38.113:8088/" + this.catagoryData[this.contentActive].carousel_2
					// this.content = data[this.contentActive].children
					// this.img1 = data[this.contentActive].carousel_1
					// this.img2 = data[this.contentActive].carousel_2
				})
			},
			// 初始化better-scroll
			initScroll() {
				this.menuScroll = new BScroll(this.$refs.menu, {
					scrollY: true,
					click: true,
					probeType: 3
				})
				this.contentScroll = new BScroll(this.$refs.content, {
					scrollY: true,
					click: true,
					probeType: 3
				})
			},
			goSearch() {
				this.$router.push("/Search")
			},
			change(index) {
				this.contentActive = index
				this.content = this.catagoryData[index].children
				this.img1 = "http://39.102.38.113:8088/" + this.catagoryData[this.contentActive].carousel_1
				this.img2 = "http://39.102.38.113:8088/" + this.catagoryData[this.contentActive].carousel_2
			}
		},
		mounted() {
			this.getCataList()
		},
		beforeDestroy() {
			this.menuScroll.destroy()
			this.contentScroll.destroy()
		},
		computed: {
			...mapState(["catagoryData"])
		}
	}
</script>

<style lang="scss" scoped>
	.category {
		.van-search {
			border-bottom: 1px solid #000000;

			.van-search__content {
				background-color: #eeeeee;
			}
		}

		.menu-wrapper {
			position: absolute;
			top: 55px;
			bottom: 50px;
			left: 0;
			overflow: hidden;
		}

		.content-wrapper {
			position: fixed;
			top: 55px;
			bottom: 50px;
			overflow: hidden;
			left: 85px;
			right: 0;
		}

		.category-content {
			padding: 10px;

			.catrgory-swipe {
				overflow: hidden;

				.swipe-img {
					width: 100%;
				}
			}
		}
	}
</style>
