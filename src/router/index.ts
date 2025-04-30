import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import HowItWorksPage from '../views/HIW.vue'
import pac from '../views/pac.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
  path: '/hiw',
  name: 'How It Works',
  component: HowItWorksPage

},   {
  path: '/pac',
  name: 'Pros And Cons',
  component:  pac

}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
