<template>
  <div>
    <slot name="config">
      <MemoConfig :config />
    </slot>

    <div class="flex flex-col">
      <div v-text="selectedSuggestions" />
      <div v-text="association?.data" />
      <div v-text="suggestions" />

      <div
        v-for="item in suggestions"
        :key="item.id"
      >
        <label
          :for="`memo-${item.id}`"
          v-text="item.data"
        />
        <input
          :id="`memo-${item.id}`"
          v-model="selectedSuggestions[item.id]"
          type="checkbox"
        />
      </div>

      <div>
        <slot
          name="button_start"
          @click="start"
        >
          <button v-text="'Start'" />
        </slot>

        <slot
          name="button_next"
          @click="next"
        >
          <button v-text="'Next'" />
        </slot>

        <slot
          name="button_reload"
          @click="reload"
        >
          <button v-text="'Reload'" />
        </slot>
      </div>

      <div>associationItems: {{ associationItems.length }}</div>
      <div>suggestionItems: {{ suggestionItems.length }}</div>

      <div v-if="!isMemoStarted">
        <span v-text="'pressedKeys'" />
        <div v-for="key in pressedKeys.slice(-5)">
          {{ key }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import type { IMemoItem } from './types/items'
  import MemoConfig from './components/MemoConfig.vue'
  import { indexBy, prop } from 'ramda'
  import type {
    IMemoConfig,
    IMemoCountRange,
    MemoValidator,
  } from './types/memo'
  import type { SelectedItemUI } from './types/ui'
  import { useKeyboard } from './composables/useKeyboard'
  import { useMemoConfig } from './composables/useConfig'

  const props = defineProps<{
    links: Record<string, string[]>
    config: Partial<IMemoConfig>
  }>()

  const { config, updateConfig } = useMemoConfig(props.config)

  watch(
    () => props.config,
    (newConfig) => (config.value = updateConfig(config.value, newConfig)),
  )

  const isNumber = (num: any): num is number => num && Number.isInteger(+num)

  const getRandomValueFromRange = (range: IMemoCountRange): number =>
    Math.round(Math.random() * (range.max - range.min) + range.min)

  const suggestionCountRange = computed<IMemoCountRange>(() => {
    const count = config.value.suggestions.count
    return isNumber(count)
      ? {
          min: count,
          max: count,
        }
      : count
  })

  const toString = (items: IMemoItem[]) =>
    JSON.stringify(items.sort().map((item) => item.id))

  const defaultValidator: MemoValidator = ({ items }, result) =>
    toString(items) === toString(result)

  const validate = config.value.validator || defaultValidator

  const toIdMap = <T extends { id: string }>(arr: T[]): Record<string, T> =>
    indexBy(prop('id'), arr)

  const associationMap = computed(() => toIdMap(config.value.associations.data))

  const suggestionMap = computed(() => toIdMap(config.value.suggestions.data))

  const getSuggestionById = (id: string) => suggestionMap.value[id]

  const associationLinks = computed(() =>
    Object.fromEntries(
      Object.entries(props.links).map(([id, links]) => [
        id,
        links.filter(getSuggestionById),
      ]),
    ),
  )
  const hasLinks = (item: IMemoItem | null, count: number = 1) =>
    item && (associationLinks.value[item.id]?.length || 0) >= count

  const allAssociationItems = computed(() =>
    Object.values(associationMap.value).filter((item) =>
      hasLinks(item, suggestionCountRange.value.min),
    ),
  )

  const associationItems = ref<IMemoItem[]>([])

  const randomSort = () =>
    [-1, 1].map((factor) => factor * Math.random()).reduce((a, b) => a + b)

  const reloadAssociations = () =>
    (associationItems.value = allAssociationItems.value
      .sort(randomSort)
      .splice(0, config.value.associations.count))

  const suggestionItems = computed(() => Object.values(suggestionMap.value))

  const index = ref(-1)

  const isMemoStarted = computed(() => index.value === -1)

  const association = computed<IMemoItem | null>(
    () => associationItems.value[index.value],
  )

  const suggestions = ref<IMemoItem[]>([])
  const selectedSuggestions = ref<SelectedItemUI>({})
  const selectedItems = computed<IMemoItem[]>(() =>
    Object.entries(selectedSuggestions.value)
      .filter(([_, res]) => !!res)
      .map(([id]) => suggestionMap.value[id] || associationMap.value[id]),
  )
  const rightResult = ref<IMemoItem[]>([])

  const { pressedKeys, pressedKey } = useKeyboard()

  const start = () => {
    reloadAssociations()
    next()
  }
  const again = () => {
    index.value = -1
    clear()
  }

  const reload = () => {
    reloadAssociations()
    again()
  }

  const clear = () => {
    suggestions.value = []
    selectedSuggestions.value = {}
  }

  const next = () => {
    index.value += 1
    console.log(
      validate(
        {
          items: rightResult.value,
          keys: pressedKeys.value,
        },
        selectedItems.value,
      ),
    )

    if (association.value) {
      const associatedLinks = associationLinks.value[association.value.id]

      if (!associatedLinks) return

      clear()

      const rightLinks = getRandomValueFromRange(suggestionCountRange.value)
      ;(rightResult.value = associatedLinks
        .sort(randomSort)
        .slice(0, rightLinks)
        .map((id) => suggestionMap.value[id] || associationMap.value[id])),
        rightResult.value.forEach((item) => suggestions.value?.push(item))

      const extraLinks = config.value.suggestions.totalCount - rightLinks
      suggestionItems.value
        .filter((item) => !associatedLinks.includes(item.id))
        .sort(randomSort)
        .slice(0, extraLinks)
        .forEach((item) => suggestions.value?.push(item))

      suggestions.value?.sort(randomSort)
    } else {
      again()
    }
  }

  watch(
    () => pressedKey.value,
    (pressedKey) => {
      const { code } = pressedKey || {}

      if (code === 'KeyS') start()
      if (code === 'KeyN') next()
      if (code === 'KeyR') reload()
      if (code === 'KeyA') again()
    },
  )
</script>
