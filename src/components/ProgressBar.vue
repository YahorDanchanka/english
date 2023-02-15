<template>
  <div class="progress-bar">
    <div class="progress-bar__value-bar" :style="{ width: `${value}%` }"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ value: number }>()
</script>

<style lang="sass" scoped>
.progress-bar
  background: #D9D9D9
  border-radius: 11px
  overflow: hidden

.progress-bar__value-bar
  background-color: #7EC865
  height: 100%
  border-radius: 20px
  transition: width 0.8s
</style>
