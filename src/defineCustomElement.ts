import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  type ComponentInternalInstance,
} from 'vue'

export const defineCustomElement = (
  component: any,
  { plugins = [] }: any = {},
) =>
  VueDefineCustomElement({
    setup(props, { slots }) {
      const app = createApp({})

      plugins.forEach(app.use)

      const inst = getCurrentInstance() as ComponentInternalInstance & {
        provides: any
      }

      if (!inst) return

      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)

      return () =>
        h(
          component,
          {
            ...props,
            ...slots,
          },
          {
            default: () => h('slot'),
          },
        )
    },
  })
