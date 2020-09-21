import Vue from 'vue'
import Router from 'vue-router'
import scoreIndex from '../components/score/scoreIndex'
import showin from "../components/show/showin";
import ing from "../components/show/ing";
import finish from "../components/show/finish";
import warn from "../components/show/warn.vue";
import overall from "../components/overall/overall.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/scoreIndex',
      name: 'scoreIndex',
      component: scoreIndex
    },
    {
      path: '/showin',
      name: 'showin',
      component: showin,
      redirect:'/finish',
      children:[
        {
          path: '/ing',
          name: 'ing',
          component: ing
        },
        {
          path: '/finish',
          name: 'finish',
          component: finish
        },
        {
          path: '/warn',
          name: 'warn',
          component: warn
        },
      ]
    },
    {
      path: '/',
      name: 'overall',
      component: overall
    },
  ]
})
