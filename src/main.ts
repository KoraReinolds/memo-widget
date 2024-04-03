import './assets/main.css'

import { createPinia } from 'pinia'
import App from './AppWidget.ce.vue'
import { defineCustomElement } from './defineCustomElement'

const Widget = defineCustomElement(App, {
  plugins: [createPinia()],
  slots: ['default'],
})

export { Widget }
