import './assets/main.css'

import { createPinia } from 'pinia'
import App from './AppWidget.ce.vue'
import { defineCustomElement } from './defineCustomElement'
import type { IMemoItem } from './types/items'
import type { IMemoConfig } from './types/memo'

const init = (slots: string[]) =>
  defineCustomElement(App, {
    plugins: [createPinia()],
    slots,
  })

export type { IMemoItem, IMemoConfig }

export { init }
