<template>
	<div class="proList">
		<div class="top">
			<van-icon name="arrow-left" class="icon" @click-left="onClickLeft" />
			<!-- 搜索框 -->
			<van-sticky class="search">
				<van-search @focus="goSearch" input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="Searchvalue" />
			</van-sticky>
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Searchvalue: "",
				active: 0,
				list: [],
				cid: 20
			}
		},
		methods: {
			async getList() {
				if (this.active === 0) {
					this.$api.proList.getProListC(this.cid).then(({
						data
					}) => {
						this.list = data
						// console.log(this.ALLPRO_DATA)
					})
				} else if (this.active === 1) {
					this.$api.proList.getProListByNumC(this.cid).then(({
						data
					}) => {
						// console.log(data)
						this.list = data
					})
				} else if (this.active === 2) {
					this.$api.proList.getProListByPriC(this.cid).then(({
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
				this.$router.push("/Search")
			},
			change() {
				this.getList()
			}
		},
		mounted() {
			this.cid = this.$route.params.cid
			console.log(this.cid)
			this.getList()
		}
	}
</script>

<style>
	.top {
		height: 46px;
		display: flex;
		background-color: #FFFFFF;
	}

	.top .icon {
		padding: 0 16px;
		min-width: 1em;
		margin-right: 4px;
		font-size: 16px;
		line-height: 52px;
	}

	.search {
		margin-left: 20px;
	}

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
