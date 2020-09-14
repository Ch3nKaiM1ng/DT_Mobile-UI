<template>
  <div id="detailsART">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">文章详情</div>
      <div class="header_kong"></div>
    </div>
    <!-- 文章 -->
    <div
      class="article"
      v-if="artDetailData!=null"
      v-loading="loading"
      element-loading-text="拼命加载中..."
    >
      <!-- 固定大盒子 -->
      <div class="article_maxbox">
        <!-- 小盒子 -->
        <div class="article_box">
          <!-- 文章标题 -->
          <div class="article_head">
            <span>{{artDetailData.artTitle}}</span>
            <img src="../assets/img/index/new.png" v-if="artDetailData.label=='新'" alt />
            <img src="../assets/img/index/bomb.png" v-else-if="artDetailData.label=='爆'" alt />
            <img src="../assets/img/index/hot.png" v-else-if="artDetailData.label=='热'" alt />
          </div>
          <!-- 文章题主 -->
          <div class="article_info">
            <div class="article_img">
              <img :src="artDetailData.user.userImg" alt />
            </div>
            <div class="article_message">
              <p>{{artDetailData.user.userChName}}</p>
              <span>{{artDetailData.ctime | changeTime}}</span>
            </div>
          </div>
          <!-- 文章内容 -->
          <div class="article_content">
            <div class="article_contentHead" v-html="artDetailData.artContent"></div>
          </div>
          <!-- 评论和点赞 -->
          <div class="comment_area">
            <div class="article_comment">
              <div class="article_messageimg" @click="getCom(artDetailData.artId)">
                <img src="../assets/img/index/pinglun1.png" alt />
                <span>{{artDetailData.artCommentNum | million}}</span>
              </div>
              <div class="article_loveimg" @click="artDianZan(artDetailData,$event)">
                <div class="heart"></div>
                <span>{{artDetailData.thumbNum | million}}</span>
              </div>
              <!-- 收藏 -->
              <div class="shoucang" @click="sc($event)">
                <div class="shoucang_img1"></div>
                <span>收藏</span>
              </div>
            </div>
          </div>
          <!-- 暂无评论图片 -->
          <div class="article_btn" v-if="artDetailData.artCommentNum == 0">
            <img src="../\assets\img\index\ask\text@2x (3).png" alt />
            <div class="noMore">还没有评论哦~</div>
          </div>

          <!-- 评论人 -->
          <div class="comment_box" v-show="com" v-else>
            <div class="comment_top" v-for="(item,index) in commentList3" :key="index">
              <div class="comment_center" v-if="item.user !== null">
                <div class="comment_img">
                  <img :src="item.user.userImg" alt />
                </div>
                <div class="comment_name">
                  <p>{{item.user.userChName}}</p>
                  <span>{{item.ctime | changeTime}}</span>
                </div>
                <div class="comment_loveimg" @click="art_CommDianZan(item,$event)">
                  <div class="heart_comm"></div>
                  <span>{{item.thumbNum}}</span>
                </div>
              </div>
              <h6>{{item.content}}</h6>
              <div class="huifu" @click="getCom2(index,item)">回复</div>
            </div>
            <div class="more" @click="more" v-show="moreBox" v-loading="loading1">查看更多评论</div>
          </div>
          <!-- 填写评论 -->
          <div class="article_reply" v-if="com">
            <div class="article_input">
              <input type="text" v-model="value" placeholder="可以评论哦..." />
              <img src="../\assets\img\index\ask\signature@2x.png" alt />
            </div>
            <div class="article_comment2" @click="pinglun">评论</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { setTimeout } from "timers";
