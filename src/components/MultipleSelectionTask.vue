<template>
  <div class="selection-task">
    <div class="selection-task__title">
      <q-badge class="badge badge_squared" :label="taskIndex + 1" rounded /> {{ task.title }}
    </div>
    <ol class="selection-task__options" type="A">
      <li
        class="selection-task__option"
        v-for="(option, optionIndex) in task.options"
        :class="{
          'selection-task__option_active': task.value?.includes(optionIndex),
          'selection-task__option_error': task.error && task.value?.includes(optionIndex),
          'selection-task__option_correct': task.error !== undefined && task.correctOptionIndexes.includes(optionIndex),
        }"
        @click="toggleOption(optionIndex)"
      >
        {{ option }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { xor } from 'lodash'
import { MultipleSelectionTask } from 'src/types'

const props = defineProps<{ task: MultipleSelectionTask & { error?: boolean }; taskIndex: number }>()
const emit = defineEmits(['update:task'])

function toggleOption(optionIndex: number) {
  emit('update:task', JSON.parse(JSON.stringify({ ...props.task, value: xor(props.task.value, [optionIndex]) })))
}
</script>

<style lang="sass" scoped>
.selection-task__option_active
  outline: 3px solid #A6A6A6
  border-radius: 10px

.selection-task__option_error
  outline: 3px solid var(--q-negative)
  border-radius: 10px

.selection-task__option_correct
  outline: 3px solid var(--q-positive)
  border-radius: 10px
</style>
