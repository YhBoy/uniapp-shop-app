<template>
	<view class="recommend bg-color">
		<view class="recommend-item">
			<image class="item-big" src="recommedList.bigUrl" mode=""></image>
			<view class="item-small"  v-for="(item,index) in recommedList.data" :key="index">
				<image class="item-img" :src="item.imgUrl" mode=""></image>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		props:{
			recommedList:Object
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.recommend{
		padding: 20rpx;
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big{
		width: 100%;
		height: 300rpx;
	}
	.item-small{
		width: 100%;
		height: 240rpx;
	}
	.item-img{
		width: 33.333%;
		height: 240rpx;
	}
</style>
