import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Exercise, Section } from 'src/types'
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
          image: '/assets/images/job-interview.png',
          texts: [
            {
              text: '<ol> <li>What do you say and do when you meet a friend?</li> <li>Do people kiss when they greet<br />in your country? Wht do you <br />think of this?</li> </ol> <h1>Etiquette</h1> <p>People around the world say hello and goodbye in different ways. In Asia, many people <strong>bow</strong> when they <strong>greet</strong> each other. This might seem strange to someone in the Middle East. There men sometimes greet each other with a kiss on cheek. In most countries, people shake hands. But in America and Europe the handshake is firm, while in Asia it is often soft. So what do you do when you meet people from other countries? Don&rsquo;t let these customs confuse you. Just be polite. When you meet, say &ldquo;Pleased to meet you&rdquo; and ask &ldquo;How are you&rdquo; When it is time to leave, say &ldquo;It was nice meeting you&rdquo; and &ldquo;I hope we meet again&rdquo;.</p>',
              exercises: [
                {
                  content:
                    '<p>Listen and read this extract from an etiquette guide. Then, choose the correct answers. How many customs are mentioned in the text?</p><audio controls src="/assets/audio/royale.mp3"></audio>',
                  tasks: [
                    {
                      title: 'According to the guide, which is not a common way of greeting.',
                      options: [
                        'saying "Pleased to meet you"',
                        'kissing each other’s hands',
                        'bowing',
                        'shaking hands',
                      ],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'How does the guide suggest people react when they experience a new greeting?',
                      options: ['snake hands firmly', 'be polite', 'use your best judgment', 'follow local customs'],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'What can you guess about people in Saudi Arabia?',
                      options: [
                        'They use a firm handshake',
                        'They say goodbye with a kiss',
                        "The don't typically bow when greeting",
                        'They have similar customs to Europeans',
                      ],
                      correctOptionIndex: 2,
                      interface: 'SelectionTask',
                    },
                  ],
                },
                {
                  content: '<p>Complete the word or phrase with the same meaning as the underlined part.</p>',
                  tasks: [
                    {
                      title: 'The manager said, ‘I am happy to see you’.',
                      word: 'P[l]e[a][s][e][d] [t]o [m]e[e]t [y][o]u',
                      interface: 'TypingTask',
                    },
                    {
                      title: 'Be polite when you meet and say hello to a client',
                      word: 'g[r][e]e[t]',
                      interface: 'TypingTask',
                    },
                    { title: 'Some people kiss on the side of the face', word: '[c]h[e]e[k]', interface: 'TypingTask' },
                    {
                      title: 'It was good to see and get to know you',
                      word: 'i[t] [w]a[s] n[i][c][e] [m]e[e]t[i][n][g] [y]o[u]',
                      interface: 'TypingTask',
                    },
                  ],
                },
                {
                  content: '<p>Read the sentence pairs. Choose where the words best fit in the blanks.</p>',
                  tasks: [
                    {
                      content:
                        '<p>Most nations have different {{{option1}}} for greeting strangers.</p><p>Japanese businessmen often {{{option2}}} to each other.</p>',
                      correct: { option1: 'customs', option2: 'bow' },
                      value: { option1: '', option2: '' },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        "<p>Some people don't {{{option1}}} unless they are in a romantic relationship.</p><p>Business people often {{{option2}}} when they come to an agreement.</p>",
                      correct: { option1: 'kiss', option2: 'shake hands' },
                      value: { option1: '', option2: '' },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<p>Be {{{option1}}} when meeting new people.</p><p>In America, a {{{option2}}} handshake shows a strong personality.</p>',
                      correct: { option1: 'polite', option2: 'firm' },
                      value: { option1: '', option2: '' },
                      interface: 'MatchingTask',
                    },
                  ],
                },
              ],
            },
          ],
          listen: [
            {
              content:
                '<p>Listen to a conversation between a manager and his colleague. Complete the conversation.</p><audio controls src="/assets/audio/royale.mp3"></audio>',
              tasks: [
                // check
                {
                  title: 'The manager advises his colleague to bow',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'The manager advises his colleague to shake hands softly',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'The manager suggests shaking hands with Mr. Yakamoto',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Listen again and complete the conversation</p>',
              tasks: [
                {
                  content:
                    '<p><strong>Manager</strong>: When you meet Mr. Yakamoto be very {{{option1}}}. He is very important client.</p><p><strong>Colleague</strong>: It is the Japanese {{{option2}}} to bow. Should i do that?</p><p><strong>Manager</strong>: No, you don’t have to bow. Just say ‘{{{option3}}} meet you’ and {{{option4}}}.</p><p><strong>Colleague</strong>: Okay.</p><p><strong>Manager</strong>: But don’t make your handshake too {{{option5}}}.Japanese people usually have a softer handshake.</p><p><strong>Colleague</strong>: And when he leaves? What then?</p><p><strong>Manager</strong>: Just say ‘It was {{{option6}}}’ and handshake his hand again.</p><p><strong>Colleague</strong>: Okay, that’s fine.</p>',
                  correct: {
                    option1: 'polite',
                    option2: 'custom',
                    option3: 'pleased to',
                    option4: 'shake hands',
                    option5: 'firm',
                    option6: 'nice meeting you',
                  },
                  value: {
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    option5: '',
                    option6: '',
                  },
                  interface: 'TextInputTask',
                },
              ],
            },
          ],
        },
        {
          id: 'ss2',
          title: 'Working in IT industry',
          image: '/assets/images/it.png',
          texts: [
            {
              text: '<ol><li>1</li><li>2</li></ol>',
              exercises: [
                {
                  content:
                    '<p>Read the statement from the DataPro Inc. CEO. Then, mark the following statements as true (T) or false (F)</p>',
                  tasks: [
                    {
                      title: 'The IT Department is increasing',
                      options: ['True', 'False'],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Data Processing employees now encode data',
                      options: ['True', 'False'],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Supervisors know the employees new assignments',
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words (1-10) with the definitions (A-J)</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'software', correct: 'programs/instructions added to computers' },
                        { value: 'code', correct: 'program language' },
                        { value: 'hardware', correct: 'the physical parts of a computer' },
                        { value: 'data processing', correct: 'the act of using information' },
                        { value: 'information security', correct: 'the act of protecting information' },
                        { value: 'online', correct: 'connected to the Internet' },
                        { value: 'technical support', correct: 'helping people use/understand technology' },
                        { value: 'data', correct: 'numbers entered/held in a computer' },
                        { value: 'quality assurance', correct: 'checking product for problems' },
                        { value: 'encoding', correct: 'putting secret information into code' },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
                {
                  content: '<p>Fill the blank with the correct words from the word bank</p>',
                  tasks: [
                    {
                      content:
                        '<p>Enter the {{{option1}}} into the computer.</p><p>The company uses {{{option2}}} to protect information.</p><p>{{{option3}}} finds and fixes problems in new products.</p>',
                      correct: { option1: 'data', option2: 'encoding', option3: 'quality assurance' },
                      value: { option1: '', option2: '', option3: '' },
                      interface: 'MatchingTask',
                    },
                  ],
                },
                {
                  content: '<p>Complete the descriptions 1-4 with the IT jobs in the box</p>',
                  tasks: [
                    {
                      content:
                        'Sylvia is a {{{option1}}}<div>Isabelle is a {{{option2}}}<br></div><div>Andrew is an {{{option3}}}<br></div><div>Mark and Latika are {{{option4}}}<br></div>',
                      correct: {
                        option1: 'network administrator',
                        option2: 'network architect',
                        option3: 'IT support officer',
                        option4: 'database analyst',
                      },
                      value: { option1: '', option2: '', option3: '', option4: '' },
                      interface: 'MatchingTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the sentence halves 1-8 to a-h</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'Hanka is creating', correct: 'a file' },
                        { value: 'Philip is inserting an', correct: 'image' },
                        { value: 'Rob is troubleshooting', correct: 'the software' },
                        { value: 'We are running', correct: 'a check-up' },
                        { value: 'Betty is connecting', correct: 'a device' },
                        { value: 'They are burning', correct: 'CDs' },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
              ],
            },
          ],
          listen: [
            // check
            {
              content:
                '<p>Listen a conversation between a DataPro Inc. employee and her supervisor. Choose the correct answers.</p>',
              tasks: [
                {
                  title: 'What is the dialogue mainly about?',
                  options: [
                    'asking for a raise',
                    'requesting a transfer',
                    'assuring product quality',
                    'improving hardware',
                  ],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'What can you infer about the employee?',
                  options: [
                    'She does not like her new section',
                    'She has experience with hardware',
                    'She does not understand the changes',
                    'She creates valuable software',
                  ],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '',
              tasks: [
                {
                  content:
                    "<p><strong>Employee</strong>: Excuse me, Mr.Hopkins? I have a question about the {{{option1}}}.</p><p><strong>Hopkins</strong>: Please, come in. What's your question?</p><p><strong>Employee</strong>: Well, I'm now in the {{{option2}}} section.</p><p><strong>Hopkins</strong>: Yes. You have a great understanding of the hardware.</p><p><strong>Employee</strong>: Thanks, but I have more experience with {{{option3}}}.</p><p><strong>Hopkins</strong>: I see. You want a {{{option4}}} then?</p><p><strong>Employee</strong>: Exactly. I feel that I'm more valuable there.</p><p><strong>Hopkins</strong>: Let me {{{option5}}} it.</p>",
                  correct: {
                    option1: 'polite',
                    option2: 'custom',
                    option3: 'pleased to',
                    option4: 'shake hands',
                    option5: 'firm',
                  },
                  value: {
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    option5: '',
                  },
                  interface: 'TextInputTask',
                },
              ],
            },
            {
              content: '<p>Listen to three people talking about their jobs. Complete these job descriptions.</p>',
              tasks: [
                {
                  content:
                    '<p>Karl</p><p>Job: software {{{option1}}}</p><p>Responsibilities: the designs and {{{option2}}} computer games</p>',
                  correct: { option1: 'developer', option2: 'developes' },
                  value: { option1: '', option2: '' },
                  interface: 'TextInputTask',
                },
                {
                  content:
                    '<p>Heba</p><p>Job: {{{option1}}} analyst</p><p>Responsibilities: he {{{option2}}} computer problems</p>',
                  correct: { option1: 'system', option2: 'solves' },
                  value: { option1: '', option2: '' },
                  interface: 'TextInputTask',
                },
                {
                  content:
                    '<p>Wojtek</p><p>Job: database {{{option1}}}</p><p>Responsibilities: he analyses and {{{option2}}} electronic data</p>',
                  correct: { option1: 'administrator', option2: 'present' },
                  value: { option1: '', option2: '' },
                  interface: 'TextInputTask',
                },
              ],
            },
            {
              content: '<p>Listen and complete this dialogue</p>',
              tasks: [
                {
                  content:
                    "<p><strong>Ahmed</strong>: Where {{{option1}}} you work, Betty?</p><p><strong>Betty</strong>: I work for Dell in Dubai. What {{{option2}}} you?</p><p><strong>Ahmed</strong>: I {{{option3}}} for HP in Budapest. What do you {{{option4}}}, Milo?</p><p><strong>Milo</strong>: I'm a {{{option5}}} developer. I work {{{option6}}} Microsoft in Prague.</p><p><strong>Betty</strong>: Milo, do you {{{option7}}} Frida?</p><p><strong>Milo</strong>: Yes, I do. What do you do {{{option8}}} to know?</p><p><strong>Betty</strong>: Where {{{option9}}} she work?</p><p><strong>Milo</strong>: She works with {{{option10}}} in Prague. She designs websites for {{{option11}}}</p><p><strong>Ahmed</strong>: I see. Right, let's go. The workshop starts in five minutes.</p>",
                  correct: {
                    option1: 'do',
                    option2: 'about',
                    option3: 'pleased to',
                    option4: 'shake hands',
                    option5: 'firm',
                  },
                  value: {
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    option5: '',
                  },
                  interface: 'TextInputTask',
                },
              ],
            },
          ],
        },
      ],
    },
  ])

  const activeExercise = ref<Exercise>()

  return {
    sections,
    activeExercise,
  }
})
