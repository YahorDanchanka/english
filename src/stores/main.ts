import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Exercise, Section } from 'src/types'
import { wordsFor11 } from 'stores/data/words'
import { section as softwareSection } from 'stores/data/software'
import { section as hardwareSection } from 'stores/data/hardware'

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
              title: 'Etiquette',
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
          words: wordsFor11,
        },
        {
          id: 'ss2',
          title: 'Working in IT industry',
          image: '/assets/images/it.png',
          texts: [
            {
              title: 'IT Departnemt Restructing',
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
              title: 'Stress',
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
              title: 'By Haigh Trenchard',
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
              title: 'Introduction Etiquette',
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
        {
          id: 'ss5',
          title: 'Presentations',
          image: '/assets/images/presentation.png',
          texts: [
            {
              title: 'Presentation Delivery',
              text: '<p>You may be asked to give a <strong>presentation </strong>to staff or senior executives. In this situation, please take time to prepare carefully. Review your presentation and ensure that all relevant information is included in a succinct manner. In general, <strong>display </strong>information clearly. Use <strong>diagrams,</strong> <strong>tables</strong>, <strong>charts</strong>, and <strong>graphs </strong>where necessary. In addition, it is highly recommended that you bring extra <strong>copies </strong>of all <strong>handouts</strong>. Copy machines are available for use in the copy room.</p> <h2>Presentation Delivery</h2> <p>Arrive a few minutes early in order to set up your presentation. All conference rooms are equipped with laptop connections and <strong>projectors</strong>. <strong>Slides </strong>may also be used, if desired. If you include the use of <strong>images </strong>from outside sources, ensure that they are property <strong>resized</strong>. More specific information on computer use and Image manipulation can be found in Appendix A of this book (p. 152).</p> <h2>Room and Equipment Reservations</h2> <p>Please <strong>reserve </strong>the space for your presentation no less than three days in advance. Sign-up sheets for conference rooms are located in Room B32. You may also reserve the use of a projector, screen, and <strong>laser pointer</strong>. These sheets are kept at the front desk and are available on request.</p>',
              exercises: [
                {
                  content: '<p>Read the excerpt from the personnel guidelines. Then, choose the correct answer.</p>',
                  tasks: [
                    {
                      title: 'What Is the main topic of the article?',
                      options: [
                        'the schedule of presentations',
                        'how to prepare for a presentation',
                        'a request for new presentation equipment',
                        "changes to the company's presentation policy",
                      ],
                      correctOptionIndex: 1,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Which of the following is NOT a type of graph?',
                      options: ['slide', 'diagram', 'table', 'chart'],
                      correctOptionIndex: 0,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'What are employees asked to do?',
                      options: [
                        'include diagrams in all presentations',
                        'avoid using images from outside sources',
                        'reduce paper waste by limiting copies',
                        'request rooms for presentations three days early',
                      ],
                      correctOptionIndex: 3,
                      interface: 'SelectionTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words or phrases with thе definitions</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'resize', correct: 'to make something smaller or bigger' },
                        { value: 'table', correct: 'an arrangement of data in columns' },
                        { value: 'projector', correct: 'a device used to show images' },
                        { value: 'presentation', correct: 'the act of showing and commenting on information' },
                        { value: 'slide', correct: 'a transparent sheet showing information' },
                        { value: 'diagram', correct: 'a chart or drawing that explains information' },
                        { value: 'laser point', correct: 'a device used to draw attention to an area with light' },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
                {
                  content: '<p>Read the sentence pairs. Choose which word best fits each blank</p>',
                  tasks: [
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li> <p>Graph and charts are a way to {{{option1}}} information</p> </li> <li>{{{option2}}} handouts the day before a presentation so you can check them for mistakes</li> </ol>',
                      correct: {
                        option1: 'display',
                        option2: 'prepare',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li> <p>It\'s important to {{{option1}}} images so they can be seen clearly.</p> </li> <li>Be sure to {{{option2}}} a room so that the space is available.</li> </ol>',
                      correct: {
                        option1: 'resize',
                        option2: 'reserve',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li> <p>The {{{option1}}} can be a picture or an illustration</p> </li> <li>It\'s hard to read the data in that {{{option2}}}</li> </ol>',
                      correct: {
                        option1: 'image',
                        option2: 'chart',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li> <p>Create a {{{option1}}} that shows the total sales for each month</p> </li> <li>I need a {{{option2}}} of that memo; I can\'t find my original</li> </ol>',
                      correct: {
                        option1: 'graph',
                        option2: 'copy',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Presentations',
              text: "<ol><li>What is the importance of body language in a presentation?</li><li>How might acceptable body language vary from country to country?</li></ol><h1></h1><p>Presentations can be nerve-wracking. A survey once asked whether people were more afraid of death, or speaking in front of an audience. Most people said that they were more afraid of public speaking! When your manager or boss is part of your <strong>audience</strong>, presentations can be even scarier.</p> <p>So what can you do to make a great impression? Here are some tips.</p> <p>After you know your <strong>topic</strong>, make an <strong>outline </strong>of your presentation. Then <strong>practice </strong>it. Try to <strong>memorize </strong>your key points. This way, you can avoid reading your slides <strong>verbatim</strong>. This will help you sound natural and keep your listeners' attention.</p> <p><strong>Body language</strong> is also very important. As you give your presentation, make a lot of <strong>eye contact</strong>.</p> <p><strong>Glance </strong>briefly at your <strong>notes</strong> only when needed. Don't fold your arms in front of your body. Instead, stand with an open posture.</p> <p>Most importantly, don't <strong>bore </strong>your audience! You can maintain interest by keeping your points succinct. If you find yourself staying too long on one point, <strong>move on</strong> to the next. Also, be sure to do a quick <strong>review </strong>at the end. <strong>Summarize </strong>your key themes and points and leave a little time to <strong>take </strong>questions at the end.</p>",
              exercises: [
                {
                  content: '<p>Read the section. Then, choose the correct answers</p>',
                  tasks: [
                    {
                      title: 'What is the section mainly about?',
                      options: [
                        'ways to conduct a successful presentation',
                        'common mistakes people make in presentations',
                        'how to recover when a presentation starts to fall',
                        'methods of making presentations less. stressful',
                      ],
                      correctOptionIndex: 3,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'What does the author recommend?',
                      options: [
                        'taking questions from the audience as they come up',
                        'putting the outline of the presentation on a slide',
                        'reviewing the important points at the end',
                        'glancing at your notes before moving on to new topics',
                      ],
                      correctOptionIndex: 2,
                      interface: 'SelectionTask',
                    },
                    {
                      title: 'Why are succinct points important?',
                      options: [
                        'They aid in memorizing information',
                        'They assist in improving body language',
                        "They help in keeping an audience's interest",
                        'They facilitate in creating an outline',
                      ],
                      correctOptionIndex: 2,
                      interface: 'SelectionTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words or phrases with the definitions</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'note', correct: 'a short piece of information' },
                        { value: 'bore', correct: 'to cause someone to lose interest' },
                        { value: 'topic', correct: 'a subject or main idea' },
                        { value: 'verbatim', correct: 'word-for-word' },
                        { value: 'take', correct: 'to allow or accept' },
                        { value: 'glance', correct: 'to look quckly' },
                        { value: 'move on', correct: 'to progress from one point to the next' },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
                {
                  content: '<p>Read the sentence pairs. Choose which word or phrase best fits each blank</p>',
                  tasks: [
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li>Make a(n) {{{option1}}} before writing a whole presentation</li> <li>A person appears confident if he or she makes eye contact with a(n) {{{option2}}}</li> </ol>',
                      correct: {
                        option1: 'outline',
                        option2: 'audience',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li>A presenter should try to {{{option1}}} the presentation as part of a review</li> <li>It\'s more effective to {{{option2}}} key points than to read a presentation verbatim</li> </ol>',
                      correct: {
                        option1: 'summarize',
                        option2: 'memorize',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li>{{{option1}}} the key points at the end of a presentation</li> <li>Presenters who do not {{{option2}}} a few times first will often make mistakes</li> </ol>',
                      correct: {
                        option1: 'review',
                        option2: 'practice',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
                      interface: 'MatchingTask',
                    },
                    {
                      content:
                        '<ol style="list-style-type: upper-alpha;"> <li>Although some forms of {{{option1}}} can mean different things in different areas, a smile is always understood</li> <li>Before visiting a nation, find out whether making {{{option2}}} is considered polite or rude</li> </ol>',
                      correct: {
                        option1: 'body language',
                        option2: 'eye contact',
                      },
                      value: {
                        option1: '',
                        option2: '',
                      },
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
                '<p>Listen to a conversation between a manager and an employee. Mark the following statements as True or False</p>',
              tasks: [
                {
                  title: 'The woman needs help preparing her presentation.',
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'The woman thinks that handouts are optional',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'The man should create graphs and charts first',
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Listen again and complete the conversation</p>',
              tasks: [
                {
                  content:
                    "<p><strong>Manager</strong>: I'd like to see our gross earnings and profit margins broken down into graphs and tables. Make it as clear {{{option1}}}.</p> <p><strong>Employee</strong>: Of course. What about {{{option2}}}?</p> <p><strong>Manager</strong>: It's your presentation, so I'll leave that up to you. If you need a {{{option3}}}, use the copy room.</p> <p><strong>Employee</strong>: Okay. I'll do that.</p> <p><strong>Manager</strong>: Oh and Jim! One {{{option4}}}!</p> <p><strong>Employee</strong>: What is it?</p> <p><strong>Manager</strong>: {{{option5}}} to reserve the conference room. Please take care of that before anything else.</p> <p><strong>Employee</strong>: Understood! I'll do that {{{option6}}}.&nbsp;</p>",
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
                  interface: 'TextInputTask',
                },
              ],
            },
            {
              content: '<p>Listen again and complete the conversation</p>',
              tasks: [
                {
                  content:
                    "<p><strong>Coworker 1</strong>: Linda, thanks so much for letting me practice my presentation with you. I really appreciate it. So, what {{{option1}}}?</p> <p><strong>Coworker 2</strong>: Well, tor the most part, I thought it was great! Your {{{option2}}}&nbsp;was really good. You kept eye contact really well, and you had an open posture.</p> <p><strong>Coworker 1</strong>: Thanks! That's good to hear. Was there anything that you think I should change?</p> <p><strong>Coworker 2</strong>: Let's see. yeah, there are a few spots {{{option3}}}. First of all, there were parts where you read the slides {{{option4}}}.</p> <p><strong>Coworker 1</strong>: Uh, yes. I find it hard to {{{option5}}}.</p> <p><strong>Coworker 2</strong>: Oh, okay. Well, I think it sounded a little unnatural. So, maybe you could just {{{option6}}} the slides, and then rephrase them in your own words.</p>",
                  correct: {
                    option1: 'did you think',
                    option2: 'body language',
                    option3: 'that need work',
                    // note
                    option4: '',
                    option5: 'memorize staff',
                    option6: 'glance at',
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
                  interface: 'TextInputTask',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Computers today',
      subsections: [
        {
          id: 'ss1',
          title: '2.1',
          image: '/assets/images/job-interview.png',
          texts: [
            {
              title: 'Computers: friend ...',
              text: "<h1>A. Computers: friend ...</h1> <p>People who have grown up with PCs and microchips are often called rhe digital generation. This is how some people answered when questioned abom the nse of compurers in their lives.</p> <blockquote> <p>I have a <strong>GPS</strong>. <strong>Global Positioning System</strong>, filtted in my car. With this navigation system I never get lost. And thff <strong>DVD recorder</strong> is perfect for my chlklren&middot;s entertainment</p> </blockquote> <blockquote> <p>I use an <strong>interactive whiteboard</strong> like a large touchscreen monitor, at school. I find computers very useful in education</p> </blockquote> <blockquote> <p><strong>Assistive technology</strong>, for people with disabilities, has helped me a lot. I can hardly see, so I use a <strong>screen reader</strong>, a program that reads aloud onscreen text, menus and icons</p> </blockquote> <blockquote> <p>This new <strong>HMD</strong>,<strong> head-mounted display</strong>, allows me to watch films, and enjoy <strong>virtual reality</strong>, the artificial environment of the latest video games</p> </blockquote> <blockquote> <p>The upgraded wireless network at my univarsity is great: we can connect our laptops. PDAs and Wi-Fi cell phones to the network anywhere in the compus. Communication is becoming easier and easier.</p> </blockquote> <h1>B. or foe?</h1> <ul> <li>Our society has developed <strong>technological dependence</strong>. When computers are down, our way of life breaks down: planes stop flying, telephones don't work, banks have to close.</li> <li>Computers produce <strong>electronic waste</strong>, plastic cases and microchips that are not biodegradable and have to be recycled or just thrown away.</li> <li>They are responsible for health problems, e.g. <strong>computer addiction</strong>, an inappropriate and excessive use of computers.</li> <li>Cybercrime, crime committed with the hdp of computers, is creating serious problems.</li> <li>Citizens may feel a<strong> loss of privacy</strong> because of una uthorized use of personal dara or receiving unwamed electronic messages.</li> </ul> <h1>C. Things we can do on the computer</h1> <p>A secretary: 'I use computers to do the usual office things like <strong>write letters</strong> and <strong>faxes</strong>, but what I find really useful is email. We are an international company and I <strong>send emails</strong> to our of6ces all over the world.'</p> <p>A publisher: 'We use PCs to produce all sores of texts in digital format. We <strong>publish e-books</strong> {electronic books) and interactive e-learning programs on CD, and we help a local company to <strong>design </strong>an <strong>online newspaper</strong>, displayed on the Web.'</p> <p>A bank manager: 'We use financial software <strong>to make calculations</strong> and then generate graphs or charts. We also use a database to <strong>store information</strong> so that it can be easily searched.'</p> <p>A home user: 'I like to <strong>retouch photos</strong> on my computer; l in1prove them by making a few touches and then save them on a CD. I also enjoy looking at music portals on the Web. I <strong>surf the Web</strong> every day and I often <strong>download files</strong>, I copy music files from the Net to my PC.'</p>",
              exercises: [
                {
                  content: '<p>Complete these senrences with words from</p>',
                  tasks: [
                    {
                      content:
                        '<p>The {{{option1}}} is a piece of sofrware that interfaces with your PC and allows youi,via keybQard commands, to get a ny rext information read ro you in synrhetic speech.</p>\n<p>A {{{option2}}} as popularized by virtual reality, lees the user immerse him/herself in a svncheticallv generated environment.</p>\n<p>An {{{option3}}} is a touch-sensirive device where a special pen or your finger can act as a mouse.</p>\n<p>Tomy Adams is now the proud owner of a dark silver Vogue, complete with leather interior, {{{option4}}} navigation, and a {{{option5}}} wich LCD TV screens.</p>',
                      correct: {
                        option1: 'screen reader',
                        option2: 'head mounted display',
                        option3: 'interactive whiteboard',
                        option4: 'gps',
                        option5: 'dvd recorder',
                      },
                      value: { option1: '', option2: '', option3: '', option4: '', option5: '' },
                      interface: 'MatchingTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words and definitions</p>',
                  tasks: [
                    {
                      options: [
                        {
                          value: 'We are sorry to announce that most flights are delayed or cancelled',
                          correct: 'technological dependance',
                        },
                        {
                          value: 'He should go to a psychologist. He spends hours surfing the Web',
                          correct: 'computer addiction',
                        },
                        {
                          value:
                            'Technology changes so quickly that we have to scrap computers when they become obsolete',
                          correct: 'electronic waste',
                        },
                        {
                          value: "I've been getting emails about offers for lots of different products",
                          correct: 'loss of privacy',
                        },
                        {
                          value:
                            'My computer system has been broken into and some useful information has been destroyed',
                          correct: 'cybercrime',
                        },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words and definitions</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'perform', correct: 'execude, do' },
                        { value: 'word processor', correct: 'program used for text manipulation' },
                        { value: 'online', correct: 'connected to the Internet' },
                        { value: 'download', correct: 'copy files from a server to your PC or mobile' },
                        { value: 'built-in', correct: 'integrated' },
                        {
                          value: 'digital',
                          correct: 'describes information that is recorder or broadcast using computers',
                        },
                        { value: 'store', correct: 'keep, save' },
                        { value: 'financial', correct: 'monetary' },
                        { value: 'monitor', correct: 'screen' },
                        { value: 'data', correct: 'collection of facts or figures' },
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
        },
        {
          id: 'ss2',
          title: '2.2',
          image: '/assets/images/job-interview.png',
          texts: [
            {
              title: 'A long Way to Computers',
              text: '<h1>A long Way to Computers</h1> <p>The very first calculating device was the ten fingers of a man&rsquo;s hands. This, in fact, is why today we still count in tens and multiples of tens.</p> <p>Then the abacus was invented, a bead frame in which the beads are moved from left to right. People went on using some form of abacus well into the 16th century, and it is still being used in some parts of the world because it can be understood without knowing how to read. During the 17th and 18th century people tried to find easy way of calculating.</p> <p>The first real calculating machine appeared in 1820 as the result of several people&rsquo;s experiments. This type of machine, which saves a great deal of time and reduces the possibility of making mistakes, depends on a series of ten-toothed gear wheels.</p> <p>In 1830 Charles Babbage, an Englishman, designed a machine that was called &ldquo;The Analytical Engine&rdquo;.</p> <p>This machine, which Babbage showed at the Paris Exhibition in 1855, was an attempt to cut out the human being altogether, except for providing the machine with the necessary facts about the problem to be solved.</p> <p>He never finished this work, but many of his ideas were the basis for building today&rsquo;s computers. In 1930, the first analog computer was built by an American named Vannevar Bush. This device was used in World War II to help aim guns.</p> <p>&ldquo;Mark I&rdquo;, the name given to the first digital computer, was completed in 1944.</p> <p>The men responsible for this invention were Professor Howard Alken and some people from IBM. This was the first machine that could figure out long lists of mathematical problems all at a very fast rate.</p>',
              exercises: [
                {
                  content: '<p>Match the questions with their answers and translate them</p>',
                  tasks: [
                    {
                      options: [
                        {
                          value: 'What is the abacus?',
                          correct: 'It is a bead frame in which the beads move from left to right',
                        },
                        {
                          value: 'Do people still use the abacus nowadays?',
                          correct: 'Yes, they still use it nowadays',
                        },
                        { value: 'What did Charles Babbage invent?', correct: 'He invented the Analytical Engine' },
                        { value: 'When did the first real calculating machine appear?', correct: 'In 1820' },
                        {
                          value: 'What was the first calculating device?',
                          correct: 'The first calculating device was the ten fingers of a man’s hand.',
                        },
                      ],
                      leftCol: [],
                      rightCol: [],
                      interface: 'SortableTask',
                    },
                  ],
                },
                {
                  content: '<p>Match the words with their translations</p>',
                  tasks: [
                    {
                      options: [
                        { value: 'the abacus', correct: 'счета' },
                        { value: 'to store', correct: 'хранить' },
                        { value: 'input', correct: 'ввод' },
                        { value: 'adding machine', correct: 'счетная машина' },
                        { value: 'the analytical engine', correct: 'аналитическая машина' },
                        { value: 'calculating device', correct: 'устройство для вычисления' },
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
              title: 'Four Generations of Computers',
              text: '<h1>Four Generations of Computers</h1> <p>In 1946 two engineers at the University of Pennsylvania, J. Eckert and J. Maushly, built the first digital computer using parts called vacuum tubes. They named their new invention ENIAC.</p> <p>Another important advancement in computers came in 1947, when John von Newmann developed the idea of keeping instructions for the computer inside the computer&rsquo;s memory. The first generation of computers, which used vacuum tubes, came out in 1950.</p> <p>UNIVAC I is an example of these computers, which could perform thousands of calculations per second. In 1960, the second generation of computers was developed and these could perform work ten times faster than their predecessors. The reason for this extra speed was the use of transistors instead of vacuum tubes.</p> <p>Second-generation computers were smaller, faster and more dependable than first-generation computers.</p> <p>Third-generation computers appeared on the market in 1965. These computers could do a million calculations per second, which is 1000 times as many as first-generation computers.</p> <p>Unlike second-generation computers, these are controlled by tiny integrated circuits and are consequently smaller and more dependable.</p> <p>Fourth-generation computers have now arrived, and the integrated circuits that are being developed have been greatly reduced in size.</p> <p>This is due to <strong>microminiaturization</strong>, which means that the circuits are much smaller than before; as many as 1000 tiny circuits now fit onto a single chip.</p> <p><strong>A chip</strong> is a square or rectangular piece of silicon, usually from 1/10 to 1/4 inch, upon which several layers of an integrated circuits are etched or imprinted, after which the circuit is encapsulated in plastic or metal.</p> <p>Fourth-generation computers are 50 times faster than third-generation computers and can complete approximately 1,000,000 instructions per second.</p>',
              exercises: [
                {
                  content: '<p>Fill in the blanks with the correct words</p>',
                  tasks: [
                    {
                      content:
                        '<p>1. The first digital computer could {{{option1}}} a lot of mathematical problems at a fast {{{option2}}}.</p>\n<p>2. Vannevar Bush built the first {{{option3}}} computer in 1930.</p>\n<p>3. Babbage&rsquo;s analytical engine was designed to {{{option4}}} data.</p>\n<p>4. J. von Neumann invented a machine that was able to {{{option5}}} not only data but also {{{option5}}}.</p>\n<p>5. Neumann {{{option6}}} the idea of storing data in a {{{option7}}}.</p>\n<p>6. {{{option8}}} computers could perform {{{option9}}} much faster.</p>',
                      correct: {
                        option1: 'perform',
                        option2: 'speed',
                        option3: 'analog',
                        option4: 'analyze',
                        option5: 'perform',
                        option6: 'instructions',
                        option7: 'computer memory',
                        option8: 'fourth-generation',
                        option9: 'calculations',
                      },
                      value: {
                        option1: '',
                        option2: '',
                        option3: '',
                        option4: '',
                        option5: '',
                        option6: '',
                        option7: '',
                        option8: '',
                        option9: '',
                      },
                      interface: 'TextInputTask',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    hardwareSection,
    softwareSection,
  ])

  const activeExercise = ref<Exercise>()

  return {
    sections,
    activeExercise,
  }
})
