<template>
	<div class="topic">
		<van-nav-bar title="大扫除更轻松" left-text="返回" left-arrow />
		<div class="content">
			<img src="../../images/cart/empty.png" alt="" class="topicImg">
			<pro></pro>
		</div>
	</div>
</template>

<script>
	import pro from './base/card2.vue'
	export default {
		components: {
			pro
		},
		methods: {
			onClickLeft() {
				this.$router.back()
			}
		}
	}
</script>

<style>
</style>
