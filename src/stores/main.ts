import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Section } from 'src/types'
import JobInterviewImage from 'assets/images/sections/job-interview.png'
import ITImage from 'assets/images/sections/it.png'
import BrainImage from 'assets/images/sections/brain.png'
import TalkingImage from 'assets/images/sections/talking.png'
import PresentationImage from 'assets/images/sections/presentation.png'
import AgreementImage from 'assets/images/sections/agreement.png'
import Agreement1Image from 'assets/images/sections/agreement1.png'
import WebBrowserImage from 'assets/images/sections/web-browser.png'

export const useStore = defineStore('main', () => {
  const sections = ref<Section[]>([
    { title: 'Meeting people', image: JobInterviewImage },
    { title: 'Working in IT industry', image: ITImage },
    { title: 'Stress', image: BrainImage },
    { title: 'Conversations', image: TalkingImage },
    { title: 'Presentations', image: PresentationImage },
    { title: 'Business meeting', image: AgreementImage },
    { title: 'Negotiations', image: Agreement1Image },
    { title: 'Applying for a job', image: WebBrowserImage },
  ])

  return {
    sections,
  }
})
