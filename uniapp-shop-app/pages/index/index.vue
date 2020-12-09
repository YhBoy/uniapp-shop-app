<template>
	<view class="index">
		<IndexSwiper />
		<Recommed />
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
	export default {
		components:{
			IndexSwiper,
			Recommed,
			Card
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
