import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)
let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
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