// 导入vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化仓库
const store = new Vuex.Store({
  // 数据
  state: {
    artDetails:{},
    askDetails:{},
  },
  // 修改的方法
  mutations: {
    getArtDetails(state,newData) {
      state.artDetails = newData;
    },
    getAskDetails(state,newData) {
      state.askDetails = newData;
    },
  }
})
// 暴露出去
export default store
