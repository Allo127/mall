<template>
	<div class="searchWin">
		<div class="top">
			<van-icon name="arrow-left" class="icon" @click-left="onClickLeft" />
			<!-- 搜索框 -->
			<van-sticky class="search">
				<van-search @focus="goSearch" input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="Searchvalue" />
			</van-sticky>
		</div>
		<div class="content" v-for="(item,index) in list" :key="index">
			<router-link :to="{ name: 'proD', params: { pid: item.goods_id }}">
				<van-card :num="item.stock_num" :price="item.original_price" :desc="item.goods_intro" :title="item.goods_name"
				 :thumb="'http://39.102.38.113:8088/'+item.goods_cover_img" />
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Searchvalue: "水",
				list: []
			}
		},
		methods: {
			async getList() {
				this.$api.search.searchWin(this.Searchvalue).then(({
					data
				}) => {
					this.list = data
					console.log(data)
					// console.log(this.ALLPRO_DATA)
				})
			},
			onClickLeft() {
				this.$router.back()
			},
			goSearch() {
				this.$router.push("/Search")
			}
		},
		mounted() {
			// this.Searchvalue = this.$route.params.Searchvalue
			console.log(this.Searchvalue)
			this.getList()
		}
	}
</script>

<style>
	.search {
		height: 46px;
		overflow: hidden;
	}
</style>
