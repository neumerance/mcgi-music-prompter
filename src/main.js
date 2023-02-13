import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3AutoScroll from "vue3-auto-scroll";

import '@/assets/main.scss'


const app = createApp(App)

app.use(router)
app.use(Vue3AutoScroll)

app.mount('#app')
