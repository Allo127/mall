<template>
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
</template>

<script>
</script>

<style>
	.card2 {
		display: flex;
		flex-wrap: wrap;
	}

	.cardItem {
		width: 40%;
		height: 190px;
		padding: 8px 16px;
		background-color: #fafafa;
		color: #323233;
		font-size: 12px;
		text-align: center;
		margin-bottom: 10px;
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
