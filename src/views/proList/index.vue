<template>
	<div class="proList">
		<div class="top">
			<van-icon name="arrow-left" class="icon" />
			<!-- 搜索框 -->
			<van-sticky class="search">
				<van-search @focus="goSearch" input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="Searchvalue" />
			</van-sticky>
		</div>
		<van-tabs v-model="active">
			<van-tab title="综合">内容 1</van-tab>
			<van-tab title="销量">内容 2</van-tab>
			<van-tab title="价格">内容 3</van-tab>
		</van-tabs>
		<div class="card2">
			<div class="cardItem">
				<img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
				<p class="title">商品标题</p>
				<p class="desc">描述信息</p>
				<p class="price">￥2.00</p>
			</div>
			<div class="cardItem">
				<img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
				<p class="title">商品标题</p>
				<p class="desc">描述信息</p>
				<p class="price">￥2.00</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Searchvalue: "",
				active: 2
			}
		},
		methods: {
			goSearch() {
				this.$router.push("/search")
			},
			change(index) {
				this.contentActive = index
			}
		}
	}
</script>

<style>
	.top {
		height: 46px;
		display: flex;
	}

	.top .icon {
		padding: 0 16px;
		min-width: 1em;
		margin-right: 4px;
		font-size: 16px;
		line-height: 52px;
	}

	.search {
		margin-left: 20px;
	}

	.card2 {
		display: flex;
		flex-wrap: wrap;
	}

	.cardItem {
		width: 40%;
		height: 180px;
		padding: 8px 16px;
		background-color: #fafafa;
		color: #323233;
		font-size: 12px;
		text-align: center;
	}

	.cardItem img {
		width: 100px;
		height: 100px;
		margin-left: 40px;
	}

	.cardItem .price {
		font-size: 14px;
	}
</style>
