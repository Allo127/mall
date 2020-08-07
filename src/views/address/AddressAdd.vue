<template>
	<div class="add-address">
		<!-- 顶部导航 -->
		<van-nav-bar title="添加地址" left-arrow @click-left="onBack" />
		<!-- 添加地址 -->
		<van-address-edit :area-list="areaList" show-postal save-button-text="保存" show-set-default show-search-result
		 :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" />
	</div>
</template>

<script>
	import areas from "../../area/area"
	export default {
		data() {
			return {
				searchResult: [], //详细地址搜索结果
				areaList: areas,
				user_id: 1
			}
		},
		methods: {
			// 保存地址
			onSave(item) {
				console.log(item)
				let addressInfo = {}
				item.id = this.addressId.toString()
				item.address = item.province + item.city + item.county + item.addressDetail
				item.user_id = this.user_id
				addressInfo = item
				console.log(addressInfo)
				this.$api.address.addAddress(addressInfo).then(({
					data
				}) => {
					console.log(data)
				})
				// 地址信息保存到vuex状态管理
				// this.$store.dispatch("addressInfo", addressInfo)
				// 路由跳转回地址列表
				this.$toast.loading({
					message: '加载中...',
					forbidClick: true
				})
				setTimeout(() => {
					this.$toast.clear()
					this.$router.push("/Address")
				}, 500)
			},
			// 路由返回
			onBack() {
				this.$router.back()
			}
		},
		computed: {
			//   随机生成不同的id值
			addressId() {
				let lastUuid = 0
				return (new Date()).getTime() * 1000 + (lastUuid++) % 1000
			}
		},
		mounted() {
			this.user_id = localStorage.getItem('userId')
		}
	}
</script>

<style lang="scss" scoped>
	.add-address {
		.van-nav-bar__arrow {
			color: #000;
		}
	}
</style>
