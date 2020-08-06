<template>
	<div class="topic">
		<van-nav-bar :title="list.theme_name" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="content">
			<img :src="list.theme_pic" :alt="list.theme_name" class="topicImg">
			<div class="card2">
				<div class="cardItem" v-for="(item,index) in list.child" :key="index">
					<router-link :to="{ name: 'proD', params: { pid: item.goods_id}}">
						<img :src="item.goods_cover_img" alt="">
						<p class="title" :title="item.goods_name">{{item.goods_name}}</p>
						<p class="desc" :title="item.goods_intro">{{item.goods_intro}}</p>
						<p class="price">￥{{item.selling_price}}</p>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				tid: 1
			}
		},
		methods: {
			async getList() {
				this.$api.proList.getOneTopic(this.tid).then(({
					data
				}) => {
					this.list = data[0]
					// console.log(this.list)
				})
			},
			onClickLeft() {
				this.$router.back()
			}
		},
		mounted() {
			console.log(this.$route.params.tid)
			this.tid = this.$route.params.tid
			this.getList()
		}
	}
</script>

<style>
</style>
