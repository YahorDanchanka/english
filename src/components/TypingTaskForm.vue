<template>
  <form class="selection-task-form">
    {{ task }}
    <q-input label="Task title" v-model="task.title" hide-bottom-space />
    <q-input label="Word" hint="Enter the correct letter in []" v-model="task.word" hide-bottom-space />
    <div class="selection-task-form__example">
      <span>Example: </span>
      <span v-for="letter in formattedWord">{{ letter }}</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { cloneDeep } from 'lodash'
import { SelectionTask, TypingTask } from 'src/types'

const props = withDefaults(defineProps<{ task?: TypingTask & { interface: 'TypingTask' } }>(), {
  task: () => ({ title: '', word: '', interface: 'TypingTask' }),
})

const task = ref(cloneDeep(props.task))

const formattedWord = computed(() => task.value.word.replace(/\[.+?]/g, '_'))
</script>
