<template>
  <q-page class="page" padding>
    <header class="page__header">
      <q-btn icon="west" flat round @click="router.back()" />
    </header>
    <div class="card">
      <div class="card__title">Settings</div>
      <div class="card__body">
        <AppToggle class="toggle" label="Sound effects" v-model="toggles.soundEffects" />
        <AppToggle class="toggle" label="Vibration" v-model="toggles.vibration" />
        <AppToggle class="toggle" label="Music" v-model="toggles.music" />
        <div class="buttons">
          <AppButton class="btn" label="Privacy & Policy" />
          <AppButton class="btn" label="Parent’s Guide" />
          <AppButton class="btn" label="Credits" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppToggle from 'components/AppToggle.vue'
import AppButton from 'components/AppButton.vue'

const router = useRouter()

const toggles = ref({
  soundEffects: false,
  vibration: false,
  music: false,
})
</script>

<style lang="sass" scoped>
.page__header
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  width: 100%
  margin-bottom: 8px

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
