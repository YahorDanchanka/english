import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { TestResult } from 'src/types'

export const useStatisticsStore = defineStore('statistics', () => {
  const statistics = useStorage<TestResult[]>('statistics', [])

  const latestStatistics = computed(() => statistics.value.slice().reverse())

  return { statistics, latestStatistics }
})
