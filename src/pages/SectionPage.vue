<template>
  <q-page class="section-page page" padding>
    <TheHeader class="page__header" />
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
      loop
      navigation
    >
      <template v-slot:container-start>
        <div class="slider__pagination pagination"></div>
        <q-icon name="navigate_before" class="slider__navigation-button slider__navigation-button_prev" />
        <q-icon name="navigate_next" class="slider__navigation-button slider__navigation-button_next" />
      </template>
      <swiper-slide
        class="section-page__slide"
        v-for="subsection in subsections"
        @click="
          router.push({ name: 'task-list', params: { section: route.params['section'], subsection: subsection.id } })
        "
      >
        <AppCard class="section-page__card text-center" :title="subsection.title">
          <p>
            Description:
            {{
              subsection.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat, purus vitae feugiat tincidunt, ligula nibh tincidunt mauris, eget placerat urna sem at purus. Phasellus semper euismod suscipit.'
            }}
          </p>
          <img :src="subsection.image" />
        </AppCard>
      </swiper-slide>
    </Swiper>
    <img class="page__island" src="~assets/images/island.svg" alt="Island" />
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useStore } from 'stores/main'
import { Subsection } from 'src/types'
import TheHeader from 'components/TheHeader.vue'
import AppCard from 'components/AppCard.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()
const modules = [Pagination, Navigation]

const subsections = computed<Subsection[]>(
  () => store.sections.find((section) => section.id == route.params['section'])?.subsections || []
)
</script>

<style lang="sass" scoped>
.page
  display: flex
  flex-wrap: wrap
  align-items: center

.page__header
  margin-bottom: auto

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

:deep(.section-page__slide)
  display: flex
  flex-wrap: wrap
  height: auto

.section-page__card p
  font-size: 0.875em
  margin-bottom: 25px
  line-height: 17px

.section-page__card img
  max-width: 200px
</style>
