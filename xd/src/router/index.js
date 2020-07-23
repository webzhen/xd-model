import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "index",
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/details/:pid',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue'),
    props: true,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/notice',
    name: 'notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notice" */ '../views/Notice.vue')
  },
  {
    path: '/Recharge',
    name: 'Recharge',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recharge" */ '../views/Recharge.vue')
  },
  {
    path: '/my',
    name: 'my',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "my" */ '../views/My.vue')
  },
  {
    path: '/myAdress',
    name: 'myAdress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "myAdress" */ '../views/MyAdress.vue')
  },
  {
    path: '/myPurse',
    name: 'myPurse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "myPurse" */ '../views/MyPurse.vue')
  },
  {
    path: '/myCoupon',
    name: 'myCoupon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "myCoupon" */ '../views/MyCoupon.vue')
  },
  {
    path: '/onlineReference',
    name: 'onlineReference',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "onlineReference" */ '../views/OnlineReference.vue')
  },
  {
    path: '/dial',
    name: 'dial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dial" */ '../views/OnlineReference.vue')
  },
  {
    path: '/place/:pid',
    name: 'place',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "place" */ '../views/Place.vue'),
    props: true,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/indent',
    name: 'indent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "indent" */ '../views/Indent.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/newaddress',
    name: 'newaddress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newaddress" */ '../views/NewAddress.vue')
  },
  {
    path: '/editaddress/:aid',
    name: 'editaddress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "editaddress" */ '../views/Editaddress.vue'),
    props: true
  },
  {
    path: '/indentpage/:oid',
    name: 'indentpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "indentpage" */ '../views/Indentpage.vue'),
    props: true
  },
  {
    path: '/addressList/:pid',
    name: 'addressList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addressList" */ '../views/AddressList.vue'),
    props: true
  },
  {
    path: '/neworder',
    name: 'neworder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "neworder" */ '../views/NewOrder.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
