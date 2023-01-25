<template>
  <div class="island">
    <div class="island__title">
      <div>{{ title }}</div>
      <q-icon name="expand_more" />
    </div>
    <div class="island__body">
      <img class="island__icon" alt="Keyboard" :src="icon" />
      <img class="island__platform" src="~assets/images/island.png" alt="Island" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string; icon: string }>()
</script>

<style lang="sass" scoped>
.island
  font-size: 1rem

.island__title
  font-size: 1.25em
  text-align: center

.island__body
  display: flex
  flex-direction: column
  align-items: center
  user-select: none

.island__icon
  width: 117px
  margin-bottom: -40px
  z-index: 2

.island__platform
  width: 147px
</style>
