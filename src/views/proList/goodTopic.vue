<template>
	<div class="goodTopic">
		<van-nav-bar title="优选推荐" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="content" v-for="(topitem,index) in list" :key="index">
			<div class="card">
				<router-link :to="{ name: 'Topic', params: { tid: topitem.theme_id}}">
					<img :src="topitem.theme_pic" :alt="topitem.theme_name" class="topicImg" @click="goto">
				</router-link>
				<div class="card2">
					<div class="cardItem" v-for="(item,index) in topitem.child.slice(0,2)" :key="index">
						<router-link :to="{ name: 'proD', params: { pid: item.goods_id }}">
							<img :src="item.goods_cover_img" alt="">
							<p class="title" :title="item.goods_name">{{item.goods_name}}</p>
							<p class="desc" :title="item.goods_intro">{{item.goods_intro}}</p>
							<p class="price">￥{{item.selling_price}}</p>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: []
				// listDetail: []
			}
		},
		methods: {
			async getList() {
				this.$api.proList.getTopic().then(({
					data
				}) => {
					this.list = data
					// this.listDetail = data.child
					console.log(data)
				})
			},
			onClickLeft() {
				this.$router.back()
			},
			goto() {

			}
		},
		mounted() {
			this.getList()
		}
	}
</script>

<style>
	.content .topicImg {
		width: 100%;
		height: 200px;
	}

	.card {
		margin-bottom: 10px;
	}
</style>
