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
    styles: component.styles,
    props: component.props,
    emits: component.emits,

    setup(props, { emit }) {
      const app = createApp({})

      plugins.forEach(app.use)

      const inst = getCurrentInstance() as ComponentInternalInstance & {
        provides: any
      }

      const events = Object.fromEntries(
        (component.emits || []).map((event: string) => {
          return [
            `on${event[0].toUpperCase()}${event.slice(1)}`,
            (payload: unknown) => emit(event, payload),
          ]
        }),
      )

      if (!inst) return

      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)

      return () =>
        h(
          component,
          { ...props, ...events },
          {
            default: () => h('slot'),
          },
        )
    },
  })
