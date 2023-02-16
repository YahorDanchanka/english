import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
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
  const isSplashScreenVisible = ref(!!process.env.PROD)
  const settings = useStorage('settings', {
    soundEffects: false,
    vibration: false,
    music: true,
  })
  const backgroundMusic = ref<HTMLAudioElement>()

  watch(
    () => settings.value.music,
    () => {
      if (backgroundMusic.value) {
        if (settings.value.music) {
          backgroundMusic.value.loop = true
          backgroundMusic.value.play().catch((error) => {})
        } else {
          backgroundMusic.value.pause()
        }
      }
    }
  )

  watch(backgroundMusic, () => {
    if (backgroundMusic.value && settings.value.music) {
      backgroundMusic.value.loop = true
      backgroundMusic.value.play().catch((error) => {})
    }
  })

  return {
    sections,
    activeExercise,
    isSplashScreenVisible,
    settings,
    backgroundMusic,
  }
})
