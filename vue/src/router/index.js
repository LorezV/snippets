import { createRouter, createWebHashHistory } from 'vue-router'

import Profile from "../views/Profile"
import News from "../views/News"
import Messanger from "../views/Messanger"
import Dialogue from "../views/Dialogue"
import Friends from "../views/Friends"
import PageNotFound from "../views/PageNotFound"
import Auth from '../views/Auth'
import Register from '../views/Register'

const routes = [
  {
    path: "/profile/:username",
    name: 'profile',
    component: Profile,
    props: true,
  },
  {
    path: "/news",
    name: 'news',
    component: News
  },
  {
    path: "/messanger",
    name: 'messanger',
    component: Messanger
  },
  {
    path: "/dialogue",
    name: 'dialogue',
    component: Dialogue,
  },
  {
    path: "/friends/:username",
    name: 'friends',
    component: Friends,
    props: true,
  },
  {
    path: "/auth",
    name: 'auth',
    component: Auth,
  },
  {
    path: "/register",
    name: 'register',
    component: Register,
  },
  {
    path: '/404',
    name: 'pnf',
    component: PageNotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/404"
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
