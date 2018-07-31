import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/pages/Home/HelloWorld'
import Login from '../components/pages/login/login'
import Indexa from '../components/pages/index/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Indexa
    }
  ]
})
