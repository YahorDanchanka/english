<script lang="ts">
// @ts-ignore
import { h, PropType, compile } from 'vue/dist/vue.esm-bundler'
import Mustache from 'mustache'
import { SelectTask } from 'src/types'
import { cloneDeep, mapValues, set } from 'lodash'

export default {
  props: {
    task: {
      type: Object as PropType<SelectTask>,
      required: true,
    },
    taskIndex: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  render() {
    // @ts-ignore
    const { task }: { task: SelectTask & { error?: boolean }; taskIndex: number } = this

    const content = Mustache.render(
      task.content,
      mapValues(
        task.selects,
        (value, selectKey) => `
        <select :value="${
          value.selectedOptionIndex !== undefined ? value.selectedOptionIndex : "''"
        }" :class="{'select-task__error': ${Boolean(
          task.error && value.selectedOptionIndex !== value.correctOptionIndex
        )}}" @change="setSelectedOptionIndex('${selectKey}', parseInt($event.target.value))">
          <option value="" disabled>Please select one</option>
          ${value.options.map((option, optionIndex) => `<option :value="${optionIndex}">${option}</option>`)}
        </select>
      `
      )
    )

    return h(
      'div',
      { class: 'select-task' },
      h(compile(content), {
        setSelectedOptionIndex: (selectKey: string, optionIndex: number) => {
          if (isNaN(optionIndex)) return
          const clonedTask = cloneDeep(task)
          // @ts-ignore
          this.$emit('update:task', set(clonedTask, `selects.${selectKey}.selectedOptionIndex`, optionIndex))
        },
      })
    )
  },
}
</script>

<style lang="sass">
.select-task__error
  outline: 1px solid var(--q-negative)
</style>
