<template>
	<div class="grid-card">
		<van-row class="title">
			<van-col>{{title}}</van-col>
		</van-row>
		<van-grid :column-num="column" class="border-r-5">
			<van-grid-item v-for="(item,index) in Data" :key="index" :text="item.category_name">
				<div slot="icon">
					<router-link :to="{ name: 'proList', params: { cid: item.category_id }}">
						<img class="icon-img" :src="'http://39.102.38.113:8088/'+item.carousel_small" :alt="item.category_name">
					</router-link>
				</div>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "标题"
			},
			column: {
				type: Number,
				default: 3
			},
			Data: Array
		}
	}
</script>

<style lang="scss" scoped>
	.grid-card {
		margin-top: 10px;

		.title {
			padding: 0 0 5px 5px;
		}

		.border-r-5 {
			border-radius: 5px;
			overflow: hidden;

			.icon-img {
				width: 56px;
				height: 56px;
			}
		}
	}

	.category-content {
		padding: 10px;

		.catrgory-swipe {
			overflow: hidden;

			.swipe-img {
				width: 100%;
			}
		}
	}
</style>
