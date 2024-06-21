import { createRouter, createWebHistory } from 'vue-router'

// import Auth from "./modules/auth"
// import Dashboard from "./modules/dashboard"

import Home from "@/modules/App/router/index"
import AdminRoutes from "@/modules/Admin/router/index"

const baseRoutes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(Home, AdminRoutes)
})

export default router