export default {
  name: "detailsART",
  data() {
    return {
      loading: true,
      loading1: true,
      artDetailData: null,
      com: false,
      commentList3: [],
      moreBox: true,
      artCom3List: [],
      allCommentList: [],
      artCom3List: [],
      comment3List: [],
      get3Index: 0,
      value: "",
      reply: {
        artId: 0,
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
  created() {
    this.getDetailsART(this.$route.query.id);
    this.reply.artId = this.$route.query.id;
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      this.reply.userId = JSON.parse(localStorage.getItem("token")).userId;
    }
  },
  updated() {
    if(localStorage.getItem("status")=="false") {
      this.$t2();
    } 
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getDetailsART(id) {
      this.$request.getArticleDetailsById(id).then(res => {
        this.artDetailData = res.data.data;
        this.loading = false;
      });
    },
    getAllComm(id) {
      this.$request.getWenArtComment(id).then(res => {
        this.allCommentList = res.data.data;
        if (this.commentList3.length !== this.allCommentList.length) {
          this.commentList3 = this.allCommentList;
        }
      });
    },
    getCom(id) {
      this.com = !this.com;
      if (!this.moreBox) {
        this.moreBox = true;
      }
      this.$request.getWenArtComment(id).then(res => {
        this.allCommentList = res.data.data;
        if (this.allCommentList == null) {
          return;
        }
        this.commentList3 = this.allCommentList.slice(0, 3);
        this.loading1 = false;
        // this.allCommentList.forEach(ele => {
        //   this.artCom3List.push(ele.sonArticle);
        //   this.$store.commit("getArtCom2Datas", this.artCom3List);
        // });
        // this.commentList3.forEach(e => {
        //   if (e.sonArticle.length != 0) {
        //     this.comment3List.push(e.sonArticle);
        //   }
        // });
      });
    },
    getCom2(index, data) {
      if (window.localStorage.getItem("token") == null) {
        this.$parent.$data.show = true;
        return;
      }
      this.get3Index = index;
      this.$router.push({
        path: "/commentArt",
        query: {
          i: index,
          artId: data.artId,
          topId: data.id,
          receiveUserId: data.userId
        }
      });
    },
    more() {
      this.commentList3 = this.allCommentList;
      this.moreBox = !this.moreBox;
    },
    artDianZan(data, e) {
      const ar = e.currentTarget.firstChild;
      if (ar.getAttribute("class").indexOf("heart") == 0) {
        ar.classList.remove("heart");
        ar.classList.add("aheart");
        this.$request.art_Zan(data.artId).then(res => {
          if (res.data.code == 200) {
            data.thumbNum = parseInt(data.thumbNum) + 1;
          }
        });
      } else {
        ar.classList.remove("aheart");
        ar.classList.add("heart");
        data.thumbNum = parseInt(data.thumbNum) - 1;
      }
    },
    art_CommDianZan(data, e) {
      const ar_com = e.currentTarget.firstChild;
      if (ar_com.getAttribute("class").indexOf("heart_comm") == 0) {
        ar_com.classList.remove("heart_comm");
        ar_com.classList.add("aheart_comm");
        this.$request.artCom_Zan(data.id).then(res => {
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
    pinglun() {
      if (window.localStorage.getItem("token") == null) {
        this.$parent.$data.show = true;
        return;
      }
      if (this.value !== "") {
        this.reply.content = this.value;
        this.value = "";
        this.$request.artDetailReply(this.reply).then(res => {
          this.getAllComm(this.reply.artId);
          this.getDetailsART(this.$route.query.id);
          this.$toast.success({
            duration: 2000,
            message: "评论成功"
          });
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $(".article")[0].scrollHeight;
              $(".article").scrollTop(h);
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
      return this.$route.query.id, JSON.parse(localStorage.getItem("token")); //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      this.getDetailsART(this.$route.query.id);
      this.getCom(this.$route.query.id);
      this.reply.artId = this.$route.query.id;
      this.reply.userId = JSON.parse(localStorage.getItem("token")).userId;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/detailsART.scss";

a {
  font-weight: bold;
  text-decoration: underline;
  color: #7093db;
}
</style>

<style>

</style>