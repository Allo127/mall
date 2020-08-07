<template>
	<div class="question">
		<van-nav-bar title="常见问题" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="content">
			<h6>Q：交易下单过程中不能付款</h6>
			<p>A：无法付款，可能是由以下原因导致，供您参考排查： </p>
			<ol>
				<li>① 订单被关闭，可能是触发了某种规则、或商家端的操作，导致的订单关闭，请在订单列表中查看该订单的状态，已关闭的订单是无法进行付款的；</li>
				<li>② 安全相关原因，提示语通常为“账户已被保护……”，请按照指引进行操作查看；</li>
				<li>③ 系统繁忙，这种情况普遍是由于服务器繁忙所致，需要麻烦您进行重试；</li>
				<li>④ 支付宝订单状态同步问题，提示语通常为“支付宝订单不存在，无法进行付款……”，这种情况需要麻烦您进行重试；</li>
				<li>⑤ 金额过多，超过快捷支付金额，支付金额超出5000~10000元，需要按照引导走大额支付通道。</li>
			</ol>
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
	.question .content {
		width: 94%;
		padding: 15px;
	}

	li {
		margin-top: 5px;
	}
</style>
