<template>
  <form class="selection-task-form">
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
      label="Options"
      hint="Separate options with a ||"
      v-model.trim="stringOptions"
      outlined
      hide-bottom-space
    />
    <ol class="selection-task-form__options" type="A" style="margin-bottom: 0">
      <li
        class="selection-task-form__option"
        v-for="(option, optionIndex) in task.options"
        :class="{ 'selection-task-form__option_active': optionIndex === task.correctOptionIndex }"
        @click="setActiveOption(optionIndex)"
      >
        {{ option }}
      </li>
    </ol>
  </form>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { SelectionTask } from 'src/types'

const props = defineProps<{ task: SelectionTask }>()
const emit = defineEmits(['update:task'])

const stringOptions = computed<string>({
  get() {
    return props.task.options.join('||')
  },
  set(newValue: string) {
    let options: string[] = []

    if (newValue.length > 0) {
      options = newValue.split('||')
    }

    emit('update:task', { ...props.task, options })
  },
})

function setActiveOption(optionIndex: number) {
  emit('update:task', { ...props.task, correctOptionIndex: optionIndex })
}
</script>

<style lang="sass" scoped>
.selection-task-form__option_active
  font-weight: bold
</style>
