import Vue from 'vue'
import Router from 'vue-router'
import Pre from 'components/main/pre/Pre'
import P1 from 'components/main/p1/P1'
import P2 from 'components/main/p2/P2'
import P3 from 'components/main/p3/P3'
import P4 from 'components/main/p4/P4'
import P5 from 'components/main/p5/P5'
import P6 from 'components/main/p6/P6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pre',
      name: 'Pre',
      component: Pre
    },
    {
      path: '/',
      name: 'P1',
      component: P1
    },
    {
      path: '/p2',
      name: 'P2',
      component: P2
    },
    {
      path: '/p3',
      name: 'P3',
      component: P3
    },
    {
      path: '/p4',
      name: 'P4',
      component: P4
    },
    {
      path: '/p5',
      name: 'P5',
      component: P5
    },
    {
      path: '/p6',
      name: 'P6',
      component: P6
    }
  ]
})
