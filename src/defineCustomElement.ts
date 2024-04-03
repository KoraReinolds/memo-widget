import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  type ComponentInternalInstance,
} from 'vue'
import WebComponentSlot from './components/WebComponentSlot.vue'

export const defineCustomElement = (
  component: any,
  { plugins = [], slots = [] }: { plugins?: any; slots?: string[] } = {},
) =>
  VueDefineCustomElement({
    styles: component.styles,
    props: component.props,
    emits: component.emits,

    setup: (props, { emit }) => {
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

      return () => {
        return h(
          component,
          { ...props, ...events },
          Object.fromEntries(
            slots.map((slotName) => [
              slotName,
              (props: Object) =>
                h(WebComponentSlot, {
                  ...props,
                  name: slotName === 'default' ? undefined : slotName,
                }),
            ]),
          ),
        )
      }
    },
  })
