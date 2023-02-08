<template>
  <div class="app-card">
    <div class="app-card__title" :class="{ 'app-card__title_small': title.length >= 16 }">{{ title }}</div>
    <div class="app-card__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string | number }>()
</script>

<style lang="sass" scoped>
.app-card
  background-color: #D9D9D9
  font-size: 1rem
  color: #4D3A3A
  border-radius: 20px
  padding: 25px 15px

.app-card__title
  font-weight: 500
  font-size: 1.8em
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.25)
  text-align: center
  margin-bottom: 25px
  line-height: normal

  &_small
    font-size: 1.3em

.app-card__body
  :deep(h1)
    font-size: 2em
    margin-top: 0
    line-height: 39px
    margin-bottom: 10px
    text-align: center

  :deep(ol), :deep(ul)
    margin: 0 0 20px 0

  :deep(audio)
    width: 100%
    margin-bottom: 20px
</style>
