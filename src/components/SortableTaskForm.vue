<template>
  <form class="sortable-task-form row q-col-gutter-md">
    <div class="col-12">
      <q-btn icon="add" color="primary" round @click="addOption" />
    </div>
    <template v-for="(option, optionIndex) in task.options">
      <div class="col-5">
        <q-input
          label="Value"
          :modelValue="option.value"
          outlined
          @update:modelValue="(val) => updateOption(optionIndex, 'value', val)"
        />
      </div>
      <div class="col-5">
        <q-input
          label="Correct"
          :modelValue="option.correct"
          outlined
          @update:modelValue="(val) => updateOption(optionIndex, 'correct', val)"
        />
      </div>
      <div class="col-2 text-center">
        <q-btn icon="delete" color="negative" round @click="removeOption(optionIndex)" />
      </div>
    </template>
  </form>
</template>

<script lang="ts" setup>
import { cloneDeep } from 'lodash'
import { SortableTask } from 'src/types'

const props = defineProps<{ task: SortableTask }>()
const emit = defineEmits(['update:task'])

function updateOption(optionIndex: number, key: string, val: string) {
  const clonedTask = cloneDeep(props.task)

  if (clonedTask.options[optionIndex]) {
    clonedTask.options[optionIndex] = { ...clonedTask.options[optionIndex], ...{ [key]: val } }
  }

  emit('update:task', clonedTask)
}

function addOption() {
  const clonedTask = cloneDeep(props.task)
  clonedTask.options.push({ value: '', correct: '' })
  emit('update:task', clonedTask)
}

function removeOption(optionIndex: number) {
  const clonedTask = cloneDeep(props.task)
  clonedTask.options = clonedTask.options.filter((o, i) => i !== optionIndex)
  emit('update:task', clonedTask)
}
</script>
