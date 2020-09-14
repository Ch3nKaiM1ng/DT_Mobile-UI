// 导入axios
import axios from 'axios'

// 导入vue
// import Vue from 'vue'

// 设置基地址
axios.defaults.baseURL = 'http://47.107.47.13:8088/DTKQ/'
// axios.defaults.baseURL = 'http://172.16.19.101:8080/DTKQ/'
// axios.defaults.baseURL = 'http://172.16.19.161:8080/DTKQ/'

axios.defaults.withCredentials = true;


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
    return axios.post('/classAskArticle/selectHot', {
      belong: params.hot
    });
  },

  // 根据ID跳转 文章详情
  getArticleDetailsById(id) {
    return axios.post('/article/webFindObj', {
      artId: id
    });
  },

  // 根据ID跳转 问答详情
  getAskDetailsById(id) {
    return axios.post('/ask/webFindObj', {
      askId: id
    });
  },

  // 医生专家banner图
  getbanner() {
    return axios.get('/Banner/findAll');
  },

  // 不同人群(所有)
  getAll_differentPersons(params) {
    return axios.post('/ClassObj/WebFindAllClass', params);
  },

  // 获取蓝色标签数据
  getDifferentPersonsBlue_byId(id) {
    return axios.post('/ClassObj/FindClassObjById', {
      linkClassId: id
    });
  },

  // 矫正100榜
  getOneHundredList(params) {
    return axios.post('/classAskArticle/selectHot', {
      belong: params.oneHundred
    });
  },

  // 获取医生分类列表
  getDocClassList() {
    return axios.get('/DoctorClass/findAll');
  },

  // 获取医生们数据
  getDocsDatas(id) {
    return axios.post('/Doctor/select', {
      classId: id
    });
  },

  // 获取文章数据
  getArticleDataList(params) {
    return axios.post('/article/webPageBlockList', {
      offset: params.articleNum,
      showNew: params.showNew
    });
  },

  // 用户展示
  getUserShowList(params) {
    return axios.post('/case/findAll', params);
  },

  // 用户展示 点赞
  userShowZan(id) {
    return axios.post('/case/caseDoThumb', {
      id
    });
  },

  // 文章-文章 点赞
  art_Zan(id) {
    return axios.post('/article/artDoThumb', {
      artId: id
    });
  },

  // 文章-问答 点赞
  anw_Zan(id) {
    return axios.post('/ask/askDoThumb', {
      askId: id
    });
  },

  // 预约详情
  bookingDetails(id) {
    return axios.post('/Doctor/findObj', {
      doctorId: id
    });
  },

  // 添加预约信息
  addAppointmentTime(params) {
    return axios.post('/subscribe/inset', params);
  },

  // 获取榜单界面分类
  getAllCrunchies(params) {
    return axios.post('/TalkClass/findAll', params);
  },

  // 获取案例数据
  getCaseDatas(params) {
    return axios.post('/case/findAll', params);
  },

  // 榜单案例列表+筛选功能
  getFiltrateData(params) {
    return axios.post('/case/queryByfunction', params);
  },

  // 投诉建议
  complaint(params) {
    return axios.post('/complaint/inset', params);
  },

  // 获取热搜榜单数据
  getHotCrunchiesList(id) {
    return axios.post('/classAskArticle/selectHot', {
      belong: id
    });
  },

  // 获取问答榜单数据
  getWenCrunchiesList(params) {
    return axios.post('/article/hotListFromAskAndArt', params);
  },

  // 获取问答评论数据
  getWenComment(params) {
    return axios.post('/askAnswer/findAll', params);
  },

  // 获取问答评论二,三级数据
  getComment2(params) {
    return axios.post('/askComment/findAll', params);
  },

  // 案例详情
  getcase(id) {
    return axios.post('/case/webFindObj', {
      id
    });
  },

  // 案例评论
  getcomment(id) {
    return axios.post('/caseComment/findSonList', {
      caseId: id
    });
  },

  // 问大家 文章 评论
  getWenArtComment(id) {
    return axios.post('/articleComment/findSonList', {
      artId: id
    });
  },

  // 登录注册
  login(num) {
    return axios.post('/user/login', {
      userMobile: num
    });
  },

  // 验证码验证
  verificationCode(params) {
    return axios.post('/user/verifyCode', params);
  },

  // 获取 热搜榜 广告数据
  getHotGbData(params) {
    return axios.post('/advertisement/findAll', params);
  },

  // 获取就诊项目
  getProjects(params) {
    return axios.post('/TalkClass/findAll', params);
  },

  // 文章评论点赞
  artCom_Zan(id) {
    return axios.post('/articleComment/DoThumb', {
      id: id
    });
  },

  // 问答回复点赞
  askHui_Zan(id) {
    return axios.post('/askAnswer/DoThumb', {
      id: id
    });
  },

  // 问答评论点赞
  askCom_Zan(id) {
    return axios.post('/askComment/DoThumb', {
      id: id
    });
  },

  // 搜索接口
  searchData(params) {
    return axios.post('/search/selectall', params);
  },


  // 关键词搜索
  selectByKeyWord(params) {
    return axios.post('/search/selectByKeyWord', params);
  },

  // 文章详情回复
  artDetailReply(params) {
    return axios.post('/articleComment/addObj', params);
  },

  // 查询文章所有评论
  artAllCom(params) {
    return axios.post('/articleComment/findAll', params);
  },

  // 问答回复添加
  askAddReply(params) {
    return axios.post('/askAnswer/addObj', params);
  },

  // 问答二,三级评论添加
  askAddPingLun2(params) {
    return axios.post('/askComment/addObj', params);
  },

  // 案例详情 所有子评论
  caseAllPingLun(params) {
    return axios.post('/caseComment/findAll', params);
  },

  // 案例详情 评论添加
  casePingLun(params) {
    return axios.post('/caseComment/addObj', params);
  },
  
  // 文件通用上传
  uploadingFile(file) {
    return axios.post('/file/uploading', file);
  },

  // 修改用户
  updateUser(params) {
    return axios.post('/user/updateObj', params);
  },

  // 查看用户详情
  inquireUser(id) {
    return axios.post('/user/findObj', {userId:id});
  }
}

export default {
  install(Vue) {
    // 添加到Vue的原型上
    Vue.prototype.$request = request;
  }
}