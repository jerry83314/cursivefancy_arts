import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Frontend/Home.vue')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Frontend/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Frontend/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Frontend/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Frontend/Cart.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Frontend/Order.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Dashboard/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue')
      },
      {
        path: 'images',
        component: () => import('../views/Dashboard/Images.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
