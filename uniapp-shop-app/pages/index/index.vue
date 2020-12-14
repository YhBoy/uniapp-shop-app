<template>
	<view class="index">
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoView">
			<view :id="'top'+index" v-for="(item,index) in tabBar" :key="index" class="scroll-item" @tap="changeTab(index)">
				<text class="scroll-name" :class="activeIndex == index ? 'f-active-color':''">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper @change="changeSwiper" :current="activeIndex" :style="'height:'+clientHeight+'px'">
			<!-- current    这个对应 activeIndex   具体看  swiper 组件 api-->
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<view class="swiper-item home-data">
						<block v-for="(k,i) in item.data" :key="i">
							<IndexSwiper v-if="k.type=='swiperList'" :bannerList="k.data" /> 
							<Recommed v-if="k.type=='recommedList'" :recommedList="k.recommedList" />
							<Card title="猜你喜欢" />
							<ProductList />
						</block>
						
						<!-- <Banner />
						<Icons />
						<Hot />
						<Card title="推荐店铺" />
						<Shop /> -->
				</view>
				<!-- <view class="swiper-item home-data">
						<IndexSwiper />
						<Recommed />
						<Card title="猜你喜欢" />
						<ProductList />
						
						<Banner />
						<Icons />
						<Hot />
						<Card title="推荐店铺" />
						<Shop />
				</view> -->
			</swiper-item>
		</swiper>
		
		
		
		<!-- <Banner /> 
		<Icons />
		<Hot />
		<Card title="推荐店铺" />
		<Shop /> -->
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/indexSwiper.vue'
	import Recommed from '@/components/index/recommend.vue'
	import Card from '@/components/common/Card.vue'
	import ProductList from '@/components/common/ProductList.vue'
	import Banner from '@/pages/index/Banner.vue'
	import Icons from '@/pages/index/Icons.vue'
	import Hot from '@/pages/index/Hot.vue'
	import Shop from '@/pages/index/Shop.vue'
	export default {
		components:{
			IndexSwiper,
			Recommed,
			Card,
			ProductList,
			Banner,
			Icons,
			Hot,
			Shop
		},
		data() {
			return {
				tabBar:[],
				newTopBar:[],
				bannerList:[],
				activeIndex:0,
				scrollIntoView:'top0',
				
				// 内容块的高度
				clientHeight:0
				
			}
		},
		onLoad() {
			
			uni.request({
			    url: 'http://localhost:3000/index-list', //仅为示例，并非真实接口地址。
			    success: (res) => {
					this.tabBar = res.data.data.tabBar
			        this.newTopBar =  this.initData(res.data.data)
					this.bannerList = res.data.data.data.data
			    }
			});
		},
		onReady() {
			
			uni.getSystemInfo({
				success:((res)=>{
					this.clientHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight()
				})
			})
			
			
			
			
			// 这种写法是获取中间内容的总体高度 
			// const query = uni.createSelectorQuery().in(this);
			// query.select('.home-data').boundingClientRect(data => {
			  
			//   // this.clientHeight = data.height
			// }).exec();
		},
		onNavigationBarButtonTap(e) {
			// 点击标题栏按钮触发的事件
			if( e.index == 0 || e.float == 'left'){
				uni.navigateTo({
					url:'../search/search'
				})
			}
		},
		methods: {
			initData(data){
				let arr = []
				
				for( let i=0; i<this.tabBar.length; i++ ){
					let obj = {
						data:[],
						"load":'first'
					}
					if( i == 0  ){
							obj.data = data.data
					}
					arr.push(obj)
				}
				
				return arr;
			},
			changeTab(index){
				if ( index == this.activeIndex )  {
					return
				}else{
					this.activeIndex  = index
					this.scrollIntoView = 'top'+ index
					
					// 滑动加载优化: 用一个值记录顶部菜单是否已经点击过了
					
					if( this.newTopBar[index].load == 'first' ){
						this.initData()
					}
					
				}
			},
			changeSwiper(e){
				this.activeIndex = e.detail.current
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
			
			addData(){
				// 不同的tab 显示不同的数据
				
				// 当前点击的索引值
				let index = this.activeIndex
				
				// 当前点击的id值
				let id = this.tabBar[index].id
				
				// 根据id请求数据
				uni.request({
					url:'',
					success:(res=>{
						if(res.statusCode != 200){
							return ;
						}else{
							
						}
					})
				})
				
			}
		}
	}
</script>

<style scoped>
	.scroll-content{
		width: 100%;
		display: flex;
		height: 80rpx;
		flex-wrap: nowrap;
		white-space: nowrap;
	}
	.scroll-item{
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}
	.scroll-name{
		
		padding: 10rpx 0;
	}
	
	.f-active-color{
		color: #007AFF;
		border-bottom: 6rpx solid #007AFF;
	}
</style>
