import { Section } from 'src/types'
import { wordsFor21 } from 'stores/data/words'

export const section: Section = {
  id: 's2',
  title: 'Computers today',
  subsections: [
    {
      id: 'ss1',
      title: '2.1',
      image: '/assets/images/words/computer.png',
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
                      value: 'Technology changes so quickly that we have to scrap computers when they become obsolete',
                      correct: 'electronic waste',
                    },
                    {
                      value: "I've been getting emails about offers for lots of different products",
                      correct: 'loss of privacy',
                    },
                    {
                      value: 'My computer system has been broken into and some useful information has been destroyed',
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
      words: wordsFor21,
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
}
