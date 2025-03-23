import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CareersPage from '../views/CareersPage.vue'
import ProjectsPage from '../views/ProjectPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },  {
    path: '/careers',
    name: 'Careers',
    component: CareersPage
  },  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
