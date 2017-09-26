<template>
    <div>
       <header class="header">
           <div class="userCenter">
               <a href="" class="a_img"><img src="../../img/0.jpg" alt=""></a>
               <span class="myself">个人中心</span>
           </div>
           <div class="userLogin">
               <a href="">注册</a>
               <i></i>
               <a href="">登录</a>
           </div>
       </header>
        <a href="" class="my_ding">
            <span>我的订单</span>
            <span class="fr">今日订单</span>
        </a>
        <div class="userItem">
            <a href="">
                <img src="../../img/one.jpg" alt="">
                <span>待付款</span>
            </a>
            <a href="">
                <img src="../../img/two.jpg" alt="">
                <span>待成团</span>
            </a>
            <a href="">
                <img src="../../img/three.jpg" alt="">
                <span>待收货</span>
            </a>
            <a href="">
                <img src="../../img/four.jpg" alt="">
                <span>退款/售后</span>
            </a>
        </div>
        <div class="userItems">
            <a href="">我的收藏</a>
            <a href="">我的拼团</a>
            <a href="">VIP钻石卡</a>
            <a href="">我的免单券</a>
            <a href="">我的优惠券</a>
        </div>
        <div class="userItems">
            <a href="">客服中心</a>
            <a href="">关于卷皮</a>
        </div>
        <div class="foot">
            <div class="foot_nav">
                <a href="">返回首页</a>
                <a href="">客户端</a>
                <a href="">电脑端</a>
            </div>
        </div>
        <footer class="footer">
        <a href=""><img src="https://goods4.juancdn.com/bao/170411/6/8/58ecae97ad0a49a6408b45df_72x72.png" alt=""/><span>今日上新</span></a>
        <a href=""><img src="https://goods3.juancdn.com/bao/170817/4/8/59950b0fa9fcf85453614c7f_72x72.png" alt="" /><span>卷皮优选</span></a>
        <a href=""><img src="https://goods8.juancdn.com/bao/170411/e/0/58ecaeb1a43d1f5e550ebeb4_72x72.png" alt="" /><span>全球购</span></a>
        <a href=""><img src="https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" alt="" /><span>购物车</span></a>
        <a href=""><img src="https://goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png" alt="" /><span>我的卷皮</span></a>
    </footer>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
!function(e,t){
    "use strict";
    var i={isIPhone:/iphone/gi.test(e.navigator.appVersion),isAndroid:/android/gi.test(e.navigator.appVersion),isApp:t.cookie.indexOf("qm_device_id")!==-1};i.isAppNotWK=i.isApp&&t.cookie.indexOf("isWKWebView=1")===-1,function(){var n=t.querySelector('meta[name="viewport"]'),r=t.querySelector('meta[name="hotcss"]'),d=e.devicePixelRatio||1,a=540,s=0;if(d=d>=3?3:d>=2?2:1,i.isAndroid&&(d=1),r){var o=r.getAttribute("content");
    if(o){var m=o.match(/initial-dpr=([d.]+)/);m&&(d=parseFloat(m[1]));var c=o.match(/max-width=([d.]+)/);
    c&&(a=parseFloat(c[1]));var u=o.match(/design-width=([d.]+)/);u&&(s=parseFloat(u[1]))}}t.documentElement.setAttribute("data-dpr",d),i.dpr=d,t.documentElement.setAttribute("max-width",a),i.maxWidth=a,s&&t.documentElement.setAttribute("design-width",s),i.designWidth=s;var p=1/d;i.isIPhone&&375==e.screen.width&&i.isAppNotWK&&(p=.48);var l="width=device-width, initial-scale="+p+", minimum-scale="+p+", maximum-scale="+p+", user-scalable=no";n?n.setAttribute("content",l):(n=t.createElement("meta"),n.setAttribute("name","viewport"),n.setAttribute("content",l),t.head.appendChild(n))}(),i.px2rem=function(e,t){return t||(t=parseInt(i.designWidth,10)),320*parseInt(e,10)/t/20},i.rem2px=function(e,t){return t||(t=parseInt(i.designWidth,10)),20*e*t/320},i.remAddpx=function(e,t,n){var r=i.rem2px(e,n),d=t*i.dpr/2;return r+d},i.mresize=function(){var n=t.documentElement.getBoundingClientRect().width||e.innerWidth;return i.maxWidth&&n/i.dpr>i.maxWidth&&(n=i.maxWidth*i.dpr),!!n&&(t.documentElement.style.fontSize=20*n/320+"px",void(i.callback&&i.callback()))},i.mresize(),e.addEventListener("resize",function(){clearTimeout(i.tid),i.tid=setTimeout(i.mresize,33)},!1),
    e.addEventListener("load",i.mresize,!1),setTimeout(function(){i.mresize()},333),e.hotcss=i}(window,document);
</script>
    
<style lang="css" scoped>
.header{
    width:16rem ;
    height: 7.2rem;
    background: #ff464e;
    background-image: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png);
}
.header .userCenter{
    height: 2.2rem;
    line-height: 2.2rem;
    width: 16rem;
    text-align: center;
    /* background: pink; */
    color: #fff 
}
.header .a_img{
    display: block;
    width: 2.6rem;
    height: 2.2rem;
    float: left;
    padding: 0.7rem 0 0 0.7rem;
}
.header .a_img img{
    float: left;
    width: 0.6rem;
    vertical-align: middle;
}
.header .myself{
    font-size: 0.9rem;
    display: inline-block;
}
.userLogin{
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    position: relative;
}
.userLogin i{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 1rem;
    width: 2px;
    background-color: #fff;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.userLogin a{
    display: inline-block;
    width: 6.75rem;
    color: #fff ;
}
.my_ding{
    display: block;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 0.75rem;
    margin: 0 .59733rem 0 .768rem;
    border-bottom:1px solid #ebebeb; 
}
.my_ding span{
    color: #333;
}
.my_ding .fr{
    color: #999;
    float: right;
}
.userItem{
    height: 3.95rem;
    padding: 0.75rem 0 0.6rem 0;
}
.userItem a{
    display: block;
    height: 2.6rem;
    width: 25%;
    float: left;
}
.userItem a img{
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0 auto;
}
.userItem span{
    display: block;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.6rem;
    text-align: center;
}
.userItems{
    padding: 0.5rem 0 0 0 ;
    /* height: 12rem; */
    background: #f4f4f8;
}
.userItems a{
    display: block;
    position: relative;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 .59733rem 0 .768rem;
    font-size: 0.75rem;
    background-color: #fff;
    color: #333;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom:1px solid #ebebeb; 
}
.foot{
    background: #f4f4f8;
    padding: 0.5rem 0 2.45rem 0;
}
.foot_nav{
    background-color: #fff;
    height: 1.75rem;
}
.foot_nav a{
    display: inline-block;
    color: #666;
    font-size: .46933rem;
    line-height: .53333rem;
    margin: 0 auto;
    width: 31%;
    border-right: 1px solid #ebebeb;
    text-align: center;
}
.footer{
    position: fixed;
    width: 100%;
    height: 2.45rem;
    line-height:3rem;
    background-color: #fff;
    bottom: 0;
    z-index: 400;
    background-size: 100% 100%;
    border-top: 1px solid #ebebeb;
    text-align: center;
}
.footer a{
    float: left;
    display: block;
    width: 20%;
    text-align: center;
    font-size:0.5rem;
    height: 100%;
}

.footer a img{
    width:1.2rem; 
    display: block;
    margin: 0 auto;
    margin-top: 0.375rem;
    margin-bottom: 0.25rem;
}
.footer a span {
    display:block;
    width: 100%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
}
</style>