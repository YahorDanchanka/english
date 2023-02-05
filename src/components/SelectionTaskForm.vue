<template>
  <form class="selection-task-form">
    {{ task }}
    <q-input label="Task title" v-model="task.title" hide-bottom-space />
    <q-input label="Options" v-model="stringOptions" hint="Separate words with a ||" hide-bottom-space />
    <ol v-show="stringOptions.length" type="A">
      <li
        class="selection-task-form__option"
        v-for="(option, optionIndex) in task.options"
        :class="{ 'selection-task-form__option_active': optionIndex === task.correctOptionIndex }"
        @click="task.correctOptionIndex = optionIndex"
      >
        {{ option }}
      </li>
    </ol>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { cloneDeep } from 'lodash'
import { SelectionTask } from 'src/types'

const props = withDefaults(defineProps<{ task?: SelectionTask & { interface: 'SelectionTask' } }>(), {
  task: () => ({ title: '', options: [], correctOptionIndex: 0, interface: 'SelectionTask' }),
})

const task = ref(cloneDeep(props.task))
const stringOptions = ref(props.task.options.join('||'))

watch(stringOptions, () => {
  if (stringOptions.value === '') {
    task.value.options = []
    return
  }

  task.value.options = stringOptions.value.split('||')
})
</script>

<style lang="sass" scoped>
.selection-task-form__option_active
  font-weight: bold
</style>
