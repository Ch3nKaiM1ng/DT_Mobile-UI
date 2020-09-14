<template>
  <div
    class="cr_question"
    v-if="hotDatas!=null"
    v-loading="loading"
    element-loading-text="拼命加载中..."
  >
    <div class="hotCrunchies_modules" v-for="(item,index) in hotDatas" :key="index">
      <div
        class="cr_question_list"
        v-if="item.ac_artId!=null"
        :class="{ crtive1: index==0, crtive2: index==1 }"
        @click="tiaoArt(item.ac_artId)"
      >
        <div class="num">{{addNum(item.aaa)}}、</div>
        <div class="content">
          <div class="up">
            <div class="title">{{item.article.artTitle}}</div>
            <img src="../assets/img/index/new.png" v-if="item.article.label=='新'" alt />
            <img src="../assets/img/index/bomb.png" v-else-if="item.article.label=='爆'" alt />
            <img src="../assets/img/index/hot.png" v-else-if="item.article.label=='热'" alt />
          </div>
          <div class="center" v-if="index==3">
            <img :src="it" v-for="(it,i) in imgList(item.article.artImg)" :key="i" preview="10" alt />
          </div>
          <div class="down">
            <div class="icon">
              <img src="../assets/img/index/article.png" alt />
            </div>
            <div class="right">
              <div class="discuss1">#{{item.article.artCommentNum | million}}讨论</div>
              <div class="hot">
                <span>热度{{item.article.checkNum | million}}</span>
                <img src="../assets/img/index/crunchies/up.png" alt />
                <span>+{{hot_Num()}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="cr_question_list"
        v-else-if="item.ac_askId!=null"
        :class="{ crtive1: index==0, crtive2: index==1, crtive3: index==2 }"
        @click="tiaoAsk(item.ac_askId)"
      >
        <div class="num">{{addNum(item.aaa)}}、</div>
        <div class="content">
          <div class="up">
            <div class="title">{{item.ask.askTitle}}</div>
            <img src="../assets/img/index/new.png" v-if="item.ask.askLabel=='新'" alt />
            <img src="../assets/img/index/bomb.png" v-else-if="item.ask.askLabel=='爆'" alt />
            <img src="../assets/img/index/hot.png" v-else-if="item.ask.askLabel=='热'" alt />
          </div>

          <div class="center" v-if="index==3">
            <img :src="it" v-for="(it,i) in imgList(item.ask.askImg)" :key="i" preview="10" alt />
          </div>

          <div class="down">
            <div class="icon">
              <img src="../assets/img/index/answer.png" alt />
            </div>

            <div class="right2" v-if="index===3">
              <div class="discuss2">
                <div class="girl">
                  <span>#</span>
                  <span>女</span>
                  <span>{{item.womanNum}}</span>
                </div>
                <div class="man">
                  <span>#</span>
                  <span>男</span>
                  <span>{{item.manNum}}</span>
                  <span>讨论</span>
                </div>
              </div>
              <div class="hot">
                <span>热度{{item.ask.askCheckNum | million}}</span>
                <img src="../assets/img/index/crunchies/up.png" alt />
                <span>+{{hot_Num()}}</span>
              </div>
            </div>
            <div class="right" v-else>
              <div class="discuss1">#{{item.ask.askCommentNum | million}}讨论</div>
              <div class="hot">
                <span>热度{{item.ask.askCheckNum | million}}</span>
                <img src="../assets/img/index/crunchies/up.png" alt />
                <span>+{{hot_Num()}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cr_AD" v-else-if="item.img!=null&&index!==2">
        <a :href="item.url">
          <img :src="item.img" alt />
        </a>
      </div>

      <!-- <div class="cr_question_list" v-if="index==2">
        <div class="num">4、</div>
        <div class="content" v-if="item.ac_artId!=null" @click="tiaoArt(item.ac_artId)">
          <div class="up">
            <div class="title">{{item.article.artTitle}}</div>
            <img src="../assets/img/index/new.png" v-if="item.article.label=='新'" alt />
            <img src="../assets/img/index/bomb.png" v-else-if="item.article.label=='爆'" alt />
            <img src="../assets/img/index/hot.png" v-else-if="item.article.label=='热'" alt />
          </div>
          <div class="down">
            <div class="icon">
              <img src="../assets/img/index/article.png" alt />
            </div>
            <div class="right2">
              <div class="discuss2">
                <div class="girl">
                  <span>#</span>
                  <span>女</span>
                  <span>{{item.womanNum | million}}</span>
                </div>
                <div class="man">
                  <span>#</span>
                  <span>男</span>
                  <span>{{item.manNum | million}}</span>
                  <span>讨论</span>
                </div>
              </div>
              <div class="hot">
                <span>热度{{item.article.checkNum | million}}</span>
                <img src="../assets/img/index/crunchies/up.png" alt />
                <span>+{{hot_Num()}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="content" v-if="item.ac_askId!=null" @click="tiaoAsk(item.ac_askId)">
          <div class="up">
            <div class="title">{{item.ask.askTitle}}</div>
            <img src="../assets/img/index/new.png" v-if="item.ask.askLabel=='新'" alt />
            <img src="../assets/img/index/bomb.png" v-else-if="item.ask.askLabel=='爆'" alt />
            <img src="../assets/img/index/hot.png" v-else-if="item.ask.askLabel=='热'" alt />
          </div>
          <div class="down">
            <div class="icon">
              <img src="../assets/img/index/answer.png" alt />
            </div>
            <div class="right2">
              <div class="discuss2">
                <div class="girl">
                  <span>#</span>
                  <span>女</span>
                  <span>{{item.womanNum}}</span>
                </div>
                <div class="man">
                  <span>#</span>
                  <span>男</span>
                  <span>{{item.manNum}}</span>
                  <span>讨论</span>
                </div>
              </div>
              <div class="hot">
                <span>热度{{item.ask.askCheckNum | million}}</span>
                <img src="../assets/img/index/crunchies/up.png" alt />
                <span>+{{hot_Num()}}</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="answer" v-if="index==4">
        <div class="answer_title">高票回答</div>
        <div class="answer_question">
          <img src="../assets/img/index/crunchies/wen_ch.png" alt />
          洗牙對牙齒有什麼危害嗎？
        </div>
        <div class="question_content">
          <div class="content_left">
            <div class="article">以前很嫌弃戴托槽觉得很影响美观，现在我看到熟人依然会微笑打招呼，觉得没有任何影响了，因为我感觉我的小钢牙还是很好...</div>
            <div class="zan">
              <div class="h">
                <img src="../assets/img/index/crunchies/heart_s.png" alt />
                102
              </div>
              <div class="m">
                <img src="../assets/img/index/crunchies/message.png" alt />
                202
              </div>
              <div class="e">
                <img src="../assets/img/index/crunchies/eye.png" alt />
                3002
              </div>
            </div>
          </div>
          <div class="content_right">
            <img src="../assets/img/index/crunchies/answer_img.png" alt />
          </div>
        </div>
      </div>

      <div class="case" v-if="index==6">
        <div class="case_title">
          优秀案例
          <img src="../assets/img/index/crunchies/excellent.png" alt />
        </div>
        <div class="case_content">
          <img src="../assets/img/index/crunchies/case_img.png" alt />
          <div class="case_right">
            <div
              class="case_article"
            >以前很嫌弃戴托槽觉得很影响美观，现在我看到熟人依然会微笑打招呼，觉得没有任何影响了，因为我感觉我的小钢牙还...很好看的...</div>
            <div class="article_down">
              <div class="label">隱適美隱形矯正</div>
              <div class="zan">
                <img src="../assets/img/index/crunchies/heart_s.png" alt />
                102
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>

    <div class="hot_noMore" v-if="hotDatas.length == 0">暂无内容哦~</div>
  </div>
</template>

<script>
export default {
  name: "hot_crunchies",
  data() {
    return {
      loading: true,
      hotDatas: null,
      HotGb: { limit: 1000, offset: 1 },
      hotGbList: [],
      hL: 0
    };
  },
  created() {
    this.getHotDataById(this.$store.state.getId);
    this.getHotGbDatas(this.$store.state.getId);
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    getHotDataById(id) {
      if (id == "") return;
      this.$request.getHotCrunchiesList(id).then(res => {
        this.hotDatas = res.data.data;
        this.loading = false;
        this.hL = this.hotDatas.length;
        for (let i = 0; i < this.hotDatas.length; i++) {
          const e = this.hotDatas[i];
          e["aaa"] = i + 1;
        }
        if (this.hotDatas.length == 0) return;
        this.randomInsert(
          this.hotDatas,
          this.hotGbList,
          this.$store.state.getId
        );
      });
    },
    hot_Num() {
      // 随机 + 值
      return parseInt(Math.random() * 9) + 1;
    },
    imgList(img) {
      this.$previewRefresh();
      if (img == null) return;
      else {
        return img.split(",");
      }
    },
    addNum(index) {
      if (index > 10000) {
        return (index = index + 1);
      } else {
        return (index = index);
      }
    },
    getHotGbDatas(id) {
      if (id == "") return;
      this.$request.getHotGbData(this.HotGb).then(res => {
        this.hotGbList = res.data.data.dataList;
        const GbL = this.hotGbList.length;
        if (this.hL < 20) {
          if (GbL <= 3) return;
          else {
            this.hotGbList.splice(3);
          }
        } else if (this.hL < 40) {
          if (GbL <= 6) return;
          else {
            this.hotGbList.splice(6);
          }
        } else if (this.hL < 60) {
          if (GbL <= 12) return;
          else {
            this.hotGbList.splice(12);
          }
        }
      });
    },
    // 随机插入广告数据
    randomInsert(hot, Gb, id) {
      if (id == "") return;
      Gb.forEach(e => hot.splice(Math.random() * this.hL + 3, 0, e));
      return hot;
    },
    tiaoArt(id) {
      if (id == null) return;
      else {
        this.$router.push({ path: "/detailsART", query: { id: id } });
      }
    },
    tiaoAsk(id) {
      if (id == null) return;
      else {
        this.$router.push({ path: "/detailsASK", query: { id: id } });
      }
    }
  },
  computed: {
    isFollow() {
      return this.$store.state.getId; //需要监听的数据
    }
  },
  filters: {
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
  watch: {
    isFollow(newId) {
      if (newId == "") return;
      this.getHotDataById(this.$store.state.getId);
      this.getHotGbDatas();
    }
  }
};
</script>

<style>
</style>
<style lang='scss'>
@import "../assets/css/hot_crunchies.scss";
</style>