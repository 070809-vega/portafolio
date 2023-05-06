import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/SobreMi.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Proyectos.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
  {
    path: '/precios',
    name: 'precios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Precios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
