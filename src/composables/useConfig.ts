import { ref } from 'vue'
import type { IMemoConfig } from '~/main'

export const useMemoConfig = (initialConfig: Partial<IMemoConfig>) => {
  const config = ref<IMemoConfig>({
    associations: { count: 5, data: [], ...initialConfig.associations },
    suggestions: {
      data: [],
      count: { min: 1, max: 2 },
      totalCount: 4,
      ...initialConfig.suggestions,
    },
  })

  const updateConfig = (
    config: IMemoConfig,
    newConfig: Partial<IMemoConfig>,
  ): IMemoConfig => {
    return {
      associations: { ...config.associations, ...newConfig.associations },
      suggestions: {
        ...config.suggestions,
        ...newConfig.suggestions,
      },
    }
  }

  return {
    config,
    updateConfig,
  }
}
