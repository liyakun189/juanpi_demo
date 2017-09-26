<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <jpyx></jpyx>
  </div>
</template>

<script>
import Jpyx from './components/YouXuan'

export default {
  name: 'Japx',
  components: {
    Jpyx
  }
}
</script>

<style>
#app{
  width:100%;
}
*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
