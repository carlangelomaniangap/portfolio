import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechStackView from '../views/TechStackView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Carl Angelo Maniangap' }
    },
    {
      path: '/tech-stack',
      name: 'tech-stack',
      component: TechStackView,
      meta: { title: 'Tech Stack' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { title: 'Projects' }
    },
  ],
})

router.afterEach((to) => {
  const baseTitle = 'Carl Angelo Maniangap'
  const pageTitle = to.meta.title

  if (baseTitle === pageTitle) {
    document.title = baseTitle
  } else {
    document.title = `${baseTitle} | ${pageTitle}`
  }
});

export default router
