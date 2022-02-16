import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/App/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '/createaccount',
        component: () => import('@/views/Login/CreateAccount.vue')
      },
      {
        path: '/login',
        component: () => import('@/views/Login/Login.vue')
      },
      {
        path: '/forgottenpassword',
        component: () => import('@/views/Login/ForgottenPassword.vue')
      },
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/App/Home.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/App/Search.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/App/Pitches.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/App/Events.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/App/Profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
