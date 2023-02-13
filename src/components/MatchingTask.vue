<template>
  <div class="matching-task" ref="taskElem">
    <div class="matching-task__content" v-html="content"></div>
    <div class="matching-task__options">
      <div class="matching-task__option" v-for="(option, optionKey) in options" @click="insertOption(optionKey)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { cloneDeep, mapValues } from 'lodash'
import Mustache from 'mustache'
import { MatchingTask } from 'src/types'

const props = defineProps<{ task: MatchingTask & { error?: boolean } }>()
const emit = defineEmits(['update:task'])

const taskElem = ref<HTMLElement>()

const content = computed(() =>
  Mustache.render(
    props.task.content,
    mapValues(props.task.value, (value, key) => `<span data-option-key="${key}">${value || '_________'}</span>`)
  )
)

const options = computed(() => {
  const result = {}

  for (const key in props.task.correct) {
    if (!Object.values(props.task.value).includes(props.task.correct[key])) {
      result[key] = props.task.correct[key]
    }
  }

  return result
})

/** Добавляем в первое пустое значение */
function insertOption(key: string) {
  const value = cloneDeep(props.task.value)

  for (const valueKey in value) {
    if (value[valueKey] === '') {
      value[valueKey] = props.task.correct[key]
      break
    }
  }

  emit('update:task', cloneDeep({ ...props.task, value }))
}

function removeOption(key: string) {
  const value = cloneDeep(props.task.value)
  // @ts-ignore
  value[key] = ''
  emit('update:task', cloneDeep({ ...props.task, value }))
}

function handleRenderedHtml() {
  if (!taskElem.value) return

  const optionElems = taskElem.value!.querySelectorAll('.matching-task__content span[data-option-key]')
  optionElems.forEach((optionElem) => {
    const optionKey = optionElem.getAttribute('data-option-key')!

    if (props.task.error && props.task.value[optionKey].toLowerCase() !== props.task.correct[optionKey].toLowerCase()) {
      optionElem.classList.add('span_error')
    }

    optionElem.addEventListener('click', () => {
      removeOption(optionKey)
    })
  })
}

onMounted(() => {
  handleRenderedHtml()
})

watch(
  [content, () => props.task.error],
  () => {
    handleRenderedHtml()
  },
  { flush: 'post' }
)
</script>

<style lang="sass" scoped>
.matching-task__content :deep(span[data-option-key])
  outline: 1px solid

.matching-task__options
  display: flex
  flex-wrap: wrap
  justify-content: center
  gap: 9px

.matching-task__option
  background: #CDCDCD
  padding: 3px 15px
  border-radius: 7px
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5)

:deep(.span_error)
  outline: 1px solid var(--q-negative) !important
</style>
