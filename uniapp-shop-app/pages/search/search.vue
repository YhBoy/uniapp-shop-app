<template>
	<view>
		<Lines />
		<view class="search-item">
				<view class="search-title">
					<view>最近搜索</view>
					<view class="iconfont icon-lajitong"></view>
				</view>
				<view>
					<view class="search-name">面膜</view>
					<view class="search-name">四件套</view>
				</view>
		</view>
		
		<view class="search-item">
				<view class="search-title">
					<view>热门搜索</view>
					<view class="iconfont icon-shanchu"></view>
				</view>
				<view>
					<view class="search-name">面膜</view>
					<view class="search-name">四件套</view>
				</view>
		</view>
	</view> 
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default {
		components:{
			Lines
		},
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			if( e.float == 'right' ){
				uni.navigateTo({
					url:'../search-list/search-list'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.search-item{
	padding: 20rpx;
}
.search-title{
	display: flex;
	justify-content: space-between;
}

.search-name{
	padding:4rpx 24rpx ;
	background-color: #e1e1e1;
	display: inline-block;
	border-radius: 20rpx;
	margin-right: 20rpx;
}

</style>
