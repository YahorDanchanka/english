import { Section } from 'src/types'
import { wordsFor31 } from 'stores/data/words'

export const section: Section = {
  id: 's3',
  title: 'Hardware',
  subsections: [
    {
      id: 'ss1',
      title: 'Inside the computer',
      image: '/assets/images/3.1.png',
      texts: [
        {
          title: 'Assembly Instructions',
          text: '<h1>Assembly Instructions</h1> <p style="text-align: justify;">Step #1: First, gather your parts.These include a motherboard, powersupply, processor, case, heat sink,hard drive, and disk drive.Step #2: Next, attach the motherboard tothe case. Then, connect the processor tothe motherboard\'s primary socket.Step #3 Attach the heat sink and cooling fanto the processor.Step #4 Insert the RAM card into an openmemory slot. Put any expansion cards intothe expansion slots.Step #5 Connect your hard drive to the motherboardand power supply.Step #6 Close the case and connect the power supply.</p>',
          exercises: [
            {
              content: '<p>Read the technology guide about computer assembly. Then choose the correct answer.</p>',
              tasks: [
                {
                  title: 'What is the guide mostly about?',
                  options: [
                    'Putting together a computer',
                    'problems with computer parts',
                    'uses of expantion cards',
                    'repairing a broken computer',
                  ],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'When should the hard drive be installed?',
                  options: ['Step #1', 'Step #3', 'Step #5', 'Step #6'],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
                {
                  title: 'According to the guide, what is NOT an assembly step?',
                  options: ['Collecting parts', 'Opening the case', 'Connecting the drives', 'installing the RAM card'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '',
              tasks: [
                {
                  options: [
                    { value: 'A slotten board with circuits', correct: 'Motherboard' },
                    { value: 'A short term, quick memory sourse', correct: 'RAM' },
                    { value: 'A part used to cool the processor', correct: 'Heat sink' },
                    { value: 'A part used to store a large amout of data', correct: 'Hard drive' },
                    { value: 'A part used to increase a computers functions', correct: 'Expansion card' },
                    { value: 'A part that completes tasks for the computer', correct: 'Processor' },
                  ],
                  leftCol: [],
                  rightCol: [],
                  interface: 'SortableTask',
                },
              ],
            },
            {
              content: '<p>Write a word that is similar in meaning.</p>',
              tasks: [
                { title: 'Spinning blades keep computer from overheating', word: 'F[a][n]', interface: 'TypingTask' },
                {
                  title: 'The electrical source directs power thoughout the computer',
                  word: '[p][o]w[e][r] [s][u][p][p][l][y]',
                  interface: 'TypingTask',
                },
                {
                  title: 'Joey purchased a progective bag for his computer',
                  word: 'c[a][s][e]',
                  interface: 'TypingTask',
                },
                {
                  title: "Can the coded disk reader play DVD's?",
                  word: 'd[i][s][k] d[r][i]v[e]',
                  interface: 'TypingTask',
                },
              ],
            },
          ],
        },
        {
          title: 'Inside the Computer',
          text: "<p>Inside the Computer</p><h2>EXTERIOR</h2><p><br>The X900 features a durablematal case.<br>This protects&nbsp;from typical wear and damage.</p><p>Every port has a fitted rubber cover. These prevent interior<br>dust buildup.</p><h2>Interior</h2><p>Your computers power supply connect to the motherboard.<br>This is&nbsp; drives the X200s powerul processor!&nbsp;<br>All that power produces heat. That's why your X800 has<br>an efficient fan and heat sink. These keep<br>internal temperatures at a safe, low level.</p><p>You'll find lots of data storage on&nbsp;the hard drive. Also, transfer&nbsp;<br>files with the built-in&nbsp;CD/DVD drive.</p>",
          exercises: [
            {
              content: '<p>Read the setntense pairs. Choose which word or pharse best fits each blank.</p>',
              tasks: [
                {
                  content:
                    "<ol>\n<li>A {{{option1}}} prevents a computer from getting dirty.</li>\n<li>The new {{{option2}}} is faster than the old one</li>\n<li>The computer's {{{option3}}} protect's it from damage.</li>\n<li>The cable plug's onto the {{{option4}}}.</li>\n</ol>",
                  correct: { option1: 'cover', option2: 'processor', option3: 'case', option4: 'port' },
                  value: { option1: '', option2: '', option3: '', option4: '' },
                  interface: 'MatchingTask',
                },
              ],
            },
          ],
        },
      ],
      dialog: [
        {
          content: '<p>Listen again and complete the<br>conversation.</p>',
          tasks: [
            {
              content:
                "<p><strong>Support Specialist</strong>: Technology Support, Ivan<br>speaking. How can i help?<br><strong>Custome</strong>r: i have an old 1 hard drive&nbsp;and need help taking it out.<br><strong>Support Specialist</strong>: Okay. Unplug the connectionto the power supply first, then disconnect the {{{option1}}} cable.<br><strong>Customer:</strong> Which one is the {{{option2}}}?<br><strong>Support Specialist:</strong> It's the smaller black box in&nbsp;he corenr.<br><strong>Customer</strong>:I'm {{{option3}}} both. What's next?<br><strong>Support Specialist</strong>: Next, take out the two small<br>screws. They fasten the hard&nbsp;drive to the {{{option4}}}.<br><strong>Customer</strong>: I see, and then it slides out.&nbsp;Thanks!</p>",
              correct: { option1: 'motherboard', option2: 'power supply', option3: 'unplugging', option4: 'case' },
              value: { option1: '', option2: '', option3: '', option4: '' },
              interface: 'TextInputTask',
            },
          ],
        },
      ],
      words: wordsFor31,
    },
  ],
}
