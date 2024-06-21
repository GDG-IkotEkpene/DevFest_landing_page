import Home from '../pages/Index.vue'

const routes = [
  {
    path: '/admin',
    name: 'admin-dashboard',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'dashboard',
      parent: 'dashboard'
    }
  }
]

export default routes
