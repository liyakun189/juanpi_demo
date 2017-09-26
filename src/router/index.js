import Vue from 'vue'

// 导入路由模块
import VueRouter from 'vue-router'

// 全局安装路由 (让任何组件都可以使用路由)
Vue.use(VueRouter);

// 分别导入5个组件
import Home from '../pages/Home'
import Choose from '../pages/Choose'
import Shop from '../pages/Shop'
import Car from '../pages/Car'
import Mine from '../pages/Mine'

// 配置路由规则
const routes = [
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/choose', component: Choose },
    { path: '/shop', component: Shop },
    { path: '/car', component: Car},
    {path:'/mine',component:Mine}
    ]

// 创建路由实例
const router = new VueRouter({
    mode: 'history',
    // 路由规则
    routes
  })

// 因为把路由逻辑单独提出来了，所以我们要提供一个导出路由对象功能
 export default router