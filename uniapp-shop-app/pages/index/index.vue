<template>
	<view class="index">
		<!-- <IndexSwiper />
		<Recommed />
		<Card title="猜你喜欢" />
		<ProductList /> -->
		
		<Banner /> 
		<Icons />
		<Hot />
		
		
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/indexSwiper.vue'
	import Recommed from '@/components/index/recommend.vue'
	import Card from '@/components/common/Card.vue'
	import ProductList from '@/components/common/ProductList.vue'
	import Banner from '@/pages/index/Banner.vue'
	import Icons from '@/pages/index/Icons.vue'
	import Hot from '@/pages/index/Hot.vue'
	export default {
		components:{
			IndexSwiper,
			Recommed,
			Card,
			ProductList,
			Banner,
			Icons,
			Hot
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
