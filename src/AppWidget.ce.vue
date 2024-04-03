<script setup lang="ts">
  import { ref } from 'vue'
  import { useCounterStore } from './stores/counter'

  defineProps<{ msg: string }>()

  const emits = defineEmits<{ count: [number] }>()

  const store = useCounterStore()

  const increment = () => {
    store.increment()
    emits('count', store.count)
  }
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>Counter: {{ store.count }}</div>
    <div>
      <slot :value="store.count"></slot>
    </div>
    <button @click="increment">increment</button>
  </div>
</template>
