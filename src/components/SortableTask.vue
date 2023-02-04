<template>
  <div class="sortable-task row q-col-gutter-lg">
    <draggable class="col-6" itemKey="id" v-model="leftCol">
      <template #item="{ element }">
        <div class="sortable-task__option" v-html="element.value"></div>
      </template>
    </draggable>
    <draggable class="col-6" itemKey="id" v-model="rightCol">
      <template #item="{ element }">
        <div class="sortable-task__option" v-html="element.value"></div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { uid } from 'quasar'
import draggable from 'vuedraggable'
import { cloneDeep, shuffle } from 'lodash'
import { SortableTask } from 'src/types'

const props = defineProps<{ task: SortableTask }>()
const emit = defineEmits(['update:task'])

const leftCol = computed({
  get: () =>
    props.task.leftCol.length === props.task.options.length
      ? props.task.leftCol.map((option) => ({ id: uid(), value: option }))
      : shuffle(props.task.options.map((option) => ({ id: uid(), value: option.value }))),
  set: (val: { id: string; value: string }[]) => {
    emit(
      'update:task',
      cloneDeep({ ...props.task, leftCol: val.map((v) => v.value), rightCol: rightCol.value.map((v) => v.value) })
    )
  },
})

const rightCol = computed({
  get: () =>
    props.task.rightCol.length === props.task.options.length
      ? props.task.rightCol.map((option) => ({ id: uid(), value: option }))
      : shuffle(props.task.options.map((option) => ({ id: uid(), value: option.correct }))),
  set: (val: { id: string; value: string }[]) => {
    emit(
      'update:task',
      cloneDeep({ ...props.task, rightCol: val.map((v) => v.value), leftCol: leftCol.value.map((v) => v.value) })
    )
  },
})
</script>

<style lang="sass" scoped>
.sortable-task__option
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  border: 3px solid #6D6D6D
  padding: 7px 15px
  border-radius: 56px
  margin-bottom: 20px
  text-align: center
  height: 80px
  overflow: hidden

  :deep(img)
    height: 100%
</style>
