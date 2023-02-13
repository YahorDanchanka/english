<template>
  <q-page class="exercise-page page" padding>
    <TheHeader class="page__header" navigation-back />
    <AppCard :title="title">
      <div v-html="store.activeExercise?.content"></div>
      <template v-for="(task, taskIndex) in store.activeExercise?.tasks">
        <SelectionTask
          class="exercise-page__task"
          v-if="isSelectionTask(task)"
          v-model:task="store.activeExercise.tasks[taskIndex]"
          :task-index="taskIndex"
        />
        <MultipleSelectionTask
          class="exercise-page__task"
          v-if="isMultipleSelectionTask(task)"
          v-model:task="store.activeExercise.tasks[taskIndex]"
          :task-index="taskIndex"
        />
        <TypingTask
          class="exercise-page__task"
          v-if="isTypingTask(task)"
          v-model:task="store.activeExercise.tasks[taskIndex]"
          :task-index="taskIndex"
        />
        <MatchingTask
          class="exercise-page__task"
          v-if="isMatchingTask(task)"
          v-model:task="store.activeExercise.tasks[taskIndex]"
          :task-index="taskIndex"
        />
        <TextInputTask
          class="exercise-page__task"
          v-if="isTextInputTask(task)"
          v-model:task="store.activeExercise.tasks[taskIndex]"
          :task-index="taskIndex"
        />
        <SortableTask
          class="exercise-page__task"
          v-if="isSortableTask(task)"
          v-model:task="store.activeExercise.tasks[taskIndex]"
          :task-index="taskIndex"
        />
      </template>
      <div class="q-mt-md text-center">
        <AppButton
          :label="isNonInteractiveExercise ? 'Continue' : isValidated ? 'Continue' : 'Accept answer'"
          @click="acceptAnswer"
        />
      </div>
    </AppCard>
  </q-page>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useStore } from 'stores/main'
import { useStatisticsStore } from 'stores/statistics'
import {
  isMatchingTask,
  isMultipleSelectionTask,
  isSelectionTask,
  isSortableTask,
  isTextInputTask,
  isTypingTask,
} from 'src/types'
import SelectionTask from 'components/SelectionTask.vue'
import AppButton from 'components/AppButton.vue'
import TypingTask from 'components/TypingTask.vue'
import MatchingTask from 'components/MatchingTask.vue'
import TextInputTask from 'components/TextInputTask.vue'
import TheHeader from 'components/TheHeader.vue'
import SortableTask from 'components/SortableTask.vue'
import AppCard from 'components/AppCard.vue'
import MultipleSelectionTask from 'components/MultipleSelectionTask.vue'

const router = useRouter()
const store = useStore()
const statisticsStore = useStatisticsStore()
const $q = useQuasar()

const isValidated = ref(false)

const title = computed(() => store.activeExercise!.title || 'Exercise')
const isNonInteractiveExercise = computed(() => store.activeExercise!.tasks.length === 0)

function acceptAnswer() {
  const tasks = store.activeExercise!.tasks
  let rightAnswersCount = 0
  let totalAnswers = 0

  if (isNonInteractiveExercise.value || isValidated.value) {
    router.back()
    return
  }

  tasks.forEach((task) => {
    if (isSelectionTask(task)) {
      totalAnswers++

      if (task.value !== undefined && task.value === task.correctOptionIndex) {
        rightAnswersCount++
      } else {
        task.error = true
      }
    }

    if (isMultipleSelectionTask(task)) {
      totalAnswers++

      if (
        task.value !== undefined &&
        task.value.length === task.correctOptionIndexes.length &&
        task.value.every((valIndex) => task.correctOptionIndexes.includes(valIndex))
      ) {
        rightAnswersCount++
      } else {
        task.error = true
      }
    }

    if (isTypingTask(task)) {
      totalAnswers++

      if (task.value !== undefined && task.value.toLowerCase() === task.word.replace(/\[|]/g, '').toLowerCase()) {
        rightAnswersCount++
      } else {
        task.error = true
      }
    }

    if (isMatchingTask(task) || isTextInputTask(task)) {
      for (const key in task.correct) {
        totalAnswers++

        if (task.value[key]?.toLowerCase() === task.correct[key]?.toLowerCase()) {
          rightAnswersCount++
        } else {
          task.error = true
        }
      }
    }

    if (isSortableTask(task)) {
      task.options.forEach((option) => {
        totalAnswers++
        const colIndex = task.leftCol.findIndex((leftColOption) => leftColOption === option.value)

        if (task.leftCol[colIndex] == option.value && task.rightCol[colIndex] == option.correct) {
          rightAnswersCount++
        } else {
          task.error = true
        }
      })
    }

    isValidated.value = true
  })

  statisticsStore.statistics.push({
    title: title.value,
    percentCorrectAnswers: (rightAnswersCount * 100) / totalAnswers,
  })

  $q.dialog({
    title: 'Результат',
    message: `${rightAnswersCount}/${totalAnswers}`,
  })
}

onUnmounted(() => {
  if (isValidated.value) {
    const tasks = store.activeExercise!.tasks

    tasks.forEach((task) => {
      if (isSelectionTask(task)) {
        task.value = undefined
      }

      if (isMultipleSelectionTask(task)) {
        task.value = []
      }

      if (isTypingTask(task)) {
        task.value = undefined
      }

      if (isMatchingTask(task) || isTextInputTask(task)) {
        for (const key in task.value) {
          task.value[key] = ''
        }
      }

      task.error = undefined
    })
  }
})
</script>

<style lang="sass" scoped>
.card__body
  text-align: justify

.exercise-page__task
  margin-bottom: 20px
</style>
