import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineCustomElement } from 'vue'
import App from './App.vue'
import router from './router'

export const app = createApp(App)

app.use(createPinia()).use(router)

const Widget = defineCustomElement(App)

export { Widget }
