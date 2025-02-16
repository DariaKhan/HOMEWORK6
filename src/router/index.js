import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/BlogPage',
    name: 'BlogPage',
    component: BlogPage
  },
  {
    path: '/BlogDetailsPage',
    name: 'BlogDetailsPage',
    component: BlogDetailsPage
  },
  {
    path: '/ProjectsPage',
    name: 'ProjectsPage',
    component: ProjectsPage
  },
  {
    path: '/ProjectsDetailsPage',
    name: 'ProjectDetailsPage',
    component: ProjectDetailsPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
