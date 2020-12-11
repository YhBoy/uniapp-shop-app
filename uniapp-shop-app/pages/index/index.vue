<template>
	<view class="index">
		<IndexSwiper />
		<Recommed />
		<Card title="猜你喜欢" />
		<ProductList />
		<!-- <view class="text-area f-active-color">
			文字
		</view>
		<view class="iconfont icon-dkw_xiaoxi">123</view> -->
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/indexSwiper.vue'
	import Recommed from '@/components/index/recommend.vue'
	import Card from '@/components/common/Card.vue'
	import ProductList from '@/components/common/ProductList.vue'
	export default {
		components:{
			IndexSwiper,
			Recommed,
			Card,
			ProductList
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
