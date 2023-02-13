<template>
  <q-page class="task-list-page page" padding>
    <TheHeader class="page__header" :title="subsection.title" navigation-back />
    <div class="task-list-page__board board">
      <div class="board__wrapper">
        <div class="row" v-if="taskPathes.length === 0">
          <div class="col-12 text-center">Tasks not found :(</div>
        </div>
        <div class="row q-col-gutter-lg" v-else>
          <div class="col-6" style="display: none">
            <div
              class="board__task board__task_right task"
              style="margin-top: 0"
              v-if="subsection.texts?.length"
              @click="
                router.push({
                  name: 'text-tasks',
                  params: { section: route.params['section'], subsection: route.params['subsection'], text: 0 },
                })
              "
            >
              <div class="task__circle task__circle_green"></div>
              <div class="task__caption">Text</div>
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
            </div>
          </div>
          <div
            class="col-6"
            style="display: none"
            v-if="subsection.listen?.length"
            @click="
              router.push({
                name: 'listen-tasks',
                params: { section: route.params['section'], subsection: route.params['subsection'] },
              })
            "
          >
            <div class="board__task board__task_right task">
              <div class="task__circle task__circle_blue"></div>
              <div class="task__caption">Listen</div>
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
            </div>
          </div>
          <div class="col-6" v-for="(taskPath, taskPathIndex) in taskPathes">
            <div
              class="board__task task"
              :class="{ board__task_right: taskPathIndex % 2 !== 0 }"
              :style="taskPathIndex === 0 ? { 'margin-top': '0' } : null"
              @click="goToCategoryTask(taskPath)"
            >
              <div
                class="task__circle"
                :class="{
                  task__circle_green: (taskPathIndex + 1) % 2 === 0,
                  task__circle_yellow: (taskPathIndex + 1) % 3 === 0,
                }"
              ></div>
              <div class="task__caption">{{ taskPath.label }}</div>
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
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
      result.push({ label: 'Text', path: `texts[${index}]` })
    }
  }

  if (subsection.value.listen !== undefined) {
    result.push({ label: 'Listen', path: 'listen' })
  }

  if (subsection.value.dialog !== undefined) {
    result.push({ label: 'Dialog', path: 'dialog' })
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

.task-list-page__board
  flex-grow: 1

.board
  background: #995B31
  padding: 18px
  border-radius: 16px
  border: 5px solid #7A4019
  height: 80vh

.board__wrapper
  background: #B56C3A
  border-radius: 16px
  padding: 23px
  border: 5px solid #A35623
  height: 100%

.board__task
  margin-top: -50px

  &_right
    margin-top: 80px

.task
  background: #D9D9D9
  border-radius: 16px
  padding: 6.84px 0 25px 0
  text-align: center
  font-size: 1rem

.task__circle
  width: 13.81px
  height: 13.81px
  background-color: #EA5858
  border-radius: 50%
  margin: 0 auto 7px auto

  &_green
    background-color: #5D9940

  &_yellow
    background-color: #FFC700

.task__caption
  color: #3D3030
  font-size: 0.9375em
  text-transform: uppercase

.task__hr
  border: none
  height: 1px
  background-color: black
  margin-bottom: 16.52px
  width: 60%

  &:last-child
    margin-bottom: 0
</style>
