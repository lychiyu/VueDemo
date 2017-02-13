import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import App from './App.vue'


Vue.use(VueRouter);

const router = new VueRouter(
  routerConfig
);

// 全局before钩子

router.beforeEach ((to,from,next)=>{
  console.log(to.fullPath);
  console.log(from.fullPath);  
  next();
});
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
