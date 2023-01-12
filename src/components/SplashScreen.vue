<template>
  <div class="splash-screen" :class="splashScreenClasses">
    <template v-if="step === 0">
      <div class="splash-screen__title animate__animated animate__fadeIn">Ggaek</div>
      <footer class="splash-screen__footer animate__animated animate__fadeIn">
        Ggaek © {{ new Date().getFullYear() }}
      </footer>
    </template>
    <template v-if="step === 1">
      <div class="splash-screen__title">Professional English for IT</div>
      <footer class="splash-screen__footer">
        <q-linear-progress size="37px" animation-speed="1000" :value="progress">
          <div class="progress__text absolute-full flex flex-center">{{ Math.round(progress * 100) }}%</div>
        </q-linear-progress>
      </footer>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { random } from 'lodash'

const emit = defineEmits(['finish'])

const step = ref<number>(0)
const progress = ref<number>(0)

const splashScreenClasses = computed(() => ({
  [`splash-screen_step_${step.value}`]: true,
}))

watch(
  step,
  () => {
    /** Заставка */
    if (step.value === 0) {
      const audio = new Audio('/assets/audio/supercell.mp3')
      audio.play()
    }
  },
  { immediate: true }
)

watch(progress, () => {
  if (progress.value === 1) {
    emit('finish')
  }
})

setTimeout(() => {
  /** Массив, размерностью от 4 до 6 */
  const loadingProgress: number[] = [0]
  const n = random(2, 4)

  for (let i = 0; i < n; i++) {
    loadingProgress.push(random(0.1, 0.9))
  }

  loadingProgress.sort()
  loadingProgress.push(1)

  step.value = 1

  for (let i = 0; i < n + 2; i++) {
    setTimeout(() => {
      progress.value = loadingProgress[i]
    }, (i + 1) * 1000)
  }
}, 1500)
</script>

<style lang="sass" scoped>
.splash-screen
  display: flex
  flex-direction: column
  align-items: center
  text-transform: uppercase
  background-color: black
  color: white

.splash-screen__title
  margin-top: auto
  font-size: 4rem
  font-family: 'Acropolis'

.splash-screen__footer
  margin-top: auto
  font-size: 0.875rem

.splash-screen_step_1
  text-transform: none
  background: url('assets/images/splash-screen.png') no-repeat center center / cover
  animation: fadeIn
  animation-duration: 1s

  .splash-screen__title
    font-size: 2.5rem
    line-height: 3.1875rem
    opacity: 0.5
    text-align: center
    margin-top: 60px
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px

  .splash-screen__footer
    width: 100%
    margin-bottom: 45px
    font-family: 'Supercell-Magic'

    :deep(.q-linear-progress)
      background-color: #010409
      border-top: 2px solid #242227
      border-bottom: 2px solid #242227
      overflow: visible

    :deep(.q-linear-progress__track)
      background-color: #010409

    :deep(.q-linear-progress__model)
      background: #1A6CCE

      &::after
        content: ''
        width: 100%
        height: 11px
        position: absolute
        left: 0
        top: 2px
        background: #80B3ED
        border: 1px solid #709CCE
        border-radius: 2px

.progress__text
  font-size: 1.5rem
  color: white
  text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px
  top: -100%
</style>
