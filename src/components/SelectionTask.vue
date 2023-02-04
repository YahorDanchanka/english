<template>
  <div class="selection-task">
    <div class="selection-task__title">{{ task.title }}</div>
    <ol class="selection-task__options" type="A">
      <li
        class="selection-task__option"
        v-for="(option, optionIndex) in task.options"
        :class="{ 'selection-task__option_active': optionIndex === task.value }"
        @click="selectOption(optionIndex)"
      >
        {{ option }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { SelectionTask } from 'src/types'

const props = defineProps<{ task: SelectionTask }>()
const emit = defineEmits(['update:task'])

function selectOption(optionIndex: number) {
  emit('update:task', JSON.parse(JSON.stringify({ ...props.task, value: optionIndex })))
}
</script>

<style lang="sass" scoped>
.selection-task__option_active
  outline: 3px solid #A6A6A6
  border-radius: 10px
</style>
