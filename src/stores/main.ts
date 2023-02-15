import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Exercise, Section } from 'src/types'
import { section as englishForItIndustrySection } from 'stores/data/english-for-it-industry'
import { section as computersTodaySection } from 'stores/data/computers-today'
import { section as softwareSection } from 'stores/data/software'
import { section as hardwareSection } from 'stores/data/hardware'

export const useStore = defineStore('main', () => {
  const sections = ref<Section[]>([
    englishForItIndustrySection,
    computersTodaySection,
    hardwareSection,
    softwareSection,
  ])

  const activeExercise = ref<Exercise>()

  return {
    sections,
    activeExercise,
  }
})
