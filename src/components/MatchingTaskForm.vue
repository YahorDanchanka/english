<template>
  <form class="selection-task-form">
    {{ task }}
    <div>
      <q-checkbox v-model="write" label="Write" />
    </div>
    <textarea class="selection-task-form__editor" ref="editorHtmlElem"></textarea>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { cloneDeep, zipObject } from 'lodash'
import tinymce from 'tinymce'
import { MatchingTask } from 'src/types'

const props = withDefaults(defineProps<{ task?: MatchingTask & { interface: 'MatchingTask' | 'TextInputTask' } }>(), {
  task: () => ({ content: '', correct: {}, value: {}, interface: 'MatchingTask' }),
})

const editorHtmlElem = ref<HTMLTextAreaElement | null>(null)
const task = ref(cloneDeep(props.task))
const write = ref(false)

watch(
  () => task.value.content,
  () => {
    const options: string[] = []
    const matches = [...task.value.content.matchAll(/{{{(.+?)}}}/g)]

    matches.forEach((match) => {
      options.push(match[1])
    })

    const objectFromOptions = zipObject(options, Array(options.length).fill(''))
    task.value.value = objectFromOptions
    task.value.correct = objectFromOptions
  }
)

watch(write, () => {
  task.value.interface = write.value ? 'TextInputTask' : 'MatchingTask'
})

onMounted(() => {
  tinymce.init({
    target: <HTMLElement>editorHtmlElem.value,
    setup: (editor) => {
      editor.on('change', () => {
        task.value.content = editor.getContent()
      })
    },
  })
})
</script>
