import { createRouter, createWebHistory } from 'vue-router'
import TheCatalog from '@/views/TheCatalog.vue'

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: TheCatalog
  },
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes
} )

export default router
