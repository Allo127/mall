<template>
	<div class="version">
		<van-nav-bar title="版本说明" left-text="返回" left-arrow />
		<div class="pic">
			<img src="../../images/icon/update.png" alt="">
			<p>版本不息，优化不止</p>
		</div>
		<div class="verItem">
			<div class="tip">
				<span>v2.0</span>
				<span>2020-8-4</span>
			</div>
			<hr>
			<ul>
				<li>1.购物满88包邮，48小时退款, 30天无忧退货</li>
				<li>2.邀请好友,领走300元</li>
				<li>3.商品标签，一眼Get商品制造商</li>
				<li>4.支持更多优惠券，买买买更优惠</li>
				<li>5.评论显示优化,商品口碑一目了然</li>
			</ul>
		</div>
		<div class="verItem">
			<div class="tip">
				<span>v1.0</span>
				<span>2020-7-4</span>
			</div>
			<hr>
			<ul>
				<li>1.购物满128包邮，48小时退款, 30天无忧退货</li>
				<li>2.邀请好友,领走100元</li>
				<li>3.商品标签，一眼Get商品制造商</li>
				<li>4.支持更多优惠券，买买买更优惠</li>
				<li>5.评论显示优化,商品口碑一目了然</li>
			</ul>
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
	.version {
		background-color: #FAFAFA;
	}

	.pic {
		width: 100%;
		height: 120px;
		padding: 20px 0;
		background-color: #FFFFFF;
		text-align: center;
		color: #a6a6a6;
	}

	.tip {
		display: flex;
		justify-content: space-between;
		padding: 0 5px;
	}

	.verItem {
		border-top: #323233 1px solid;
		border-bottom: #323233 1px solid;
		height: 180px;
		background-color: #FFFFFF;
		margin-top: 30px;
		padding: 20px 10px 0 10px;
	}
</style>
