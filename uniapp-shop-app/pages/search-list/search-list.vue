<template>
	<view>
		<ShopList :keyword="keyword" />
		<ProductListItem />
	</view>
</template>

<script>
	import ShopList from '@/components/common/ShopList.vue'
	import ProductListItem from '@/components/common/ProductListItem.vue'
	export default {
		components:{
			ShopList,
			ProductListItem
		},
		data() {
			return {
				keyword:''
			}
		},
		onLoad(e){
			this.keyword = e.keyword
			// #ifdef APP-PLUS  
			var webView = this.$mp.page.$getAppWebview();  
			webView.setTitleNViewSearchInputText(e.keyword) 
			// #endif
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
