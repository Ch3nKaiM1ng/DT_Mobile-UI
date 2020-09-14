<template>
  <div id="commentCase">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">评论区</div>
      <div class="header_kong"></div>
    </div>

    <!-- 评论人 三级 -->
    <div
      class="comment_dialogue3"
      v-if="comment3List"
      v-loading="loading"
      element-loading-text="拼命加载中..."
    >
      <div class="comment_top2" v-for="(j,k) in comment3List" :key="k">
        <div class="comment_center2">
          <div class="comment_img2">
            <img :src="j.user.userImg" alt />
          </div>
          <div class="comment_name2">
            <p>{{j.user.userChName}}</p>
            <!-- <div id="host">题主</div> -->
            <span>{{j.ctime | changeTime}}</span>
          </div>
          <div class="comment_loveimg2" @click="case_DianZan(j,$event)">
            <div class="heart_comm"></div>
            <span>{{j.thumbNum | million}}</span>
          </div>
        </div>
        <h6 v-if="j.receiveUser!=null" @click="dianWo(j)">
          回复
          <span>@{{j.receiveUser.userChName}}：</span>
          {{j.content}}
        </h6>
      </div>
      <div class="tip" v-if="comment3List.length == 0">暂未有评论哦</div>
    </div>
    <!-- 填写评论 -->
    <div class="reply">
      <div class="reply_input">
        <input type="text" v-model="value" :placeholder="value1" />
        <img src="../\assets\img\index\ask\signature@2x.png" alt />
      </div>
      <div class="reply_comment" @click="pinglun">评论</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commentCase",
  data() {
    return {
      loading: true,
      userData: null,
      comment3List: [],
      value: "",
      value1: "可以评论哦...",
      reply2: {
        caseId: 0,
        content: "",
        topId: 0,
        level: 1,
        parentId: 0,
        receiveUserId: 0,
        status: 0,
        thumbNum: 0,
        userId: 0
      },
      caseAllComData: { caseId: 0, level: 1, limit: 1000, offset: 1, topId: 0 }
    };
  },
  created() {
    this.reply2.caseId = this.$route.query.caseId;
    this.reply2.topId = this.$route.query.topId;
    this.reply2.parentId = this.$route.query.topId;
    this.reply2.receiveUserId = this.$route.query.receiveUserId;
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      this.userData = JSON.parse(localStorage.getItem("token"));
    }
    this.reply2.userId = this.userData.userId;
    this.caseAllComData.caseId = this.$route.query.caseId;
    this.caseAllComData.topId = this.$route.query.topId;
    this.$request.caseAllPingLun(this.caseAllComData).then(res => {
      this.comment3List = res.data.data.dataList;
      this.loading = false;
    });
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    case_DianZan(data, e) {
      const ar_com = e.currentTarget.firstChild;
      if (ar_com.getAttribute("class").indexOf("heart_comm") == 0) {
        ar_com.classList.remove("heart_comm");
        ar_com.classList.add("aheart_comm");
        this.$request.userShowZan(data.id).then(res => {
          if (res.data.code == 200) {
            data.thumbNum = parseInt(data.thumbNum) + 1;
          }
        });
      } else {
        ar_com.classList.remove("aheart_comm");
        ar_com.classList.add("heart_comm");
        data.thumbNum = parseInt(data.thumbNum) - 1;
      }
    },
    pinglun() {
      if (this.value !== "") {
        this.reply2.content = this.value;
        this.value = "";
        this.$request.casePingLun(this.reply2).then(res => {
          this.$request.caseAllPingLun(this.caseAllComData).then(res => {
            this.comment3List = res.data.data.dataList;
            this.$nextTick(() => {
              setTimeout(() => {
                let h = $("#commentCase")[0].scrollHeight;
                $("#commentCase").scrollTop(h);
              }, 300);
            });
          });
        });
      } else {
        this.$toast({
          duration: 2000,
          message: "赶紧写点什么呗"
        });
      }
    },
    dianWo(j) {
      this.value1 = "@" + j.user.userChName + ":";
      this.reply2.receiveUserId = j.userId;
      this.reply2.parentId = j.id;
    }
  },
  computed: {
    isFollow() {
      return this.$route.query.i; //需要监听的数据
    }
  },
  watch: {
    isFollow(newData) {
      // this.reply2.artId = this.$route.query.caseId;
      // this.reply2.topId = this.$route.query.topId;
      // this.reply2.receiveUserId = this.$route.query.receiveUserId;
      // this.userData = JSON.parse(localStorage.getItem("token"));
      // this.reply2.userId = this.userData.userId;
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
      const Y = date.getFullYear();
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
  }
};
</script>
<style lang="scss">
@import "../assets/css/commentCase.scss";
</style>