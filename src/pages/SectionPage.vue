<template>
  <q-page class="page" padding>
    <header class="page__header">
      <q-btn icon="home" flat round @click="router.push({ name: 'home' })" />
      <q-btn icon="settings" flat round />
    </header>
    <Swiper
      class="page__slider slider"
      :modules="modules"
      :space-between="34"
      :pagination="{
        el: '.pagination',
        bulletClass: 'pagination__bullet',
        bulletActiveClass: 'pagination__bullet_active',
        clickable: true,
      }"
      :navigation="{
        prevEl: '.slider__navigation-button_prev',
        nextEl: '.slider__navigation-button_next',
      }"
      navigation
    >
      <template v-slot:container-start>
        <div class="slider__pagination pagination"></div>
        <q-icon name="navigate_before" class="slider__navigation-button slider__navigation-button_prev" />
        <q-icon name="navigate_next" class="slider__navigation-button slider__navigation-button_next" />
      </template>
      <swiper-slide v-for="section in sections">
        <div class="card">
          <div class="card__title">{{ section.title }}</div>
          <div class="card__body">
            Description:
            {{
              section.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat, purus vitae feugiat tincidunt, ligula nibh tincidunt mauris, eget placerat urna sem at purus. Phasellus semper euismod suscipit.'
            }}
          </div>
          <div class="card__image">
            <img alt="Job interview" :src="section.image" />
          </div>
        </div>
      </swiper-slide>
    </Swiper>
    <img class="page__island" src="~assets/images/island.svg" alt="Island" />
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useStore } from 'stores/main'

const router = useRouter()
const store = useStore()
const modules = [Pagination, Navigation]

const sections = computed(() => store.sections)
</script>

<style lang="sass" scoped>
.page
  display: flex
  flex-wrap: wrap
  align-items: center

.page__header
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  width: 100%
  margin-bottom: 8px

.page__slider
  margin-bottom: 12px

.page__island
  margin: 0 auto auto auto

.slider
  position: relative
  padding: 0 34px

.slider__pagination
  margin-bottom: 19px

.slider__navigation-button
  position: absolute
  top: 50%
  font-size: 4em
  z-index: 2

  &_prev
    left: -15px

  &_next
    right: -15px
</style>
