<template>
  <div>
    <swiper :options="swiper_Option" v-if="swiper_Option !== null">
      <swiper-slide
        v-for="(item,index) in getWenList"
        :key="index"
        class="wen_articlebox"
        v-loading="loadingMore"
        element-loading-text="拼命加载中..."
      >
        <!-- 问答 -->
        <div class="ask_people" v-if="item.askId!=null">
          <div class="wen_label">
            <img src="../\assets\img\index\ask\age@2x.png" v-if="item.artKeyword=='年龄'" alt />
            <img src="../\assets\img\index\ask\caizhi@2x.png" v-else-if="item.artKeyword=='材质'" alt />
            <img
              src="../\assets\img\index\ask\chuantong@2x.png"
              v-else-if="item.artKeyword=='传统'"
              alt
            />
            <img
              src="../\assets\img\index\ask\feiyong@2x.png"
              v-else-if="item.artKeyword=='费用'"
              alt
            />
            <img src="../\assets\img\index\ask\jiage@2x.png" v-else-if="item.artKeyword=='价格'" alt />
            <img
              src="../\assets\img\index\ask\lianxing@2x.png"
              v-else-if="item.artKeyword=='脸型'"
              alt
            />
            <img
              src="../\assets\img\index\ask\xiaoguo@2x.png"
              v-else-if="item.artKeyword=='效果'"
              alt
            />
            <img
              src="../\assets\img\index\ask\yinxing@2x.png"
              v-else-if="item.artKeyword=='隐形'"
              alt
            />
          </div>
          <div class="wen_article">
            <div class="up_maximumbox">
              <!-- 问答 -->
              <div class="up_content">
                <div class="up_top">
                  <div class="up_problem">
                    <span>问：{{item.askTitle}}</span>
                    <img src="../assets/img/index/new.png" v-if="item.askLabel=='新'" alt />
                    <img src="../assets/img/index/bomb.png" v-else-if="item.askLabel=='爆'" alt />
                    <img src="../assets/img/index/hot.png" v-else-if="item.askLabel=='热'" alt />
                  </div>
                </div>
                <div class="up_article more">{{item.askContent}}</div>
                <div class="gd" @click="show_zi($event)">查看全部</div>
                <div class="up_bottom">
                  <div class="up_img">
                    <img :src="item.user.userImg" alt />
                  </div>
                  <div class="up_message">
                    <p>{{item.user.userChName}}</p>
                    <span>{{item.ctime | changeTime}}</span>
                  </div>
                  <div class="up_folat">
                    <div class="up_lf">
                      <span @click="reply1(item.askId)">回复</span>
                    </div>
                    <div class="up_rf" @click="reply1(item.askId)">
                      <img src="../\assets\img\index\pinglun1.png" alt />
                      <span>{{changdu(item.askAnswerList) | million}}</span>
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
              <div class="article_btn" v-if="changdu(item.askAnswerList) == 0">
                <img src="../\assets\img\index\ask\text@2x (3).png" alt />
                <p>还没有评论哦~</p>
              </div>
              <!-- 一级评论人 -->
              <div class="commentBox" v-show="isShow" v-else>
                <van-list
                  :immediate-check="false"
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多内容了"
                  @load="onLoad"
                >
                  <div class="ccc">
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
                            <span
                              class="commen_reply2"
                              @click="reply2(item.id,item.userId)"
                            >回复</span>
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
                </van-list>
              </div>

              <!-- 填写评论 -->
              <div class="reply1" v-show="isShow">
                <div class="reply1_input">
                  <input type="text" v-model="AskValue" placeholder="可以评论哦..." />
                  <img src="../\assets\img\index\ask\signature@2x.png" alt />
                </div>
                <div class="reply1_comment" @click="AskPingLun">评论</div>
              </div>
            </div>
          </div>
          <!-- <div class="wen_article2"></div>
          <div class="wen_article3"></div>-->
        </div>

        <!-- 文章 -->
        <div class="article" v-if="item.artId!=null">
          <div class="wen_labe2">
            <img src="../\assets\img\index\ask\age@2x.png" v-if="item.artKeyword=='年龄'" alt />
            <img src="../\assets\img\index\ask\caizhi@2x.png" v-else-if="item.artKeyword=='材质'" alt />
            <img
              src="../\assets\img\index\ask\chuantong@2x.png"
              v-else-if="item.artKeyword=='传统'"
              alt
            />
            <img
              src="../\assets\img\index\ask\feiyong@2x.png"
              v-else-if="item.artKeyword=='费用'"
              alt
            />
            <img src="../\assets\img\index\ask\jiage@2x.png" v-else-if="item.artKeyword=='价格'" alt />
            <img
              src="../\assets\img\index\ask\lianxing@2x.png"
              v-else-if="item.artKeyword=='脸型'"
              alt
            />
            <img
              src="../\assets\img\index\ask\xiaoguo@2x.png"
              v-else-if="item.artKeyword=='效果'"
              alt
            />
            <img
              src="../\assets\img\index\ask\yinxing@2x.png"
              v-else-if="item.artKeyword=='隐形'"
              alt
            />
          </div>
          <!-- 固定大盒子 -->
          <div class="article_maxbox">
            <!-- 小盒子 -->
            <div class="article_box">
              <!-- 文章标题 -->
              <div class="article_head">
                <span>{{item.artTitle}}</span>
                <img src="../assets/img/index/new.png" v-if="item.label=='新'" alt />
                <img src="../assets/img/index/bomb.png" v-else-if="item.label=='爆'" alt />
                <img src="../assets/img/index/hot.png" v-else-if="item.label=='热'" alt />
              </div>
              <!-- 文章题主 -->
              <div class="article_info">
                <div class="article_img">
                  <img :src="item.user.userImg" alt />
                </div>
                <div class="article_message">
                  <p>{{item.user.userChName}}</p>
                  <span>{{item.ctime | changeTime}}</span>
                </div>
                <div class="tips" v-if="showRight">
                  <span>左滑更多</span>
                  <img src="../assets/img/index/ask/drop-up.png" alt />
                </div>
              </div>
              <!-- 文章内容 -->
              <div class="article_content">
                <div class="article_contentHead" v-html="item.artContent"></div>
              </div>
              <!-- 评论和点赞 -->
              <div class="comment_area">
                <div class="article_comment">
                  <div class="article_messageimg" @click="getCom(item.artId,item)">
                    <img src="../\assets\img\index\pinglun1.png" alt />
                    <span>{{item.artCommentNum | million}}</span>
                  </div>
                  <div class="article_loveimg" @click="artDianZan(item,$event)">
                    <div class="heart"></div>
                    <span>{{item.thumbNum | million}}</span>
                  </div>
                  <!-- 收藏 -->
                  <div class="shoucang" @click="sc($event)">
                    <div class="shoucang_img1"></div>
                    <span>收藏</span>
                  </div>
                </div>
              </div>
              <!-- 暂无评论图片 -->
              <div class="article_btn" v-if="item.artCommentNum == 0">
                <img src="../\assets\img\index\ask\text@2x (3).png" alt />
                <p>还没有评论哦~</p>
              </div>
              <!-- 评论人 -->
              <div class="comment_box" v-show="com" v-else>
                <div class="comment_top" v-for="(item,index) in commentList3" :key="index">
                  <div class="comment_center">
                    <div class="comment_img">
                      <img :src="item.user.userImg" alt />
                    </div>
                    <div class="comment_name">
                      <p>{{item.user.userChName}}</p>
                      <span>{{item.ctime | changeTime}}</span>
                    </div>
                    <div class="comment_loveimg" @click="art_CommDianZan(item,$event)">
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
              <div class="article_reply" v-show="com">
                <div class="article_input">
                  <input type="text" v-model="value" placeholder="可以评论哦..." />
                  <img src="../\assets\img\index\ask\signature@2x.png" alt />
                </div>
                <div class="article_comment2" @click="pinglun">评论</div>
              </div>
            </div>
          </div>
          <!-- <div class="article_maxbox2"></div>
          <div class="article_maxbox3"></div>-->
        </div>
      </swiper-slide>
      <div class="ask_noMore" v-if="getWenList.length==0">暂无内容哦~</div>
    </swiper>
  </div>
