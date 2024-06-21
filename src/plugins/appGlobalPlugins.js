import store from '@/store'
import router from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueClipboard from 'vue3-clipboard'

import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import QrReader from 'vue3-qr-reader'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

export default function registerPlugins(app) {
  app.use(ElementPlus)
  app.use(PrimeVue)
  app.use(router)
  app.use(store)
  app.use(VueSweetAlert2, {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
    reverseButtons: false,
    buttonsStyling: true,
    customClass: {
      confirmButton: 'tw-bg-green-600 tw-text-white tw-py-3',
      cancelButton: 'tw-bg-red-600 tw-text-white tw-py-3'
    }
  })
  app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true
  })
  app.use(QrReader)
}
