import './assets/main.css'

import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { defineCustomElement } from './defineCustomElement'

const Widget = defineCustomElement(App, {
  plugins: [createPinia(), router],
})

export { Widget }
