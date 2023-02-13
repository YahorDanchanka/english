<template>
  <q-page class="subsection-words-check-page page" padding>
    <TheHeader class="page__header" navigation-back />
    <q-linear-progress color="q-linear-progress" size="16px" :value="passageProgress">
      <div class="q-linear-progress__label absolute-full flex flex-center">
        {{ (passageProgress * 100).toFixed(0) + '%' }}
      </div>
    </q-linear-progress>
    <AppCard v-if="!isFinish" class="word-card app-card_with_circle app-card_bordered" :title="currentWordObject.word">
      <q-btn
        class="word-card__btn full-width"
        color="primary"
        v-for="option in options"
        :label="option"
        no-caps
        rounded
        @click="nextWord(option)"
      />
    </AppCard>
    <ResultCard
      v-else
      class="app-card_with_circle app-card_with_bordered"
      :score="correctAnswersCount"
      :total="words.length"
      @tryAgain="tryAgain"
    />
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { uid } from 'quasar'
import { sample, shuffle, uniq } from 'lodash'
import { Section, Subsection } from 'src/types'
import { useStore } from 'stores/main'
import { useStatisticsStore } from 'stores/statistics'
import TheHeader from 'components/TheHeader.vue'
import AppCard from 'components/AppCard.vue'
import ResultCard from 'components/ResultCard.vue'

const route = useRoute()
const store = useStore()
const statisticsStore = useStatisticsStore()

const currentWordIndex = ref(0)
const wordsComputedKey = ref(uid())
const correctAnswersCount = ref(0)

const section = computed<Section>(() => store.sections.find((section) => section.id === route.params['section'])!)

const subsection = computed<Subsection>(
  () => section.value.subsections.find((subsection) => subsection.id === route.params['subsection'])!
)

const words = computed(() => {
  wordsComputedKey.value
  return shuffle(subsection.value.words!)
})

const currentWordObject = computed(() => words.value[currentWordIndex.value])

const options = computed(() => {
  const result = [sample(currentWordObject.value.translations)]

  for (let i = 0; i < 2; i++) {
    if (words.value.length === 1) break

    let randomWordObject

    do {
      randomWordObject = sample(words.value)
    } while (currentWordObject.value === randomWordObject)

    result.push(sample(randomWordObject!.translations))
  }

  return uniq(shuffle(result))
})

const passageProgress = computed(() =>
  currentWordIndex.value === words.value.length ? 1 : currentWordIndex.value / words.value.length
)

const isFinish = computed(() => currentWordIndex.value >= words.value.length)

function nextWord(selectedOption: string) {
  if (currentWordObject.value.translations.includes(selectedOption)) {
    correctAnswersCount.value++
  }

  if (currentWordIndex.value > words.value.length - 1) return
  currentWordIndex.value++
}

function tryAgain() {
  wordsComputedKey.value = uid()
  currentWordIndex.value = 0
  correctAnswersCount.value = 0
}

watch(isFinish, () => {
  if (isFinish.value) {
    statisticsStore.statistics.push({
      title: `${subsection.value.title} words`,
      percentCorrectAnswers: (correctAnswersCount.value * 100) / words.value.length,
    })
  }
})
</script>

<style lang="sass" scoped>
.q-linear-progress
  color: #00FF0A
  border-radius: 97px
  overflow: visible
  margin: 20px 0

  :deep(.q-linear-progress__track)
    background-color: #717070
    opacity: 1
    border-radius: 97px

  :deep(.q-linear-progress__model)
    border-radius: 97px

  &__label
    color: white
    top: -40px
    text-shadow: 0 5px 4px rgba(0, 0, 0, 0.25)

.word-card
  text-align: center

  :deep(.app-card__title)
    font-size: 2.5em
    font-weight: 400
    color: #030303
    text-shadow: none
    margin-bottom: 120px

  &__btn
    max-width: 277px
    margin-bottom: 19px

    &:last-of-type
      margin-bottom: 0
</style>
