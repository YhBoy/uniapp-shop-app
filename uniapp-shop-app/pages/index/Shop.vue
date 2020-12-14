<template>
	<view class="shop">
		<view class="shop-item">
				
				<scroll-view scroll-x="true" class="scroll-content">
					<view class="scroll-item">
							<ProductListItem itemW = '200rpx' wrap="no-wrap" :productListData="productListData" />
					</view>
					
				</scroll-view>
		</view>
	</view>
</template>

<script>
	import ProductListItem from '@/components/common/ProductListItem.vue'
	export default {
		components:{
			ProductListItem
		},
		data(){
			return {
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
					},
					{
						id:4,
						imgUrl:'../../static/img/Children2.jpg',
						oldPrice:'159',
						name:'爆款大衣',
						newPrice:'299',
						discount:'5.2'
					},
					{
						id:5,
						imgUrl:'../../static/img/Children2.jpg',
						oldPrice:'159',
						name:'爆款大衣',
						newPrice:'299',
						discount:'5.2'
					},
					{
						id:6,
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

<style scoped>
	
	.scroll-content{
		width: 100%;
		flex-wrap: nowrap;
	}
	.scroll-item{
		display: inline-block;
	}
</style>
