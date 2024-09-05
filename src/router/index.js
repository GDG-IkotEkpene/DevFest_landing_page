import Vue from 'vue'
import { getAuth } from 'firebase/auth'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

// routes
import HomeRoutes from '@/modules/HomePage/router'
import AdminRoutes from '@/modules/AdminPage/router'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.concat(HomeRoutes, AdminRoutes),
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe() // Unsubscribe from auth state changes after the check
      if (user) {
        next()
      } else {
        next('/admin') // Redirect to login if not authenticated
      }
    })
  } else {
    next()
  }
})

export default router
