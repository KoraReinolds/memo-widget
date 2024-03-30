import './assets/main.css'

import { createPinia } from 'pinia'
import App from './App.ce.vue'
import { defineCustomElement } from './defineCustomElement'

const Widget = defineCustomElement(App, {
  plugins: [createPinia()],
})

export { Widget }
