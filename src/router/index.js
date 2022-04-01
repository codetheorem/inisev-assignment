import Vue from 'vue'
import VueRouter from 'vue-router'
import users from '../views/users.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/users',
    name: 'users',
    component: users
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router