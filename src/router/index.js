import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/Projects/ProjectsView.vue'
import CollaboratorView from '../views/CollaboratorView.vue'
import _idVue from '@/views/Projects/_id.vue'
import LoginViewVue from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'projects',
    component:ProjectsView,
  },
  {
    path : '/projects/:id',
    name: 'project',
    component:_idVue,
    meta:{ sidebar:false }
  },
  {
    path: '/collaborator',
    name: 'collaborator',
    component:CollaboratorView
  },
  {
    path: '/login',
    name: 'login',
    component:LoginViewVue,
    meta:{
      hideNavbar: true,
     }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
