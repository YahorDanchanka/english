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
      <div class="page__islands islands">
        <AppIsland
          class="islands__item islands__item_right"
          title="English for IT Industry"
          :icon="KeyboardIcon"
          @click="visitSection"
        />
        <AppIsland class="islands__item" title="Computers today" :icon="MonitorIcon" />
        <AppIsland class="islands__item islands__item_right" title="Hardware" :icon="CPUIcon" />
        <AppIsland class="islands__item islands__item_center" title="Software" :icon="DevOpsIcon" />
        <AppIsland class="islands__item" title="Modern IT" :icon="ReflectionIcon" />
        <AppIsland class="islands__item islands__item_right" title="Computer programming" :icon="CSharpIcon" />
        <AppIsland class="islands__item" title="Computer security" :icon="SecurityIcon" />
        <img
          class="islands__pebble"
          src="~assets/images/pebble.png"
          alt="Pebble icon"
          v-for="pebble in pebbles"
          :style="{ left: `${pebble.left}px`, top: `${pebble.top}px` }"
        />
      </div>
    </template>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SplashScreen from 'src/components/SplashScreen.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import ProgressBar from 'src/components/ProgressBar.vue'
import AppIsland from 'src/components/AppIsland.vue'
import KeyboardIcon from 'assets/images/islands/keyboard.png'
import MonitorIcon from 'assets/images/islands/monitor.png'
import CPUIcon from 'assets/images/islands/cpu.png'
import DevOpsIcon from 'assets/images/islands/devops.png'
import ReflectionIcon from 'assets/images/islands/reflection.png'
import CSharpIcon from 'assets/images/islands/csharp.png'
import SecurityIcon from 'assets/images/islands/security.png'

const router = useRouter()

const isSplashScreenVisible = ref(false)
const progress = ref(50)
const pebbles = ref([
  { left: 172, top: 155 },
  { left: 145, top: 176 },
  { left: 120, top: 199 },
  { left: 111, top: 227 },

  { left: 51 + 10, top: 308 + 30 },
  { left: 74 + 10, top: 335 + 30 },
  { left: 103 + 10, top: 356 + 30 },
  { left: 135 + 10, top: 377 + 30 },

  { left: 239, top: 454 + 50 },
  { left: 235, top: 479 + 50 },
  { left: 225, top: 504 + 50 },
  { left: 210, top: 528 + 50 },
  { left: 193, top: 553 + 50 },

  { left: 123, top: 694 - 15 },
  { left: 111, top: 724 - 15 },
  { left: 98, top: 754 - 15 },

  { left: 61 + 20, top: 885 - 20 },
  { left: 80 + 20, top: 913 - 20 },
  { left: 101 + 20, top: 941 - 20 },
  { left: 126 + 20, top: 968 - 20 },

  { left: 212, top: 1050 - 10 },
  { left: 225, top: 1083 - 10 },
  { left: 224, top: 1121 - 10 },
  { left: 204, top: 1154 - 10 },
  { left: 166, top: 1185 - 10 },
])

function onLoadFinish() {
  setTimeout(() => {
    isSplashScreenVisible.value = false
  }, 1000)
}

function visitSection() {
  router.push({ name: 'section', params: { section: 'test' } })
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

.page__islands
  max-width: 300px
  margin: 0 auto

.islands
  position: relative

.islands__item
  width: max-content
  cursor: pointer

  &.islands__item_center
    margin-left: auto
    margin-right: auto

  &.islands__item_right
    margin-left: auto

.islands__pebble
  position: absolute
  user-select: none
</style>
