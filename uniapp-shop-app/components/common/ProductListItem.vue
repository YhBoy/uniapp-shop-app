<template>
	<view class="item-wrap">
		<view class="item" v-for="item in productListData" :key="item.id">
			<image class="item-img" :src="item.imgUrl" mode=""></image>
			<view class="item-content">
					<text class="item-name">{{item.name}}</text>
					<view>
						<text class="item-pprice">￥{{item.newPrice}}</text>
						<text class="item-oprice">￥{{item.oldPrice}}</text>
					</view>
					<view class="discount">{{item.discount}}折</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			productListData:Array
		}
	}
</script>

<style scoped>
	.item-wrap{
		display: flex;
		flex-wrap: wrap;
	}
	.item{
		width: 375rpx;
		padding-bottom: 20rpx;
	}
	.item-img{
		width: 100%;
		height: 375px;
	}
	.item-content{
		text-align: center;
		padding: 10rpx 10rpx;
	}
	 .item-pprice{
		 text-decoration: line-through;
		 color: #999;
		 font-size: 24rpx;
	 }
	 .discount{
		 border-radius: 10rpx;
		 font-size: 20rpx;
		 color: #ff3333;
	 }
</style>
