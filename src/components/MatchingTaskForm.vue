<template>
  <form class="matching-task-form">
    <label class="matching-task-form__label">Content</label>
    <textarea class="matching-task-form__editor" ref="editor">
      {{ task.content }}
    </textarea>
    <q-checkbox label="Writing" v-model="isTextInputTask" />
    <q-input
      v-for="(correctOption, correctOptionKey, correctOptionIndex) in task.correct"
      v-model.trim="task.correct[correctOptionKey]"
      :label="correctOptionKey"
      :class="{ 'q-mb-md': correctOptionIndex !== Object.keys(task.correct).length - 1 }"
      outlined
    />
  </form>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import tinymce from 'tinymce'
import { clone, zipObject } from 'lodash'
import { MatchingTask, TextInputTask } from 'src/types'

const props = defineProps<{ task: (MatchingTask | TextInputTask) & { interface: string } }>()
const emit = defineEmits(['update:task'])

const editor = ref<HTMLTextAreaElement | null>(null)

const isTextInputTask = computed({
  get() {
    return props.task.interface === 'TextInputTask'
  },
  set(newVal) {
    emit('update:task', { ...props.task, interface: newVal ? 'TextInputTask' : 'MatchingTask' })
  },
})

onMounted(() => {
  tinymce.init({
    target: editor.value!,
    setup(editor) {
      editor.on('change', () => {
        const content = editor.getContent()

        const options: string[] = []

        // @ts-ignore
        ;[...content.matchAll(/{{{(.+?)}}}/g)].forEach((match) => {
          options.push(match[1])
        })

        const emptyObjectFromOptions = zipObject(options, Array(options.length).fill(''))
        const correct = clone(emptyObjectFromOptions)

        for (const key in correct) {
          if (props.task.correct.hasOwnProperty(key)) {
            correct[key] = props.task.correct[key]
          }
        }

        emit('update:task', { ...props.task, content, correct, value: emptyObjectFromOptions })
      })
    },
  })
})
</script>

<style lang="sass" scoped>
.matching-task-form__label
  display: block
  margin-bottom: 10px
</style>
