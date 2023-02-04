import { RouteRecordRaw } from 'vue-router'
import { useStore } from 'stores/main'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'settings', path: 'settings', component: () => import('pages/SettingsPage.vue') },
      {
        name: 'exercise',
        path: 'exercise',
        component: () => import('pages/ExercisePage.vue'),
      },
      {
        name: 'listen-tasks',
        path: ':section/:subsection/listen',
        component: () => import('pages/ListenTasksPage.vue'),
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
