<template>
	<div>
		<div class="container">
			<!-- 顶部导航 -->
			<Topbar>
				<span slot="title">购物车</span>
			</Topbar>
			<!-- 购物车主体内容 -->
			<div class="shop-cart">
				<!-- 空购物车 -->
				<div class="empty-cart" v-if="!loadingStatus && !shopCartList.length">
					<section class="cart-warpper">
						<van-icon name="cart-o" size="95" />
					</section>
					<section class="desc">'购物车是空的，马上shopping吧~~'</section>
					<!-- <section class="desc">{{userToken?'购物车是空的，马上shopping吧~~':'请先登录噢~~'}}</section> -->
					<!-- <section class="login">
						<van-button round type="info" v-if="userToken" to="/">去购物</van-button>
						<van-button round type="info" v-else to="/login">去登录</van-button>
					</section> -->
				</div>
				<!-- 有商品的购物车 -->
				<div class="shop-cart" v-if="!loadingStatus && shopCartList.length">
					<BScroll class="content-scroll">
						<div class="wrapper-content">
							<div class="list-cart">
								<!-- 统计信息、管理 -->
								<div class="header">
									<!-- <p>共{{shopCartList.length}}件商品</p> -->
									<p>共{{num}}件商品</p>
									<p @click="showManage">{{isShowManage?'完成':'管理'}}</p>
								</div>
								<!-- 商品列表 -->
								<div class="shopList">
									<ul>
										<li v-for="(item, index) in shopCartList" :key="index">
											<!-- 修改后 -->
											<!-- <van-checkbox v-model="item.checked" @click="chooseChange(item.cart_item_id)"></van-checkbox> -->
											<van-checkbox v-model="item.checked"></van-checkbox>
											<div class="goodLeft">
												<img :src="item.goods_info[0].goods_cover_img" alt />
											</div>
											<div class="goodRight">
												<p>{{item.goods_info[0].goods_name}}</p>
												<div class="wrapper">
													<p>￥{{item.goods_info[0].selling_price}}/件</p>
													<div class="stepper">
														<van-stepper v-model="item.goods_count" />
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</BScroll>
					<!-- 结算订单 -->
					<van-submit-bar v-if="!isShowManage" :price="totalPrice" button-text="去结算" @submit="goConfirmOrder">
						<van-checkbox v-model="checkedAll" @click="checkAll">全选</van-checkbox>
					</van-submit-bar>
					<!-- 删除购物车商品 -->
					<van-submit-bar v-else :price="0" label="删除" button-text="删除" @submit="_delCartGoods">
						<van-checkbox v-model="checkedAll" @click="checkAll">全选</van-checkbox>
					</van-submit-bar>
				</div>
				<loading :loadingStatus="loadingStatus" />
			</div>
		</div>
		<menubar></menubar>
	</div>
</template>

