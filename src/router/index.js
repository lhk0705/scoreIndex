import Vue from 'vue'
import Router from 'vue-router'

let scoreIndex=()=>import ('../components/score/scoreIndex.vue')
let showin=()=>import ("../components/show/showin.vue")
let ing=()=>import("../components/show/ing")
let finish=()=>import("../components/show/finished/finish.vue")
let warn=()=>import("../components/show/finished/warn.vue")
let overall=()=>import("../components/overall/overall.vue")
let newTask=()=>import("../components/show/task/newTask.vue")
let myTask=()=>import("../components/show/task/myTask.vue")
let lastPeriod=()=>import("../components/show/lastPeriod.vue")
let systemTable=()=>import("../components/show/systemTable.vue")
let data=()=>import("../components/data/data.vue")
let report=()=>import("../components/report/report.vue")
let monthReport=()=>import("../components/report/reports/monthReport.vue")
let spReport=()=>import("../components/report/reports/spReport.vue")
let testReport=()=>import("../components/report/reports/testReport.vue")
let roundReport=()=>import("../components/report/reports/roundReport.vue")
let board=()=>import("../components/board/board.vue")
let commonTest=()=>import("../components/common/commonTest.vue")
let communicate=()=>import("../components/communicate/communicate.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/communicate',
      name: 'communicate',
      component: communicate,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/commonTest',
      name: 'commonTest',
      component: commonTest,
      // meta:{
      //   keepAlive:true
      // }
    },
    {
      path: '/board',
      name: 'board',
      component: board,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/report',
      name: 'report',
      component: report,
      redirect:'/monthReport',
      meta:{
        keepAlive:true
      },
      children:[
        {
          path: '/monthReport',
          name: 'monthReport',
          component: monthReport
        },
        {
          path: '/roundReport',
          name: 'roundReport',
          component: roundReport
        },
        {
          path: '/testReport',
          name: 'testReport',
          component: testReport
        },
        {
          path: '/spReport',
          name: 'spReport',
          component: spReport
        },
      ]
    },
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
          path: '/systemTable',
          name: 'systemTable',
          component: systemTable
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
        
      ]
    },
    {
          path: '/data',
          name: 'data',
          component: data
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
