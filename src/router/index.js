import Vue from 'vue'
import Router from 'vue-router'

let scoreIndex=()=>import ('../components/score/scoreIndex.vue')
let showin=()=>import ("../components/show/showin.vue")
let ing=()=>import("../components/show/ing")
let finish=()=>import("../components/show/finish.vue")
let warn=()=>import("../components/show/warn.vue")
let overall=()=>import("../components/overall/overall")
let newTask=()=>import("../components/show/newTask.vue")
let myTask=()=>import("../components/show/myTask.vue")
let lastPeriod=()=>import("../components/show/lastPeriod.vue")
let data=()=>import("../components/show/data.vue")


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/scoreIndex',
      name: 'scoreIndex',
      component: scoreIndex,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/showin',
      name: 'showin',
      component: showin,
      redirect:'/finish',
      meta:{
        keepAlive:true
      },
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
        {
          path: '/lastPeriod',
          name: 'lastPeriod',
          component: lastPeriod
        },
        {
          path: '/data',
          name: 'data',
          component: data
        },
      ]
    },
    {
      path: '/',
      name: 'overall',
      component: overall,
      meta:{
        keepAlive:true
      }
    },
  ]
})
