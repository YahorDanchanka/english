<template>
  <div class="input-task" ref="taskElem">
    <div class="input-task__content" v-html="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import Mustache from 'mustache'
import { cloneDeep, mapValues } from 'lodash'
import { TextInputTask } from 'src/types'

const props = defineProps<{ task: TextInputTask & { error?: boolean } }>()
const emit = defineEmits(['update:task'])

const taskElem = ref<HTMLElement>()

const content = computed(() =>
  Mustache.render(
    props.task.content,
    mapValues(
      props.task.value,
      (value, key) => `<input value="${value || ''}" placeholder="_________" data-option-key="${key}">`
    )
  )
)

function updateOption(key: string, val: string) {
  const value = cloneDeep(props.task.value)
  //@ts-ignore
  value[key] = val.toLowerCase()
  emit('update:task', cloneDeep({ ...props.task, value }))
}

function handleRenderedHtml() {
  if (!taskElem.value) return

  const inputElems = taskElem.value!.querySelectorAll('.input-task__content input')
  inputElems.forEach((inputElem) => {
    const optionKey = inputElem.getAttribute('data-option-key')!

    if (props.task.error && props.task.value[optionKey].toLowerCase() !== props.task.correct[optionKey].toLowerCase()) {
      inputElem.classList.add('input_error')
    }

    inputElem.addEventListener('change', (event) => {
      // @ts-ignore
      updateOption(optionKey, event.target.value)
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
.input-task__content :deep(input)
  background: none
  border: none
  outline: none
  width: 67px

:deep(.input_error)
  outline: 1px solid var(--q-negative) !important
</style>
