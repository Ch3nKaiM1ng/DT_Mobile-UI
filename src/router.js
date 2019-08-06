// 导入vue
import Vue from 'vue'
// 导入VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import index from './components/index.vue'
import login from './components/login.vue'
import crunchies from './components/crunchies.vue'
import doctorList from './components/doctorList.vue'
import search from './components/search.vue'
import complain from './components/complain.vue'
import inform from './components/inform.vue'
import systemMessage from './components/systemMessage.vue'
import appointment from './components/appointment.vue'
import registration from './components/registration.vue'
import hot_crunchies from './components/hot_crunchies.vue'
import correctCase from './components/correctCase.vue'
import askPeople from './components/askPeople.vue'
import details_case from './components/details_case.vue'
import article from './components/article.vue'

import stack from './components/stack.vue'
import stack_basic from './components/stack_basic.vue'

// 路由规则
// Deadad 通用底部是否显示
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta:{
      Deadad: true
    }
  },
  {
    path: '/login',
    component: login ,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/crunchies',
    component: crunchies ,
    meta:{
      Deadad: false
    },
    children:[
      {
        path: 'correctCase',
        component: correctCase
      },
      {
        path: '',
        component: hot_crunchies
      },
      {
        path: 'askPeople',
        component: askPeople
      },
      {
        path:'article',
        component:article
      }
    ]
  },
  {
    path: '/doctorList',
    component: doctorList,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/search',
    component: search,
    meta:{
      Deadad: true
    }
  },
  {
    path: '/complain',
    component: complain ,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/inform',
    name: 'inform',
    component: inform,
    meta:{
      Deadad: true
    }
  },
  {
    path: '/systemMessage',
    component: systemMessage ,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/appointment',
    component: appointment ,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/registration',
    component: registration ,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/details_case',
    component: details_case ,
    meta:{
      Deadad: false
    }
  },

  {
    path: '/stack',
    component: stack ,
    meta:{
      Deadad: false
    }
  },
  {
    path: '/stack_basic',
    component: stack_basic ,
    meta:{
      Deadad: false
    }
  }
]

// 实例化路由对象
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})


// 暴露出去
export default router

