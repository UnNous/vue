import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Home from '@/components/home'

Vue.use(Router)
// 路由钩子 (全局) 拦截路由
Router.beforeEach((to, from, next) => {
  next();
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/HelloWorld',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
      // 路由 (个体)拦截
      // beforeEnter: (to, from, next) => {
      //   next();
      // },
    }
  ]
})
