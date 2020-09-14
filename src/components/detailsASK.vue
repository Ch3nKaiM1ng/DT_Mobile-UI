<template>
  <div id="detailsASK">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">问答详情</div>
      <div class="header_kong"></div>
    </div>
    <!-- 问答 -->
    <div
      class="ask_people"
      v-if="askDetailData!=null"
      v-loading="loading"
      element-loading-text="拼命加载中..."
    >
      <div class="wen_article">
        <div class="up_maximumbox">
          <!-- 问答 -->
          <div class="up_content">
            <div class="up_top">
              <div class="up_problem">
                <span class="ASKspan">问：{{askDetailData.askTitle}}</span>
                <img src="../assets/img/index/new.png" v-if="askDetailData.askLabel=='新'" alt />
                <img src="../assets/img/index/bomb.png" v-else-if="askDetailData.askLabel=='爆'" alt />
                <img src="../assets/img/index/hot.png" v-else-if="askDetailData.askLabel=='热'" alt />
              </div>
            </div>
            <div class="up_article more">{{askDetailData.askContent}}</div>
            <div class="gd" ref="lookMore" @click="show_zi($event)">查看全部</div>
            <div class="up_bottom">
              <div class="up_img">
                <img :src="askDetailData.user.userImg" alt />
              </div>
              <div class="up_message">
                <p>{{askDetailData.user.userChName}}</p>
                <span>{{askDetailData.ctime | changeTime}}</span>
              </div>
              <div class="up_folat">
                <div class="up_lf">
                  <span @click="reply1(askDetailData.askId)">回复</span>
                </div>
                <div class="up_rf" @click="reply1(askDetailData.askId)">
                  <img src="../\assets\img\index\pinglun1.png" alt />
                  <span>{{changdu(askDetailData.askAnswerList) | million}}</span>
                </div>
                <!-- 收藏 -->
                <div class="shoucang" @click="sc($event)">
                  <div class="shoucang_img1"></div>
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 暂无评论图片 -->
          <div class="article_btn" v-if="changdu(askDetailData.askAnswerList) == 0">
            <img src="../\assets\img\index\ask\text@2x (3).png" alt />
            <p>还没有评论哦~</p>
          </div>
          <!-- 一级评论人 -->
          <div class="commentBox" v-show="isShow" v-else>
            <!-- <van-list
              :immediate-check="false"
              v-model="loading"
              :finished="finished"
              finished-text="没有更多内容了"
              @load="onLoad"
            >-->
            <div class="ccc" v-loading="loading1" element-loading-text="拼命加载中...">
              <div class="commenta" v-for="(item,index) in getWenCommentList" :key="index">
                <div class="commentator">
                  <div class="commentator_img">
                    <img :src="item.user.userImg" alt />
                  </div>
                  <div class="commen_by">
                    <div class="commen_name">{{item.user.userChName}}</div>
                    <div class="commen_age">
                      {{item.user.age}}
                      <div class="man" v-if="item.user.userSex==1">男</div>
                      <div class="women" v-else>女</div>
                    </div>
                    <div class="commen_time">{{item.ctime | changeOldTime}}</div>
                  </div>
                </div>
                <div class="commen_articlerf">
                  <div class="commen_article">
                    <div class="commen_content">
                      {{item.content}}
                      <span class="commen_reply2" @click="reply2(item.id,item.userId)">回复</span>
                    </div>
                  </div>
                  <div class="commen_bottom">
                    <div class="commen_messageimg">
                      <img src="../\assets\img\index\pinglun1.png" alt />
                      <span>{{item.commentNum | million}}</span>
                    </div>
                    <div class="commen_loveimg" @click="ask_HuiDianZan(item,$event)">
                      <div class="heart_hui"></div>
                      <span>{{item.thumbNum | million}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </van-list> -->
          </div>

          <!-- 填写评论 -->
          <div class="reply" v-show="isShow">
            <div class="reply_input">
              <input type="text" v-model="value" :placeholder="value1" />
              <img src="../\assets\img\index\ask\signature@2x.png" alt />
            </div>
            <div class="reply_comment" @click="pinglun">评论</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailsASK",
  data() {
    return {
      loading: true,
      loading1: true,
      value: "",
      value1: "可以评论哦...",
      askDetailData: null,
      isShow: false,
      // 调取问答评论数据
      WenComment: { askId: 0, limit: 1000, offset: 1 },
      getWenCommentList: [],
      // 加载更多
      // loading: false,
      // finished: false,
      // offset: 100,
      askReply: {
        askId: 0,
        content: "",
        status: 0,
        thumbNum: 0,
        title: "问答回复标题",
        userId: 0
      }
    };
  },
  created() {
    this.getDetailsASK(this.$route.query.id);
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      this.askReply.userId = JSON.parse(localStorage.getItem("token")).userId;
    }
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    reply1(id) {
      if (window.localStorage.getItem("token") == null) {
        this.$parent.$data.show = true;
        return;
      }
      this.isShow = !this.isShow;
      // if (this.WenComment.askId == id) return;
      this.WenComment.askId = id;
      this.getWenCommentDatas();
    },
    reply2(id, userId) {
      this.$router.push({
        path: "/comment",
        query: { id: id, userId: userId }
      });
    },
    getDetailsASK(id) {
      this.$request.getAskDetailsById(id).then(res => {
        this.askDetailData = res.data.data;
        this.loading = false;
      });
    },
    // 获取问大家评论数据
    getWenCommentDatas() {
      this.$request.getWenComment(this.WenComment).then(res => {
        if (res.data.data.dataList.length == 0) return;
        // res.data.data.dataList.forEach(e => {
        //   this.getWenCommentList.push(e);
        //   console.log(this.getWenCommentList);
        // });
        this.getWenCommentList = [];
        this.getWenCommentList = res.data.data.dataList;
        console.log(this.getWenCommentList);
        this.loading1 = false;
        // this.loading = false;
        // if (
        //   res.data.data.countNum <=
        //   res.data.data.limit * res.data.data.currpage
        // ) {
        //   this.finished = true;
        //   this.loading = false;
        //   return;
        // }
      });
    },
    // 加载更多
    // onLoad() {
    //   this.WenComment.offset++;
    //   this.getWenCommentDatas(this.WenComment);
    // },
    back() {
      this.$router.go(-1);
    },
    share() {
      alert("复制本链接分享呗");
    },
    changdu(value) {
      const chang = value.length;
      return chang;
    },
    ask_CommDianZan(data, e) {
      const ak_com = e.currentTarget.firstChild;
      if (ak_com.getAttribute("class").indexOf("heart_comm") == 0) {
        ak_com.classList.remove("heart_comm");
        ak_com.classList.add("aheart_comm");
        this.$request.artCom_Zan(data.id).then(res => {
          if (res.data.code == 200) {
            data.thumbNum = parseInt(data.thumbNum) + 1;
          }
        });
      } else {
        ak_com.classList.remove("aheart_comm");
        ak_com.classList.add("heart_comm");
        data.thumbNum = parseInt(data.thumbNum) - 1;
      }
    },
    ask_HuiDianZan(data, e) {
      const ak_com = e.currentTarget.firstChild;
      if (ak_com.getAttribute("class").indexOf("heart_hui") == 0) {
        ak_com.classList.remove("heart_hui");
        ak_com.classList.add("aheart_hui");
        this.$request.askHui_Zan(data.id).then(res => {
          if (res.data.code == 200) {
            data.thumbNum = parseInt(data.thumbNum) + 1;
          }
        });
      } else {
        ak_com.classList.remove("aheart_hui");
        ak_com.classList.add("heart_hui");
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
      this.$refs.lookMore.style.display = "none";
    },
    pinglun() {
      if (this.value !== "") {
        this.askReply.askId = this.askDetailData.askId;
        this.askReply.content = this.value;
        this.value = "";
        this.$request.askAddReply(this.askReply).then(res => {
          this.getWenCommentDatas();
          this.getDetailsASK(this.$route.query.id);
          this.$toast.success({
            duration: 2000,
            message: "评论成功"
          });
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $(".ask_people")[0].scrollHeight;
              $(".ask_people").scrollTop(h);
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
  filters: {
    changeTime(value) {
      const time = value.split(" ")[0];
      return time;
    },
    changeOldTime(e) {
      const dateStr = e;
      const dateTime = new Date(dateStr).getTime() / 1000;
      const now = parseInt(new Date().getTime() / 1000);
      const date = new Date(dateTime * 1000);
      let Y = date.getFullYear();
      let M = date.getMonth() + 1;
      let D = date.getDate();
      let H = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      //小于10的在前面补0
      if (M < 10) {
        M = "0" + M;
      }
      if (D < 10) {
        D = "0" + D;
      }
      if (H < 10) {
        H = "0" + H;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      const d = now - dateTime;
      const d_days = parseInt(d / 86400);
      const d_hours = parseInt(d / 3600);
      const d_minutes = parseInt(d / 60);
      const d_seconds = parseInt(d);
      if (d_days > 0 && d_days < 3) {
        return d_days + "天前";
      } else if (d_days <= 0 && d_hours > 0) {
        return d_hours + "小时前";
      } else if (d_hours <= 0 && d_minutes > 0) {
        return d_minutes + "分钟前";
      } else if (d_seconds < 60) {
        if (d_seconds <= 0) {
          return "刚刚发表";
        } else {
          return d_seconds + "秒前";
        }
      } else if (d_days >= 3 && d_days < 30) {
        return M + "-" + D + " " + H + ":" + m;
      } else if (d_days >= 30) {
        return Y + "-" + M + "-" + D + " " + H + ":" + m;
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
    }
  },
  computed: {
    isFollow() {
      return this.$route.query.id; //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      this.getDetailsASK(this.$route.query.id);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/detailsASK.scss";
</style>