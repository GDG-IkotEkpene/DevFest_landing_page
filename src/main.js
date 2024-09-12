import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import VueMarqueeSlider from 'vue-marquee-slider'
import firebase from './firebase'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(firebase)
Vue.use(VueMarqueeSlider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to) => {
  document.title = to.meta.title || 'GDG Ikot-Ekpene'
})
