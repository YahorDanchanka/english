<template>
  <div class="avatar">
    <div class="avatar__icon">
      <img src="~assets/images/woman.png" alt="Woman avatar" />
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
  width: 65px

.avatar__icon
  background: #D9D9D9
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.3)
  border-radius: 50%
  padding: 7px
  height: 65px
  margin-bottom: 5px
  user-select: none
</style>
