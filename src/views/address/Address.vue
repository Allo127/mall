<template>
	<!-- 地址列表 -->
	<div class="address-list">
		<!-- 顶部导航 -->
		<van-nav-bar title="我的地址" left-arrow @click-left="onBack" />
		<!-- 没有地址信息时 -->
		<div class="no-address" v-if="!addressList.length">
			<div class="tips">
				<img src="@/assets/images/noAddress.png" />
				<div class="desc">还没有添加过地址呢,添加一个吧😄</div>
			</div>
			<div class="add-btn">
				<van-button color="#f06c7a" round @click="onAdd" block>+增加新地址</van-button>
			</div>
		</div>
		<!-- 有地址信息时 -->
		<div class="has-address" v-else>
			<van-address-list v-model="chosenAddressId" :list="addressList" @add="onAdd" @edit="onEdit" @select="select" />
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				chosenAddressId: '1',
				uid: 1
			}
		},
		methods: {
			...mapMutations(['ADDRESS_LIST']),
			...mapMutations(['EDIT_ADDRESS_INFO']),
			...mapMutations(['CHOOSE_ADDRESS']),
			async getAddressList() {
				this.$api.address.addressList(this.uid).then(({
					data
				}) => {
					console.log(data)
					// this.images = data
					// this.$store.commit('SET_BANNER_IMAGES')
					this.ADDRESS_LIST(data)
				})
				this.$api.address.defaultAddress(this.uid).then(({
					data
				}) => {
					console.log(data)
					// this.images = data
					// this.$store.commit('SET_BANNER_IMAGES')
					this.CHOOSE_ADDRESS(data)
				})
			},
			// 路由返回
			onBack() {
				this.$router.back()
			},
			// 新增地址
			onAdd() {
				this.$router.push("/AddressAdd")
			},
			// 编辑地址
			onEdit(item, index) {
				//把编辑的地址信息保存到vuex中管理
				this.$store.dispatch("editAddressInfo", item)
				this.$toast.loading({
					message: "加载中...",
					forbidClick: true
				})
				console.log(index)
				//路由跳转到编辑页面
				setTimeout(() => {
					this.$toast.clear()
					this.$router.push({
						name: "AddressEdit",
						params: {
							editIndex: index
						}
					})
				}, 500)
			},
			// 选择地址
			select(item) {
				console.log(item)
				this.$store.dispatch("chooseAddress", item)
				this.$router.push("/submitOrder")
			}
		},
		computed: {
			...mapState(["addressList"]),
			...mapState(['editAddressInfo']),
			...mapState(["chooseAddress"])
		},
		mounted() {
			this.uid = localStorage.getItem('userId')
			this.getAddressList()
		}
	}
</script>

<style lang="scss" scoped>
	.address-list {
		.van-nav-bar__arrow {
			color: #000;
		}

		.no-address {
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #fff;

			img {
				width: 150px;
				display: block;
				margin: 0 auto;
			}

			.add-btn {
				position: absolute;
				bottom: 40px;
				right: 0;
				left: 0;
				padding: 0 50px;
			}
		}
	}
</style>
