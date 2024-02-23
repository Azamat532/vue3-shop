import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import { useProductsStore } from '@/stores/productsStore'
import {storeToRefs} from 'pinia'
 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:category/:id',
      name: 'about',
      component: () => import('@/pages/AboutSingleProductPage.vue'),
      beforeEnter(to) {
        const productStore = useProductsStore()
        const exists = productStore?.products?.find(product => product.id == to.params.id && product.category == to.params.category)
        if(!exists) {
          return {
            name: 'notFound',
            params: {pathMatch: to.path.split('/').slice(1)},
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: '/category',
      name: 'Категории',
      component: () => import('@/pages/CategoryPage.vue')
    },
    {
      path: '/discounts',
      name: 'Скидки',
      component: HomePage
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: HomePage
    },
    {
      path: '/about',
      name: 'О нас',
      component: HomePage
    },
    {
      path: '/liked',
      name: 'Понравилось',
      component: () => import('@/pages/LikedPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/pages/NotFoundPage.vue')
    },
  ]
})

export default router
