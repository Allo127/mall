<template>
	<div class="topWel">
		<van-nav-bar title="人气推荐" left-text="返回" left-arrow />
		<div class="bg">
			<img class="img1" src="../../images/icon/bg.jpg" alt="">
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
			onClickLeft() {
				this.$router.back()
			},
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
	.bg img{
		width: 100%;
		height: 137px;
	}
</style>
