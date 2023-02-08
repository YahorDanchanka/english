<template>
  <q-page class="settings-page page" padding>
    <TheHeader class="page__header" view="back" />
    <AppCard class="settings-page__card" title="Settings">
      <AppToggle class="toggle" label="Sound effects" v-model="toggles.soundEffects" />
      <AppToggle class="toggle" label="Vibration" v-model="toggles.vibration" />
      <AppToggle class="toggle" label="Music" v-model="toggles.music" />
      <div class="buttons">
        <AppButton class="btn" label="Privacy & Policy" />
        <AppButton class="btn" label="Parent’s Guide" />
        <AppButton class="btn" label="Credits" />
      </div>
    </AppCard>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppToggle from 'components/AppToggle.vue'
import AppButton from 'components/AppButton.vue'
import TheHeader from 'components/TheHeader.vue'
import AppCard from 'components/AppCard.vue'

const router = useRouter()

const toggles = ref({
  soundEffects: false,
  vibration: false,
  music: false,
})
</script>

<style lang="sass" scoped>
.settings-page
  display: flex
  flex-wrap: wrap
  flex-direction: column

.settings-page__card
  flex-grow: 1

.toggle
  justify-content: space-between
  width: 200px
  margin-bottom: 19px

  &:last-child
    margin-bottom: 0

.buttons
  display: flex
  flex-wrap: wrap
  flex-direction: column
  align-items: center
  gap: 17px
  padding-top: 10px

.btn
  width: 234px
</style>
