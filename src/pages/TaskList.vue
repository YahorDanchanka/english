<template>
  <q-page class="page" padding>
    <header class="page__header">
      <q-btn icon="home" flat round @click="router.push({ name: 'home' })" />
      <div class="page__title">Meeting people</div>
      <q-btn icon="settings" flat round @click="router.push({ name: 'settings' })" />
    </header>
    <div class="board">
      <div class="board__wrapper">
        <div class="row q-col-gutter-lg">
          <div class="col-6">
            <div class="board__task board__task_left task">
              <div class="task__circle"></div>
              <div class="task__caption">Words</div>
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
            </div>
          </div>
          <div class="col-6">
            <div
              class="board__task board__task_right task"
              @click="
                router.push({
                  name: 'text-tasks',
                  params: { section: route.params['section'], subsection: route.params['subsection'] },
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
          <div class="col-6">
            <div class="board__task board__task_left task">
              <div class="task__circle task__circle_yellow"></div>
              <div class="task__caption">Exercise</div>
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
              <hr class="task__hr" />
            </div>
          </div>
          <div
            class="col-6"
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'stores/main'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useStore()

// const hasTextTasks = computed<boolean>(
//   () =>
//     !!(store.sections.find((section) => section.id === route.params['section'])?.subsections || []).find(
//       (subsection) => subsection.id === route.params['subsection']
//     )?.textTasks
// )
</script>

<style lang="sass" scoped>
.page__header
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  width: 100%
  margin-bottom: 8px

.page__title
  font-size: 2em
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.25)

.board
  background: #995B31
  padding: 18px
  border-radius: 16px
  border: 5px solid #7A4019

.board__wrapper
  background: #B56C3A
  border-radius: 16px
  padding: 23px
  border: 5px solid #A35623
  min-height: 500px

.board__task
  max-width: 116px

  &_right
    margin-top: 80px
    max-width: 102px

.task
  background: #D9D9D9
  border-radius: 16px
  padding: 6.84px 25px 23px 25px
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

  &_blue
    background-color: #000F94

.task__caption
  color: #3D3030
  font-size: 0.9375em
  text-transform: uppercase

.task__hr
  border: 1px solid black
  margin-bottom: 16.52px

  &:last-child
    margin-bottom: 0
</style>
