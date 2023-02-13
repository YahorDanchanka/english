<template>
  <div class="typing-task">
    <div class="typing-task__title">
      <q-badge class="badge badge_squared" :label="taskIndex + 1" rounded /> {{ task.title }}
    </div>
    <div class="typing-task__word">
      <input
        class="typing-task__letter"
        maxlength="1"
        v-for="(letter, letterIndex) in formattedValue"
        :value="letter !== '_' ? letter : null"
        :placeholder="formattedWord[letterIndex] === '_' ? '_' : null"
        :disabled="formattedWord[letterIndex] !== '_'"
        :class="{ 'typing-task__letter_error': task.error && letter !== correctWord[letterIndex] }"
        @input="setModelValue($event, letterIndex)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { TypingTask } from 'src/types'
import { set } from 'lodash'

const props = defineProps<{ task: TypingTask & { error?: boolean }; taskIndex: number }>()
const emit = defineEmits(['update:task'])

const correctWord = computed(() => props.task.word.replace(/\[|]/g, ''))
const formattedWord = computed(() => props.task.word.replace(/\[.+?]/g, '_'))
const formattedValue = computed(() =>
  props.task.value ? props.task.value.replace(/\[.+?]/g, '_') : formattedWord.value
)

function setModelValue(event: InputEvent, letterIndex: number) {
  // @ts-ignore
  const letter = (event.target.value || '_').toLowerCase()[0]
  const value = props.task.value || formattedWord.value
  emit('update:task', { ...props.task, value: set(value.split(''), letterIndex, letter).join('') })
}
</script>

<style lang="sass" scoped>
.typing-task__word
  display: flex
  flex-wrap: wrap
  font-size: 1.5em

  span
    outline: none

.typing-task__letter
  width: 22px
  background: transparent
  border: none
  outline: none
  padding: 0
  text-align: center

  &::placeholder
    color: black

  &:disabled
    color: black
    opacity: 1 !important

.typing-task__letter_error
  color: var(--q-negative)
</style>
