<template>
	<view class="detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item">
				<image class="swiper-img" :src="item.imgUrl" mode=""></image>
			</swiper-item>
		</swiper>
		
		<view class="detail-goods">
			<view class="old-price">￥19.9</view>
			<view class="new-price">￥9.9</view>
			<view class="price-name">爆款大衣</view>
		</view>
		<Card title="猜你喜欢" />
		<ProductListItem :productListData="productListData"  />
		
		<!-- 底部 -->
		
		<view class="detail-foot">
			<view class="iconfont icon-dkw_xiaoxi"></view>
			<view class="iconfont icon-gouwuche"></view>
			<view class="add-cart">加入购物车</view>
			<view class="buy">立即购买</view>
		</view>
		
		<view class="pop">
			<view class="pop-mask">
					<view class="pop-box">
						
					</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import ProductListItem from '@/components/common/ProductListItem.vue'
	export default {
		components:{
			Card,
			ProductListItem
		},
		data() {
			return {
				swiperList:[
					{imgUrl:'../../static/1.jpg'},
					{imgUrl:'../../static/2.jpg'},
					{imgUrl:'../../static/1.jpg'},
					{imgUrl:'../../static/2.jpg'}
				],
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
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
	.pop{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	.pop-mask{
		position: absolute;
		left: 0;
		top:0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
	}
	
	
	
.detail{
	padding-bottom: 80rpx;
}	
	
.swiper-item{
	width: 100%;
	height: 720rpx;
}
.swiper-img{
	width: 100%;
	height: 100%;
}
.detail-foot{
	display: flex;
	background: #fff;
	align-items: center;
	position: fixed;	
	left: 0;
	width: 100%;
	right: 0;
	bottom: 0;
	height: 80rpx;
	line-height: 80rpx;
	justify-content: center;
}
.detail-foot .iconfont{
	width: 60rpx;
	height: 60rpx;
	border-radius: 100%;
	text-align: center;
	margin: 0 10rpx;
}

.detail-goods{
	display: flex;
	flex-direction: column;
	font-weight: 800;
	font-size: 32rpx;
	padding-top: 10rpx;
	justify-content: center;
} 

.add-cart{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background: #333;
	color: #fff;
	border-radius: 40rpx;
}

.buy{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background: #333;
	color: #fff;
	border-radius: 40rpx;
}
.pop-box{
	background: #1AAD19;
}

</style>
