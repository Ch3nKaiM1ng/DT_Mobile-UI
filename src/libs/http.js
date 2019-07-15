// 导入axios
import axios from 'axios'

// 导入vue
// import Vue from 'vue'

// 设置基地址
axios.defaults.baseURL = ''

// 抽取网络请求的对象
const request = {
  
}

export default {
  install(Vue) {
    // 添加到Vue的原型上
    Vue.prototype.$request = request
  }
}
