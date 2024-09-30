import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/modules/Main/views/MainPage.vue")
    },
    // {
    //   path: '/store',
    //   name: 'store',
    //   component: () => import("@/modules/Main/views/StorePage.vue")
    // },
    // {
    //   path: '/bookmarks',
    //   name: 'bookmarks',
    //   component: () => import("@/modules/Main/views/bookmarksPage.vue")
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import("@/modules/Main/views/ProfilePage.vue")
    // },

  ]
})

export default router
