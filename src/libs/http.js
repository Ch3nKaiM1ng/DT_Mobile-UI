// 导入axios
import axios from 'axios'

// 导入vue
// import Vue from 'vue'

// 设置基地址
axios.defaults.baseURL = 'http://172.16.19.101:8080/DTKQ'

// 抽取网络请求的对象
const request = {
  // 医生专家banner图
  getbanner() {
    return axios.get('/Banner/findAll');
  },

  // 头部背景图
  getheaderBg() {
    return axios.post('/TopImg/findAll');
  },

  // 头部导航栏
  getheaderNav() {
    return axios.post('/TopMenu/findAll');
  },

  // 矫正热搜榜
  getHotList(params) {
    return axios.post('/classAskArticle/selectHot',{belong:params.hot});
  },

  // 不同人群(所有)
  getAll_differentPersons(params) {
    return axios.post('/ClassObj/WebFindAllClass',params);
  },

  // 获取蓝色标签数据
  getDifferentPersonsBlue_byId(id) {
    return axios.post('/ClassObj/FindClassObjById',{linkClassId:id});
  }
}

export default {
  install(Vue) {
    // 添加到Vue的原型上
    Vue.prototype.$request = request;
  }
}
