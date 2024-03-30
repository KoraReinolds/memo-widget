<script setup lang="ts">
  import { useCounterStore } from './stores/counter'

  defineProps<{ msg: string }>()

  const emits = defineEmits<{ count: [number] }>()

  const store = useCounterStore()

  const increment = () => {
    store.increment()
    console.log(store.count)
    emits('count', store.count)
  }
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div>Counter: {{ store.count }}</div>
    <div>
      <slot></slot>
    </div>
    <button @click="increment">increment</button>
  </div>
</template>
