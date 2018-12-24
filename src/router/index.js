import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import notice from '@/components/notice'
import notice1 from '@/components/notice1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/notice1',
      name: 'notice1',
      component: notice1
    }
  ]
})
