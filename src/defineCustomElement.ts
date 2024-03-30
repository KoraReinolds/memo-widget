import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue'

export const defineCustomElement = (
  component: any,
  { plugins = [] }: any = {},
) =>
  VueDefineCustomElement({
    render: () => h(component),
    setup() {
      const app = createApp({})

      plugins.forEach(app.use)

      const inst = getCurrentInstance()

      if (!inst) return

      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
  })
