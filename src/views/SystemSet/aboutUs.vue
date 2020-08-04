<template>
	<div class="aboutUs">
		<van-nav-bar title="关于我们" left-text="返回" left-arrow />
		<div class="content">
			<div class="detail">
				<img src="../../images/icon/us.png" alt="">
				<p>客服热线：400-0000-000</p>
				<p>客服邮箱：service@site.com</p>
				<p>当前版本：v4.0.0</p>
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
	.content {
		background-color: #FAFAFA;
		width: 100%;
	}

	.detail {
		width: 50%;
		height: 50%;
		padding: 30% 25%;
		font-size: 12px;
		text-align: center;
		color: #bdbdbd;
	}
</style>
