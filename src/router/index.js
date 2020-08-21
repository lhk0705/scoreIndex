import Vue from 'vue'
import Router from 'vue-router'
import scoreIndex from '@/score/scoreIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scoreIndex',
      component: scoreIndex
    }
  ]
})
