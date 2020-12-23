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
			<view class="add-cart" @tap="showPop()">加入购物车</view>
			<view class="buy" @tap="showPop()">立即购买</view>
		</view>
		
		<view class="pop" v-show="isShow" @touchmove.stop.prevent="">
			<!--  @touchmove.stop.prevent=""  取消蒙层存在的时候  还能滑动底下的内容 -->
			<view class="pop-mask" @tap="hidePop()">
					<view class="pop-box" :animation="animationData">
						<view>
							<image class="pop-pic" src="../../static/img/Children1.jpg" mode=""></image>
						</view>
						<view class="number">
							<view>购买数量</view>
							<UniNumber />
						</view>
					</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import ProductListItem from '@/components/common/ProductListItem.vue'
	import UniNumber from '@/components/uni/uni-number-box/uni-number-box.vue'
	export default {
		components:{
			Card,
			ProductListItem,
			UniNumber
		},
		data() {
			return {
				isShow:false,
				animationData:{},
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
		onBackPress(){// 修改默认返回键   如果弹窗打开的时候 先关闭弹窗  然后再次点击返回  会返回到上一页
			if( this.isShow ){
				this.isShow = false
				return true;  
			}
		},  
		methods: {
			showPop(){
				var animation = uni.createAnimation({
				      duration: 200
				})
				// animation.translateY(300).step()
				// this.animationData = animation.export()
				this.isShow = true
				setTimeout(()=>{
					animation.translateY(0).step()
					this.animationData = animation.export()
				},200)
			},
			hidePop(){
				var animation = uni.createAnimation({
				      duration: 200
				})
				animation.translateY(300).step()
				this.animationData = animation.export()
				this.isShow = true
				setTimeout(()=>{
					animation.translateY(0).step()
					this.isShow = false
				},200)
				
			}
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

.pop{
	position: fixed;
	left: 0;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 999;
}
.pop-mask{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
}

.pop-box{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 300px;
	background-color: rgba(0,0,0,0.5);
	background: #e8e8e8;
}

.pop-pic{
	width: 160rpx;
	height: 160rpx;
	margin-top: 20rpx;
	margin-left: 20rpx;
}

.number{
	display: flex;
	justify-content: space-between;
	margin-top: 20rpx;
	padding: 0 20rpx;
}

</style>
