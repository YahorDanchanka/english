<template>
  <AppCard class="result-card" :title="title">
    <div class="result-card__text">Your score {{ score }}/{{ total }}</div>
    <div class="result-card__preview">
      <img v-if="type === 'excellent'" src="~assets/images/result/excellence.png" alt="Excellence" />
      <img v-else-if="type === 'good'" src="~assets/images/result/good.png" alt="Good" />
      <img v-else-if="type === 'ok'" src="~assets/images/result/ok.png" alt="OK" />
      <img v-else-if="type === 'bad'" src="~assets/images/result/bad.png" alt="Bad" />
    </div>
    <q-btn class="result-card__btn" label="Try again" padding="4px 30px" @click="$emit('try-again')" />
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { capitalize } from 'lodash'
import AppCard from 'components/AppCard.vue'
import { getType } from 'src/services/test-result'

const props = defineProps<{ score: number; total: number }>()
defineEmits(['try-again'])

const percentScore = computed(() => (props.score * 100) / props.total)
const type = computed(() => getType(percentScore.value))
const title = computed(() => capitalize(type.value))
</script>

<style lang="sass" scoped>
.result-card
  text-align: center

  :deep(.app-card__body)
    font-size: 1.5em
    font-weight: 400

  :deep(.app-card__title)
    font-size: 2.5em
    font-weight: 600
    color: #030303
    text-shadow: none
    text-transform: uppercase
    margin-bottom: 10px

  :deep(img)
    max-width: 230px

  &__preview
    margin-bottom: 60px

  &__text
    margin-bottom: 60px

  &__btn
    font-weight: 600
    font-size: 1em
    border-radius: 7px
    background-color: #3863A4
    color: white
</style>
