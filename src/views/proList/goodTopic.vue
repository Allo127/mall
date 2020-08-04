<template>
	<div class="goodTopic">
		<van-nav-bar title="优选推荐" left-text="返回" left-arrow />
		<div class="content">
			<img src="../../images/cart/empty.png" alt="" class="topicImg">
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
	</div>
</template>

<script>
	export default {
		methods: {
			onClickLeft() {
				this.$router.back()
			}
		}
	}
</script>

<style>
	.content .topicImg {
		width: 100%;
		height: 200px;
	}
</style>
