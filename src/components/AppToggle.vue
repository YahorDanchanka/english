<template>
  <div class="toggle">
    <div class="toggle__label" v-if="!!label" @click="toggle">{{ label }}</div>
    <div class="toggle__track" :class="{ toggle__track_active: modelValue }" @click="toggle">
      <div class="toggle__thumb"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ label?: string; modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="sass" scoped>
.toggle
  display: flex
  align-items: center

.toggle__label
  margin-right: 10px
  font-size: 0.9375em
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.25)
  font-weight: 500

.toggle__track
  display: flex
  flex-wrap: wrap
  align-items: center
  width: 85px
  height: 44px
  background: #C2C2C2
  border: 1px solid #959393
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.25)
  border-radius: 90px
  transition: all 0.3s
  position: relative

  &_active
    background: var(--q-positive)

    .toggle__thumb
      left: calc(100% - 38px - 2px)

.toggle__thumb
  width: 38px
  height: 38px
  background: var(--q-primary)
  border: 1px solid #959494
  border-radius: 50%
  position: absolute
  left: 2px
  transition: all 0.3s
</style>
