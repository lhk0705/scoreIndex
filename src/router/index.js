import Vue from 'vue'
import Router from 'vue-router'

let scoreIndex=()=>import ('@/components/score/scoreIndex')
let showin=()=>import ("@/components/show/showin")
let ing=()=>import("@/components/show/ing")
let finish=()=>import("@/components/show/finish")
let warn=()=>import("@/components/show/warn.vue")
let overall=()=>import("@/components/overall/overall.vue")
let newTask=()=>import("@/components/show/newTask.vue")
let myTask=()=>import("@/components/show/myTask.vue")


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
        {
          path: '/newTask',
          name: 'newTask',
          component: newTask
        },
        {
          path: '/myTask',
          name: 'myTask',
          component: myTask
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
