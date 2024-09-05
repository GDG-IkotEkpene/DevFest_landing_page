const Home = () => import('../pages/indexPage.vue')

const HomeRoutes = [
  {
    path: '/',
    name: 'IndexPage',
    component: Home,
    meta: {
      layout: 'HomeLayout',
      title: 'Home | GDG Ikot-Ekpene'
    }
  }
]
export default HomeRoutes
