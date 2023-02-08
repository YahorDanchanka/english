<template>
  <q-page class="text-tasks-page page" padding>
    <TheHeader class="page__header" navigation-back />
    <AppCard :title="subsection.title">
      <div v-html="text.text"></div>
      <div class="text-center" v-for="exerciseIndex in text.exercises.length">
        <AppButton
          :class="{ 'q-mb-md': exerciseIndex !== text.exercises.length }"
          :label="`Exercise ${exerciseIndex}`"
          @click="runExercise(exerciseIndex - 1)"
        />
      </div>
    </AppCard>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'stores/main'
import { Section, Subsection, Task } from 'src/types'
import AppButton from 'components/AppButton.vue'
import TheHeader from 'components/TheHeader.vue'
import AppCard from 'components/AppCard.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const section = computed<Section>(() => store.sections.find((section) => section.id === route.params['section'])!)
const subsection = computed<Subsection>(
  () => section.value.subsections.find((subsection) => subsection.id === route.params['subsection'])!
)
const text = computed(() => subsection.value.texts![+route.params['text']])

function runExercise(index: number) {
  store.activeExercise = text.value.exercises[index]
  router.push({ name: 'exercise' })
}
</script>

<style lang="sass" scoped>
.page__header
  margin-bottom: 8px

.text-tasks-page :deep(.app-card__body)
  font-size: 0.875em
  text-align: justify
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
</style>
