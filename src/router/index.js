import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
import Home from "@/views/home/Home"
import Login from "@/views/login/Login"
const routes = [
      {
        path: '',
        redirect: "/home"
      },
      {
        path: "/home",//首页
        mata: {
          title: "首页"
        },
        component: Home,
      },
      {
        path: "/login",//登录
        mata: {
          title: "登录"
        },
        component: Login,
      },
]
const routers = new Router({
  routes,
  mode: 'history',//可以修改模式
})

export default routers
