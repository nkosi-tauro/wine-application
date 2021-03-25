import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'List',
    component: () => import( '../views/ListWine.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import( '../views/CreateWine.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import( '../views/EditWine.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
