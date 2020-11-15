import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import gerenacion_cotizacion from '../views/generacion_cotizacion.vue'
import lista_cotizacion from '../views/lista_cotizacion.vue'
import formulario_cotizacion from '../views/formulario_cotizacion.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generacion_cotizacion',
    component: gerenacion_cotizacion
  },
  {
    path: '/formulario_cotizacion',
    component: formulario_cotizacion
  },
  {
    path: '/lista_cotizacion',
    component: lista_cotizacion
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
