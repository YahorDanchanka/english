import { Section } from 'src/types'

export const section: Section = {
  id: 's4',
  title: 'Software',
  subsections: [
    {
      id: 'ss1',
      title: '4.1',
      image: '/assets/images/job-interview.png',
      texts: [
        {
          title: 'What is Computer Software?',
          text: '<h1>What is Computer Software?</h1> <p>Computer software, or simply software, is a set of instructions or encoded information that tells a computer what to do or how to perform a task. It can also mean all software on a computer, including the applications and the operating system.</p> <p>System software. A system software is any program that allows computers to perform basic operations. The earliest computers operated with only basic software support. Users manually entered commands into a computer. This required specialized knowledge and lots of patience.</p> <p>Now, computers come with sophisticated operating systems. These systems manage both hardware and software of a computer. Users control their computer&rsquo;s operations easily with windowing systems. These allow even beginners to perform complicated operations.</p> <p>Most modern computers come with pre-installed device drivers. These control the unit&rsquo;s operating system. Other components ensure that peripherals work with the operating system. Sophisticated BIOS in the firmware performs this function.</p> <p>Application Software.</p> <p>Application software lets you do specific jobs such as writing letters, doing calculations, drawing and playing games. Examples are a word processor or a graphics package.</p> <p>Programming Software.</p> <p>Programming software allows programmers to develop new programs. The most basic programming software is a source code editor. These programs are usually basic text editors. Programmers use them to enter lines of code into a computer. Lines of code are written in a programming language.</p> <p>Other programming software are more complex. An IDE (integrated development environment) provides tools for writing programs. These usually include a text editor and a debugger. Other tools may include a linker, a compiler, or an interpreter.</p>',
          exercises: [
            {
              content: '<p>Match the words (1-6) with the definitions (A-F).</p>',
              tasks: [
                {
                  options: [
                    { value: 'BIOS', correct: 'A set of instructions in firmware' },
                    {
                      value: 'Windowing System',
                      correct: 'A user interface that organizes information into visual boxes',
                    },
                    {
                      value: 'Operate',
                      correct: 'To function in a specific manner according to instructions or software',
                    },
                    {
                      value: 'Operating system',
                      correct: 'Programs that manage a computer’s hardware and applications',
                    },
                    { value: 'Manually', correct: 'Done directly by a person, without automatic functions' },
                    { value: 'Source code editor', correct: 'Software used to enter lines of coded text' },
                    { value: 'Program', correct: 'A series of operations that control the functions of a computer' },
                    { value: 'Programming language', correct: 'codes used to write commands to a computer' },
                    {
                      value: 'Programming software',
                      correct: 'Any software that supports the development of new applications ',
                    },
                    {
                      value: 'Interpreter',
                      correct: 'An application that decodes instructions written in other languages',
                    },
                    { value: 'Compiler', correct: 'Something that reads and executes other programs' },
                  ],
                  leftCol: [],
                  rightCol: [],
                  interface: 'SortableTask',
                },
              ],
            },
            {
              content:
                '<p><span>Read </span><span><span>the sentence pairs. Choose which word or phrase best fits each blank.</span></span></p>',
              tasks: [
                {
                  content:
                    '<p><span>firmware / hardware</span></p><p><span>A. Computer&rsquo;s keyboard and monitor are part of its {{{option1}}} .&nbsp;</span></p><p><span>B. Information about a computer&rsquo;s operating system is stored in the {{{option2}}}.</span></p><p><span>system software / device driver</span></p><p><span>A. The {{{option3}}} dictates how a computer interacts with peripherals.</span></p><p><span>B. A {{{option4}}} allows a user to run additional programs on a computer.</span></p><p><span>text editor / IDE</span></p><p><span>A. A(n) {{{option5}}} usually provides programmers with various tools for writing programs.</span></p><p><span>B. A(n) {{{option6}}} is a basic program for entering commands and code into a computer.&nbsp;</span></p><p><span>debugger / linker</span></p><p><span>A. A {{{option7}}} provides links to additional information needed for programs to run.</span></p><p><span>B. A {{{option8}}} finds and corrects errors in code.</span></p>',
                  correct: {
                    option1: 'hardware',
                    option2: 'firmware',
                    option3: 'system software',
                    option4: 'device driver',
                    option5: 'IDE',
                    option6: 'text editor',
                    option7: 'linker',
                    option8: 'debugger',
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
                '<p>Answer the questions on the text What is Computer Software?</p><ol><li>What is computer software?</li><li>What does it include?</li><li>How do we use computer software?</li><li>What types of computer software are there?</li><li>What is the difference between system and application software?</li><li>What software enables users and programs to communicate with hardware?</li><li>How do people use computer software in professional spheres?</li><li>What do operating system do?</li></ol>',
              tasks: [],
            },
            {
              content:
                '<p><strong><span>Find English equivalents of the following words in the text What is Computer Software? </span></strong></p><p>Набор инструкций, закодированная информация, выполнять задачи, жесткий диск компьютера,<span>&nbsp; </span>программы обработки текста, графические редакторы, выполнять основные операции, вручную вводить команды, операционная система, выполнять сложные задания, управлять программным обеспечением, прошивка, разрабатывать новые программы, редактор исходного кода, текстовый редактор, отладчик ошибок, компилятор, компоновщик, интерпретатор .</p>',
              tasks: [],
            },
            {
              content:
                '<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;"><span lang="EN-US" style="mso-ansi-language: EN-US;">Make a list of all the computer software you use in your work or study. Think about: </span></strong></p>\n<p class="MsoNormal"><span lang="EN-US" style="mso-ansi-language: EN-US;">&bull; application software</span></p>\n<p class="MsoNormal"><span lang="EN-US" style="mso-ansi-language: EN-US;">&bull; programming software </span></p>\n<p class="MsoNormal"><span lang="EN-US" style="mso-ansi-language: EN-US;">&bull; system software</span></p>',
              tasks: [],
            },
            {
              content: '<p>Fill in the blanks with the correct words.</p>',
              tasks: [
                {
                  title: 'Software which is easy to use is',
                  options: ['user-easy', 'user-friendly', 'usable'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software which is obvious to use is',
                  options: ['intuitive', 'guessable', 'comprehensible'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software which is not obvious to use is',
                  options: ['counter-intuitive', 'unintuitive', 'non-intuitive'],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software for use by children and schools is',
                  options: ['learning', 'teaching', 'educational'],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software for use by businesses is',
                  options: ['commercial', 'businesslike', 'busy'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software made specially for one company is',
                  options: ['one-off', 'unique', 'tailor-made'],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software for use at home is',
                  options: ['for home use', 'for house use', 'for household use'],
                  correctOptionIndex: 0,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software which has been illegally copied is',
                  options: ['unreal', 'pirated', 'fake'],
                  correctOptionIndex: 1,
                  interface: 'SelectionTask',
                },
                {
                  title: 'Software which has been bought from the company that produced it is',
                  options: ['real', 'justified', 'licensed'],
                  correctOptionIndex: 2,
                  interface: 'SelectionTask',
                },
              ],
            },
            {
              content: '<p>Match the type of software with the definition</p>',
              tasks: [
                {
                  options: [
                    {
                      value: 'trial version',
                      correct:
                        'You can try it for a while for free. Then if you want to keep using it, you are expected to pay a small fee to the writer',
                    },
                    {
                      value: 'shareware',
                      correct: 'Software which is in the public domain. Anybody can use it without paying',
                    },
                    {
                      value: 'freeware',
                      correct:
                        'You can use it for free for a while (often a month). When the trial period finishes, you have to pay, or the program will de-activate',
                    },
                    { value: 'home-use version', correct: 'A simplified version which is cheaper to buy' },
                    { value: 'professional version', correct: 'The full version with all the features.' },
                  ],
                  leftCol: [],
                  rightCol: [],
                  interface: 'SortableTask',
                },
              ],
            },
            {
              content: '<p>Match the descriptions on the left with these famous applications</p>',
              tasks: [
                {
                  options: [
                    { value: 'word processor ', correct: 'Microsoft Word' },
                    { value: 'spreadsheet', correct: 'Microsoft Excel' },
                    { value: 'virus protection', correct: 'Norton AntiVirus ' },
                    { value: 'browser', correct: 'Internet Explorer' },
                    { value: 'image editor', correct: 'Adobe Photoshop ' },
                    { value: 'media player', correct: 'RealPlayer' },
                    { value: 'email software', correct: 'Outlook Express' },
                    { value: 'presentation software', correct: 'Microsoft PowerPoint' },
                    { value: 'graphic design software', correct: 'Adobe PageMaker ' },
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
  ],
}
