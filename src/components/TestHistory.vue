<template>
  <AppCard class="test-history">
    <AppCard class="test-history__card" title="Last done tasks:">
      <div class="test-history__list">
        <div v-if="!hasDoneTasks" class="text-center">Not found :(</div>
        <template v-else>
          <div class="test-history__item done-task shadow-2" v-for="result in statisticsStore.latestStatistics">
            <div class="done-task__title">{{ result.title }}</div>
            <div class="done-task__result">Done: {{ result.percentCorrectAnswers.toFixed(0) }}%</div>
            <div class="done-task__score">{{ capitalize(getType(result.percentCorrectAnswers)) }}</div>
          </div>
        </template>
      </div>
    </AppCard>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { capitalize } from 'lodash'
import { useStatisticsStore } from 'stores/statistics'
import { getType } from 'src/services/test-result'
import AppCard from 'components/AppCard.vue'

const statisticsStore = useStatisticsStore()

const hasDoneTasks = computed(() => statisticsStore.statistics.length > 0)
</script>

<style lang="sass" scoped>
.test-history
  background: #C7C7C7
  padding: 8px

.test-history__card
  background: #B4B1B1
  padding: 9px 5px

.test-history__card :deep(.app-card__title)
  text-shadow: none
  font-size: 1em
  font-weight: bold
  margin-bottom: 9px

.test-history__item
  margin-bottom: 5px

.test-history__item:last-child
  margin-bottom: 0

.done-task
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  background-color: #C7C7C7
  border-radius: 7px
  padding: 18px 10px
  font-weight: bold
  font-size: 0.9rem
  gap: 10px

.done-task__title, .done-task__result, .done-task__score
  width: calc(100% / 3 - 10px + (10px / 3))
</style>
