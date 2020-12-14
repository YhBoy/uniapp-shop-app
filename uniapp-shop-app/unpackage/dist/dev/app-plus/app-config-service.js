
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/category/category","pages/cart/cart","pages/user/user","pages/search/search","pages/search-list/search-list"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-selected.png","text":"首页"},{"pagePath":"pages/category/category","iconPath":"static/tabbar/categery.png","selectedIconPath":"static/tabbar/categery_selected.png","text":"分类"},{"pagePath":"pages/cart/cart","iconPath":"static/tabbar/cart.png","selectedIconPath":"static/tabbar/cart-selected.png","text":"购物车"},{"pagePath":"pages/user/user","iconPath":"static/tabbar/user.png","selectedIconPath":"static/tabbar/user-selected.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniapp-shop-app","compilerVersion":"2.8.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#fff","scrollIndicator":"none","titleNView":{"buttons":[{"color":"#989898","float":"left","colorPressed":"#fd68001","fontSize":"22px","fontSrc":"./static/iconfont.ttf","text":""},{"color":"#989898","float":"right","colorPressed":"#fd68001","fontSize":"22px","fontSrc":"./static/iconfont.ttf","text":""}]}}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","titleNView":{"searchInput":{"placeholder":"nike","disabled":false,"borderRadius":"14px","align":"left","backgroundColor":"#f7f7f7","placeholderColor":"#b3b3b3"},"buttons":[{"color":"#989898","float":"right","colorPressed":"#fd68001","fontSize":"15px","text":"搜索","width":"50px"}]}}},{"path":"/pages/search-list/search-list","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","titleNView":{"searchInput":{"placeholder":"nike","disabled":false,"borderRadius":"14px","align":"left","backgroundColor":"#f7f7f7","placeholderColor":"#b3b3b3"},"buttons":[{"color":"#989898","float":"right","colorPressed":"#fd68001","fontSize":"15px","text":"筛选","width":"50px"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
