<template>
  <div>{{ config }}</div>
</template>

<script setup lang="ts">
  import type { IMemoConfig } from '~/types'

  const props = defineProps<{
    config: IMemoConfig
  }>()
</script>
