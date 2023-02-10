<template>
  <form class="exercise-form">
    <label for="" class="exercise-form__label">Content</label>
    <textarea class="exercise-form__editor" ref="editor"></textarea>
    <AppCard class="shadow-1 q-mb-md" title="Tasks">
      <template #title="titleProps">
        {{ titleProps.title }}
        <q-btn class="q-ml-sm" icon="add" color="primary" round dense @click="addTask" />
      </template>
      <div v-for="(task, taskIndex) in exercise.tasks" :class="{ 'q-mb-md': taskIndex !== exercise.tasks.length - 1 }">
        <div class="text-h6 q-mb-sm">
          Task №{{ taskIndex + 1 }}
          <q-btn class="q-ml-sm" icon="delete" color="negative" round dense @click="removeTask(taskIndex)" />
        </div>
        <TaskForm v-model:task="exercise.tasks[taskIndex]" />
      </div>
    </AppCard>
    <q-btn label="Copy object" color="primary" @click="copyExercise" />
  </form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import tinymce from 'tinymce'
import { Exercise } from 'src/types'
import AppCard from 'components/AppCard.vue'
import TaskForm from 'components/TaskForm.vue'
import { clone, zipObject } from 'lodash'

const editor = ref<HTMLTextAreaElement | null>(null)
const exercise = ref<Exercise>({
  content: '',
  tasks: [
    {
      title: 'According to the guide, which is not a common way of greeting.',
      options: ['saying "Pleased to meet you"', 'kissing each other’s hands', 'bowing', 'shaking hands'],
      correctOptionIndex: 1,
      interface: 'SelectionTask',
    },
  ],
})

function addTask() {
  const taskType = parseInt(
    prompt(
      'Тип теста: 0 - Одиночный выбор, 1 - Множественный выбор, 2 - Вставить букву, 3 - Вписать пропущенные слова в текст, 4 - Вставить пропущенные слова в текст, 5 - Соотношение'
    ) || '0'
  )

  if (taskType === 0) {
    exercise.value.tasks.push({ title: '', options: [], correctOptionIndex: 0, interface: 'SelectionTask' })
  } else if (taskType === 1) {
    exercise.value.tasks.push({ title: '', options: [], correctOptionIndexes: [], interface: 'MultipleSelectionTask' })
  } else if (taskType === 2) {
    exercise.value.tasks.push({ title: '', word: '', interface: 'TypingTask' })
  } else if (taskType === 3) {
    exercise.value.tasks.push({ content: '', correct: {}, value: {}, interface: 'TextInputTask' })
  } else if (taskType === 4) {
    exercise.value.tasks.push({ content: '', correct: {}, value: {}, interface: 'MatchingTask' })
  } else if (taskType === 5) {
    exercise.value.tasks.push({ options: [], leftCol: [], rightCol: [], interface: 'SortableTask' })
  }
}

function removeTask(taskIndex: number) {
  exercise.value.tasks = exercise.value.tasks.filter((t, i) => i !== taskIndex)
}

function copyExercise() {
  const copied = JSON.stringify(exercise.value)
  console.log(copied)
  navigator.clipboard.writeText(copied)
}

onMounted(() => {
  tinymce.init({
    target: editor.value!,
    height: 200,
    setup(editor) {
      editor.on('change', () => {
        exercise.value.content = editor.getContent()
      })
    },
  })
})
</script>

<style lang="sass" scoped>
.exercise-form
  font-size: 1rem

.exercise-form__label
  display: block
  margin-bottom: 10px

:deep(.tox-tinymce)
  margin-bottom: 10px
</style>
