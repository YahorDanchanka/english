<template>
  <q-page class="page" padding>
    <TheHeader class="page__header" />
    <AppCard class="profile">
      <UserAvatar class="profile__avatar" name="One2Ti" />
      <TestHistory />
    </AppCard>
  </q-page>
</template>

<script setup lang="ts">
import TheHeader from 'components/TheHeader.vue'
import AppCard from 'components/AppCard.vue'
import UserAvatar from 'components/UserAvatar.vue'
import TestHistory from 'components/TestHistory.vue'
</script>

<style lang="sass" scoped>
.profile__avatar
  width: 100px
  margin: 0 auto 25px auto

.profile__avatar :deep(.avatar__icon)
  background: #C7C7C7

.profile__avatar :deep(.avatar__name)
  font-weight: bold
</style>
