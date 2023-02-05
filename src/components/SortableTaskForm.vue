<template>
  <form class="selection-task-form">
    {{ task }}
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-btn icon="add" @click="addOption" />
      </div>
      <template v-for="option in task.options">
        <div class="col-5">
          <q-input label="Value" v-model="option.value" />
        </div>
        <div class="col-5">
          <q-input label="Correct" v-model="option.correct" />
        </div>
        <div class="col-2 text-center">
          <q-btn icon="remove" round @click="removeOption(option)" />
        </div>
      </template>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cloneDeep } from 'lodash'
import { SortableTask } from 'src/types'

const props = withDefaults(defineProps<{ task?: SortableTask & { interface: 'SortableTask' } }>(), {
  task: () => ({ options: [], leftCol: [], rightCol: [], interface: 'SortableTask' }),
})

const task = ref(cloneDeep(props.task))

function addOption() {
  task.value.options.push({ value: '', correct: '' })
}

function removeOption(option: SortableTask['options'][0]) {
  task.value.options = task.value.options.filter((o) => o !== option)
}
</script>
