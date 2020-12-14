const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/index-list', async (ctx, next) => {
  ctx.body = {
    code:0,
	data:{
		tabBar:[
			{name:'推荐',id:0},
			{name:'运动户外',id:1},
			{name:'服饰内衣',id:2},
			{name:'箱包',id:3},
			{name:'个体',id:4},
			{name:'数码',id:5},
			{name:'发烧热',id:6},
			{name:'个体',id:7},
			{name:'数码',id:8},
			{name:'发烧热',id:9},
		],
		data:[
			{
				type:'swiperList',
				data:[
					{imgUrl:'../../static/2.jpg'},
					{imgUrl:'../../static/2.jpg'},
					{imgUrl:'../../static/2.jpg'},
					{imgUrl:'../../static/2.jpg'}
				]
			},
			
			{
				type:"recommedList",
				data:[
					{
						bigUrl:'../../static/img/Children.jpg',
						data:[
							{
								imgUrl:'../../static/img/Children1.jpg'
							},
							{
								imgUrl:'../../static/img/Children1.jpg'
							},{
								imgUrl:'../../static/img/Children1.jpg'
							}
						]
					}
				]
			}
		]
	}
  }
})

module.exports = router