</template>

<script>
import test from "../assets/js/test.js";
import { setTimeout } from "timers";
export default {
  name: "ask_people",
  data() {
    return {
      showRight: true,
      loadingMore: true,
      //评论输入框隐藏
      com: false,
      moreBox: true,
      isShow: false,
      //轮播图
      swiper_Option: null,
      // 调取问答榜单数据
      Wen: { classId: 0, offset: 1 },
      getWenList: [],
      // 调取问答评论数据
      WenComment: { askId: 0, limit: 10, offset: 1 },
      getWenCommentList: [],
      // 加载更多
      loading: false,
      finished: false,
      offset: 100,
      // 获取所有评论数据
      allCommentList: [],
      commentList3: [],
      // 获取最后一级评论数据
      comment3List: [],
      get3Index: 0,
      artCom3List: [],
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
      },
      AskValue: "",
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
    if (this.$store.state.WenSonData.length == 0) return;
    else {
      this.loaderSwiper();
      this.getWenDatas(this.$store.state.WenSonData[0].id);
    }
    if (JSON.parse(localStorage.getItem("token")) !== null) {
      this.reply.userId = JSON.parse(localStorage.getItem("token")).userId;
      this.askReply.userId = JSON.parse(localStorage.getItem("token")).userId;
    }
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    loaderSwiper() {
      var vm = this;
      this.swiper_Option = {
        loop: true,
        effect: "coverflow",
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          touchStart: function(event) {
            if (vm.getWenList.length == this.activeIndex + 1) {
              vm.Wen.offset++;
              vm.$request.getWenCrunchiesList(vm.Wen).then(res => {
                if (res.data.code == "500") return;
                res.data.data.dataList.forEach(e => {
                  vm.getWenList.push(e);
                });
              });
            }
          }
        }
      };
    },
    getAllComm(id) {
      this.$request.getWenArtComment(id).then(res => {
        this.allCommentList = res.data.data;
        if (this.commentList3.length !== this.allCommentList.length) {
          this.commentList3 = this.allCommentList;
        }
      });
    },
    //判断一级评论 显示 隐藏
    reply1(id) {
      this.askReply.askId = id;
      if (window.localStorage.getItem("token") == null) {
        if (this.$store.state.show) {
          this.$store.state.show = false;
        } else {
          this.$store.state.show = true;
        }
        return;
      }
      this.isShow = !this.isShow;
      if (this.WenComment.askId == id) return;
      this.WenComment.askId = id;
      this.getWenCommentDatas();
    },
    //判断二级评论 显示 隐藏
    reply2(id, userId) {
      // this.$request.getComment2(id).then(res => {
      //   this.comment2List = [];

      //   res.data.data.forEach(item=>{
      //     if(item.askAnswerId==id){
      //       this.comment2List.push(item);
      //     }
      //   })
      //   console.log(this.comment2List);
      //   this.comment2List.forEach(e => {
      //     if (e.sonComment.length != 0) {
      //       this.comment3List.push(e.sonComment);
      //     }
      //   });
      // });
      this.$router.push({
        path: "/comment",
        query: { id: id, userId: userId }
      });
    },
    share() {
      alert("复制本链接分享呗");
    },
    // 获取问大家轮播图数据
    getWenDatas(id) {
      this.Wen.classId = id;
      this.$request.getWenCrunchiesList(this.Wen).then(res => {
        this.getWenList = [];
        if (res.data.code == "500") return;
        this.getWenList = res.data.data.dataList;
        this.loadingMore = false;
      });
    },
    // 获取问大家评论数据
    getWenCommentDatas() {
      this.$request.getWenComment(this.WenComment).then(res => {
        // this.getWenCommentList = res.data.data.dataList;
        if (res.data.data.dataList.length == 0) return;
        // res.data.data.dataList.forEach(e => {
        //   this.getWenCommentList.push(e);
        // });
        this.getWenCommentList = res.data.data.dataList;
        this.loading = false;
        if (
          res.data.data.countNum <=
          res.data.data.limit * res.data.data.currpage
        ) {
          this.finished = true;
          this.loading = false;
          return;
        }
      });
    },
    changdu(value) {
      const chang = value.length;
      return chang;
    },
    // 加载更多
    onLoad() {
      // console.log(this.getCaseData.offset);
      this.WenComment.offset++;
      this.getWenCommentDatas(this.WenComment);
    },
    getCom(id, i) {
      // console.log(i);

      this.reply.artId = id;
      this.com = !this.com;
      if (!this.moreBox) {
        this.moreBox = true;
      }
      this.$request.getWenArtComment(id).then(res => {
        this.allCommentList = res.data.data;
        // this.allCommentList.forEach(ele => {
        //   this.artCom3List.push(ele.sonArticle);
        //   this.$store.commit("getArtCom2Datas", this.artCom3List);
        // });
        if (this.allCommentList == null) {
          return;
        }
        this.commentList3 = this.allCommentList.slice(0, 3);
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
    sc(e) {
      if (window.localStorage.getItem("token") == null) {
        if (this.$store.state.show) {
          this.$store.state.show = false;
        } else {
          this.$store.state.show = true;
        }
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
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $(".article_box")[0].scrollHeight;
              $(".article_box").scrollTop(h);
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
    AskPingLun() {
      if (this.AskValue !== "") {
        this.askReply.content = this.AskValue;
        this.AskValue = "";
        this.$request.askAddReply(this.askReply).then(res => {
          this.getWenCommentDatas();
          this.$nextTick(() => {
            setTimeout(() => {
              let h = $(".up_maximumbox")[0].scrollHeight;
              $(".up_maximumbox").scrollTop(h);
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
  computed: {
    isFollow() {
      return this.$store.state.WenSonData; //需要监听的数据
    }
  },
  watch: {
    isFollow(newData) {
      if (this.$store.state.WenSonData.length == 0) {
        this.getWenList = [];
      } else {
        this.loaderSwiper();
        this.getWenDatas(this.$store.state.WenSonData[0].id);
      }
      if (JSON.parse(localStorage.getItem("token")) !== null) {
        this.reply.userId = JSON.parse(localStorage.getItem("token")).userId;
        this.askReply.userId = JSON.parse(localStorage.getItem("token")).userId;
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
      // 小于10的在前面补0
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
  mounted() {
    var that = this;
    test.$on("getId", function(id) {
      that.Wen.offset = 1;
      that.getWenDatas(id);
    });
    setTimeout(() => {
      this.showRight = false;
    }, 8000);
  }
};
</script>

<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/ask_people.scss";
</style>