<template>
  <div id="crunchies" :class="current_scrollTop>0?'pd':''">
    <div class="suspension_box" :class="current_scrollTop>0?'fly':''">
      <div class="crunchies_header">
        <div class="crunchies_return" @click="back">
          <div class="icon_return"></div>
        </div>
        <div class="crunchies_title">
          <van-dropdown-menu active-color="#009965">
            <van-dropdown-item v-model="headerValue" :options="headerOption" />
          </van-dropdown-menu>
        </div>
        <div class="crunchies_search">
          <div class="icon_search"></div>
        </div>
      </div>
      <div class="crunchies_nav">
        <div class="nav_list" :class="[$route.name == 'hot_crunchies' ? 'active' : '']">
          <router-link tag="span" to="/crunchies/">热搜榜</router-link>
        </div>
        <div class="line"></div>
        <div
          class="nav_list"
          :class="[$route.name == 'askPeople' ? 'active' : '']"
          @click="pullDown"
        >
          <router-link tag="span" to="/crunchies/askPeople">
            问大家
            <i class="icon" ref="changeBg"></i>
          </router-link>
          <div class="pullDown_list" v-if="pullDown_show">
            <div class="list">矫正案例</div>
            <div class="list">矫正案例</div>
            <div class="list">矫正案例</div>
            <div class="list">矫正案例</div>
            <div class="list">矫正案例</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="nav_list" :class="[$route.name == 'correctCase' ? 'active' : '']">
          <router-link tag="span" to="/crunchies/correctCase">矫正案例</router-link>
        </div>
        <div class="line"></div>
        <div class="nav_list" :class="[$route.name == 'doctorList' ? 'active' : '']">
          <router-link tag="span" to="/doctorList">专家</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="mask_show" v-if="pullDown_show" @click="pullDown"></div>
  </div>
</template>

<script>
export default {
  name: "crunchies",
  data() {
    return {
      pullDown_show: false,
      headerValue: 0,
      // 当前滚动距离
      current_scrollTop: 0,
      headerOption: [
        { text: "矫正榜", value: 0 },
        { text: "修复榜", value: 1 },
        { text: "种植榜", value: 2 },
        { text: "综合榜", value: 3 }
      ]
    };
  },
  methods: {
    pullDown() {
      this.pullDown_show = !this.pullDown_show;
      if (this.pullDown_show) {
        this.$refs.changeBg.style.backgroundImage =
          "url(http://pv2pjkuy1.bkt.clouddn.com/%E8%BF%94%E5%9B%9E%281%29%E6%8B%B7%E8%B4%9D@2x.png)";
      } else {
        this.$refs.changeBg.style.backgroundImage = null;
      }
    },
    back() {
      this.$router.push("/");
    },
    handleScroll(e) {
      // 获取当前滚动距离
      this.current_scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop; // 执行代码
    }
  },
  mounted() {
    // 监听 页面高度
    window.addEventListener("scroll", this.handleScroll);
  },
  updated() {
    if (this.$route.name != "askPeople") {
      this.pullDown_show = false;
      this.$refs.changeBg.style.backgroundImage = null;
    }
  }
};
</script>

<style>
#crunchies {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
}
.pd{
  padding-top: 1.68rem;
}
</style>
<style lang='scss'>
@import "../assets/css/crunchies.scss";
</style>
