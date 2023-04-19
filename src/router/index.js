import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'
import CollaboratorView from '../views/CollaboratorView.vue'

const routes = [
  {
    path: '/',
    name: 'projects',
    component:ProjectsView,
  },
  {
    path: '/project',
    name: 'project',
    component:ProjectView
  },
  {
    path: '/collaborator',
    name: 'collaborator',
    component:CollaboratorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
