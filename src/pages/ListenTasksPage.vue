<template>
  <q-page class="page" padding>
    <TheHeader class="page__header" navigation-back />
    <div class="card">
      <div class="card__title">{{ subsection.title }}</div>
      <div class="card__body">
        <div class="text-center">
          <AppButton
            v-for="exerciseIndex in subsection.listen.length"
            :class="{ 'q-mb-md': exerciseIndex !== subsection.listen.length }"
            :label="`Exercise ${exerciseIndex}`"
            @click="runExercise(exerciseIndex - 1)"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'stores/main'
import { Section, Subsection } from 'src/types'
import AppButton from 'components/AppButton.vue'
import TheHeader from 'components/TheHeader.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const section = computed<Section>(() => store.sections.find((section) => section.id === route.params['section'])!)
const subsection = computed<Subsection>(
  () => section.value.subsections.find((subsection) => subsection.id === route.params['subsection'])!
)

function runExercise(index: number) {
  // @ts-ignore
  store.activeExercise = subsection.value.listen[index]
  router.push({ name: 'exercise' })
}
</script>

<style lang="sass" scoped>
.page__header
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
