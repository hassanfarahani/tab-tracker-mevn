import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Root',
  //   component: Home
  // },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/songs',
    name: 'Songs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Songs.vue')
  },
  {
    path: '/songs/create',
    name: 'Songs-Create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateSong.vue')
  },
  {
    path: '/songs/:songId',
    name: 'Song',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewSong.vue')
  },
  {
    path: '/songs/:songId/edit',
    name: 'Song-Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditSong.vue')
  },
  {
    path: '/',
    name: 'Songs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Songs.vue')
  }
  // {
  //   path: '*',
  //   redirect: '../views/Songs.vue'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
