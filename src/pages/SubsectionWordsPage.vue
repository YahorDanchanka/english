<template>
  <q-page class="subsection-words-page page">
    <TheHeader class="subsection-words-page__header page__header q-layout-padding" navigation-back />
    <Swiper
      class="page__slider q-mb-lg slider"
      :modules="modules"
      :space-between="34"
      :auto-height="true"
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
        <q-icon name="navigate_before" class="slider__navigation-button slider__navigation-button_prev" />
        <q-icon name="navigate_next" class="slider__navigation-button slider__navigation-button_next" />
      </template>
      <swiper-slide class="section-page__slide" v-for="word in subsection.words">
        <AppCard class="word-card app-card_with_circle app-card_bordered" :title="word.word">
          <div v-html="word.content"></div>
        </AppCard>
      </swiper-slide>
    </Swiper>
    <div class="text-center">
      <q-btn class="subsection-words-page__btn" label="Check yourself" no-caps @click="goToCheckPage" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useStore } from 'stores/main'
import { Section, Subsection } from 'src/types'
import 'swiper/css'
import 'swiper/css/navigation'
import TheHeader from 'components/TheHeader.vue'
import AppCard from 'components/AppCard.vue'

const modules = [Navigation]
const route = useRoute()
const router = useRouter()
const store = useStore()

const section = computed<Section>(() => store.sections.find((section) => section.id === route.params['section'])!)
const subsection = computed<Subsection>(
  () => section.value.subsections.find((subsection) => subsection.id === route.params['subsection'])!
)

function goToCheckPage() {
  router.push({ name: 'subsection-words-check' })
}
</script>

<style lang="sass" scoped>
.subsection-words-page__header
  padding-bottom: 0

.slider
  padding: 0 34px

.slider__navigation-button_prev
  left: -15px

.slider__navigation-button_next
  right: -15px

.word-card
  text-align: center

  :deep(.app-card__title)
    font-size: 2.5em
    font-weight: 800
    font-style: italic
    color: #030303
    text-shadow: none
    margin-bottom: 120px

  :deep(.app-card__body)
    font-size: 2em
    font-weight: 400

    p
      line-height: 39px

    p:last-of-type
      margin-bottom: 75px

  :deep(img)
    max-width: 150px

.subsection-words-page__btn
  background: #828748
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5)
  border-radius: 13px
  color: #F1F1F1
  font-size: 1.5em
  font-weight: 700
</style>
