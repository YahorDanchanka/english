<template>
  <q-page class="task-list-page page" padding>
    <TheHeader class="page__header" :title="subsection.title" navigation-back />
    <div class="task-list-page__wrapper">
      <div class="task-list-page__list">
        <div class="row" v-if="taskPathes.length === 0">
          <div class="col-12 text-center">Tasks not found :(</div>
        </div>
        <div class="row q-col-gutter-md" v-else>
          <div class="col-12" v-for="taskPath in taskPathes">
            <div class="task-list-page__task task" @click="goToCategoryTask(taskPath)">
              <div class="task__caption">{{ taskPath.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'stores/main'
import { Section, Subsection } from 'src/types'
import TheHeader from 'components/TheHeader.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

const section = computed<Section>(() => store.sections.find((section) => section.id === route.params['section'])!)
const subsection = computed<Subsection>(
  () => section.value.subsections.find((subsection) => subsection.id === route.params['subsection'])!
)

const taskPathes = computed<{ label: string; path: string }[]>(() => {
  const result = []

  if (subsection.value.texts !== undefined) {
    for (const index in subsection.value.texts) {
      result.push({ label: `Text «${subsection.value.texts[index].title}»`, path: `texts[${index}]` })
    }
  }

  if (subsection.value.listen !== undefined) {
    result.push({ label: 'Listen', path: 'listen' })
  }

  if (subsection.value.dialog !== undefined) {
    result.push({ label: 'Dialogue', path: 'dialog' })
  }

  return result
})

function goToCategoryTask(taskPath: { label: string; path: string }) {
  if (taskPath.path.startsWith('texts')) {
    const textId = taskPath.path.replace(/\D/g, '')
    router.push({
      name: 'text-tasks',
      params: { section: route.params['section'], subsection: route.params['subsection'], text: textId },
    })

    return
  }

  if (taskPath.path === 'dialog') {
    router.push({
      name: 'dialog-tasks',
      params: { section: route.params['section'], subsection: route.params['subsection'] },
    })

    return
  }

  router.push({
    name: 'listen-tasks',
    params: { section: route.params['section'], subsection: route.params['subsection'] },
  })
}
</script>

<style lang="sass" scoped>
.task-list-page
  display: flex
  flex-wrap: wrap
  flex-direction: column

.task-list-page__wrapper
  display: flex
  flex-wrap: wrap
  flex-direction: column
  flex-grow: 1
  background: #C7C7C7
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 1px rgba(0, 0, 0, 0.3)
  border-radius: 11px
  padding: 12px

.task-list-page__list
  padding: 10px 6px
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25)
  background: #B4B1B1
  border-radius: 11px
  flex-grow: 1

.task
  background: #C7C7C7
  border-radius: 7px
  padding: 1.125em 1.3em
  text-align: center
  font-size: 1rem
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
  cursor: pointer

.task__caption
  color: #4D3A3A
  font-size: 1.5em
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.25)
</style>
