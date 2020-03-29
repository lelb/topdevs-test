import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import UserView from '@/components/UserView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent,
      meta: {
        title: 'Main content'
      }
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserView,
      meta: {
        title: 'User'
      }
    }
  ],

})

