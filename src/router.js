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
import dental from './components/dental.vue'
import inform from './components/inform.vue'
import systemMessage from './components/systemMessage.vue'
import appointment from './components/appointment.vue'
import registration from './components/registration.vue'
import hot_crunchies from './components/hot_crunchies.vue'
import correctCase from './components/correctCase.vue'
import askPeople from './components/askPeople.vue'
import details_case from './components/details_case.vue'
import specialist from './components/specialist.vue'
import appointmentTime from './components/appointmentTime.vue'
import comment from './components/comment.vue'
import commentArt from './components/commentArt.vue'
import commentCase from './components/commentCase.vue'
import detailsART from './components/detailsART.vue'
import detailsASK from './components/detailsASK.vue'
import mineCenter from './components/mineCenter.vue'
import registration_success from './components/registration_success.vue'
import complain_success from './components/complain_success.vue'
import login_popUp from './components/login_popUp.vue'
import search_details from './components/search_details.vue'
import user_redact from './components/user_redact.vue'

// 路由规则
// Deadad 通用底部是否显示
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      Deadad: true,
      keepAlive:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      Deadad: false
    }
  },
  {
    path: '/crunchies',
    component: crunchies,
    meta: {
      Deadad: true,
      keepAlive: true
    },
    children: [{
        path: 'correctCase',
        name: 'correctCase',
        component: correctCase,
        meta: {
          Deadad: true,
          keepAlive: true
        }
      },
      {
        path: '',
        name: 'hot_crunchies',
        component: hot_crunchies,
        meta: {
          Deadad: true,
          keepAlive: true
        }
      },
      {
        path: 'askPeople',
        name: 'askPeople',
        component: askPeople,
        meta: {
          Deadad: true,
          keepAlive: true
        }
      },
      {
        path: 'specialist',
        name: 'specialist',
        component: specialist,
        meta: {
          Deadad: true,
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/doctorList',
    name: 'doctorList',
    component: doctorList,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/search',
    component: search,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/complain',
    name: 'complain',
    component: complain,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/dental',
    name: 'dental',
    component: dental,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/inform',
    name: 'inform',
    component: inform,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/systemMessage',
    component: systemMessage,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/appointment',
    component: appointment,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration,
    meta: {
      Deadad: true,
      keepAlive:true
    }
  },
  {
    path: '/details_case',
    component: details_case,
    meta: {
      Deadad: false
    }
  },
  {
    path: '/appointmentTime',
    name: 'appointmentTime',
    component: appointmentTime,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/comment',
    name: 'comment',
    component: comment,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/commentArt',
    name: 'commentArt',
    component: commentArt,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/commentCase',
    name: 'commentCase',
    component: commentCase,
    meta: {
      Deadad: false
    }
  },
  {
    path: '/detailsART',
    name: 'detailsART',
    component: detailsART,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/detailsASK',
    name: 'detailsASK',
    component: detailsASK,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/mineCenter',
    name: 'mineCenter',
    component: mineCenter,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/registration_success',
    name: 'registration_success',
    component: registration_success,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/complain_success',
    name: 'complain_success',
    component: complain_success,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/login_popUp',
    name: 'login_popUp',
    component: login_popUp,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/search_details',
    name: 'search_details',
    component: search_details,
    meta: {
      Deadad: true
    }
  },
  {
    path: '/user_redact',
    name: 'user_redact',
    component: user_redact,
    meta: {
      Deadad: true
    }
  }
]

// 实例化路由对象
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  // 去的路由
  // console.log(to)
  // // 来的路由
  // console.log(from)

  if (to.name == "mineCenter") {
    if (window.localStorage.getItem("token") == null) {
      new Vue().$toast({
        duration: 1000,
        message: "要先登录哦~"
      });
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  } 
})

// 暴露出去
export default router