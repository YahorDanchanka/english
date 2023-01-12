<template>
  <q-page
    :padding="!isSplashScreenVisible"
    :class="{ animate__animated: !isSplashScreenVisible, animate__fadeIn: !isSplashScreenVisible }"
  >
    <template v-if="isSplashScreenVisible">
      <SplashScreen style="min-height: inherit" @finish="onLoadFinish" />
    </template>
    <template v-else> Index page </template>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SplashScreen from 'src/components/SplashScreen.vue'

const isSplashScreenVisible = ref(true)

function onLoadFinish() {
  setTimeout(() => {
    isSplashScreenVisible.value = false
  }, 1000)
}
</script>
