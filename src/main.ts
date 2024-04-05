import './assets/main.css'

import { createPinia } from 'pinia'
import App from './AppWidget.ce.vue'
import { defineCustomElement } from './defineCustomElement'
import type { IMemoItem } from './types/items'
import type { IMemoConfig } from './types/memo'

const Widget = defineCustomElement(App, {
  plugins: [createPinia()],
  slots: ['default'],
})

export type { IMemoItem, IMemoConfig }

export { Widget }
