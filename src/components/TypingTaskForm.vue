<template>
  <form class="typing-task-form">
    <q-input
      class="q-mb-sm"
      label="Title"
      :modelValue="task.title"
      outlined
      hide-bottom-space
      @update:modelValue="(val) => $emit('update:task', { ...task, title: val })"
    />
    <q-input
      class="q-mb-sm"
      label="Word"
      hint="Enter the correct letter in []"
      :modelValue="task.word"
      outlined
      hide-bottom-space
      @update:modelValue="(val) => $emit('update:task', { ...task, word: val })"
    />
  </form>
</template>

<script lang="ts" setup>
import { TypingTask } from 'src/types'

defineProps<{ task: TypingTask }>()
defineEmits(['update:task'])
</script>
