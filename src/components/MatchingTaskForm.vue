<template>
  <form class="selection-task-form">
    {{ task }}
    <div>
      <q-checkbox v-model="write" label="Write" />
    </div>
    <q-editor v-model="task.content" />
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { cloneDeep, zipObject } from 'lodash'
import { MatchingTask } from 'src/types'

const props = withDefaults(defineProps<{ task?: MatchingTask & { interface: 'MatchingTask' | 'TextInputTask' } }>(), {
  task: () => ({ content: '', correct: {}, value: {}, interface: 'MatchingTask' }),
})

const task = ref(cloneDeep(props.task))
const write = ref(false)

watch(
  () => task.value.content,
  () => {
    const options: string[] = []
    const matches = [...task.value.content.matchAll(/{{{(.+?)}}}/g)]

    matches.forEach((match) => {
      options.push(match[1])
    })

    const objectFromOptions = zipObject(options, Array(options.length).fill(''))
    task.value.value = objectFromOptions
    task.value.correct = objectFromOptions
  }
)

watch(write, () => {
  task.value.interface = write.value ? 'TextInputTask' : 'MatchingTask'
})
</script>