<script>
	import menubar from '../../components/MenuBar.vue'
	import Topbar from '../../components/Topbar.vue'
	import BScroll from '../../components/BetterScroll.vue'
	import Loading from '../../components/Loading.vue'
	// import { GoodsMixin } from '@/mixins/goodsMixin'

	export default {
		components: {
			menubar,
			Topbar,
			BScroll,
			Loading
		},
		// mixins: [GoodsMixin],
		data() {
			return {
				result: [],
				checked: false,
				checkedAll: false,
				shopCartList: [],
				pronum: 0,
				value: 1,
				isShowManage: false, // 控制是否显示管理页面
				uid: 1,
				loadingStatus: false,
				selectedData: []
			}
		},
		computed: {
			// 计算总价格
			totalPrice() {
				let totalPrice = 0
				this.shopCartList.forEach(item => {
					console.log(item.checked)
					if (item.checked) {
						totalPrice += item.goods_info[0].selling_price * 100 * item.goods_count
					}
				})
				return totalPrice
			},
			// 计算选中商品数，判断是否已经全选
			totalChecked() {
				let totalChecked = 0

				this.shopCartList.forEach(item => {
					if (item.checked) {
						totalChecked += 1
					}
				})
				return totalChecked
			},
			num() {
				let num = 0
				this.shopCartList.forEach(item => {
					if (item.checked) {
						num += item.goods_count
					}
				})
				return num
			}
		},
		watch: {
			// 判断是否全选
			totalChecked(newValue) {
				if (newValue === this.shopCartList.length) {
					this.checkedAll = true
				} else {
					this.checkedAll = false
				}
			}
		},
		methods: {
			// 转到结算界面
			goConfirmOrder() {
				const goods = this.getCheckGood()
				if (goods.length !== 0) {
					this.SET_CONFIRM_ORDER_INFO(goods)
					this.$router.push('submitOrder')
				} else {
					this.$toast('未选中商品')
				}
			},
			// 获取已经选中的商品
			getCheckGood() {
				return this.shopCartList.filter(val => val.checked === true)
			},
			// 全选与取消逻辑，通过遍历数组实现
			checkAll() {
				// this.shopCartList.forEach(item => {
				// 	item.checked = this.checked
				// 	console.log(item.checked)
				// })
				this.shopCartList.forEach(item => {
					// console.log()
					item.checked = this.checkedAll
					console.log(item.checked)
				})
				// const cache = !this.checkedAll
				// console.log(this.checkedAll)
				// // console.log(cache)
				// this.shopCartList.forEach(item => {
				// 	item.checked = cache
				// 	console.log(item.checked)
				// })
			},
			// 获取购物车信息
			async _getCartInfo() {
				this.$api.cart.cartList(this.uid).then(({
					data
				}) => {
					console.log(data)
					this.shopCartList = data
					this.shopCartList.forEach(item => {
						this.$set(item, "checked", false)
					})
				})
			},
			// 删除购物车商品
			async _delCartGoods() {
				const delGoodsIds = this.getCheckGood().map(val => val.cart_item_id)
				console.log(delGoodsIds)
				// const res = await this.$api.cart.delCart(delGoodsIds)
				// if(res)
				try {
					const res = await this.$api.cart.delCart(delGoodsIds)
					if (res.status === 200) {
						this.$toast("删除成功")
						this._getCartInfo()
					}
				} catch (error) {
					this.$toast(error.msg)
				}
			},
			// 管理页面切换
			showManage() {
				this.isShowManage = !this.isShowManage
			}
		},
		created() {
			// if (this.userToken) {
			this._getCartInfo()
			this.checked = false
			// } else {
			// 	this.loadingStatus = false
			// }
		}
	}
</script>
<style lang='less' scoped>
	.shop-cart {
		position: fixed;
		left: 0;
		right: 0;
		top: 38px;
		bottom: 90px;

		.content-scroll {
			height: 100%;
			overflow: hidden;
		}
	}

	.empty-cart {
		padding-top: 40px;

		.cart-warpper {
			position: relative;
			width: 136px;
			height: 136px;
			background-color: #eee;
			border-radius: 50%;
			margin: 0 auto;

			.van-icon-cart-o {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: red;
			}
		}

		.desc {
			margin: 30px 0;
			text-align: center;
			color: #666;
		}

		.login {
			display: flex;
			justify-content: center;
		}
	}

	.header {
		padding: 0 10px;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
	}

	.shopList {
		li {
			display: flex;
			padding: 2px;

			.goodLeft {
				margin: 0 5px;

				img {
					width: 92px;
					height: 92px;
					box-shadow: 0 2px 2px #f0f1f2;
				}
			}

			.goodRight {
				width: 180px;
				margin: 0 5px;
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: space-around;

				p {
					margin: 0;
					font-size: 14px;
				}

				.wrapper {
					display: flex;
					justify-content: space-between;
					vertical-align: middle;
				}

				.stepper {
					display: flex;
					align-items: center;
				}
			}
		}
	}

	.van-submit-bar {
		bottom: 50px;

		.van-submit-bar__bar {
			padding: 0 2px;
		}
	}
</style>
