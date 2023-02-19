import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'settings', path: 'settings', component: () => import('pages/SettingsPage.vue') },
      {
        name: 'generator',
        path: 'generator',
        component: () => import('pages/GeneratorPage.vue'),
      },
      {
        name: 'exercise',
        path: 'exercise',
        component: () => import('pages/ExercisePage.vue'),
      },
      {
        name: 'profile',
        path: 'profile',
        component: () => import('pages/ProfilePage.vue'),
      },
      {
        name: 'subsection-words-check',
        path: ':section/:subsection/words/check',
        component: () => import('pages/SubsectionWordsCheckPage.vue'),
      },
      {
        name: 'subsection-words',
        path: ':section/:subsection/words',
        component: () => import('pages/SubsectionWordsPage.vue'),
      },
      {
        name: 'listen-tasks',
        path: ':section/:subsection/listen/:listen',
        component: () => import('pages/ListenTasksPage.vue'),
      },
      {
        name: 'dialog-tasks',
        path: ':section/:subsection/dialog/:dialog',
        component: () => import('pages/DialogTasksPage.vue'),
      },
      {
        name: 'text-tasks',
        path: ':section/:subsection/text/:text',
        component: () => import('pages/TextTasksPage.vue'),
      },
      { name: 'task-list', path: ':section/:subsection/task-list', component: () => import('pages/TaskList.vue') },
      { name: 'section', path: ':section', component: () => import('pages/SectionPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
