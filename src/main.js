import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from './router'

// 导入element_Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入抽取的 网络请求
import request from './libs/http'
Vue.use(request)

// 导入仓库
import store from './store'

// 导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 导入Vant
import { DropdownMenu,DropdownItem,Tab,Tabs,Popup,Button } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Tab).use(Tabs);
Vue.use(Popup);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
