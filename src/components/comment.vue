<template>
  <div id="comment" v-loading="loading" element-loading-text="拼命加载中...">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">评论区</div>
      <div class="header_kong">
        <div class="icon_message"></div>
      </div>
    </div>
    <!-- 评论人 二级 -->
    <div class="comment_dialogue">
      <div class="comment_top" v-for="(it,index) in comment2List" :key="index">
        <div class="comment_center">
          <div class="comment_img">
            <img :src="it.user.userImg" alt />
          </div>
          <div class="comment_name">
            <p>{{it.user.userChName}}</p>
            <span>{{it.ctime | changeTime}}</span>
          </div>
          <div class="comment_loveimg" @click="ask_CommDianZan(it,$event)">
            <div class="heart_comm"></div>
            <span>{{it.thumbNum | million}}</span>
          </div>
        </div>
        <h6>{{it.content}}</h6>
        <div class="huifu" @click="comment3(index,it)">回复</div>
      </div>
      <div class="tip" v-if="comment2List.length == 0">暂未有评论哦</div>

      <!-- 填写评论 -->
      <div class="reply2">
        <div class="reply2_input">
          <input type="text" v-model="value" placeholder="可以评论哦..." />
          <img src="../\assets\img\index\ask\signature@2x.png" alt />
        </div>
        <div class="reply2_comment" @click="pinglun2">评论</div>
      </div>
      <van-popup
        class="commentvan-popup"
        position="bottom"
        v-model="show"
        style="overflow-y: auto;overflow-x: hidden;"
      >
        <!-- 评论人 三级 -->
        <div class="tip" v-if="comment3List.length == 0">暂未有评论哦</div>
        <div class="comment_dialogue3" v-loading="loading1" element-loading-text="拼命加载中...">
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
              <div class="comment_loveimg2" @click="ask_CommDianZan(j,$event)">
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
        </div>
        <!-- 填写评论 -->
        <div class="reply2">
          <div class="reply2_input">
            <input type="text" v-model="value3" :placeholder="value1" />
            <img src="../\assets\img\index\ask\signature@2x.png" alt />
          </div>
          <div class="reply2_comment" @click="pinglun3">评论</div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      loading: true,
      loading1: true,
      show: false,
      value: "",
      value3: "",
      value1: "可以评论哦...",
      comm2: { askAnswerId: 0, level: 1, limit: 1000, offset: 1, topId: 0 },
      comment2List: [],
      comm3: { askAnswerId: 0, level: 1, limit: 1000, offset: 1, topId: 0 },
      comment3List: [],
      getIndex: 1,
      addPingLun2: {
        askAnswerId: 0,
        content: "",
        level: 1,
        parentId: 0,
        receiveUserId: 0,
        status: 0,
        thumbNum: 0,
        topId: 0,
        userId: 0
      }
    };
  },
  created() {
    this.comm2.askAnswerId = this.$route.query.id;
    this.comm2.topId = this.$route.query.id;
    this.getComment2Data(this.comm2);
    this.addPingLun2.askAnswerId = this.$route.query.id;
    this.addPingLun2.parentId = this.$route.query.id;
    this.addPingLun2.topId = this.$route.query.id;
    this.addPingLun2.receiveUserId = this.$route.query.userId;
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      this.addPingLun2.userId = JSON.parse(
        localStorage.getItem("token")
      ).userId;
    }
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
    // 获取问答评论二级数据
    getComment2Data() {
      this.$request.getComment2(this.comm2).then(res => {
        this.comment2List = [];
        this.comment2List = res.data.data.dataList;
        this.loading = false;
        // if (this.comment2List == null) return;
        // this.comment2List.forEach(e => {
        //   if (e.sonComment.length != 0) {
        //     this.comment3List.push(e.sonComment);
        //   }
        // });
      });
    },
    // 获取问答评论三级数据
    getComment3Data() {
      this.$request.getComment2(this.comm3).then(res => {
        if (res.data.data.dataList !== null) {
          this.comment3List = res.data.data.dataList;
          this.loading1 = false;
        }
      });
    },
    comment3(index, it) {
      this.comm3.askAnswerId = it.id;
      this.comm3.topId = it.id;
      this.value1 = "@" + it.user.userChName + ":";
      this.addPingLun2.receiveUserId = it.userId;
      this.addPingLun2.askAnswerId = it.id;
      this.addPingLun2.parentId = it.id;
      this.addPingLun2.topId = it.id;
      this.show = !this.show;
      // this.getIndex = index;
      this.getComment3Data();
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
    pinglun2() {
      if (this.value !== "") {
        this.addPingLun2.content = this.value;
        this.value = "";
        this.$request.askAddPingLun2(this.addPingLun2).then(res => {
          this.getComment2Data();
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $("#comment")[0].scrollHeight;
              $("#comment").scrollTop(h);
            }, 300);
          });
        });
      } else {
        this.$toast({
          duration: 2000,
          message: "赶紧写点什么呗"
        });
      }
    },
    pinglun3() {
      if (this.value3 !== "") {
        this.addPingLun2.content = this.value3;
        this.value3 = "";
        this.$request.askAddPingLun2(this.addPingLun2).then(res => {
          this.getComment3Data();
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $(".commentvan-popup")[0].scrollHeight;
              $(".commentvan-popup").scrollTop(h);
            }, 300);
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
      this.addPingLun2.receiveUserId = j.userId;
      this.addPingLun2.parentId = j.id;
    }
  },
  computed: {
    isFollow() {
      return this.$route.query.id; //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      this.comm2.askAnswerId = this.$route.query.id;
      this.comm2.topId = this.$route.query.id;
      this.addPingLun2.askAnswerId = this.$route.query.id;
      this.addPingLun2.parentId = this.$route.query.id;
      this.addPingLun2.topId = this.$route.query.id;
      this.addPingLun2.receiveUserId = this.$route.query.userId;
      if (JSON.parse(localStorage.getItem("token")) !== null) {
        this.addPingLun2.userId = JSON.parse(
          localStorage.getItem("token")
        ).userId;
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
      // 小于10的在前面补0;
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
@import "../assets/css/comment.scss";
</style>