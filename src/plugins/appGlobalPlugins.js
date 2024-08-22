import store from '@/store'
import router from '@/router'

import VueClipboard from 'vue3-clipboard'

import QrReader from 'vue3-qr-reader'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

import ToastService from 'primevue/toastservice';

export default function registerPlugins(app) {
  app.use(PrimeVue)
  app.use(router)
  app.use(store)
  app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true
  })
  app.use(QrReader)
  app.use(ToastService);
}
