<template>
  <q-page class="exercise-page page" padding>
    <TheHeader class="page__header" navigation-back />
    <AppCard title="Subsection title">
      <div v-html="store.activeExercise?.content"></div>
      <template v-for="(task, taskIndex) in store.activeExercise?.tasks">
        <SelectionTask
          class="exercise-page__task"
          v-if="isSelectionTask(task)"
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
        <AppButton label="Accept answer" @click="acceptAnswer" />
      </div>
    </AppCard>
  </q-page>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from 'stores/main'
import { isMatchingTask, isSelectionTask, isSortableTask, isTextInputTask, isTypingTask } from 'src/types'
import SelectionTask from 'components/SelectionTask.vue'
import AppButton from 'components/AppButton.vue'
import TypingTask from 'components/TypingTask.vue'
import MatchingTask from 'components/MatchingTask.vue'
import TextInputTask from 'components/TextInputTask.vue'
import TheHeader from 'components/TheHeader.vue'
import SortableTask from 'components/SortableTask.vue'
import AppCard from 'components/AppCard.vue'

const router = useRouter()
const store = useStore()

function acceptAnswer() {
  router.back()
}
</script>

<style lang="sass" scoped>
.page__header
  margin-bottom: 8px

.card__body
  text-align: justify

.exercise-page__task
  margin-bottom: 20px
</style>
