<template>
  <div class="avatar">
    <div class="avatar__icon">
      <img class="avatar__image" src="~assets/images/woman.png" :alt="name" />
    </div>
    <div class="avatar__name">{{ name }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ name: string }>()
</script>

<style lang="sass" scoped>
.avatar
  text-align: center

.avatar__icon
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  background: #D9D9D9
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.3)
  border-radius: 50%
  margin-bottom: 5px
  user-select: none

.avatar__image
  max-width: 70%

.avatar__icon:after
  content: ''
  display: block
  padding-top: 100%
</style>
