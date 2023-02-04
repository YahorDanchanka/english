<template>
  <q-page class="page" padding>
    <header class="page__header">
      <q-btn icon="west" flat round @click="router.back()" />
      <q-btn icon="settings" flat round @click="router.push({ name: 'settings' })" />
    </header>
    <div class="card">
      <div class="card__title">Subsection title</div>
      <div class="card__body">
        <div v-html="text.text"></div>
        <div class="text-center">
          <AppButton class="q-mb-md" label="Exercise 1" @click="runExercise(0)" />
          <AppButton class="q-mb-md" label="Exercise 2" @click="runExercise(1)" />
          <AppButton class="q-mb-md" label="Exercise 3" @click="runExercise(2)" />
          <AppButton label="Exercise 4" @click="runExercise(3)" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'stores/main'
import { Task } from 'src/types'
import AppButton from 'components/AppButton.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const text = computed<{ text: string; tasks: Task[][] }>(
  () =>
    // @ts-ignore
    (store.sections.find((section) => section.id === route.params['section'])?.subsections || []).find(
      (subsection) => subsection.id === route.params['subsection']
    )!.texts[0]
)

function runExercise(index: number) {
  store.activeExercise = text.value.tasks[index]
  router.push({ name: 'exercise' })
}
</script>

<style lang="sass" scoped>
.page__header
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  width: 100%
  margin-bottom: 8px

.card__body
  text-align: justify

.card__body :deep(h1)
  font-size: 2em
  margin-top: 0
  line-height: 39px
  margin-bottom: 10px
  text-align: center
</style>
