import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'settings', path: 'settings', component: () => import('pages/SettingsPage.vue') },
      { name: 'section', path: ':section', component: () => import('pages/SectionPage.vue') },
      { name: 'task-list', path: 'task-list', component: () => import('pages/TaskList.vue') },
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
