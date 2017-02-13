<template>
  <div id="app">    
    <router-link to='/home'>主页</router-link>
    <router-link to='/user/12'>用户</router-link> 
    <router-link to='/news'>新闻</router-link>                   
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
