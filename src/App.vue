<template>
    <!-- <Mine></Mine> -->
    <!-- <index></index> -->
    
  <!-- 这里的div会把index.html中的div覆盖掉 -->
  <div id="app">
   <!-- 引入tab-bar组件  footer.... -->
    <!-- <tab-bar v-show="isShowTabBarFn()"></tab-bar> -->
    <!-- 使用router-view组件（标签）进行组件显示 -->
    <!-- <router-link :to="'/home'">今日上新</router-link>
    <router-link :to="'/Choose'">卷皮优选</router-link>
    <router-link :to="'/shop'">全球购</router-link>
    <router-link :to="'/car'">购物车</router-link>
    <router-link :to="'/mine'">我的卷皮</router-link> -->
    <fo></fo>
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from './components/index'
// import Mine from './components/Mine'
import Fo from './components/Taber'
export default {
  name: 'app',
  components: {
    // Index
    // Mine
    Fo
  }
}
</script>

<style>

</style>
