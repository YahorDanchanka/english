<template>
  <header
    class="header"
    :class="{ header_view_profile: view === 'profile', header_view_navigation: view === 'navigation' }"
  >
    <template v-if="view === 'profile'">
      <UserAvatar class="header__avatar" name="One2Ti" />
      <div class="header__level">LVL 1</div>
      <ProgressBar class="header__progress-bar" :value="progress" />
    </template>
    <template v-if="view === 'navigation'">
      <q-btn v-if="!navigationBack" icon="home" flat round @click="router.push({ name: 'home' })" />
      <q-btn icon="west" v-else flat round @click="router.back()" />
      <div class="header__title" v-if="title">{{ title }}</div>
      <q-btn icon="settings" flat round @click="router.push({ name: 'settings' })" />
    </template>
    <template v-if="view === 'back'">
      <q-btn icon="west" flat round @click="router.back()" />
    </template>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserAvatar from 'components/UserAvatar.vue'
import ProgressBar from 'components/ProgressBar.vue'

const props = withDefaults(
  defineProps<{ view?: 'profile' | 'navigation' | 'back'; title?: string; navigationBack?: boolean }>(),
  {
    view: 'navigation',
  }
)
const router = useRouter()

const progress = ref(50)
</script>

<style lang="sass" scoped>
.header_view_profile
  display: flex
  flex-wrap: wrap
  align-items: center
  font-size: 0.625rem

.header_view_navigation
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  text-align: center

.header__avatar, .header__level
  margin-right: 16px

.header__level, .header__progress-bar
  margin-top: -20px

.header__progress-bar
  flex-grow: 1
  box-shadow: 0 4px 1px rgba(0, 0, 0, 0.3)
  padding: 2px !important
  height: 24px

.header__title
  font-size: 1.9em
  text-shadow: 0 5px 4px rgba(0, 0, 0, 0.25)
</style>
