import Vue from 'vue'
import Router from 'vue-router'

import Welcome from 'views/Welcome/Welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "Welcome" */ 'views/Welcome/Welcome.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ 'views/Home/Home.vue')
    }
  ]
})
