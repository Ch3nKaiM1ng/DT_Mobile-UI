import Vue from 'vue'
import App from './App.vue'

// 饿了吗ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入抽取的 网络请求
import request from './libs/http'
Vue.use(request)

// 导入路由
import router from './router'

// 导入仓库
import store from './store'

// 导入swiper
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
