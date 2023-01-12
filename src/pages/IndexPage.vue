<template>
  <q-page
    class="page"
    :padding="!isSplashScreenVisible"
    :class="{ animate__animated: !isSplashScreenVisible, animate__fadeIn: !isSplashScreenVisible }"
  >
    <template v-if="isSplashScreenVisible">
      <SplashScreen style="min-height: inherit" @finish="onLoadFinish" />
    </template>
    <template v-else>
      <header class="page__header user-info">
        <UserAvatar class="user-info__avatar" name="One2Ti" />
        <div class="user-info__level">LVL 1</div>
        <ProgressBar class="user-info__progress-bar" :value="progress" />
      </header>
      <div class="page__categories"></div>
    </template>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SplashScreen from 'src/components/SplashScreen.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import ProgressBar from 'src/components/ProgressBar.vue'

const isSplashScreenVisible = ref(true)
const progress = ref(50)

function onLoadFinish() {
  setTimeout(() => {
    isSplashScreenVisible.value = false
  }, 1000)
}
</script>

<style lang="sass" scoped>
.user-info
  display: flex
  flex-wrap: wrap
  align-items: center
  font-size: 0.625rem

.user-info__avatar, .user-info__level
  margin-right: 16px

.user-info__level, .user-info__progress-bar
  margin-top: -20px

.user-info__progress-bar
  flex-grow: 1
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.3)
  padding: 2px !important
  height: 24px
</style>
