import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/Index'
import LoginCard from '@/components/subcom/LoginCard'
import Test from '@/components/Test'

Vue.use(Router)
let router =  new Router({
  // hashbang: true, 
  // mode: 'history',// 去掉路由中的 #  例:http://localhost:8080/#/login
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      authentic: false
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      authentic:false
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      authentic:false,
      children: [
        
      ]
      // 路由 (个体)拦截
      // beforeEnter: (to, from, next) => {
      //   next();
      // },
    },
    {
      path: '/loginCard',
      name: 'loginCard',
      component: LoginCard,
      authentic:false
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      authentic:false
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