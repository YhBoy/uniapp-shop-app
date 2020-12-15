<template>
	<view>
		<Lines />
		<view class="search-item">
				<view class="search-title">
					<view>最近搜索</view>
					<view class="iconfont icon-lajitong" @tap="clearHistory"></view>
				</view>
				<view v-if="searchData.length>0">
					<view class="search-name" v-for="(item,index) in searchData" :key="index">{{item}}</view>
				</view>
				<view v-else>
					暂无搜索记录
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
				keyword:'',
				searchData:[]    // 搜索过的搜索词数组
			}
		},
		onNavigationBarButtonTap(e){
			this.search()
		},
		onNavigationBarSearchInputChanged(e){  // 监听input框输入
			this.keyword = e.text
		},
		onNavigationBarSearchInputConfirmed(e){
			this.search()
		},
		
		onLoad() {
			uni.getStorage({
				key:'searchData',
				success:(res=>{
					this.searchData = JSON.parse(res.data)
				})
			})
		},
		methods: {
			search(){
				if( this.keyword == "" ){
					return uni.showToast({
						title:"搜索词不能为空",
						icon:"none"
					})
				}else{
					this.addSearchData()
					uni.navigateTo({
						url:'../search-list/search-list?keyword='+this.keyword
					})
				}
				uni.hideKeyboard()
			},
			// 记录最近搜索词
			addSearchData(){
				
				let idx = this.searchData.indexOf(this.keyword)
				
				if( idx < 0 ){
					this.searchData.unshift(this.keyword)
				}else{
					this.searchData.splice(idx,1)
					this.searchData.unshift(this.keyword)
				}
				
				uni.setStorage({
					key:"searchData",
					data:JSON.stringify(this.searchData),
					success: (res) => {
						console.log(res)
					}
				})
				
			},
			clearHistory(){
				// 清除搜索记录
				
				if(this.searchData.length > 0){
					uni.showModal({
						title:"提示信息",
						content:'是否删除历史搜索记录?',
						success:(res=>{
							if(res.confirm){
								uni.removeStorage({
								    key: 'searchData',
								    success: (res=>{
										console.log('用户删除成功')
										this.searchData = []
									})
								});
							}else if( res.cancel ){
								console.log('用户点击了取消')
							}
						})
					})
				}else{
					uni.showToast({
					    title: '暂无可以清除的历史记录',
					    duration: 1500,
						icon:'none'
					});
				}
			}
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
