import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { BootstrapVue3 } from 'bootstrap-vue-3'

// Import Bootstrap and BootstrapVue3 CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

// Create and use Pinia store
const pinia = createPinia()
app.use(pinia)

// Use router
app.use(router)

// Use BootstrapVue3
app.use(BootstrapVue3)

app.mount('#app')