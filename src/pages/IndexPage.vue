<template>
  <q-page
    class="start-page page"
    :padding="!store.isSplashScreenVisible"
    :class="{ animate__animated: !store.isSplashScreenVisible, animate__fadeIn: !store.isSplashScreenVisible }"
  >
    <template v-if="store.isSplashScreenVisible">
      <SplashScreen style="min-height: inherit" @finish="onLoadFinish" />
    </template>
    <template v-else>
      <!-- Animation objects -->
      <img
        class="start-page__icon start-page__icon_island"
        src="~assets/images/icons/island.png"
        alt="Island icon"
        style="right: 35px"
      />
      <img
        class="start-page__icon start-page__icon_ship start-page__icon_ship1"
        src="~assets/images/icons/ship.png"
        alt="Ship icon"
      />
      <img
        class="start-page__icon start-page__icon_island"
        src="~assets/images/icons/island.png"
        alt="Island icon"
        style="left: 35px; top: 500px"
      />
      <img
        class="start-page__icon start-page__icon_ship start-page__icon_ship2"
        src="~assets/images/icons/ship2.png"
        alt="Ship icon"
      />
      <TheHeader view="profile" />
      <div class="page__islands islands">
        <AppIsland
          class="islands__item islands__item_right"
          title="English for IT Industry"
          :icon="KeyboardIcon"
          @click="visitSection(store.sections[0])"
        />
        <AppIsland
          class="islands__item"
          title="Computers today"
          :icon="MonitorIcon"
          @click="visitSection(store.sections[1])"
        />
        <AppIsland
          class="islands__item islands__item_right"
          title="Hardware"
          :icon="CPUIcon"
          @click="visitSection(store.sections[2])"
        />
        <AppIsland
          class="islands__item islands__item_center"
          title="Software"
          :icon="DevOpsIcon"
          @click="visitSection(store.sections[3])"
        />
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
import { useStore } from 'stores/main'
import { Section } from 'src/types'
import SplashScreen from 'src/components/SplashScreen.vue'
import AppIsland from 'src/components/AppIsland.vue'
import KeyboardIcon from 'assets/images/islands/keyboard.png'
import MonitorIcon from 'assets/images/islands/monitor.png'
import CPUIcon from 'assets/images/islands/cpu.png'
import DevOpsIcon from 'assets/images/islands/devops.png'
import ReflectionIcon from 'assets/images/islands/reflection.png'
import CSharpIcon from 'assets/images/islands/csharp.png'
import SecurityIcon from 'assets/images/islands/security.png'
import TheHeader from 'components/TheHeader.vue'

const router = useRouter()
const store = useStore()

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
    store.isSplashScreenVisible = false
    store.backgroundMusic = new Audio('/assets/audio/menu.mp3')
  }, 1000)
}

function visitSection(section: Section) {
  router.push({ name: 'section', params: { section: section.id } })
}
</script>

<style lang="sass" scoped>
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

.start-page
  position: relative
  overflow: hidden

.start-page__icon
  position: absolute
  right: 72px
  top: 250px
  user-select: none

.start-page__icon_ship
  max-width: 50px

.start-page__icon_ship1
  animation: ship-moving 10s linear infinite

.start-page__icon_ship2
  animation: ship-moving1 10s linear infinite

.start-page__icon_island
  max-width: 40px

@keyframes ship-moving
  from
    right: -50px
    top: 250px

  to
    right: 500px
    top: 450px


@keyframes ship-moving1
  from
    left: -50px
    top: 550px

  to
    left: 500px
    top: 750px
</style>
