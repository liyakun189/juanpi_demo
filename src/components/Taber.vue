<template>
    <div>
        <footer class="footer">
        <!-- <a href=""><img src="https://goods4.juancdn.com/bao/170411/6/8/58ecae97ad0a49a6408b45df_72x72.png" alt=""/><span>今日上新</span></a>
        <a href=""><img src="https://goods3.juancdn.com/bao/170817/4/8/59950b0fa9fcf85453614c7f_72x72.png" alt="" /><span>卷皮优选</span></a>
        <a href=""><img src="https://goods8.juancdn.com/bao/170411/e/0/58ecaeb1a43d1f5e550ebeb4_72x72.png" alt="" /><span>全球购</span></a>
        <a href=""><img src="https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" alt="" /><span>购物车</span></a>
        <a href=""><img src="https://goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png" alt="" /><span>我的卷皮</span></a> -->
        <router-link :to="'/home'"><img src="https://goods4.juancdn.com/bao/170411/6/8/58ecae97ad0a49a6408b45df_72x72.png" alt=""/><span>今日上新</span></router-link>
        <router-link :to="'/Choose'"><img src="https://goods3.juancdn.com/bao/170817/4/8/59950b0fa9fcf85453614c7f_72x72.png" alt="" /><span>卷皮优选</span></router-link>
        <router-link :to="'/shop'"><img src="https://goods8.juancdn.com/bao/170411/e/0/58ecaeb1a43d1f5e550ebeb4_72x72.png" alt="" /><span>全球购</span></router-link>
        <router-link :to="'/car'"><img src="https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" alt="" /><span>购物车</span></router-link>
        <router-link :to="'/mine'"><img src="https://goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png" alt="" /><span>我的卷皮</span></router-link>
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
</script>
    
<style lang="css" scoped>
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