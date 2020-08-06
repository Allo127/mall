<template>
	<div class="topWel">
		<van-nav-bar title="人气推荐" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="bg">
			<img class="img1" src="../../images/icon/bg.jpg">
		</div>

		<van-tabs v-model="active" @click="change()">
			<van-tab title="综合">
				<div class="card2">
					<div class="cardItem" v-for="(item,index) in list" :key="index">
						<router-link :to="{ name: 'proD', params: { pid: item.goods_id }}">
							<img :src="'http://39.102.38.113:8088/' + item.goods_cover_img" alt="">
							<p class="title" :title="item.goods_name">{{item.goods_name}}</p>
							<p class="desc" :title="item.goods_intro">{{item.goods_intro}}</p>
							<p class="price">￥{{item.selling_price}}</p>
						</router-link>
					</div>
				</div>
			</van-tab>
			<van-tab title="销量">
				<div class="card2">
					<div class="cardItem" v-for="(item,index) in list" :key="index">
						<router-link :to="{ name: 'proD', params: { pid: item.goods_id }}">
							<img :src="'http://39.102.38.113:8088/' + item.goods_cover_img" alt="">
							<p class="title" :title="item.goods_name">{{item.goods_name}}</p>
							<p class="desc" :title="item.goods_intro">{{item.goods_intro}}</p>
							<p class="price">￥{{item.selling_price}}</p>
						</router-link>
					</div>
				</div>
			</van-tab>
			<van-tab title="价格">
				<div class="card2">
					<div class="cardItem" v-for="(item,index) in list" :key="index">
						<router-link :to="{ name: 'proD', params: { pid: item.goods_id }}">
							<img :src="'http://39.102.38.113:8088/' + item.goods_cover_img" alt="">
							<p class="title" :title="item.goods_name">{{item.goods_name}}</p>
							<p class="desc" :title="item.goods_intro">{{item.goods_intro}}</p>
							<p class="price">￥{{item.selling_price}}</p>
						</router-link>
					</div>
				</div>
			</van-tab>
		</van-tabs>
		<!-- <div class="card2">
			<div class="cardItem" v-for="(item,index) in activeList" :key="index">
				<img :src="item.goods_cover_img" alt="">
				<p class="title">{{item.goods_name}}</p>
				<p class="desc">{{item.goods_intro}}</p>
				<p class="price">{{item.selling_price}}</p>
			</div>
		</div> -->
	</div>
</template>

<script>
	// import {
	// 	mapState,
	// 	mapMutations
	// } from "vuex"
	export default {
		data() {
			return {
				Searchvalue: "",
				active: 0,
				list: []
			}
		},
		methods: {
			// ...mapMutations(['ALLPRO_DATA']),
			// ...mapMutations(['NUMPRO_DATA']),
			// ...mapMutations(['POIPRO_DATA']),
			// ...mapMutations(['changeViewKey']),
			async getList() {
				if (this.active === 0) {
					this.$api.proList.getProList().then(({
						data
					}) => {
						this.list = data
						// console.log(this.ALLPRO_DATA)
					})
				} else if (this.active === 1) {
					this.$api.proList.getProListByNum().then(({
						data
					}) => {
						// console.log(data)
						this.list = data
					})
				} else if (this.active === 2) {
					this.$api.proList.getProListByPri().then(({
						data
					}) => {
						// console.log(data)
						this.list = data
					})
				}
			},
			onClickLeft() {
				this.$router.back()
			},
			goSearch() {
				this.$router.push("/search")
			},
			change() {
				console.log(this.active)
				this.getList()
				// this.$store.commit('changeViewKey', this.active)
			}
		},
		mounted() {
			this.getList()
		}
	}
	// computed: {
	// 	...mapState(["proList"]),
	// 	...mapState(["proListByNum"]),
	// 	...mapState(["proListByPri"])
	// 	// ...mapState(['activeList']),
	// 	// ...mapState(['viewKey'])
	// },

	// 方法
	// async getList() {
	// 	console.log("执行")
	// 	this.$api.proList.getProList().then(({
	// 		data
	// 	}) => {
	// 		this.ALLPRO_DATA = data
	// 		// console.log(this.ALLPRO_DATA)
	// 	})
	// 	this.$api.proList.getProListByNum().then(({
	// 		data
	// 	}) => {
	// 		// console.log(data)
	// 		this.NUMPRO_DATA = data
	// 	})
	// 	this.$api.proList.getProListByPri().then(({
	// 		data
	// 	}) => {
	// 		// console.log(data)
	// 		this.POIPRO_DATA = data
	// 	})
	// 	if (this.active === 0) {
	// 		this.list = this.$store.state.proList
	// 	} else if (this.active === 1) {
	// 		this.list = this.$store.state.proListByNum
	// 	} else if (this.active === 2) {
	// 		this.list = this.$store.state.proListByPri
	// 	}
	// 	console.log(this.list)
	// },
</script>

<style>
	.bg img {
		width: 100%;
		height: 137px;
	}

	p {
		width: 150px;
		height: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
