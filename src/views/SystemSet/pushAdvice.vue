<template>
	<div class="advice">
		<van-nav-bar title="意见反馈" left-text="返回" left-arrow />
		<div class="content">
			<van-cell is-link title="选择反馈类型" @click="show = true" />
			<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
			<p>反馈类型：{{type}}</p>
			<van-field v-model="message" rows="1" autosize label="意见反馈" type="textarea" placeholder="请输入意见:" />
			<van-button type="primary" size="large" @click="click()" class="btn">提交</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
				show: false,
				type: '',
				actions: [{
					name: '功能异常'
				}, {
					name: '体验问题'
				}, {
					name: '产品建议'
				}]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.back()
			},
			onSelect(item) {
				// 默认情况下点击选项时不会自动收起
				// 可以通过 close-on-click-action 属性开启自动收起
				this.show = false
				this.type = item.name
				// this.$toast(item.name)
			},
			click() {
				if (this.type === '') {
					this.$toast("请选择意见类型")
				} else if (this.message === '') {
					this.$toast("请填写意见内容")
				} else {
					this.$toast.success('提交成功！')
				}
			}
		}
	}
</script>

<style>
	.content {
		font-size: 14px;
		/* background-color: #E6E6E6; */
	}

	.content p {
		padding-left: 10px;
	}

	.btn {
		margin-top: 20px;
	}
</style>
