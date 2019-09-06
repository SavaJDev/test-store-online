import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ProductsList from '~/pages/ProductsList'
import Basket from '~/pages/Basket'

let routes = [
    {
      path: '/',
      redirect: '/main'    
    },
    {
        name: 'main',
        path: '/main',
        component: ProductsList
    },
    {
        name: 'basket',
        path: '/basket',
        component: Basket
    }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
