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

// 路由规则
// Deadad 通用底部是否显示
const routes = [
  {
    path: '/',
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
        path: '',
        component: correctCase
      },
      {
        path: 'hot_crunchies',
        component: hot_crunchies
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
  }
]

// 实例化路由对象
const router = new VueRouter({
  routes
})


// 暴露出去
export default router