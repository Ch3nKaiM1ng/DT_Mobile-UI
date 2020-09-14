// 导入vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化仓库
const store = new Vuex.Store({
  // 数据
  state: {
    getId:"",
    WenSonData:[],
    ArtCom2Data:[],
    show:false
  },
  // 修改的方法
  mutations: {
    getCaseTitId(state,newId) {
      state.getId = newId;
    },
    getWenSonDatas(state,newDatas){
      state.WenSonData = newDatas;
    },
    getArtCom2Datas(state,newDatas){
      state.ArtCom2Data = newDatas;
    },
    getShow(state,newShow) {
      state.show = newShow;
    }
  }
})
// 暴露出去
export default store
