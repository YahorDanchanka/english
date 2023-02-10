<template>
  <q-page class="page" padding>
    <AppCard>
      <ExerciseForm />
    </AppCard>
  </q-page>
</template>

<script lang="ts" setup>
import ExerciseForm from 'components/ExerciseForm.vue'
import AppCard from 'components/AppCard.vue'
</script>

<style lang="sass" scoped>
.page
  max-width: none
</style>
