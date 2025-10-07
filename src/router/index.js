import { createRouter, createWebHistory } from 'vue-router'

import Admin from '@/components/Admin.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Orders from '@/components/Orders.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import Products from '@/components/Products.vue'
import Profile from '@/components/Profile.vue'
import Signup from '@/components/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'admin',
      path: '/admin',
      component: Admin
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'products',
      path: '/products',
      component: Products
    },
    {
      name: 'productdetails',
      path: '/productdetails',
      component: ProductDetails
    },
    {
      name: 'orders',
      path: '/prders',
      component: Orders
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile
    },
    {
      name: 'signup',
      path: '/signup',
      component: Signup
    },
  ],
})

export default router
