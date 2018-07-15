import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import Page3 from './views/Page3'
import Page4 from './views/Page4'
import Page5 from './views/Page5'
import Page6 from './views/Page6'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/page1',
      component: Page1
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/page3',
      component: Page3
    },
    {
      path: '/page4',
      component: Page4
    },
    {
      path: '/page5',
      component: Page5
    },
    {
      path: '/page6',
      component: Page6
    }
  ]
})
