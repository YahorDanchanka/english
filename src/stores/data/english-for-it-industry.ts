import { Section } from 'src/types'
import { wordsFor11, wordsFor12, wordsFor13, wordsFor14, wordsFor15, wordsFor16 } from 'stores/data/words'

export const section: Section = {
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
          text: '<ol> <li>What do you say and do when you meet a friend?</li> <li>Do people kiss when they greet<br>in your country? What do you <br>think of this?</li> </ol> <h1>Etiquette</h1> <p>People around the world say hello and goodbye in different ways. In Asia, many people <strong>bow</strong> when they <strong>greet</strong> each other. This might seem strange to someone in the Middle East. There men sometimes greet each other with a <strong>kiss </strong>on the <strong>cheek</strong>. In most countries, people <strong>shake hands</strong>. But in America and Europe the handshake is <strong>firm</strong>, while in Asia it is often soft. So what do you do when you meet people from other countries? Don&rsquo;t let these <strong>customs </strong>confuse you. Just be <strong>polite</strong>. When you meet, say &ldquo;<strong>Pleased to meet you</strong>&rdquo; and ask &ldquo;How are you&rdquo; When it is time to leave, say &ldquo;<strong>It was nice meeting you</strong>&rdquo; and &ldquo;I hope we meet again&rdquo;.</p>',
          exercises: [
            {
              content:
                '<p>Listen and read this extract from an etiquette guide. Then, choose the correct answers. How many customs are mentioned in the text?</p>',
              tasks: [
                {
                  title: 'According to the guide, which is not a common way of greeting.',
                  options: ['saying "Pleased to meet you"', 'kissing each other’s hands', 'bowing', 'shaking hands'],
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
      dialogs: [
        {
          title: 'Etiquette',
          text: '<audio controls src="/assets/audio/1.1-6(1).mp3"></audio><p><strong>Manager</strong>: When you meet Mr. Yakamoto be very ________. He is very important client.</p><p><strong>Colleague</strong>: It is the Japanese ________ to bow. Should i do that?</p><p><strong>Manager</strong>: No, you don’t have to bow. Just say ‘________ meet you’ and ________.</p><p><strong>Colleague</strong>: Okay.</p><p><strong>Manager</strong>: But don’t make your handshake too ________.Japanese people usually have a softer handshake.</p><p><strong>Colleague</strong>: And when he leaves? What then?</p><p><strong>Manager</strong>: Just say ‘It was ________’ and handshake his hand again.</p><p><strong>Colleague</strong>: Okay, that’s fine.</p>',
          exercises: [
            {
              content:
                '<p>Listen to a conversation between a manager and his colleague. Complete the conversation.</p>',
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
              content: '<p>Listen again and complete the conversation.</p>',
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
            {
              content:
                '<p>With а partner, act out the roles below, based оп the dialogue from Exercise 2. Then switch roles.</p><img src="/assets/images/tasks/etiquette.png" />',
              tasks: [],
            },
          ],
        },
        {
          title: 'Meeting people1',
          text: "<ol><li><strong>Natasha</strong>: Hi, my&nbsp;________ Natasha.<br><strong>Khalid</strong>: Pleased to ________ you. I'm Khalid Ali.<br><strong>Natasha</strong>: Pleased to meet you, ________.</li><li><strong>Philip</strong>: Good morning. ________ your name?<br><strong>Ahmed</strong>: I'm Ahmed. And ________ are?<br><strong>Philip</strong>: My name is Philip. ________ to meet you.</li><li><strong>Tim</strong>: Hi everybody, ________ is Ingrid.<br><strong>All</strong>: Hi!<br><strong>Tim</strong>: Ingrid, this ________ Ahmed, Linda, Mohammed and Mansoor.<br><strong>Ingrid</strong>: Nice meeting you ________.<br><strong>Linda</strong>: Likewise.<br><strong>Tim</strong>: ________ to the team and good luck.</li></ol>",
          exercises: [
            {
              content:
                '<p>How do you greet people in your country? What do you say when you greet people in English?</p>',
              tasks: [],
            },
            {
              content: '<p>Complete these dialogues with the words in the box.</p>',
              tasks: [
                {
                  content:
                    "<ol><li><strong>Natasha</strong>: Hi, my&nbsp;{{{option1}}} Natasha.<br><strong>Khalid</strong>: Pleased to {{{option2}}} you. I'm Khalid Ali.<br><strong>Natasha</strong>: Pleased to meet you, {{{option3}}}.</li><li><strong>Philip</strong>: Good morning. {{{option4}}} your name?<br><strong>Ahmed</strong>: I'm Ahmed. And {{{option5}}} are?<br><strong>Philip</strong>: My name is Philip. {{{option6}}} to meet you.</li><li><strong>Tim</strong>: Hi everybody, {{{option7}}} is Ingrid.<br><strong>All</strong>: Hi!<br><strong>Tim</strong>: Ingrid, this {{{option8}}} Ahmed, Linda, Mohammed and Mansoor.<br><strong>Ingrid</strong>: Nice meeting you {{{option9}}}.<br><strong>Linda</strong>: Likewise.<br><strong>Tim</strong>: {{{option10}}} to the team and good luck.</li></ol>",
                  correct: {
                    option1: "name's",
                    option2: 'meet',
                    option3: 'too',
                    option4: "What's",
                    option5: 'you',
                    option6: 'nice',
                    option7: 'this',
                    option8: 'is',
                    option9: 'all',
                    option10: 'Welcome',
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
                    option10: '',
                  },
                  interface: 'MatchingTask',
                },
              ],
            },
            {
              content:
                '<p>Work in small groups. Practise introductions. Follow the instructions below.</p>1. Introduce yourself.<br>2. Introduce a new team member.',
              tasks: [],
            },
          ],
        },
        {
          title: 'Meeting people2',
          text: '<audio controls src="/assets/audio/1.1-6.mp3"></audio><p><strong>Kathryn</strong>: Karim, what do you do?</p><p><strong>Karim</strong>: I&rsquo;m a ________<em>.</em>&nbsp;Who do you work for?</p><p><strong>Kathryn</strong>: I work for CISCO. I&rsquo;m a ________ there. Where are you from,&nbsp;Karim?</p><p><strong>Karim</strong>: I am from Kuwait. I work for Microsoft there. And where are you from, Kathryn?</p><p><strong>Kathryn</strong>: I&rsquo;m from the ________&nbsp;but now I live in Qatar. Do you know where Glenda&rsquo;s from?</p><p><strong>Karim</strong>: She is from the US.</p><p><strong>Kathryn</strong>: And what&rsquo;s her job?</p><p><strong>Karim</strong>: She works for ________. Her job is to set up new systems.</p>',
          exercises: [
            {
              content: '<p>Listen to this dialogue and choose the correct answers.</p>',
              tasks: [
                {
                  content:
                    '<p><strong>Kathryn</strong>: Karim, what do you do?</p><p><strong>Karim</strong>: I&rsquo;m a {{{select1}}}<em>.</em>&nbsp;Who do you work for?</p><p><strong>Kathryn</strong>: I work for CISCO. I&rsquo;m a {{{select2}}} there. Where are you from,&nbsp;Karim?</p><p><strong>Karim</strong>: I am from Kuwait. I work for Microsoft there. And where are you from, Kathryn?</p><p><strong>Kathryn</strong>: I&rsquo;m from the {{{select3}}} but now I live in Qatar. Do you know where Glenda&rsquo;s from?</p><p><strong>Karim</strong>: She is from the US.</p><p><strong>Kathryn</strong>: And what&rsquo;s her job?</p><p><strong>Karim</strong>: She works for {{{select4}}}. Her job is to set up new systems.</p>',
                  selects: {
                    select1: {
                      correctOptionIndex: 1,
                      options: ['developer', 'network administrator'],
                    },
                    select2: {
                      correctOptionIndex: 0,
                      options: ['system analyst', 'website analyst'],
                    },
                    select3: {
                      correctOptionIndex: 0,
                      options: ['UK', 'US'],
                    },
                    select4: {
                      correctOptionIndex: 0,
                      options: ['IBM', 'Dell'],
                    },
                  },
                  interface: 'SelectTask',
                },
              ],
            },
            {
              content: '<p>Complete this email with am, is, are, their, our or my.</p>',
              tasks: [
                {
                  content:
                    '<p>Dear Colleagues</p>\n<p>My name {{{option1}}} Jessica Martin and I {{{option2}}}. leader. The IT Support team members {{{option3}}} the IT Support team Mahmoud Al Banawy, Eli Ibrahim and Guido Pitteri. Mahmoud {{{option4}}} our network administrator. Eli and Guido {{{option5}}} system maintenance officers. {{{option6}}} job is to keep our systems going. {{{option7}}} job is to support you. {{{option8}}} contact number {{{option9}}} 675 567 567.</p>\n<p>Best regards<br>Jessica Martin</p>',
                  correct: {
                    option1: 'is',
                    option2: 'am',
                    option3: 'are',
                    option4: 'is',
                    option5: 'are',
                    option6: 'their',
                    option7: 'our',
                    option8: 'my',
                    option9: 'is',
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
            {
              content:
                '<p>Write a reply to the email in Exercise 2. Introduce yourself and three people in your group.</p>',
              tasks: [],
            },
            {
              content:
                "<p>Work in pairs. Ask and answer questions about your jobs, companies and nationalities.</p><em>Example:<br>A: Where are you from?<br>B: I'm from ... .</em>",
              tasks: [],
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
          order: 0,
          title: 'Jobs in IT',
          text: "<h1>Jobs in IT</h1><p>Hi! I'm Sylvia. I create usernames and passwords and I set firewalls. This is Isabelle. Herjob is to plan and design the network. And this is Andrew. His job is to make sure all of the computers work properly. Finally, Mark and Latika. Their area is data processing. We all work for the university. Our offices are in building 8.</p>",
          exercises: [
            {
              content: '<p>List the IT jobs you know.</p>',
              tasks: [],
            },
            {
              content: '<p>Complete the descriptions with the IT jobs in the box.</p>',
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
              content:
                '<p>Listen to three people talking about their jobs. Complete these job descriptions.</p><audio controls src="/assets/audio/karl-heba-wojtek.mp3"></audio>',
              tasks: [
                {
                  content:
                    '<p>Karl</p><p>Job: software {{{option1}}}</p><p>Responsibilities: the designs and {{{option2}}} computer games.</p>',
                  correct: { option1: 'developer', option2: 'develops' },
                  value: { option1: '', option2: '' },
                  interface: 'TextInputTask',
                },
                {
                  content:
                    '<p>Heba</p><p>Job: {{{option1}}} analyst</p><p>Responsibilities: he {{{option2}}} computer problems.</p>',
                  correct: { option1: 'system', option2: 'solves' },
                  value: { option1: '', option2: '' },
                  interface: 'TextInputTask',
                },
                {
                  content:
                    '<p>Wojtek</p><p>Job: database {{{option1}}}</p><p>Responsibilities: he analyses and {{{option2}}} electronic data.</p>',
                  correct: { option1: 'administrator', option2: 'present' },
                  value: { option1: '', option2: '' },
                  interface: 'TextInputTask',
                },
              ],
            },
            {
              content:
                "<p>Ask and answer questions about Karl, Heba and Wojtek.</p><em>Example:</em><br><em>A: What does Karl do?<br></em><em>B: He's: ... .</em>",
              tasks: [],
            },
          ],
        },
        {
          order: 5,
          title: 'Information Technology',
          text: '<ol><li>What is Information Technology?</li><li>What do Information Technology professionals do?</li></ol><h1>IT Department Restructuring</h1><p>DataPro Inc. is growing, and so our workload is increasing. Bout our IT department is not dealing with this increase effectively. So I am dividing the IT department into three sections: quality assurance, data processing and information security.</p><p>The responsibilities of each section are:<br><strong>Quality Assurance:</strong><br>Testing hardware<br>Providing technical support<br><strong>Data Processing:</strong><br>Writing code<br>Organizing data<br><strong>Information Security:</strong><br>Encoding online data transfers<br>Updating security software</p>',
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
            // {
            //   content: '<p>Match the sentence halves 1-8 to a-h</p>',
            //   tasks: [
            //     {
            //       options: [
            //         { value: 'Hanka is creating', correct: 'a file' },
            //         { value: 'Philip is inserting an', correct: 'image' },
            //         { value: 'Rob is troubleshooting', correct: 'the software' },
            //         { value: 'We are running', correct: 'a check-up' },
            //         { value: 'Betty is connecting', correct: 'a device' },
            //         { value: 'They are burning', correct: 'CDs' },
            //       ],
            //       leftCol: [],
            //       rightCol: [],
            //       interface: 'SortableTask',
            //     },
            //   ],
            // },
          ],
        },
        {
          order: 7,
          title: 'IT workplace rules',
          text: "FROM: Chief Information Officer<br>TO: all staff<br>DATE:16 June<br><strong>SUBJECT: IT security</strong><br><br><p>As you know, many new staff have joined us at XBM Digital recently, so now is a good time for a reminder about some of our rules. Security is important, and these rules will help us to keep our IT systems and data secure. Firstly, passwords are important for keeping the network secure. Don't use common words or numbers as passwords, such as birthdays or names of your children. Passwords must be alphanumeric and be at least eight characters long. You need to change your password every month or more frequently. Also, you should not share it with anyone, including your colleagues.</p>",
          exercises: [
            {
              content:
                '<p>Read the memo and find words that match these definitions. Then compare answers with а partner.</p>',
              tasks: [
                {
                  content:
                    '<p>1. person in charge of IT {{{option1}}}<br>2. keeping something safe {{{option2}}}<br>3. information such as numbers and details about people {{{option3}}}<br>4. а secret word that you type into а computer before you саn use it {{{option4}}}<br>5. а group of connected computers {{{option5}}}<br>6. having only letters and numbers {{{option6}}}<br>7. letters, numbers, punctuation marks, etc. {{{option7}}}<br>8. people you work with {{{option8}}}</p>',
                  correct: {
                    option1: 'Chief Information Officer',
                    option2: 'Secure',
                    option3: 'birthdays or names of your children',
                    option4: 'passwords',
                    option5: 'network',
                    option6: 'alphanumeric',
                    option7: 'characters',
                    option8: 'colleagues',
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
                  },
                  interface: 'MatchingTask',
                },
              ],
            },
            {
              content:
                '<p>Work in pairs. Write workplace rules for some of these activities. What reasons can you think of for each rule?</p><ul><li>installing new software</li><li>connecting personal devices to company computers</li><li>playing computer games</li><li>using social networking sites such as Facebook</li><li>using mobile phones</li><li>switching off your computer at night</li><li>downloading files</li><li>streaming music or video</li></ul>',
              tasks: [],
            },
          ],
        },
        {
          order: 8,
          title: 'IT organisations',
          text: '<h1>Futachiba</h1><p>Futachiba is а leading intemational provider of computer hardware. Тhе company is among the top five suppliers internationally of servers and among the top te n manufacturers of laptop computers . We have produ ction facilities in six countries and we sell our products to almo t every country in the world. With service centres in all our major markets, we provide а very high level of customer service</p><h1>IBGroup</h1><p>We are а fast-growing private company that supplies cloud computing services internationaJly. Our products include online office applications such as word processing, spreadsheet, presentation and database programs, which people can use on the internet anywhere and at any time. Our clients include major corporations, as well as many smaJI and medium-sized companies</p><h1>Digital world</h1><p>At Digital World we proudly design the most popular games in the world! We аге excited every day Ьу the great feedback we get from our favourite people: our game-playing customers. You сап play our award-winning games on all the major computer operating systems, i ncluding Windows and Мае OS. Many of them аге also availaЫe fo r Apple iOS and Android. Our wonderful staff started developing games in 2005 and continue to work оп new, highly entertaining products. We expect to launch the next version of our Ьiggest game, War of the Suns, next month.</p>',
          exercises: [
            {
              content: '<p>Read the company profiles and find words that match these definitions.</p>',
              tasks: [
                {
                  content:
                    '<p>1. а company or companies that sell things (Futachiba) {{{option1}}}, {{{option2}}}<br>2. companies that make things to se ll (Futachiba) {{{option3}}}<br>3. factories (Futachiba) {{{option4}}}<br>4. things а company sells (Futachiba) {{{option5}}}<br>5. using software that runs and stores information on the internet (IBGroup) {{{option6}}}<br>6. customers (IBGroup) {{{option7}}}<br>7. start selling а new product (Digital World) {{{option8}}}</p>',
                  correct: {
                    option1: 'provider',
                    option2: 'suppliers',
                    option3: 'manufactures',
                    option4: 'production facilities',
                    option5: 'products',
                    option6: 'computing services',
                    option7: 'clients',
                    option8: 'launch',
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
                  },
                  interface: 'MatchingTask',
                },
              ],
            },
            {
              content:
                '<p>Read the company profiles in Exercise 2 again and answer these questions. Then compare answers with а partner.</p><p>Which company or companies:</p>1. is getting bigger? ________<br>2. develops software? ________, ________<br>3. makes things in more than one country? ________<br>4. has а new product to launch? ________<br>5. sells software for use on the internet? ________',
              tasks: [],
            },
          ],
        },
      ],
      listen: [
        {
          order: 2,
          title: 'Jobs in IT',
          text: '<audio controls src="/assets/audio/1.2-working1.mp3"></audio>',
          exercises: [
            {
              content:
                '<p>Listen to six people introducing themselves. What jobs do they do? Complete the sentences.</p>',
              tasks: [
                {
                  options: [
                    {
                      value: '<img src="/assets/images/tasks/maria.jpg" alt="Maria" />',
                      correct: 'software developer',
                    },
                    {
                      value: '<img src="/assets/images/tasks/ahmed.jpg" alt="Ahmed" />',
                      correct: 'helpdesk supervisor',
                    },
                    { value: '<img src="/assets/images/tasks/freddy.jpg" alt="Freddy" />', correct: 'project manager' },
                    { value: '<img src="/assets/images/tasks/hana.jpg" alt="Hana" />', correct: 'support technician' },
                    { value: '<img src="/assets/images/tasks/sophie.jpg" alt="Sophie" />', correct: 'systems analyst' },
                  ],
                  leftCol: [],
                  rightCol: [],
                  interface: 'SortableTask',
                },
              ],
            },
            {
              content: '<p>Listen again. Complete these collocations.</p><em>write software</em>',
              tasks: [
                {
                  content:
                    '<p>1. supervise {{{option1}}}<br>2. have {{{option2}}}<br>3. be responsible {{{option3}}} IT projects<br>4. look {{{option4}}} computers<br>5. install {{{option5}}}<br>6. diagnose {{{option6}}}<br>7. design {{{option7}}}<br>8. maintain {{{option8}}}<br>9. write {{{option9}}} for software</p>',
                  correct: {
                    option1: 'a team of technical support people',
                    option2: 'a problem',
                    option3: 'our',
                    option4: 'after all the',
                    option5: 'software',
                    option6: 'the problem',
                    option7: 'databases',
                    option8: 'then',
                    option9: 'specification',
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
            {
              content:
                '<p>Work in pairs. How many new collocations саn you make with the verbs in 2?<br><em>bе responsible for а department</em></p>',
              tasks: [],
            },
            {
              content:
                '<p>Work in pairs. What does each person in 1 do in their job? Use the collocations in 2.<br><em>Аn IT project manager is responsible for IТ projects.</em></p>',
              tasks: [],
            },
            {
              content:
                "<p>Work in small groups. List any other IT jobs you саn think of. What do people in these jobs do? Which jobs would/wouldn't you like to do? Why?</p>",
              tasks: [],
            },
          ],
        },
        {
          order: 4,
          title: 'IT professionals',
          text: '',
          exercises: [
            {
              content: '<p>Complete these definitions with jobs from the Ьох.</p>',
              tasks: [
                {
                  content:
                    '<p>1. A {{{option1}}} designs and develops IT devices.</p><p>2. A {{{option2}}} writes computer programs.</p><p>3. A {{{option3}}} edits and deletes posts made by contributors to а blоg.</p><p>4. A {{{option4}}} manages the hardware and software that comprise а network.</p><p>5. A {{{option5}}} designs and maintains websites.</p><p>6. A {{{option6}}} works with companies to build secure computer systems.</p><p>7. A {{{option7}}} elps end-users with their computer problems in person, bу email or over the phone.</p>',
                  correct: {
                    option1: 'hardware engineer',
                    option2: 'software engineer',
                    option3: 'blog administrator',
                    option4: 'network administrator',
                    option5: 'webmaster',
                    option6: 'computer security specialist',
                    option7: 'help desk technician',
                  },
                  value: { option1: '', option2: '', option3: '', option4: '', option5: '', option6: '', option7: '' },
                  interface: 'MatchingTask',
                },
              ],
            },
            {
              content:
                '<p>Listen to four people on а training course introducing themselves and talking about their jobs. Which job in А does each person do?</p><audio controls src="/assets/audio/1.2-working3.mp3"></audio>',
              tasks: [
                {
                  content:
                    '<p>Speaker 1 {{{option1}}}</p><p>Speaker 2 {{{option2}}}</p><p>Speaker 3 {{{option3}}}</p><p>Speaker 4 {{{option4}}}</p>',
                  correct: {
                    option1: 'webmaster',
                    option2: 'help desk technician',
                    option3: 'hardware engineer',
                    option4: 'network administrator',
                  },
                  value: { option1: '', option2: '', option3: '', option4: '' },
                  interface: 'TextInputTask',
                },
              ],
            },
          ],
        },
      ],
      dialogs: [
        {
          order: 1,
          title: 'Jobs in IT',
          text: '<audio controls src="/assets/audio/ahmed-betty.mp3"></audio><p><strong>Ahmed</strong>: Where ________ you work, Betty?</p><p><strong>Betty</strong>: I work for Dell in Dubai. What ________ you?</p><p><strong>Ahmed</strong>: I ________ for HP in Budapest. What do you ________, Milo?</p><p><strong>Milo</strong>: I\'m a ________ developer. I work ________ Microsoft in Prague.</p><p><strong>Betty</strong>: Milo, do you ________ Frida?</p><p><strong>Milo</strong>: Yes, I do. What do you do ________ to know?</p><p><strong>Betty</strong>: Where ________ she work?</p><p><strong>Milo</strong>: She works with ________ in Prague. She designs websites for ________</p><p><strong>Ahmed</strong>: I see. Right, let\'s go. The workshop starts in five minutes.</p>',
          exercises: [
            {
              content: '<p>Listen and complete this dialogue.</p>',
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
            {
              content:
                '<p>What is your dream job? Write a job description for the job of your choice.</p><img src="/assets/images/tasks/dream-job.png" />',
              tasks: [],
            },
          ],
        },
        {
          order: 3,
          title: 'My job in IT',
          text: '<p>Listen to an IT employee telling his new manager about his job. What do you think his job is?</p><audio controls src="/assets/audio/1.2-working2.mp3"></audio>',
          exercises: [
            {
              content: '<p>Listen again. Mark the things as True or False that usually happen.</p>',
              tasks: [
                {
                  title: 'Robert checks emails.',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Robert has emails waiting for him.',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Robert visits people at their desks.',
                  options: ['True', 'False'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Sales people have problems.',
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Robert attends meetings.',
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Robert visits other companies.',
                  options: ['True', 'False'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content:
                '<p>Listen again. Write these phrases in the correct place in the sentences in 1.</p><ul><li>from time to time</li><li>generally</li><li>hardly ever</li><li>normally</li><li>occasionally</li><li>usually</li></ul>',
              tasks: [],
            },
            {
              content:
                '<p>Write an email message to introduce yourself to the employees in the company using the profile below or your own information.</p><q>You are a new employee in a company. Your position is a network administrator. You are responsible for setting up firewalls, security levels, wireless connection, usernames and passwords.</q>',
              tasks: [],
            },
          ],
        },
        {
          order: 6,
          title: 'Information Technology',
          text: "<audio controls src=\"/assets/audio/1.2-working5.mp3\"></audio><p><strong>Employee</strong>: Excuse me, Mr.Hopkins? I have a question about the ________.</p><p><strong>Hopkins</strong>: Please, come in. What's your question?</p><p><strong>Employee</strong>: Well, I'm now in the ________ section.</p><p><strong>Hopkins</strong>: Yes. You have a great understanding of the hardware.</p><p><strong>Employee</strong>: Thanks, but I have more experience with ________.</p><p><strong>Hopkins</strong>: I see. You want a ________ then?</p><p><strong>Employee</strong>: Exactly. I feel that I'm more valuable there.</p><p><strong>Hopkins</strong>: Let me ________ it.</p>",
          exercises: [
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
                  correctOptionIndex: 1,
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
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Listen again and complete the conversation.</p>',
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
              content:
                '<p>With a partner, act out the roles below, based on Exercise 2. Then, switch roles.</p><img src="/assets/images/tasks/information-technology.png" alt="Information Technology" />',
              tasks: [],
            },
          ],
        },
        {
          order: 7,
          title: 'IT workplace rules',
          text: '',
          exercises: [
            {
              content:
                '<p>Listen to two people talking about workplace rules and complete this tаblе. Then compare answers with а partner.</p><audio controls src="/assets/audio/1.2-working7.mp3"></audio><img src="/assets/images/tasks/table.png" alt="Book fragment" />',
              tasks: [],
            },
            {
              content:
                '<p>How does Lateefa feel about the rules in her workplace? How can you tell? Do you think she likes her manager? Why/Why not?</p>',
              tasks: [],
            },
            {
              content:
                '<p>Work in pairs. Make the dialogues. Follow the instructions.</p><strong>Student A</strong><br>1. Student В is а new employee in your company. Explain these 1Т workplace rules to him/her.<ul><li>use company equipment for personal reasons x</li><li>install software x</li><li>change password frequently ✓</li><li>use Facebook x</li></ul>2. Swap roles. You are а new employee. Listen to Student В explain some 1Т workplace rules.<ul><li>start work by 8 a.m. ✓</li><li>eat at desk x</li><li>keep disk clean ✓</li><li>connect own devices x</li></ul>',
              tasks: [],
            },
          ],
        },
        {
          order: 9,
          title: 'Acronyms',
          text: "<audio controls src=\"/assets/audio/1.2-working10.mp3\"></audio><p><strong>Andrei</strong>: Bob, can you ________ me, please?</p><p><strong>Bob</strong>: Sure.</p><p><strong>Andrei</strong>: I don't understand this acronym. What does it ________ for?</p><p><strong>Bob</strong>: Let те see. 'WЗ'. l'm not sure. МауЬе WWW, the World Wide Web.</p><p><strong>Andrei</strong>: ОК. What does Р2Р stand for?</p><p><strong>Bob</strong>: ________ stands for person-to-person.</p><p><strong>Andrei</strong>: ОК. What does IP ________?</p><p><strong>Bob</strong>: It means lnternet Protocol.</p><p><strong>Andrei</strong>: How do you ________ 'Protocol'?</p><p><strong>Bob</strong>: р-r-o-t-o-c-o-l.</p><p><strong>Andrei</strong>: Thanks.</p><p><strong>Bob</strong>: You're welcome.</p>",
          exercises: [
            {
              content:
                '<p>Work in small groups. List the IT acronyms you know.</p><img src="/assets/images/tasks/acronyms.png" />',
              tasks: [],
            },
            {
              content: '<p>Listen and complete this dialogue.</p>',
              tasks: [
                {
                  content:
                    "<p><strong>Andrei</strong>: Bob, can you {{{option1}}} me, please?</p><p><strong>Bob</strong>: Sure.</p><p><strong>Andrei</strong>: I don't understand this acronym. What does it {{{option2}}} for?</p><p><strong>Bob</strong>: Let те see. 'WЗ'. l'm not sure. МауЬе WWW, the World Wide Web.</p><p><strong>Andrei</strong>: ОК. What does Р2Р stand for?</p><p><strong>Bob</strong>: {{{option3}}} stands for person-to-person.</p><p><strong>Andrei</strong>: ОК. What does IP {{{option4}}}?</p><p><strong>Bob</strong>: It means lnternet Protocol.</p><p><strong>Andrei</strong>: How do you {{{option5}}} 'Protocol'?</p><p><strong>Bob</strong>: р-r-o-t-o-c-o-l.</p><p><strong>Andrei</strong>: Thanks.</p><p><strong>Bob</strong>: You're welcome.</p>",
                  correct: { option1: 'help', option2: 'stand', option3: 'it', option4: 'mean', option5: 'spell' },
                  value: { option1: '', option2: '', option3: '', option4: '', option5: '' },
                  interface: 'TextInputTask',
                },
              ],
            },
            {
              content:
                '<p>Work in pairs. Make а list of acronyms. Ask and answer questions.</p><em>Example:</em><br><em>A: What does HTML stand for/mean?</em><br><em>B: It stands for/means ... .</em>',
              tasks: [],
            },
          ],
        },
      ],
      words: wordsFor12,
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
              content: '<p>Match the words with the definitions.</p>',
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
            {
              content:
                '<p>Answer the questions.</p>1. What is stress?<br>2. Can stress be useful?<br>3. Can your work cause the stress?<br>4. What are the main causes of the stress?<br>5. Can stress become dangerous for our health and life?<br>6. How does stress affect us?<br>7. What can we do to reduce stress?',
              tasks: [],
            },
          ],
        },
        {
          title: 'Simple ways to reduce stress',
          text: '<img src="/assets/images/simple-ways-to-reduce-stress.jpg" />',
          exercises: [],
        },
      ],
      words: wordsFor13,
    },
    {
      id: 'ss4',
      title: 'Conversations',
      image: '/assets/images/talking.png',
      texts: [
        {
          title: 'By Haigh Trenchard',
          text: '<ol> <li>What do you talk about with someone who you don&rsquo;t know?</li> <li>What do you do when a conversation going poorly?</li> </ol> <h1>By Haigh Trenchard</h1> <p>It happens to every one. Somebody introduces you to a friend and then walks away. Now you&rsquo;re standing with somebody you don&rsquo;t know. What do you talk about?</p> <p>The weather is always a possibility. But there isn&rsquo;t always much to say. To make conversation flow, it&rsquo;s better to ask questions. Ask the person what they do for living, and what their job involves. Discussing your own former jobs is a good option, too.</p> <p>Other safe topics include your home town and your education. You can also speak about hobbies and sports. But avoid asking people about their religion, age, politics and marital status until you know then better.</p>',
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
      // listen: [
      //   {
      //     content: '',
      //     tasks: [
      //       // remade
      //       {
      //         title:
      //           'Listen to a conversation between a businessman and a colleague. Check the topics that are suggested to talk about',
      //         options: ['age', 'work', 'religion', 'weather', 'marital status', 'education'],
      //         correctOptionIndexes: [1, 3],
      //         interface: 'MultipleSelectionTask',
      //       },
      //     ],
      //   },
      //   {
      //     content: '',
      //     tasks: [
      //       {
      //         content:
      //           "<p><strong>Businessman</strong>: Sarah, I have to take a phone call, Please make {{{option1}}} with Mr, Jensen until I'm free.</p> <p><strong>Colleague</strong>: But I don't know him! I have nothing to talk to him about.</p> <p><strong>Businessman</strong>: Just ask him what he does for a {{{option2}}}.</p> <p><strong>Colleague</strong>: But I already know what his work {{{option3}}}. After all, he's our consultant.</p> <p><strong>Businessman</strong>: Then why don't you {{{option4}}} weather?</p> <p><strong>Colleague</strong>: It's not a very interesting {{{option5}}}.</p> <p><strong>Businessman</strong>: Well, I'm sure you'll think of something. Just don't up bring up his {{{option6}}}.</p> <p><strong>Colleague</strong>: Good to know, thanks.</p>",
      //         correct: {
      //           option1: 'small talk',
      //           option2: 'living',
      //           option3: 'involves',
      //           option4: 'discuss',
      //           option5: 'topic',
      //           option6: 'marital status',
      //         },
      //         value: {
      //           option1: '',
      //           option2: '',
      //           option3: '',
      //           option4: '',
      //           option5: '',
      //           option6: '',
      //         },
      //         interface: 'TextInputTask',
      //       },
      //     ],
      //   },
      //   {
      //     content:
      //       '<p>Listen to a conversation between two men and women. Mark the following statements as True or False</p>',
      //     tasks: [
      //       {
      //         title: 'The woman is introduced to the friend of a colleague',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 0,
      //         interface: 'SelectionTask',
      //       },
      //       {
      //         title: "The speakers are at the woman's birthday party",
      //         options: ['True', 'False'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //       {
      //         title: 'All three speakers are in the same soccer league',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //     ],
      //   },
      //   {
      //     content: '',
      //     tasks: [
      //       {
      //         content:
      //           "<p><strong>Man 1</strong>: Sarah, I'd like you to meet {{{option1}}}, John. John, this is Sarah.</p> <p><strong>Woman</strong>: Hi John, it's a pleasure to meet you.</p> <p><strong>Man 2</strong>: And nice to meet you, too. How do you do two know {{{option2}}}?</p> <p><strong>Woman</strong>: Oh, we work together.</p> <p><strong>Man 2</strong>: That's right. Bob mentioned that some of his colleagues were coming to {{{option3}}} party.</p> <p><strong>Man 1</strong>: You know, Sarah, you and John have something {{{option4}}}.</p> <p><strong>Woman</strong>: {{{option5}}}? What's that?</p> <p><strong>Man 1</strong>: {{{option6}}} in the same adult soccer league.</p>",
      //         correct: {
      //           option1: 'my friend',
      //           option2: 'one another',
      //           option3: 'his birthday',
      //           option4: 'in common',
      //           option5: 'really',
      //           option6: 'you both',
      //         },
      //         value: {
      //           option1: '',
      //           option2: '',
      //           option3: '',
      //           option4: '',
      //           option5: '',
      //           option6: '',
      //         },
      //         interface: 'TextInputTask',
      //       },
      //     ],
      //   },
      // ],
      words: wordsFor14,
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
      // listen: [
      //   {
      //     content:
      //       '<p>Listen to a conversation between a manager and an employee. Mark the following statements as True or False</p>',
      //     tasks: [
      //       {
      //         title: 'The woman needs help preparing her presentation.',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //       {
      //         title: 'The woman thinks that handouts are optional',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 0,
      //         interface: 'SelectionTask',
      //       },
      //       {
      //         title: 'The man should create graphs and charts first',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //     ],
      //   },
      //   {
      //     content: '<p>Listen again and complete the conversation</p>',
      //     tasks: [
      //       {
      //         content:
      //           "<p><strong>Manager</strong>: I'd like to see our gross earnings and profit margins broken down into graphs and tables. Make it as clear {{{option1}}}.</p> <p><strong>Employee</strong>: Of course. What about {{{option2}}}?</p> <p><strong>Manager</strong>: It's your presentation, so I'll leave that up to you. If you need a {{{option3}}}, use the copy room.</p> <p><strong>Employee</strong>: Okay. I'll do that.</p> <p><strong>Manager</strong>: Oh and Jim! One {{{option4}}}!</p> <p><strong>Employee</strong>: What is it?</p> <p><strong>Manager</strong>: {{{option5}}} to reserve the conference room. Please take care of that before anything else.</p> <p><strong>Employee</strong>: Understood! I'll do that {{{option6}}}.&nbsp;</p>",
      //         correct: {
      //           option1: 'living',
      //           option2: 'involves',
      //           option3: 'avoid',
      //           option4: 'flow',
      //           option5: 'discuss',
      //           option6: 'weather',
      //           option7: 'introduce',
      //         },
      //         value: {
      //           option1: '',
      //           option2: '',
      //           option3: '',
      //           option4: '',
      //           option5: '',
      //           option6: '',
      //           option7: '',
      //         },
      //         interface: 'TextInputTask',
      //       },
      //     ],
      //   },
      //   {
      //     content: '<p>Listen again and complete the conversation</p>',
      //     tasks: [
      //       {
      //         content:
      //           "<p><strong>Coworker 1</strong>: Linda, thanks so much for letting me practice my presentation with you. I really appreciate it. So, what {{{option1}}}?</p> <p><strong>Coworker 2</strong>: Well, tor the most part, I thought it was great! Your {{{option2}}}&nbsp;was really good. You kept eye contact really well, and you had an open posture.</p> <p><strong>Coworker 1</strong>: Thanks! That's good to hear. Was there anything that you think I should change?</p> <p><strong>Coworker 2</strong>: Let's see. yeah, there are a few spots {{{option3}}}. First of all, there were parts where you read the slides {{{option4}}}.</p> <p><strong>Coworker 1</strong>: Uh, yes. I find it hard to {{{option5}}}.</p> <p><strong>Coworker 2</strong>: Oh, okay. Well, I think it sounded a little unnatural. So, maybe you could just {{{option6}}} the slides, and then rephrase them in your own words.</p>",
      //         correct: {
      //           option1: 'did you think',
      //           option2: 'body language',
      //           option3: 'that need work',
      //           // note
      //           option4: '',
      //           option5: 'memorize staff',
      //           option6: 'glance at',
      //         },
      //         value: {
      //           option1: '',
      //           option2: '',
      //           option3: '',
      //           option4: '',
      //           option5: '',
      //           option6: '',
      //           option7: '',
      //         },
      //         interface: 'TextInputTask',
      //       },
      //     ],
      //   },
      // ],
      words: wordsFor15,
    },
    {
      id: 'ss6',
      title: 'Business meetings',
      image: '/assets/images/etiquette.png',
      texts: [
        {
          title: 'Business blog',
          text: '<p>Before you read the passage, talk about these questions.</p><ol><li>What are the challenges and responsibilities of running a meeting?</li><li>What are some behaviors that would be considered rude at a meeting?</li></ol><h1>Business blog</h1><p>Some meetings are really unproductive. People <strong>bicker </strong>&ndash; they<strong> talk over</strong> others and don&rsquo;t listen. Consequently, meetings drag on and on. This wouldn&rsquo;t happen if businesses had a set of meeting rules. Instead, meetings would be useful, productive and short! Here are my suggestions for meeting etiquette.</p> <ul> <li><strong>Send your apologies</strong> if you cannot attend. Your colleagues may be waiting for you so they can start the meeting.</li> <li><strong>State your opinion</strong> once only. If it&rsquo;s a good idea, people will take note. There&rsquo;s no need to <strong>repeat yourself</strong>.</li> <li>If you <strong>disagree </strong>with someone, don&rsquo;t <strong>interrupt</strong>. Wait until the other person finishes speaking, and then state your <strong>objection</strong>.</li> <li>Don&rsquo;t use <strong>jargon</strong>. Your colleagues may not be specialists in your field, so they will need to keep <strong>asking for explanations</strong>. This <strong>wastes time</strong>. Talk in everyday language so that everybody can understand.</li> </ul>',
          exercises: [
            {
              content:
                '<p>Read the blog from a business websites. Then, read the summary of the dialogue. Fill in the blanks with the correct words from the word bank.</p>',
              tasks: [
                {
                  content:
                    "<p>The writer believes that meetings are {{{option1}}} because people argue and don't listen. The writer recommends that people say sorry if they cannot {{{option2}}} a meeting. They should {{{option3}}} their opinions just once and use {{{option4}}} language.</p>",
                  correct: { option1: 'unproductive', option2: 'attend', option3: 'state', option4: 'common' },
                  value: { option1: '', option2: '', option3: '', option4: '' },
                  interface: 'TextInputTask',
                },
              ],
            },
            {
              content: '<p>Choose the word that is closest in meaning to the underlined part.</p>',
              tasks: [
                {
                  title: 'Write a message saying sorry if you cannot attend.',
                  options: ['State your opinion', 'Send your apologies', 'Ask for an explanation'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'It is unprofessional to argue in an immature way during meetings',
                  options: ['interrupt', 'disagree', 'bicker'],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
                {
                  title: "It's rude to talk when other people are talking",
                  options: ['repeat youself', 'talk over other people', 'take note of other people'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'During meeting Jane says the same thing again and again',
                  options: ['repeats herself', 'disagrees', 'interrupts'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Read the sentence pairs. Choose where the words best fit in the blanks</p>',
              tasks: [
                {
                  content:
                    "<p>objection/ jargon</p><p>Does anyone have a(n) {{{option1}}} to this suggestion? {{{option2}}} should only be used if everyone understands it.</p><p>wast time / take note&nbsp;</p><p>{{{option3}}} of any important changes. Don't {{{option4}}} arguing.&nbsp;</p><p>ask for an explanation / state your opinion</p><p>it is important to {{{option5}}} if the material is confusing. Please do not {{{opinion6}}} until the chairman invites you to do so.</p>",
                  correct: {
                    option1: 'objection',
                    option2: 'jargon',
                    option3: 'take note',
                    option4: 'wast time',
                    option5: 'ask for an explanation',
                    opinion6: 'state your opinion',
                  },
                  value: { option1: '', option2: '', option3: '', option4: '', option5: '', opinion6: '' },
                  interface: 'MatchingTask',
                },
              ],
            },
          ],
        },
        {
          title: 'Computers',
          text: '<ul><li>What kind of computers do you see?</li><li>What do you use computers for at work?</li></ul><p>Thanks for including TEI Inc. in your article on workplace technology. We have many types of computers at our disposal. First, all employees receive <strong>PDA</strong>s and <strong>desktop computers</strong>. But we only use those for word processing and spread sheets. Of course, some programs are too powerful for desktops. So may employees use the faster <strong>workstations</strong>. And we do have a few <strong>laptops </strong>and <strong>handheld PCs</strong>. However, employees just answer email with their <strong>cell phones</strong>. The new <strong>server </strong>provides access to all printers. Finally, our <strong>mainframe </strong>processes our largest data sites. No need for a <strong>supercomputer </strong>yet!</p>',
          exercises: [
            {
              content: '<p>Read the email about computers available at TEI inc. Then, choose the correct answers.</p>',
              tasks: [
                {
                  title: 'What the email about?',
                  options: [
                    'the typesof work employees do',
                    'computers that the company sells',
                    'what computers the company uses',
                    'the installation of a server',
                  ],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
                {
                  title: 'According to the passage, employees use laptops when they',
                  options: [
                    'respond to email',
                    'work on spreadsheets',
                    'process the largest files',
                    'work outside of the office',
                  ],
                  correctOptionIndex: 3,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Which of the following is NOT true?',
                  options: [
                    'The company has a mainframe',
                    'Employees get email on their cell phones',
                    'All employees receive desktop computers',
                    'The desktop computers are faster than the workstations',
                  ],
                  correctOptionIndex: 3,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Read the sentence and choose the correct words.</p>',
              tasks: [
                {
                  title: 'My (PDA/Mainframe) notifies me when I have a meeting.',
                  options: ['PDA', 'Mainframe'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'I have a (laptop/supercomputer) to do work on the plane.',
                  options: ['laptop', 'supercomputer'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'John has a (server/desktop computer) because he only uses simple programs',
                  options: ['server', 'desktop computer'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: "This (computer/server) runs programs, but doesn't have Internet access.",
                  options: ['computer', 'server'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'A (workstation/handheld PC) is smaller than a laptop, but still has a keyboard.',
                  options: ['workstation', 'handheld PC'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Connect to the (server/RDA) to use that printer.',
                  options: ['server', 'PDA'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'A (supercomputer/handheld PC) is the most powerful machine in the world.',
                  options: ['supercomputer', 'handheld PC'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Match the words (1-3) with the definitions (A-C).</p>',
              tasks: [
                {
                  content:
                    '<p>A: Large and powerful computer that supports many other computers working at once</p><p>Answer: {{{option1}}}</p><p>B: Fast computer that is used by one person and has more memory than an ordinary personal computer.</p><p>Answer: {{{option2}}}</p><p>C: A device that makes and receives calls.</p><p>Answer: {{{option3}}}</p>',
                  correct: { option1: 'mainframe', option2: 'workstation', option3: 'cell phone' },
                  value: { option1: '', option2: '', option3: '' },
                  interface: 'TextInputTask',
                },
              ],
            },
          ],
        },
      ],
      // listen: [
      //   {
      //     content:
      //       '<p>Listen to a conversation between an employee and a manager. Mark the following statements as true or false.</p>',
      //     tasks: [
      //       {
      //         title: 'The woman feels the meeting are not productive.',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 0,
      //         interface: 'SelectionTask',
      //       },
      //       {
      //         title: 'The man wants people to speak less in meetings.',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //       {
      //         title: 'The man will write a set of rules for meetings.',
      //         options: ['True', 'False'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //     ],
      //   },
      //   {
      //     content: '<p>Listen again and complete the conversation.</p>',
      //     tasks: [
      //       {
      //         content:
      //           "<p><strong>Employee:</strong> It's these meetings. They're really getting {{{option1}}}.</p><p><strong>Manager:</strong> What do you mean?</p><p><strong>Employee:</strong> People always {{{option2}}}. It wastes so much time.</p><p><strong>Manager:</strong> I disagree. I want to {{{option3}}} people to speak if they have an objection.</p><p><strong>Employee:</strong> That's good. But they shouldn't {{{option4}}} other people or repeat themselves over and over.</p><p><strong>Manager:</strong> Okay, I agree with that.</p><p><strong>Employee:</strong> Also, it might help if we asked the engineers to use less {{{option5}}}. We lose a lot of time just asking what certain words mean.</p><p><strong>Manager:</strong> Maybe we need to {{{option6}}} some guidelines for meeting etiquette.</p><p>&nbsp;</p>",
      //         correct: {
      //           option1: 'out of hand',
      //           option2: 'bicker and interrupt',
      //           option3: 'encourage',
      //           option4: 'talk over',
      //           option5: 'jargon',
      //           option6: 'set up',
      //         },
      //         value: { option1: '', option2: '', option3: '', option4: '', option5: '', option6: '' },
      //         interface: 'TextInputTask',
      //       },
      //     ],
      //   },
      //   {
      //     content:
      //       '<p>Listen to a conversation between an IT professional and a new employee. Choose the correct answers.</p>',
      //     tasks: [
      //       {
      //         title: 'Which of the following computers are NOT shared by employees at TEI Inc. ?',
      //         options: ['the server', 'workstation', 'laptops', 'desktop computers'],
      //         correctOptionIndexes: [2, 3],
      //         interface: 'MultipleSelectionTask',
      //       },
      //       {
      //         title: 'According to the dialogue, employees use the server to',
      //         options: ['open programs', 'reserve workstations', 'log onto desktop computers', 'borrow laptops'],
      //         correctOptionIndex: 1,
      //         interface: 'SelectionTask',
      //       },
      //     ],
      //   },
      //   {
      //     content: '<p>Listen again and complete the conversation.</p>',
      //     tasks: [
      //       {
      //         content:
      //           "<p>A: Here's your new office. Jon works in here, too.</p><p>B: So, everyone has their own {{{option1}}}. Do we have laplops?</p><p>A: Yes. That's your computer there. Laptops are in the {{{option2}}}.</p><p>B: Okay, but I also need a {{{option3}}}.</p><p>A: Right, you work on some powerful programs. Those are next door.</p><p>B: Do I sign up to use them? I mean how do I get access to one?</p><p>A: Just {{{option4}}} to the server. All computers connect to it. Then, click {{{option5}}} workstation.</p><p>B: Thanks!</p>",
      //         correct: {
      //           option1: 'desktop computer',
      //           option2: 'IT department',
      //           option3: 'workstation',
      //           option4: 'log on',
      //           option5: 'reserve',
      //         },
      //         value: { option1: '', option2: '', option3: '', option4: '', option5: '' },
      //         interface: 'MatchingTask',
      //       },
      //     ],
      //   },
      //   {
      //     content:
      //       "<p>With a partner, act out the roles below based on Task. Then, switch roles.</p><p>Strudent A: You are a new employee. Ask Student B about:</p><ul><li>What computers they have</li><li>Where the computers are</li><li>How to access computers</li></ul><p>Student B: You are an IT Professional. Answer Student A's questions about the computers.</p>",
      //     tasks: [],
      //   },
      // ],
      words: wordsFor16,
    },
  ],
}
