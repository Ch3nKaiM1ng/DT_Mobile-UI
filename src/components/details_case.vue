<template>
  <div id="details_case" v-if="show">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title" v-if="show.style==0">普通案例</div>
      <div class="header_title" v-else-if="show.style==1">黄金案例</div>
      <div class="header_title" v-else-if="show.style==2">钻石案例</div>
      <!-- <div class="header_title" v-else-if="show.style==3">钻石案例</div> -->
      <div class="header_kong"></div>
    </div>
    <!-- 案例详情 -->
    <div class="beforetime_user" v-loading="loading" element-loading-text="拼命加载中...">
      <!-- 案例1 -->
      <div class="CaseOne">
        <div class="case1" v-if="show.userData.userSex==1">过去的他</div>
        <div class="case1" v-else>过去的她</div>
        <div class="case1_Show">
          <div class="case1_img1" v-for="(it,index) in imgList(show.caseOldImg)" :key="index">
            <img :src="it" preview="1" alt />
          </div>
          <div class="case1_img4">
            <img src="../\assets\img\index\details_case\oval1@2x.png" alt />
            <router-link to="/login">
              <span>咨询详情</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="Case_nav">变美过程</div>
      <div class="Case" v-if="show.caseDetailList!=null">
        <div v-for="(item,ItemIndex) in show.caseDetailList" :key="ItemIndex">
          <!-- 案例2  1张图片-->
          <div class="CaseTwo" v-if="imglength(item.img) == 1">
            <div class="case2_lf">
              <div class="case2_nav">
                <img src="../\assets\img\index\details_case\shijianzhou@2x.png" alt />
                <span>{{item.title}}</span>
                <p>{{item.label | labeled}}</p>
              </div>
              <div class="case2_day">
                <p>
                  {{item.days}}
                  <span>天</span>
                  <!-- <span>day</span> -->
                </p>
                <div class="area">
                  <p>{{item.address}}</p>
                </div>
              </div>
            </div>
            <div class="case2_rf">
              <div class="case2_img" v-for="(it,index) in imgList(item.img)" :key="index">
                <img :src="it" preview="1" alt />
              </div>
              <div class="case2_label">
                <div
                  class="case2_lb1"
                  v-for="(t,index) in tipsList(item.keyword)"
                  :key="index"
                >{{t}}</div>
              </div>
              <div class="case2_conten more">{{item.content}}</div>
              <div class="gd" @click="show_zi($event)">查看全部</div>
            </div>
          </div>

          <!-- 案例4  3-4张图片-->
          <div class="CaseFour" v-else-if=" imglength(item.img) > 1 && imglength(item.img) <= 4">
            <div class="case4_lf">
              <div class="case4_nav">
                <img src="../\assets\img\index\details_case\shijianzhou@2x.png" alt />
                <span>{{item.title}}</span>
                <p>{{item.label | labeled}}</p>
              </div>
              <div class="case4_day">
                <p>
                  {{item.days}}
                  <span>天</span>
                  <!-- <span>day</span> -->
                </p>
                <div class="area">
                  <p>{{item.address}}</p>
                </div>
              </div>
            </div>
            <div class="case4_rf">
              <div class="case4_img">
                <div class="case4_img1" v-for="(it,index) in imgList(item.img)" :key="index">
                  <img :src="it" preview="1" alt />
                </div>
              </div>
              <div class="case4_label">
                <div
                  class="case4_lb1"
                  v-for="(t,index) in tipsList(item.keyword)"
                  :key="index"
                >{{t}}</div>
              </div>
              <div class="case4_conten more">{{item.content}}</div>
              <div class="gd" @click="show_zi($event)">查看全部</div>
            </div>
          </div>
          <!-- 案例5  5-9张图片-->
          <div class="CaseFive" v-else-if="imglength(item.img) > 4 && imglength(item.img) <= 9">
            <div class="case5_lf">
              <div class="case5_nav">
                <img src="../\assets\img\index\details_case\shijianzhou@2x.png" alt />
                <span>{{item.title}}</span>
                <p>{{item.label | labeled}}</p>
              </div>
              <div class="case5_day">
                <p>
                  {{item.days}}
                  <span>天</span>
                  <!-- <span>day</span> -->
                </p>
                <div class="area">
                  <p>{{item.address}}</p>
                </div>
              </div>
            </div>
            <div class="case5_rf">
              <div class="case5_img">
                <div class="case5_img1" v-for="(it,index) in imgList(item.img)" :key="index">
                  <img :src="it" preview="1" alt />
                </div>
              </div>
              <div class="case5_label">
                <div
                  class="case5_lb1"
                  v-for="(t,index) in tipsList(item.keyword)"
                  :key="index"
                >{{t}}</div>
              </div>
              <div class="case5_conten more">{{item.content}}</div>
              <div class="gd" @click="show_zi($event)">查看全部</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 本例专家 -->
      <div class="expert">
        <div class="expert_nav">本例专家</div>
        <router-link tag="div" :to="{path:'/appointment',query:{name:'doctor'}}">
          <div class="doctor_Show">
            <div class="doctor_img">
              <img :src="show.doctorData.doctorImg" alt />
            </div>
            <div class="expert_details">
              <div class="expert_name">
                <!-- <img src="../\assets\img\index\details_case\“@2x.png" alt=""> -->
                <h4>{{show.doctorData.doctorChName}}</h4>
                <p>{{show.doctorData.doctorChPosition}}</p>
              </div>
              <div class="expert_skill">
                <div class="expert_skill2">擅长项目</div>
                <div class="expert_skill3">{{show.doctorData.doctorGoodat}}</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- 评论 -->
      <div class="commen_tator">
        <div class="comment">评论</div>
        <!-- 暂无评论图片 -->
        <div class="article_btn" v-if="commentList1.length == 0">
          <img src="../\assets\img\index\ask\text@2x (3).png" alt />
          <p>还没有评论哦~</p>
        </div>
        <div class="comment_box" v-else v-for="(item,index) in commentList1" :key="index">
          <div class="comment_center">
            <div class="comment_img">
              <img :src="item.user.userImg" alt />
            </div>
            <div class="comment_name">
              <p>{{item.user.userChName}}</p>
              <span>{{item.ctime | imgLis2}}</span>
            </div>
            <div class="comment_loveimg" @click="case_DianZan(item,$event)">
              <div class="heart_comm"></div>
              <span>{{item.thumbNum | million}}</span>
            </div>
          </div>
          <h6>{{item.content}}</h6>
          <div class="huifu" @click="getCom2(index,item)">回复</div>
          
        </div>
        <div class="more" @click="more" v-show="moreBox">查看更多评论</div>
      </div>
      <!-- 填写评论 -->
      <div class="reply">
        <div class="reply_input">
          <input type="text" v-model="caseValue" :placeholder="value" />
          <img src="../\assets\img\index\ask\signature@2x.png" alt />
        </div>
        <div class="reply_comment" @click="pinglun">评论</div>
        <!-- 收藏 -->
        <div class="shoucang" @click="sc($event)">
          <div class="shoucang_img1"></div>
          <!-- <span>收藏</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details_case",
  data() {
    return {
      loading: true,
      caseValue: "",
      value: "可以评论哦...",
      moreBox: true,
      //案例banner
      show: "",
      // 用户数据
      userData: "",
      // 判断用户性别，0为女 1为男
      userSex: "",
      // 案例标题
      userId: "",
      // 标签
      label: "",
      // 标题
      title: "",
      // 时间
      dasy: "",
      // 案例
      keyword: "",
      // 内容
      content: "",
      // 医生name
      doctorChName: "",
      // 医生职务
      doctorChPosition: "",
      // 医生擅长项目
      doctorGoodat: "",
      // 用户评论
      comment: null,
      commentList1: [],
      addCasePL: {
        caseId: 0,
        content: "",
        level: 0,
        parentId: 0,
        receiveUserId: 0,
        status: 0,
        thumbNum: 0,
        topId: 0,
        userId: 0
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 分割图片
    imgList(img) {
      if (img == null) return;
      else {
        return img.split(",");
      }
    },
    imglength(img) {
      if (img == null) return 0;
      else {
        let a = img.split(",");
        return a.length;
      }
    },
    getcase(id) {
      this.$request.getcase(id).then(res => {
        this.show = res.data.data;
        this.loading = false;
        if (this.show !== undefined) {
          this.addCasePL.caseId = this.show.id;
        }
      });
    },
    getAllComm(id) {
      this.$request.getcomment(id).then(res => {
        this.comment = res.data.data;
        if (this.commentList1.length !== this.comment.length) {
          this.commentList1 = this.comment;
        }
      });
    },
    getComment(id) {
      if (!this.moreBox) {
        this.moreBox = true;
      }
      this.$request.getcomment(id).then(res => {
        this.comment = res.data.data;
        if (this.comment == null) {
          return;
        }
        this.commentList1 = this.comment.slice(0, 3);
      });
    },
    case_DianZan(data, e) {
      const case_com = e.currentTarget.firstChild;
      if (case_com.getAttribute("class").indexOf("heart_comm") == 0) {
        case_com.classList.remove("heart_comm");
        case_com.classList.add("aheart_comm");
        this.$request.userShowZan(data.id).then(res => {
          if (res.data.code == 200) {
            data.thumbNum = parseInt(data.thumbNum) + 1;
          }
        });
      } else {
        case_com.classList.remove("aheart_comm");
        case_com.classList.add("heart_comm");
        data.thumbNum = parseInt(data.thumbNum) - 1;
      }
    },
    sc(e) {
      if (window.localStorage.getItem("token") == null) {
        this.$parent.$data.show = true;
        return;
      }
      const s = e.currentTarget.firstChild;
      if (s.getAttribute("class").indexOf("shoucang_img1") == 0) {
        s.classList.remove("shoucang_img1");
        s.classList.add("shoucang_img2");
      } else {
        s.classList.remove("shoucang_img2");
        s.classList.add("shoucang_img1");
      }
    },
    show_zi(e) {
      const zi = e.currentTarget;
      $(zi)
        .siblings()
        .removeClass("more");
      zi.classList.add("none");
    },
    // 分割标签
    tipsList(tips) {
      return tips.split(",");
    },
    more() {
      this.commentList1 = this.comment;
      this.moreBox = !this.moreBox;
    },
    getCom2(index, data) {
      if (window.localStorage.getItem("token") == null) {
        this.$parent.$data.show = true;
        return;
      }
      this.get3Index = index;
      this.$router.push({
        path: "/commentCase",
        query: {
          i: index,
          caseId: data.caseId,
          topId: data.id,
          receiveUserId: data.userId
        }
      });
    },
    pinglun() {
      if (window.localStorage.getItem("token") == null) {
        this.$parent.$data.show = true;
        return;
      }
      if (this.caseValue !== "") {
        this.addCasePL.content = this.caseValue;
        this.addCasePL.userId = JSON.parse(localStorage.getItem("token")).userId;
        this.caseValue = "";
        this.$request.casePingLun(this.addCasePL).then(res => {
          this.getAllComm(this.addCasePL.caseId);
          this.$toast.success({
            duration: 2000,
            message: "评论成功"
          });
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $(".beforetime_user")[0].scrollHeight;
              $(".beforetime_user").scrollTop(h);
            }, 300);
          });
        });
      } else {
        this.$toast({
          duration: 2000,
          message: "赶紧写点什么呗"
        });
      }
    }
  },
  created() {
    // 案例
    this.getcase(this.$route.query.id);
    // 案例评论
    this.getComment(this.$route.query.id);
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      this.addCasePL.userId = JSON.parse(localStorage.getItem("token")).userId;
    }
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  computed: {
    isFollow() {
      return this.$route.query.id; //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      // this.getcase(this.$route.query.id);
      // this.getComment(this.$route.query.id);
    }
  },
  filters: {
    imgLis2(img) {
      if (img == null) return;
      else {
        return img.split(" ")[0];
      }
    },
    million(value) {
      var num;
      if (value > 9999) {
        //大于9999显示x.xx万
        num = Math.trunc(value / 1000) / 10 + "万";
      } else if (value < 9999 && value > -9999) {
        num = value;
      } else if (value < -9999) {
        //小于-9999显示-x.xx万
        num = -(Math.floor(Math.abs(value) / 1000) / 10) + "万";
      }
      return num;
    },
    labeled(label) {
      if (label == null) return;
      else {
        return label.split(",")[0];
      }
    }
  }
};
</script>

<style>
#details_case {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
</style>
<style lang='scss' scoped>
@import "../assets/css/details_case.scss";
</style>