
自定义导航栏icon图标处理
	先拿取 Unicode 图标   比如是:  &#xe636;(放大镜)  在text里面应该写 "\ue636", 在比如  &#xe636;(购物车)  在text里面这样写 "\ue636"
	
	
	
	"app-plus":{   // 这种设置就是左右两边是图标  中间是搜索框
						"scrollIndicator":"none",
						"titleNView":{
								"searchInput": {    // 这个位置是搜索框
										"align":"left",
										"backgroundColor": "#fff",
										"borderRadius": "6px", //输入框圆角
										"placeholder": "请输入搜索内容",
										"disabled": true //disable时点击输入框不置，可以跳到新页面搜索
								},
								"buttons":[
									{
										"color":"#989898",
										"float":"left",
										"colorPressed":"#fd68001",
										"fontSize":"22px",
										"fontSrc":"./static/iconfont.ttf",
										"text":"\ue637"
									},
									{
										"color":"#989898",
										"float":"right",
										"colorPressed":"#fd68001",
										"fontSize":"22px",
										"fontSrc":"./static/iconfont.ttf",
										"text":"\ue606"
									}
								]
						}
				}
	
	

swiper的坑
	Image 上的class  设置宽高  并且 要给swiper 设置 和 Image上class一样的宽高 才能使图片显示出来                  


	
	
	
	




















