<script setup lang="ts">
  import { useCounterStore } from './stores/counter'

  defineProps<{
    msg: string
  }>()
  const store = useCounterStore()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div>Counter: {{ store.count }}</div>
    <button @click="store.increment">increment</button>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
