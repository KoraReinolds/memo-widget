import './assets/main.css'

import { createPinia } from 'pinia'
import App from './App.vue'
import { defineCustomElement } from './defineCustomElement'

const Widget = defineCustomElement(App, {
  plugins: [createPinia()],
})

export { Widget }
