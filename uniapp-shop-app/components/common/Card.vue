<template>
	<view class="card ">
			<view class="">-</view>
			<view class="card-name">{{title}}</view>
			<view class="">-</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:String
		}
	}
</script>

<style scoped>
	.card{
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		font-weight: 600;
		align-items: center;
	}
	.card-name{
		padding: 20rpx 0;
		display: flex;
		font-size: 32rpx;
	}
</style>
