<template>
	<view class="product-list">
			<ProductListItem :productListData="productListData" />
	</view>
</template>

<script>
	import ProductListItem from '@/components/common/ProductListItem.vue'
	export default{
		components:{
			ProductListItem
		},
		data(){
			return{
				productListData:[
					{
						id:1,
						imgUrl:'../../static/img/Children2.jpg',
						name:'爆款大衣',
						oldPrice:'159',
						newPrice:'299',
						discount:'5.2'
					},
					{
						id:2,
						imgUrl:'../../static/img/Children2.jpg',
						oldPrice:'159',
						name:'爆款大衣',
						newPrice:'299',
						discount:'5.2'
					},
					{
						id:3,
						imgUrl:'../../static/img/Children2.jpg',
						oldPrice:'159',
						name:'爆款大衣',
						newPrice:'299',
						discount:'5.2'
					}
				]
			}
		}
	}
</script>

<style>
</style>
