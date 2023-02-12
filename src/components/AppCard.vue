<template>
  <div class="app-card">
    <slot name="afterbegin" />
    <div class="app-card__title" v-if="title" :class="{ 'app-card__title_small': title.length >= 16 }">
      <slot name="title" :title="title">{{ title }}</slot>
    </div>
    <div class="app-card__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title?: string }>()
</script>

<style lang="sass" scoped>
.app-card
  background-color: #D9D9D9
  font-size: 1rem
  color: #4D3A3A
  border-radius: 20px
  padding: 25px 15px

  &_with_circle::before
    content: ''
    display: inline-block
    width: 26px
    height: 26px
    background: #EA5858
    border: 1px solid black
    border-radius: 50%
    margin-bottom: 10px

  &_bordered
    border: 1px solid black

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

  :deep(h2)
    font-size: 1.6em
    margin-top: 0
    line-height: normal
    margin-bottom: 10px
    text-align: center

  :deep(ol), :deep(ul)
    margin: 0 0 20px 0

  :deep(audio)
    width: 100%
    margin-bottom: 20px
</style>
