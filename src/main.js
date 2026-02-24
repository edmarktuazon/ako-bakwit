import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
})

app.use(router)

app.mount('#app')
