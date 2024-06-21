// Iconify Icon 
import { Icon } from '@iconify/vue'

// QR COde Generator
import QrcodeVue from 'qrcode.vue'

// Vue Select 
import VueSelect  from "vue-select";
import "vue-select/dist/vue-select.css";

// Vee validate Rules 
import { defineRule } from 'vee-validate'
defineRule('required', (value) => {
  if (!value || !value.length) {
    return `This field is required`
  }
  return true
})

defineRule('email', (value) => {
  // Field is empty, should not pass
  if (!value) {
    return 'This field is required'
  }

  // Check if email
  let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  return true
})

defineRule('minLength', (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }
  return true
})

// Prime Vue Components 
import Sidebar from 'primevue/sidebar';
import ScrollTop from 'primevue/scrolltop';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Rating from 'primevue/rating';

export default function registerComponents(app) {
    app.component('QRCodeVue', QrcodeVue)
    app.component('Sidebar', Sidebar)
    app.component('ScrollTop', ScrollTop)
    app.component('Dropdown', Dropdown)
    app.component('vDialog', Dialog)
    app.component("vSelect", VueSelect)
    app.component('DataTable', DataTable)
    app.component('TableColumn', Column)
    app.component('Rating', Rating)
    app.component('icon', Icon)
}
