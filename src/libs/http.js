// 导入axios
import axios from 'axios'

// 导入vue
// import Vue from 'vue'

// 设置基地址
axios.defaults.baseURL = 'http://172.16.19.101:8080/DTKQ'

// 抽取网络请求的对象
const request = {
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

  // 根据ID跳转 文章详情
  getArticleDetailsById(id){
    return axios.post('/article/webFindObj',{artId:id});
  },

  // 根据ID跳转 问答详情
  getAskDetailsById(id){
    return axios.post('/ask/webFindObj',{artId:id});
  },

  // 医生专家banner图
  getbanner() {
    return axios.get('/Banner/findAll');
  },

  // 不同人群(所有)
  getAll_differentPersons(params) {
    return axios.post('/ClassObj/WebFindAllClass',params);
  },

  // 获取蓝色标签数据
  getDifferentPersonsBlue_byId(id) {
    return axios.post('/ClassObj/FindClassObjById',{linkClassId:id});
  },

  // 矫正100榜
  getOneHundredList(params) {
    return axios.post('/classAskArticle/selectHot',{belong:params.oneHundred});
  },

  // 获取医生分类列表
  getDocClassList(){
    return axios.get('/DoctorClass/findAll');
  },

  // 获取医生们数据
  getDocsDatas(id){
    return axios.post('/Doctor/select',{classId:id});
  },

  // 获取文章数据
  getArticleDataList(num){
    return axios.post('/article/webPageBlockList',{offset:num});
  },

  // 用户展示
  getUserShowList(params){
    return axios.post('/case/findAll',params);
  },

  // 用户展示 点赞
  userShowZan(id){
    return axios.post('/case/caseDoThumb',{id});
  },

  // 用户展示 点赞
  art_Zan(id){
    return axios.post('/article/artDoThumb',{artId:id});
  },
}

export default {
  install(Vue) {
    // 添加到Vue的原型上
    Vue.prototype.$request = request;
  }
}
