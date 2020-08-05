<template>
	<div class="container">
		<!-- 顶部导航 -->
		<Topbar hasBack>
			<span slot="title">商品详情</span>
		</Topbar>
		<!-- 商品图片轮播 -->
		<div class="goodSwipe">
			<van-swipe :autoplay="3000" @change="onChange">
				<van-swipe-item>
					<img :src="goodsInfo.goods_cover_img" />
				</van-swipe-item>
				<van-swipe-item>
					<img v-lazy="goodsInfo.goods_carousel" />
				</van-swipe-item>
				<template #indicator>
					<div class="custom-indicator">{{ current + 1 }}/2</div>
				</template>
			</van-swipe>
		</div>
		<!-- 商品信息 -->
		<div class="goodInfo">
			<p>{{goodsInfo.goods_name}}</p>
			<span>￥{{goodsInfo.selling_price}}</span>
		</div>
		<!-- goodExpress 不知道起啥名字，，， -->
		<div class="goodExpress">
			<span>运费：0</span>
			<span>数量：{{goodsInfo.stock_num}}</span>
		</div>
		<!-- 商品详情和评论 -->
		<div class="goodTab">
			<div>
				<van-tabs v-model="active">
					<van-tab title="商品详情">
						<div class="goodDetail">{{goodsInfo.goods_detail_content}}</div>
					</van-tab>
					<van-tab title="商品评论">
						<div class="goodComment">
							<div v-if="!commentList.length">该商品暂无评论噢~~</div>
						</div>
					</van-tab>
				</van-tabs>
			</div>
		</div>
		<!-- 商品sku -->
		<goods-sku ref="sku"></goods-sku>
		<!-- 商品导航 -->
		<div class="goodAction">
			<van-goods-action>
				<van-goods-action-icon icon="wap-home-o" to="/" text="首页" />
				<van-goods-action-icon icon="cart-o" to="/cart" text="购物车" />
				<van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
				<van-goods-action-button type="danger" text="立即购买" />
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	import Topbar from '../../components/Topbar.vue'
	import GoodsSku from './base/GoodsSku.vue'
	// import {
	// 	GoodsMixin
	// } from '@/mixins/goodsMixin'

	export default {
		// props: ['goodsId'],
		components: {
			Topbar,
			GoodsSku
		},
		// mixins: [GoodsMixin],
		data() {
			return {
				current: 0,
				active: 0,
				goodsInfo: {},
				commentList: [], // 没有接口 暂时先不写了
				collectionFlag: false,
				browseFlag: false,
				pid: "10006"
			}
		},
		computed: {},
		watch: {},
		methods: {
			// 获取商品信息
			getDetailData() {
				// const goodsId = this.$route.query.goods_id
				this.$api.productInfo.productInfo(this.pid).then(({
					data
				}) => {
					console.log(data)
					this.goodsInfo = data[0]
					// this.banner = data[0].goods_carousel //banner 轮播图
					// this.detailImg = data[0].detail //详情内容图片
					// this.goodsDesc = data[0].goods_name // 商品的标题
					// this.marketPrice = data[0].original_price //商品原价
					// this.maxGroupPrice = data[0].selling_price //商品现价
				})
			},
			addToCart() {
				this.$refs.sku._data.showSku = true
			},
			// 添加到购物车
			// async _addToCart() {
			// 	if (this.userToken) {
			// 		try {
			// 			const res = await this.$api.users.addToCart(this.goodsId)
			// 			this.$toast(res.msg)
			// 		} catch (error) {
			// 			this.$toast(error.message)
			// 			console.log(error)
			// 		}
			// 	} else {
			// 		this.$toast('请先登录')
			// 		this.$router.push('login')
			// 	}
			// },

			// 自定义指示器
			onChange(index) {
				this.current = index
			}
		},
		created() {
			this.pid = this.$route.params.pid
			console.log(this.pid)
			this.getDetailData()
			// this._queryCollection()
		}
	}
</script>
<style lang='less' scoped>
	.container {
		padding-bottom: 50px;
	}

	.goodSwipe {
		margin-bottom: 5px;

		img {
			width: 100%;
		}

		.custom-indicator {
			position: absolute;
			right: 5px;
			bottom: 5px;
			padding: 2px 5px;
			font-size: 12px;
			background: rgba(0, 0, 0, 0.1);
		}
	}

	.goodInfo {
		padding: 8px 16px;
		border-bottom: 1px solid #ddd;

		p {
			margin: 5px 0;
		}

		span {
			color: #b532e9;
		}
	}

	.goodExpress {
		padding: 8px 16px;
		border-bottom: 1px solid #ddd;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;

		span {
			text-align: center;
			line-height: 1;

			.van-icon {
				color: #b532e9;
			}
		}
	}

	.goodInfo p {
		height: 32px;
		line-height: 32px;
	}
</style>
