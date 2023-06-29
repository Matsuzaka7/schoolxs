import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/sass/common.scss'
import router from './router'

const app = createApp(App)
const store = createPinia()

// 使用路由
app.use(store)
app.use(router)
app.mount('#app')