import type { IMemoConfig } from '~/main'

export const useMemoConfig = (initialConfig: Partial<IMemoConfig>) => {
  const config: IMemoConfig = {
    associations: { count: 5, data: [], ...initialConfig.associations },
    suggestions: {
      data: [],
      count: { min: 1, max: 2 },
      totalCount: 4,
      ...initialConfig.suggestions,
    },
  }

  return {
    config,
  }
}
