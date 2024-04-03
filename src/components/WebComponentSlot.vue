<script lang="ts">
  import { ref, h, watch } from 'vue'

  export default {
    setup() {
      const slotRef = ref<HTMLSlotElement | null>(null)

      const isElement = (node: any): node is Element => node instanceof Element

      watch(
        () => slotRef.value,
        (slot) => {
          if (!slot) return

          const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
              if (mutation.type === 'attributes') {
                const { attributeName, target } = mutation

                if (!isElement(target) || !attributeName) return

                const attributeValue = target.getAttribute(attributeName)

                if (!attributeValue) return

                slot
                  .assignedNodes()
                  .forEach(
                    (node) =>
                      isElement(node) &&
                      node.setAttribute(attributeName, attributeValue),
                  )
              }
            }
          })

          observer.observe(slot, { attributes: true })
        },
        { immediate: true },
      )

      return { slotRef }
    },
    render() {
      return h('slot', {
        ref: 'slotRef',
      })
    },
  }
</script>
