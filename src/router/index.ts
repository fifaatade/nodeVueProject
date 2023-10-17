import { createRouter, createWebHistory } from 'vue-router'
import Departement from '../views/Departement.vue'
import Formulaire from '../views/Formulaire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Departement
    },
    {
      path: '/posts',
      name: 'form',
      component: Formulaire
    },
  ]
})

export default router
