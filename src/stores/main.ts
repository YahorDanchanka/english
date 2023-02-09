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
              text: '<ol><li>What is Information Technology?</li><li>What do Information Technology professionals do?</li></ol><h1>IT Departnemt Restructing</h1><p>DataPro Inc. is growing, and so our workload is increasing. Bout our IT department is not dealing with this increase effectively. So I am dividing the IT department into three sections: quality assurance, data processing and information security.</p><p>The responsibilities of each section are:<br><strong>Quality Assurance:</strong><br>Testing hardware<br>Providing technical support<br><strong>Data Processing:</strong><br>Writing code<br>Organizing data<br><strong>Information Security:</strong><br>Encoding online data transfers<br>Updating security software</p>',
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
        {
          id: 'ss3',
          title: 'Stress',
          image: '/assets/images/brain.png',
          texts: [
            {
              text: '<p>Speaking about stress we should say that:</p> <ol> <li>&ldquo;Stress as a&nbsp;<em>stimulus.</em>&rdquo;</li> <li>&ldquo;Stress as a&nbsp;<em>response.</em>&rdquo;</li> <li>&ldquo;Stress as an&nbsp;<em>interaction</em>&nbsp;between an organism and its environment.&rdquo;</li> </ol> <p>If we experience too much stress in the workplace, we become psychologically overwhelmed and unable to avoid the tensions found in our jobs.</p> <p><strong>What is workplace stress?</strong></p> <p>Work-related stress happens when your mind and body respond to high work demands you&rsquo;re unable to cope with. Eventually, you may arrive at a point where you can&rsquo;t keep up with your to-do list &mdash; often because there are too many tasks on it.&nbsp;</p> <p>Tight deadlines and larger workloads mean more pressure, increasing workplace stress.</p> <p><strong>When is workplace stress too much?</strong></p> <p>Stress isn\'t always bad. A little bit of stress can help you stay focused, energetic, and able to meet new challenges in the workplace. It\'s what keeps you on your toes during a presentation or alerts to prevent accidents or costly mistakes.</p> <p>But long hours, tight deadlines, and ever-increasing demands can leave you feeling worried, drained, and overwhelmed. And when stress exceeds your ability to cope, it stops being helpful and starts causing damage to your mind and body&mdash;as well as to your job satisfaction.</p> <p>You can&rsquo;t control everything in your work environment, but that doesn&rsquo;t mean you&rsquo;re powerless, even when you&rsquo;re stuck in a difficult situation. If stress on the job is interfering with your work performance, health, or personal life, it&rsquo;s time to take action. No matter what you do for a living, what your ambitions are, or how stressful your job is, there are plenty of things you can do to reduce your overall stress levels and regain a sense of control at work.</p> <p>Common causes of workplace stress include:</p> <ul type="disc"> <li>Longer working hours impacting work&ndash;life balance</li> <li>Job insecurity</li> <li>Low salary</li> <li>Increasing work demands</li> <li>Unrealistic deadlines</li> <li>Limited opportunities for growth, development, or advancement</li> <li>Challenging or difficult colleagues</li> <li>Too many meetings</li> <li>Email overload</li> <li>Incompetent or uncaring managers and supervisors</li> <li>Meaningless targets</li> <li>Constantly changing technology</li> <li>Lack of social support</li> </ul> <p><strong>Stress at work warning signs</strong></p> <p>When you feel overwhelmed at work, you lose confidence and may become angry, irritable, or withdrawn. Other signs and symptoms of stress at work include:</p> <ul> <li>Feeling anxious, irritable, or depressed</li> <li>Apathy, loss of interest in work</li> <li>Problems sleeping</li> <li>Fatigue</li> <li>Trouble concentrating</li> <li>Muscle tension or headaches</li> <li>Stomach problems</li> <li>Social withdrawal</li> <li>Loss of sex drive</li> <li>Using alcohol or drugs to cope</li> <li>Unhealthy eating</li> <li>Recreational drug use</li> </ul>',
              exercises: [
                {
                  content: '<p>Match the words with the definitions</p>',
                  tasks: [
                    {
                      options: [
                        {
                          value: 'environment',
                          correct: 'the conditions that you live or work in and the way that they influence how you',
                        },
                        { value: 'deadline', correct: 'a time or day by which something must be done' },
                        {
                          value: 'exceed',
                          correct: 'to be greater than a number or amount, or to go beyond a permitted limit',
                        },
                        {
                          value: 'avoid',
                          correct: 'to prevent something from happening or to not allow yourself to do something',
                        },
                        { value: 'cause', correct: 'to make something happen, especially something bad' },
                        { value: 'regain', correct: 'to get something back again' },
                        { value: 'fatigue', correct: 'extreme tiredness' },
                        {
                          value: 'worry',
                          correct:
                            'to think about problems or unpleasant things in a way that makes you feel unhappy and frightened',
                        },
                        { value: 'irritable', correct: 'becoming annoyed very easily' },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
                {
                  content: '<p>Mark the following statements as True or False</p>',
                  tasks: [
                    {
                      title: 'A little bit of stress can be useful for you',
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title:
                        'Work-related stress happens when your mind and body react to high work demands you fail to cope with',
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title:
                        'You can’t control everything in your work environment, unfortunately you can do nothing to regain a sense of control at work',
                      options: ['True', 'False'],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Stress suffered at work can result in damage to your physical and mental health',
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'There are many easy ways to cope with stress',
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'ss4',
          title: 'Conversations',
          image: '/assets/images/talking.png',
          texts: [
            {
              text: '<ol> <li>What do you talk about with some one who you don&rsquo;t know?</li> <li>What do you do when a conversation going poorly?</li> </ol> <h1>By Haigh Trenchard</h1> <p>It happens to every one. Somebody introduces you to a friend and then walks away. Now you&rsquo;re standing with somebody you don&rsquo;t know. What do you talk about?</p> <p>The weather is always a possibility. But there isn&rsquo;t always much to say. To make conversation flow, it&rsquo;s better to ask questions. Ask the person what they do for living, and what their job involves. Discussing your own former jobs is a good option, too.</p> <p>Other safe topics include your home town and your education. You can also speak about hobbies and sports. But avoid asking people about their religion, age, politics and marital status until you know then better.</p>',
              exercises: [
                {
                  content: '<p>Fill in the blanks with the correct words from the word bank</p>',
                  tasks: [
                    {
                      content:
                        "<p>What does Hendi do for a {{{option1}}}?</p><p>Graham's job {{{option2}}} buying supplies.</p><p>{{{option3}}} personal topics with strangers.</p><p>Helen's conversation with Rick didn't {{{option4}}}.</p><p>Flona chose not to {{{option5}}} religion with clients.</p><p>To keep the conversation you can speak about the {{{option6}}}</p><p>Let me {{{option7}}} you to my colleague</p>",
                      correct: {
                        option1: 'living',
                        option2: 'involves',
                        option3: 'avoid',
                        option4: 'flow',
                        option5: 'discuss',
                        option6: 'weather',
                        option7: 'introduce',
                      },
                      value: {
                        option1: '',
                        option2: '',
                        option3: '',
                        option4: '',
                        option5: '',
                        option6: '',
                        option7: '',
                      },
                      interface: 'MatchingTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words with the definitions</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'small talk', correct: 'a polite conversation about everyday things' },
                        { value: 'weather', correct: 'the temperature, rain, clouds and wind' },
                        { value: 'topic', correct: 'a subject for conversation or study' },
                        { value: 'religion', correct: 'a belief or worship of a god or gods' },
                        { value: 'marital states', correct: 'the condition of either being married or single' },
                        { value: 'sport', correct: 'a game or activity with rules' },
                        { value: 'politics', correct: 'a goverment activities' },
                        { value: 'living', correct: "one's source of income" },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
              ],
            },
            {
              text: '<h1>Introduction Etiquette</h1><p>Imagine you are at a conference, talking to a <strong>colleague</strong>. Suddenly an old friend greets you. Of course you are happy to see him and you start talking excitedly. Stop! What about your colleague? Don\'t leave her alone. <strong>Introduce </strong>your friend and &nbsp;colleague by saying "<strong>I\'d like you you to meet</strong> ..." or "<strong>Let me introduce you to</strong> ..." Make sure each person understand your <strong>relationship </strong>with the other, and mention each person\'s <strong>occupation</strong>. Think of something the two have <strong>in common</strong> and steer the <strong>conversation </strong>in that direction. This way, neither of them will fell <strong>left out</strong>.<br><br></p>',
              exercises: [
                {
                  content:
                    '<p>Read this extract from an etiquette guide, then mark the following statements as True or False</p>',
                  tasks: [
                    {
                      title: 'End a conversation with a colleague before talking to friend',
                      options: ['True', 'False'],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Do not talk about work when introducing two people',
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title: "Mentioning people's common interest makes them feel included",
                      options: ['True', 'False'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                  ],
                },
                {
                  content: '<p>Choose the word that is closest in meaning to the underlined part</p>',
                  tasks: [
                    {
                      title: 'James likes to talk about his job',
                      options: ['relationship', 'coleague', 'occupation'],
                      correctOptionIndex: 2,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Change the topic away from politics',
                      options: ['mention', 'steer the conversation', 'introduct'],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Karen is talking to a person with whom she works',
                      options: ['colleague', 'relationship', 'occupation'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Let me tell you the name of my friend, Bob Hawkins',
                      options: ['steer the conversation away from', 'leave out', 'introduce you to'],
                      correctOptionIndex: 2,
                      interface: 'SelectionTask',
                    },
                  ],
                },
                {
                  content: '<p>Choose the response that answers the question</p>',
                  tasks: [
                    {
                      title: 'Have I met your friend before?',
                      options: ["No, Mary. I'd like you to meet Polly", 'Yes. My friend Polly feels left out'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title: "What's your relationship with Helen?",
                      options: ["She didn't mention your name", "She's my colleague"],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Can I introduce you to my colleague, Daniel?',
                      options: ['Sure! Nice to meet you, Daniel', "Don't mention it"],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                  ],
                },
              ],
            },
          ],
          listen: [
            {
              content: '',
              tasks: [
                // remade
                {
                  title:
                    'Listen to a conversation between a businessman and a colleague. Check the topics that are suggested to talk about',
                  options: ['age', 'work', 'religion', 'weather', 'marital status', 'education'],
                  correctOptionIndexes: [1, 3],
                  interface: 'MultipleSelectionTask',
                },
              ],
            },
            {
              content: '',
              tasks: [
                {
                  content:
                    "<p><strong>Businessman</strong>: Sarah, I have to take a phone call, Please make {{{option1}}} with Mr, Jensen until I'm free.</p> <p><strong>Colleague</strong>: But I don't know him! I have nothing to talk to him about.</p> <p><strong>Businessman</strong>: Just ask him what he does for a {{{option2}}}.</p> <p><strong>Colleague</strong>: But I already know what his work {{{option3}}}. After all, he's our consultant.</p> <p><strong>Businessman</strong>: Then why don't you {{{option4}}} weather?</p> <p><strong>Colleague</strong>: It's not a very interesting {{{option5}}}.</p> <p><strong>Businessman</strong>: Well, I'm sure you'll think of something. Just don't up bring up his {{{option6}}}.</p> <p><strong>Colleague</strong>: Good to know, thanks.</p>",
                  correct: {
                    option1: 'small talk',
                    option2: 'living',
                    option3: 'involves',
                    option4: 'discuss',
                    option5: 'topic',
                    option6: 'marital status',
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
            {
              content:
                '<p>Listen to a conversation between two men and women. Mark the following statements as True or False</p>',
              tasks: [
                {
                  title: 'The woman is introduced to the friend of a colleague',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: "The speakers are at the woman's birthday party",
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'All three speakers are in the same soccer league',
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '',
              tasks: [
                {
                  content:
                    "<p><strong>Man 1</strong>: Sarah, I'd like you to meet {{{option1}}}, John. John, this is Sarah.</p> <p><strong>Woman</strong>: Hi John, it's a pleasure to meet you.</p> <p><strong>Man 2</strong>: And nice to meet you, too. How do you do two know {{{option2}}}?</p> <p><strong>Woman</strong>: Oh, we work together.</p> <p><strong>Man 2</strong>: That's right. Bob mentioned that some of his colleagues were coming to {{{option3}}} party.</p> <p><strong>Man 1</strong>: You know, Sarah, you and John have something {{{option4}}}.</p> <p><strong>Woman</strong>: {{{option5}}}? What's that?</p> <p><strong>Man 1</strong>: {{{option6}}} in the same adult soccer league.</p>",
                  correct: {
                    option1: 'my friend',
                    option2: 'one another',
                    option3: 'his birthday',
                    option4: 'in common',
                    option5: 'really',
                    option6: 'you both',
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
      ],
    },
  ])

  const activeExercise = ref<Exercise>()

  return {
    sections,
    activeExercise,
  }
})
