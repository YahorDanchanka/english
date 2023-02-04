<template>
  <q-page class="page" padding>
    <TheHeader class="page__header" navigation-back />
    <div class="card">
      <div class="card__title">Subsection title</div>
      <div class="card__body">
        <template v-for="(task, taskIndex) in store.activeExercise">
          <SelectionTask v-if="isSelectionTask(task)" v-model:task="store.activeExercise[taskIndex]" />
          <TypingTask v-if="isTypingTask(task)" v-model:task="store.activeExercise[taskIndex]" />
          <MatchingTask v-if="isMatchingTask(task)" v-model:task="store.activeExercise[taskIndex]" />
          <TextInputTask v-if="isTextInputTask(task)" v-model:task="store.activeExercise[taskIndex]" />
          <SortableTask v-if="isSortableTask(task)" v-model:task="store.activeExercise[taskIndex]" />
        </template>
        <div class="q-mt-md text-center">
          <AppButton label="Accept answer" @click="acceptAnswer" />
        </div>
      </div>
    </div>
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
</style>
