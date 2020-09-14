<template>
  <div id="search_details" v-if="data !== null">
    <div class="search_header_input">
      <div class="search_header_input_n">
        <div class="search_header_input_in">
          <form action="javascript:true;" style="height: 100%;width: 100%;">
            <el-autocomplete
              style="height: 100%;width: 100%;"
              v-model="state4"
              type="search"
              :fetch-suggestions="querySearchAsync"
              :trigger-on-focus="false"
              placeholder="牙齿矫正"
              @select="handleSelect"
              @keyup.enter.native="Keybtn"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='牙齿矫正'"
            ></el-autocomplete>
          </form>
        </div>
      </div>
      <span @click="back" class="search_header_input_cancel">取消</span>
      <!-- <div class="search_header_input_cancel" v-on:click="shous">搜索</div> -->
    </div>
    <!-- 问答 -->
    <div class="wen_box" v-if="data.ask.length !== 0">
      <div class="wen_list" v-for="(ask,askIndex) in data.ask" :key="askIndex">
        <div class="wen_list" v-if="ask.askImg !== null">
          <div class="wen_left">
            <div class="icon">
              <p class="wen_icon"></p>
            </div>
            <div class="wen_content">
              <div class="wen_title" v-highlight:key="input">
                {{ask.askTitle}}
                <!-- <span>矫正</span> -->
              </div>
              <div class="wen_detail">{{ask.askIntroduction}}</div>
              <div class="wen_zan">
                <div class="day">{{ask.user.userChName}} · {{ask.thumbNum}}赞</div>
                <div class="huifu">{{ask.askCommentNum | CommentNum }}回复</div>
              </div>
            </div>
          </div>
          <div class="wen_right">
            <img :src="ask.askImg" alt />
          </div>
        </div>
        <div class="wen_list" v-else>
          <div class="wen_left" :style="currentIndex==3?'width:100%;':'width:70%'">
            <div class="icon">
              <p class="wen_icon"></p>
            </div>
            <div class="wen_content" :style="currentIndex==3?'width:88%;':''">
              <div
                class="wen_title"
                :style="currentIndex==3?'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;':''"
              >{{ask.askTitle}}</div>
              <div class="wen_detail">{{ask.askIntroduction}}</div>
              <div class="wen_zan">
                <div class="day">{{ask.user.userChName}} · {{ask.thumbNum}}赞</div>
                <div class="huifu">{{ask.askCommentNum | CommentNum }}回复</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="wen_list">
        <div class="wen_left">
          <div class="icon">
            <p class="wen_icon"></p>
          </div>
          <div class="wen_content">
            <div class="wen_title">
              深圳哪裡看牙好
              <span>矫正</span>深圳哪裡看牙好
              <span>矫正?</span>
            </div>
            <div class="wen_detail">
              很好干得漂亮真好很好干得漂亮真好很好
              很好干得漂亮真好干得漂亮真好很好干...
            </div>
            <div class="wen_zan">
              <div class="day">天天 · 748赞</div>
              <div class="huifu">301回复</div>
            </div>
          </div>
        </div>
        <div class="wen_right">
          <img src="../assets/img/index/header_search/wen2.png" alt />
        </div>
      </div>
      <div class="wen_list">
        <div class="wen_left" :style="currentIndex==3?'width:100%;':'width:70%'">
          <div class="icon">
            <p class="wen_icon"></p>
          </div>
          <div class="wen_content" :style="currentIndex==3?'width:88%;':''">
            <div
              class="wen_title"
              :style="currentIndex==3?'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;':''"
            >
              深圳哪裡看牙好
              <span>矫正</span>深圳哪裡看牙好
              <span>矫正</span>深圳哪裡看牙好深圳哪裡看牙好
            </div>
            <div class="wen_detail">
              很好干得漂亮真好很好干得漂亮真好很好
              很好干得漂亮真好干...得漂亮真好很好干得漂亮真好很好干亮真好很好干亮真好很好干
            </div>
            <div class="wen_zan">
              <div class="day">天天 · 748赞</div>
              <div class="huifu">301回复</div>
            </div>
          </div>
        </div>
        <div class="wen_right"></div>
      </div>-->
      <div class="wen_more" @click="tiaoWen">查看更多问答</div>
      <div class="line"></div>
    </div>

    <!-- 案例 -->
    <div class="case_box" v-if="data.case.length !== 0">
      <div class="case_list" v-for="(car,caseIndex) in data.case" :key="caseIndex">
        <div class="img_show_Big" v-if="Img(car.caseImg) < 2">
          <img :src="ImgDATA(car.caseImg)[0]" alt />
        </div>
        <div class="img_show" v-else-if="Img(car.caseImg) > 2">
          <img :src="ImgDATA(car.caseImg)[0]" alt />
          <div class="img_right">
            <img :src="ImgDATA(car.caseImg)[1]" alt />
            <img :src="ImgDATA(car.caseImg)[2]" alt />
            <div class="img_right_mask">{{Img(car.caseImg)}}张</div>
          </div>
        </div>
        <div class="case_content">
          <div class="case_title">案例</div>
          <div class="case_detail" v-highlight:key="input">{{car.caseTitle}}</div>
          <div class="case_zan">
            <div class="day">{{car.userData.userChName}} · {{car.caseThumbnum}}赞</div>
            <div class="huifu">{{car.caseCommentnum | CommentNum}}回复</div>
          </div>
        </div>
      </div>
      <!-- <div class="case_list" >
        <div class="img_show">
          <div class="img_left">
            <img src="../assets/img/index/header_search/case1.png" alt />
          </div>
          <div class="img_right">
            <img src="../assets/img/index/header_search/case2.png" alt />
            <img src="../assets/img/index/header_search/case3.png" alt />
          </div>
        </div>
        <div class="case_content">
          <div class="case_title">案例</div>
          <div class="case_detail">
            变美的全过程,时代天使牙齿
            <span>矫正</span>中的天使
          </div>
          <div class="case_zan">
            <div class="day">呆呆 · 748赞</div>
            <div class="huifu">301回复</div>
          </div>
        </div>
      </div>
      <div class="case_list">
        <div class="img_show">
          <div class="img_left">
            <img src="../assets/img/index/header_search/case1.png" alt />
          </div>
          <div class="img_right">
            <img src="../assets/img/index/header_search/case2.png" alt />
            <img src="../assets/img/index/header_search/case3.png" alt />
          </div>
        </div>
        <div class="case_content">
          <div class="case_title">案例</div>
          <div class="case_detail">
            变美的全过程,时代天使牙齿
            <span>矫正</span>中的天使
          </div>
          <div class="case_zan">
            <div class="day">呆呆 · 748赞</div>
            <div class="huifu">301回复</div>
          </div>
        </div>
      </div>-->
      <div class="case_more" @click="tiaoAnLi">查看更多案例</div>
      <div class="line"></div>
    </div>

    <!-- 文章 -->
    <div class="wen_box" v-if="data.article.length !== 0">
      <div class="wen_list" v-for="(art,articleIndex) in data.article" :key="articleIndex">
        <div class="wen_left">
          <div class="icon">
            <p class="art_icon"></p>
          </div>
          <div class="wen_content">
            <div class="wen_title" v-highlight:key="input">{{art.artTitle}}</div>
            <div class="wen_detail">{{art.artIntroduction}}</div>
            <div class="wen_zan">
              <div class="day">{{art.user.userChName}} · {{art.thumbNum}}赞</div>
              <div class="huifu">{{art.artCommentNum | CommentNum}}回复</div>
            </div>
          </div>
        </div>
        <div class="wen_right">
          <img :src="art.artImg" alt />
        </div>
      </div>

      <!-- <div class="wen_list">
        <div class="wen_left" :style="currentIndex==3?'width:100%;':'width:70%'">
          <div class="icon">
            <p class="art_icon"></p>
          </div>
          <div class="wen_content" :style="currentIndex==3?'width:88%;':''">
            <div
              class="wen_title"
              :style="currentIndex==3?'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;':''"
            >
              深圳哪裡看牙好
              <span>矫正</span>深圳哪裡看牙好
              <span>矫正</span>深圳哪裡看牙好深圳哪裡看牙好
            </div>
            <div class="wen_detail">
              很好干得漂亮真好很好干得漂亮真好很好
              很好干得漂亮真好干...得漂亮真好很好干得漂亮真好很好干亮真好很好干亮真好很好干
            </div>
            <div class="wen_zan">
              <div class="day">天天 · 748赞</div>
              <div class="huifu">301回复</div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="wen_more" @click="tiaoArt">查看更多文章</div>
      <!-- <div class="line"></div> -->
    </div>

    <!-- <div class="video_box">
      <div class="video_left">
        <div class="video_list">
          <div class="img-box">
            <img src="../assets/img/index/header_search/video1.png" alt />
            <img src="../assets/img/index/header_search/bofang.png" alt />
          </div>
          <div class="video_content">
            好牙一口好牙完美不用<span>矫正</span>大家都想有
          </div>
          <div class="video_zan">
            <div class="zan_left">
              <img src="../assets/img/index/header_search/user_img.png" alt />
              <div class="user_name">小小小小只</div>
            </div>
            <div class="zan_right">
              <img src="../assets/img/index/header_search/dianzan.png" alt />
              <div class="zan_num">941</div>
            </div>
          </div>
        </div>
      </div>
      <div class="video_right">
        <div class="video_list">
          <div class="img-box">
            <img src="../assets/img/index/header_search/video2.png" alt />
            <img src="../assets/img/index/header_search/bofang.png" alt />
          </div>
          <div class="video_content">
            还怪可爱
          </div>
          <div class="video_zan">
            <div class="zan_left">
              <img src="../assets/img/index/header_search/user_img.png" alt />
              <div class="user_name">小小小小只</div>
            </div>
            <div class="zan_right">
              <img src="../assets/img/index/header_search/dianzan.png" alt />
              <div class="zan_num">941</div>
            </div>
          </div> 
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "search_details",
  filters: {
    CommentNum: function(data) {
      let d = 0;
      if (data !== null) {
        d = data;
      }
      return d;
    }
  },
  data() {
    return {
      currentIndex: 3,
      restaurants: [],
      state4: "",
      timeout: null,
      data: null,
      input: ""
    };
  },
  created() {
    if (this.$route.query.value != null) {
      this.Obtain();
    }
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    Obtain() {
      this.input = this.$route.query.value;
      let data = {
        keyword: this.$route.query.value,
        limit: 100,
        offset: 1
      };
      this.$request.selectByKeyWord(data).then(res => {
        this.data = res.data.data;
      });
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 10 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    Keybtn() {
      this.$router.push({
        path: "/search_details",
        query: { value: this.state4 }
      });
    },
    back() {
      this.$router.go(-1);
    },
    handleSelect(item) {
      this.$router.push({
        path: "/search_details",
        query: { value: item.value }
      });
    },
    Img(da) {
      return da.split(",").length;
    },
    ImgDATA(d) {
      return d.split(",");
    },
    tiaoWen() {
      this.$router.push({
        path: "/crunchies/askPeople",
        query: { name: "sousuo" }
      });
    },
    tiaoAnLi() {
      this.$router.push({
        path: "/crunchies/correctCase",
        query: { name: "sousuo" }
      });
    },
    tiaoArt() {
      this.$router.push({
        path: "/crunchies/",
        query: { name: "sousuo" }
      });
    }
  },
  directives: {
    highlight: {
      bind: function(el, binding) {
        if (binding.value == "") return;
        let word = el.innerText;
        let light =
          '<code style ="font-weight:600;color:#009965;">' +
          binding.value +
          "</code>";
        let reg = new RegExp(binding.value, "g");
        el.innerHTML = word.replace(reg, light);
      },
      update: function(el, binding) {
        if (binding.value == "") return;
        let word = el.innerText;
        let light =
          '<code style ="font-weight:600;color:#009965;">' +
          binding.value +
          "</code>";
        let reg = new RegExp(binding.value, "g");
        el.innerHTML = word.replace(reg, light);
      }
    }
  },
  watch: {
    $route() {
      this.Obtain();
      this.state4 = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/search_details.scss";
</style>