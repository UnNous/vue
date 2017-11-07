import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Home from '@/components/home'

Vue.use(Router)


let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      authentic:false
    },
    {
      path: '/HelloWorld',
      name: 'Hello',
      component: HelloWorld,
      authentic:false
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      authentic:false
      // 路由 (个体)拦截
      // beforeEnter: (to, from, next) => {
      //   next();
      // },
    }
  ]
})

// 路由钩子 (全局) 拦截路由
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  if(to.path == '/'){
    next()
  }else{
    next()
  }
  
})

export default router