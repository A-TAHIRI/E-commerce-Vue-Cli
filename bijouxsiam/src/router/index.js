import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/Bijoux',
    name: 'Bijoux',
    // route level code-splitting
    // this generates a separate chunk (Bijoux.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Bijoux" */ '../views/Bijoux.vue')
  },
  {
    path: '/Cartes Cadeaux',
    name: 'Cartes Cadeaux',
    // route level code-splitting
    // this generates a separate chunk (Cartes Cadeaux.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Cartes Cadeaux" */ '../views/Cartes Cadeaux.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
