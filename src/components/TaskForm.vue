<template>
  <form class="task-form">
    <SelectionTaskForm v-if="isSelectionTask(task)" :task="task" @update:task="(val) => $emit('update:task', val)" />
    <MultipleSelectionTaskForm
      v-if="isMultipleSelectionTask(task)"
      :task="task"
      @update:task="(val) => $emit('update:task', val)"
    />
    <TypingTaskForm v-if="isTypingTask(task)" :task="task" @update:task="(val) => $emit('update:task', val)" />
    <MatchingTaskForm
      v-if="isMatchingTask(task) || isTextInputTask(task)"
      :task="task"
      @update:task="(val) => $emit('update:task', val)"
    />
    <SortableTaskForm v-if="isSortableTask(task)" :task="task" @update:task="(val) => $emit('update:task', val)" />
  </form>
</template>

<script lang="ts" setup>
import {
  isMatchingTask,
  isMultipleSelectionTask,
  isSelectionTask,
  isSortableTask,
  isTextInputTask,
  isTypingTask,
  Task,
} from 'src/types'
import SelectionTaskForm from 'components/SelectionTaskForm.vue'
import TypingTaskForm from 'components/TypingTaskForm.vue'
import MatchingTaskForm from 'components/MatchingTaskForm.vue'
import SortableTaskForm from 'components/SortableTaskForm.vue'
import MultipleSelectionTaskForm from 'components/MultipleSelectionTaskForm.vue'

defineProps<{ task: Task }>()
defineEmits(['update:task'])
</script>
