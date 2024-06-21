import './assets/css/main.css'
import { createApp } from 'vue'

import App from './App.vue'

// Import Separate Configuration
import registerComponents from './plugins/appGlobalComponents'
import setupGlobalProperties from './plugins/appGlobalProperties'
import registerPlugins from './plugins/appGlobalPlugins'

const app = createApp(App)

// Register plugins
registerPlugins(app)

// Register global components
registerComponents(app)

// Register Global properties
setupGlobalProperties(app)

app.mount('#app')
