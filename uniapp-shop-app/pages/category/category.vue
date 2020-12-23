<template>
	<view>
		<Lines />
		
		<view class="list" :style="'height:'+clientHeight+'px'">
			<scroll-view scroll-y="true" class="list-left">
				<view class="left-item" v-for="(item,index) in 50" :key="index" @tap="changeLeftTab(index)">
					<view class="left-name " :class="currentIndex==index?'left-active-name':''">{{index}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="list-right">
				<view class="right-list">
					<view class="list-title">家居</view>
					<view class="right-content">
						<view class="right-item" @tap="goDetail()">
								<image class="right-img" src="../../static/c1.png" mode=""></image>
								<view class="right-name">充电器</view>
						</view>
						<view class="right-item">
								<image class="right-img" src="../../static/c1.png" mode=""></image>
								<view class="right-name">充电器</view>
						</view>
						<view class="right-item">
								<image class="right-img" src="../../static/c1.png" mode=""></image>
								<view class="right-name">充电器</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	//   这边后面的逻辑都是根据id 请求接口 没什么学的  
	import Lines from '@/components/common/Lines.vue'
	export default {
		components:{
			Lines
		},
		data() {
			return {
				currentIndex:0,
				clientHeight:0,
				listData:[
					{
						id:'1',
						name:'家访',
						list:[
							{
								id:'1',
								name:'毛巾',
								imhUrl:'../../static/c1.png'
							},
							{
								id:'2',
								name:'牙刷',
								imhUrl:'../../static/c1.png'
							},
							{
								id:'3',
								name:'浴巾',
								imhUrl:'../../static/c1.png'
							}
						]
					},
					{
						id:'2',
						name:'生活用品',
						list:[
							{
								id:'1',
								name:'毛巾',
								imhUrl:'../../static/c1.png'
							},
							{
								id:'2',
								name:'牙刷',
								imhUrl:'../../static/c1.png'
							},
							{
								id:'3',
								name:'浴巾',
								imhUrl:'../../static/c1.png'
							}
						]
					},
					{
						id:'3',
						name:'浴室用品',
						list:[
							{
								id:'1',
								name:'毛巾',
								imhUrl:'../../static/c1.png'
							},
							{
								id:'2',
								name:'牙刷',
								imhUrl:'../../static/c1.png'
							},
							{
								id:'3',
								name:'浴巾',
								imhUrl:'../../static/c1.png'
							}
						]
					}
				]
			}
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'../detail/detail'
			})
		},
		onReady() {
			uni.getSystemInfo({
				success:((res)=>{
					this.clientHeight = res.windowHeight - this.getClientHeight()
				})
			})
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url:'../detail/detail'
				})
			},
			changeLeftTab(index){
				this.currentIndex = index
			},
			getClientHeight(){
				const res = uni.getSystemInfoSync()
				if( res.platform == 'ios' ) {
					return 44 + res.statusBarHeight
				}else if( res.platform == 'andrios' ){
					return 48 + res.statusBarHeight
				}else{
					return 0
				}
			},
		}
	}
</script>

<style scoped>
.list{
	display: flex;
}

.list-left{
	width: 200rpx;	
}

.list-right{
	flex: 1;
}

.left-item{
	border-bottom: 2rpx solid #fff;
	background: #f7f7f7;
	font-size: 28rpx;
}
.left-name{
	padding: 20rpx 6rpx;
	text-align: center;
}
.left-active-name{
	border-left: 8rpx solid #00B7FF;
}

.list-title{
	font-weight: 800;
	padding: 30rpx 0;
}
.right-content{
	display: flex;
	flex-wrap: wrap;
	text-align: center;
}
.list-right{
	flex: 1;
	padding-right: 10rpx;
}

.right-list{
	
}

.right-img{
	width: 150rpx;
	height: 150rpx;
}

</style>
