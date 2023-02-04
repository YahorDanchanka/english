import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Exercise, Section, Task } from 'src/types'
import JobInterviewImage from 'assets/images/sections/job-interview.png'
// import ITImage from 'assets/images/sections/it.png'
// import BrainImage from 'assets/images/sections/brain.png'
// import TalkingImage from 'assets/images/sections/talking.png'
// import PresentationImage from 'assets/images/sections/presentation.png'
// import AgreementImage from 'assets/images/sections/agreement.png'
// import Agreement1Image from 'assets/images/sections/agreement1.png'
// import WebBrowserImage from 'assets/images/sections/web-browser.png'

export const useStore = defineStore('main', () => {
  const sections = ref<Section[]>([
    {
      id: 's1',
      title: 'English for IT Industry',
      subsections: [
        {
          id: 'ss1',
          title: 'Meeting people',
          image: JobInterviewImage,
          texts: [
            {
              text: '<ol> <li>What do you say and do when you meet a friend?</li> <li>Do people kiss when they greet<br />in your country? Wht do you <br />think of this?</li> </ol> <h1>Etiquette</h1> <p>People around the world say hello and goodbye in different ways. In Asia, many people <strong>bow</strong> when they <strong>greet</strong> each other. This might seem strange to someone in the Middle East. There men sometimes greet each other with a kiss on cheek. In most countries, people shake hands. But in America and Europe the handshake is firm, while in Asia it is often soft. So what do you do when you meet people from other countries? Don&rsquo;t let these customs confuse you. Just be polite. When you meet, say &ldquo;Pleased to meet you&rdquo; and ask &ldquo;How are you&rdquo; When it is time to leave, say &ldquo;It was nice meeting you&rdquo; and &ldquo;I hope we meet again&rdquo;.</p>',
              tasks: [
                [
                  {
                    title: 'According to the guide, which is not a common way of greeting.',
                    options: ['saying "Pleased to meet you"', 'kissing each other’s hands', 'bowing', 'shaking hands'],
                    correctOptionIndex: 0,
                  },
                  {
                    title: 'Test.',
                    options: ['six', 'four', 'nine', 'sixth'],
                    correctOptionIndex: 2,
                  },
                ],
                [
                  {
                    title: 'The manager said, "I am happy to see you".',
                    word: 'css inp[u]t wi[d][t]h by [c]ontent',
                  },
                ],
                [
                  {
                    content:
                      '<p>Most nations have different {{{option1}}} for greeting strangers.</p><p>Japanese {{{option2}}} often to {{{option3}}} each other.</p>',
                    correct: {
                      option1: 'customs',
                      option2: 'bow',
                      option3: 'businessmen',
                    },
                    value: {
                      option1: '',
                      option2: '',
                      option3: '',
                    },
                  },
                  {
                    content:
                      '<p>What is your name?</p><p>My name is {{{option1}}}</p><p>Oh, your age {{{option2}}}</p>',
                    correct: {
                      option1: 'yahor',
                      option2: '17',
                    },
                    value: {
                      option1: '',
                      option2: '',
                    },
                  },
                ],
                [
                  {
                    title: 'The manager advises his colleague to bow.',
                    options: ['False', 'True'],
                    correctOptionIndex: 0,
                  },
                ],
              ],
            },
          ],
        },
      ],
    },
  ])

  const activeExercise = ref<Exercise>([])

  return {
    sections,
    activeExercise,
  }
})
