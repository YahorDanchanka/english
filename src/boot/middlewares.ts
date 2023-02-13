import { boot } from 'quasar/wrappers'
import { RouteLocationNormalized } from 'vue-router'
import { useStore } from 'stores/main'

function disallowMiddleware(disallow: boolean, to: RouteLocationNormalized, from: RouteLocationNormalized): any {
  return disallow ? (from.name === undefined ? { name: 'home' } : false) : true
}

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    const store = useStore()
    const section = store.sections.find((section) => section.id === to.params['section'])
    const subsection = section?.subsections.find((subsection) => subsection.id === to.params['subsection'])

    if (to.name === 'section') {
      next(disallowMiddleware(!store.sections.find((section) => section.id === to.params['section']), to, from))
    } else if (to.name === 'task-list' || to.name === 'listen-tasks' || to.name === 'dialog-tasks') {
      next(disallowMiddleware(!(section && subsection), to, from))
    } else if (to.name === 'text-tasks') {
      next(disallowMiddleware(!(subsection && subsection.texts && subsection.texts[+to.params['text']]), to, from))
    } else if (to.name === 'exercise') {
      next(disallowMiddleware(store.activeExercise === undefined, to, from))
    } else if (to.name === 'subsection-words' || to.name === 'subsection-words-check') {
      next(disallowMiddleware(!(section && subsection && subsection.words && subsection.words.length > 0), to, from))
    } else {
      next()
    }
  })
})
