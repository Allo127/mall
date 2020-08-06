<template>
	<div class="server">
		<van-nav-bar title="服务中心" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="talk">
			<div class="img">
				<van-image width="50" height="50" :src="require('../../images/icon/kefu.png')" />
				<span>在线客服</span>
			</div>
			<div class="img">
				<van-image width="50" height="50" :src="require('../../images/icon/u2714.png')" default="客服热线" />
				<span>客服热线</span>
			</div>
		</div>
		<p>问题分类</p>
		<div class="van-doc-demo-block__card question">
			<router-link :to="{ name: 'quesInfo'}">
				<div role="button" tabindex="0" class="van-cell van-cell--clickable">
					<div class="van-cell__title"><span>常见问题</span></div><i class="van-icon van-icon-arrow van-cell__right-icon">
						<!----></i>
				</div>
			</router-link>
			<div role="button" tabindex="0" class="van-cell van-cell--clickable">
				<div class="van-cell__title"><span>配送问题</span></div><i class="van-icon van-icon-arrow van-cell__right-icon">
					<!----></i>
			</div>
			<div role="button" tabindex="0" class="van-cell van-cell--clickable">
				<div class="van-cell__title"><span>售后问题</span></div><i class="van-icon van-icon-arrow van-cell__right-icon">
					<!----></i>
			</div>
			<div role="button" tabindex="0" class="van-cell van-cell--clickable">
				<div class="van-cell__title"><span>支付问题</span></div><i class="van-icon van-icon-arrow van-cell__right-icon">
					<!----></i>
			</div>
			<div role="button" tabindex="0" class="van-cell van-cell--clickable">
				<div class="van-cell__title"><span> 其他问题</span></div><i class="van-icon van-icon-arrow van-cell__right-icon">
					<!----></i>
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
	.server {
		background-color: #e6e6e6;
	}

	.talk {
		width: 100%;
		height: 100px;
		background-color: white;
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
	}

	.talk .img {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.talk span {
		margin-top: 8px;
		font-size: 14px;
	}

	p {
		margin-left: 5px;
	}

	.server .question {
		margin-top: 20px;
		font-size: 14px;
	}
</style>
