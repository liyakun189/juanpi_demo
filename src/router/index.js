//导入路由模块
import VueRouter from 'vue-router'
//全局安装路由(让任何组件都可以使用路由)
Vue.use(VueRouter);
//导入4个组件
import Home from '../pages/home'
import Youxuan from '../pages/Youxuan'
import GlobalBuy from '../pages/GlobalBuy'
import Cart from '../pages/Cart'
import Mine from '../pages/Mine'

//配置路由规则
const routes =[
  {path:'',component:Home},
  {path:'/home',component:Home},
  {path:'/youxuan',component:Youxuan},
  {path:'/globalBuy',component:GlobalBuy}, 
  {path:'/cart',component:Cart},  
  {path:'/mine',component:Mine}
}
  
]
//创建路由实例
const router = new VueRouter({
  //路由规则
  //名字如果换 换了之后要使用：router：名字
  routes
})
//导出
exports default router