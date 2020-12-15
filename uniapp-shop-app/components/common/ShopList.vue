<template>
	<view>
		<!--  搜索结果公共组件  -->
		<view class="shop-title ">
			<view  @tap="changeTab(index)" class="shop-item" v-for="(item,index) in shopList" :key="index">
				<view :class="currentIndex == index ? 'f-active-color':'' ">{{item.name}}</view>
				<view class="shop-icon">
					<view :class="item.status == 1 ? 'f-active-color' :'' " class="iconfont icon-xiajiantou up"></view>
					<view :class="item.status == 2 ? 'f-active-color' :'' " class="iconfont icon-shangjiantou down"></view>
				</view>
			</view>
			
		</view>
		<Lines />
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default{
		components:{
			Lines
		},
		props:{
			keyword:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				shopList:[
					{name:'价格',status:2}, // status 1 的时候默认上箭头  2 的时候下箭头 0 的时候应该走默认搜索
					{name:'折扣',status:0},
					{name:'品牌',status:0}
				],
				currentIndex:0
			}
		},
		methods:{
			changeTab(index){
				let idx = this.currentIndex 
				
				
				// 具体点击的是 哪一个对象
				let item = this.shopList[idx]
				
				if( idx == index ){
						return item.status = item.status == 1 ? 2 : 1
				}
				
				//   备注 idx 是上一次点击的 索引值
				//   index 是这次点击的索引值
				//   如果两个索引值不一样 就说明点击的不是同一个 所以让上一次 status = 0
				
				//   如果idx和index 一样 则status 不停的切换 等于1 或者2  上面 三木运算  
				
				let newItem = this.shopList[index]
				item.status = 0
				
				this.currentIndex = index;
				newItem.status = 2
			}
		}
		
	}
</script>

<style scoped>
	.shop-title{
		display: flex;
		}
	.shop-item{
		justify-content: center;
		shop-iconalign-items: center;
		display: flex;
		flex: 1;
	}
	.shop-icon{
		position: relative;
		margin-left: 10rpx;
	}
	.iconfont{
		width: 12rpx;
		height: 6rpx;
		position: absolute;
		left: 0;
	}
	.up{
		top: -24p;
	}
	.down{
		top: -12rpx;
	}
</style>
