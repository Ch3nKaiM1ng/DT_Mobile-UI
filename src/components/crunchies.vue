<template>
  <div id="crunchies" :class="current_scrollTop>0?'pd':''">
    <div class="suspension_box" :class="current_scrollTop>0?'fly':''">
      <div class="crunchies_header">
        <div class="crunchies_return" @click="back">
          <div class="icon_return"></div>
        </div>
        <div class="crunchies_title">
          <van-dropdown-menu active-color="#009965">
            <van-dropdown-item
              @change="getCrunchieTitList(headerValue)"
              @open="changShow"
              v-model="headerValue"
              :options="headerOption"
            />
          </van-dropdown-menu>
        </div>
        <div class="crunchies_search" @click="tiaoSH">
          <div class="icon_search"></div>
        </div>
      </div>
      <div class="crunchies_nav" v-if="level2TitList.length>0">
        <div class="nav_list" :class="[$route.name == 'hot_crunchies' ? 'active' : '']">
          <!-- <router-link tag="span" to="/crunchies/">{{level2TitList[0].chName}}</router-link> -->
          <span @click="up">{{level2TitList[0].chName}}</span>
        </div>
        <div class="line"></div>
        <div
          class="nav_list"
          :class="[$route.name == 'askPeople' ? 'active' : '']"
          @click="pullDown"
        >
          <router-link tag="span" to="/crunchies/askPeople">
            {{level2TitList[1].chName}}
            <i class="icon" ref="changeBg"></i>
          </router-link>
          <div class="panduan" v-if="level2TitList[1].sonList.length!==0">
            <div class="pullDown_list" v-show="pullDown_show">
              <div
                class="list"
                v-for="(item,index) in level2TitList[1].sonList"
                :key="index"
                @click="getWenSonId(item.id)"
              >{{item.chName}}</div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="nav_list" :class="[$route.name == 'correctCase' ? 'active' : '']">
          <!-- <router-link tag="span" to="/crunchies/correctCase">{{level2TitList[2].chName}}</router-link> -->
          <span @click="up1">{{level2TitList[2].chName}}</span>
        </div>
        <div class="line"></div>
        <div class="nav_list" :class="[$route.name == 'specialist' ? 'active' : '']">
          <!-- <router-link tag="span" to="/crunchies/specialist">{{level2TitList[3].chName}}</router-link> -->
          <span @click="up2">{{level2TitList[3].chName}}</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="mask_show" v-if="pullDown_show" @click="pullDown"></div>
  </div>
</template>

<script>
import test from "../assets/js/test.js";
export default {
  name: "crunchies",
  data() {
    return {
      // 三级标题显示
      pullDown_show: false,
      // 当前滚动距离
      current_scrollTop: 0,
      // 默认出现 '矫正榜'
      headerValue: 1,
      headerOption: [],
      // 获取大标题数据
      allCrunchiesList: { parentId: 0, style: 2 },
      // 获取二级标题数据
      level2TitList: []
    };
  },
  methods: {
    pullDown() {
      if (this.level2TitList[1].sonList.length == 0) {
        this.pullDown_show = false;
        return;
      }
      this.pullDown_show = !this.pullDown_show;
      if (this.pullDown_show) {
        this.$refs.changeBg.style.backgroundImage =
          "url(http://pv2pjkuy1.bkt.clouddn.com/%E8%BF%94%E5%9B%9E%281%29%E6%8B%B7%E8%B4%9D@2x.png)";
      } else {
        this.$refs.changeBg.style.backgroundImage = null;
      }
    },
    back() {
      if (
        this.$route.query.name == "sousuo" ||
        this.$route.query.name == "more"
      ) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    },
    handleScroll(e) {
      // 获取当前滚动距离
      this.current_scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop; // 执行代码
    },
    getCrunchieTitList(value) {
      this.$store.commit("getCaseTitId", value);
      this.allCrunchiesList.parentId = value;
      this.$request.getAllCrunchies(this.allCrunchiesList).then(res => {
        this.level2TitList = res.data.data;

        if (res.data.data[1].sonList.length == 0) {
          this.pullDown_show = false;
        }
        this.$store.commit("getWenSonDatas", res.data.data[1].sonList);
      });
    },
    changShow() {
      this.pullDown_show = false;
      this.$refs.changeBg.style.backgroundImage = undefined;
    },
    up() {
      // if (this.$route.name != "askPeople") {
      this.pullDown_show = false;
      this.$refs.changeBg.style.backgroundImage = null;
      this.$router.push("/crunchies/");
      // }
    },
    up1() {
      // if (this.$route.name != "askPeople") {
      this.pullDown_show = false;
      this.$refs.changeBg.style.backgroundImage = null;
      this.$router.push("/crunchies/correctCase");
      // }
    },
    up2() {
      // if (this.$route.name != "askPeople") {
      this.pullDown_show = false;
      this.$refs.changeBg.style.backgroundImage = null;
      this.$router.push("/crunchies/specialist");
      // }
    },
    // 获取问大家轮播图数据
    getWenSonId(id) {
      test.$emit("getId", id);
    },
    tiaoSH() {
      this.$router.push("/search");
    }
  },
  created() {
    this.$request.getAllCrunchies(this.allCrunchiesList).then(res => {
      this.getCrunchieTitList(res.data.data[0].id);
      this.$store.commit("getCaseTitId", res.data.data[0].id);
      const arr = res.data.data;
      arr.forEach(e => {
        e.text = e.chName;
        e.value = e.id;
      });
      // arr.push({
      //   text:"综合榜",
      //   value:0,
      //   id:0
      // })
      this.headerOption = arr;
      this.headerValue = this.headerOption[0].value;
      this.allCrunchiesList.parentId = this.headerOption[0].value;
      this.$request.getAllCrunchies(this.allCrunchiesList).then(res => {
        this.level2TitList = res.data.data;
      });
    });
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  mounted() {
    // 监听 页面高度
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
#crunchies {
  position: relative;
  width: 100%;
  height: auto;
}
.pd {
  padding-top: 1.68rem;
}
</style>
<style lang='scss'>
@import "../assets/css/crunchies.scss";
</style>
