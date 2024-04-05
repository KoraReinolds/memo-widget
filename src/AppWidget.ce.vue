<script setup lang="ts">
  import type { IMemoItem } from './types/items'
  import type { IMemoConfig } from './types/memo'

  defineProps<{
    items: IMemoItem[]
    links: Record<string, number[]>
    config: IMemoConfig
  }>()
</script>

<template>
  <div>
    <div>items: {{ items }}</div>
    <div>links: {{ links }}</div>
    <div>config: {{ config }}</div>
    <slot></slot>
  </div>
</template>
