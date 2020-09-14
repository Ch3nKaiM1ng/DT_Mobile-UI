<template>
  <div id="App">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <van-popup v-model="show">
      <loginPopUp :state="show" @getState="changeState"></loginPopUp>
    </van-popup>
    <!-- 底部的导航 -->
    <footer id="footer" v-if="$route.meta.Deadad">
      <ul>
        <li>
          <router-link to="/">
            <div class="icon" :class="[$route.name == 'index' ? 'house2' : 'house1']"></div>
            <span :class="[$route.name == 'index' ? 'sp1' : '']">首頁</span>
          </router-link>
        </li>
        <li>
          <router-link to="/crunchies/correctCase">
            <div class="icon" :class="[$route.name == 'correctCase' ? 'location2' : 'location1']"></div>
            <span :class="[$route.name == 'correctCase' ? 'sp1' : '']">同城</span>
          </router-link>
        </li>
        <li>
          <router-link to="/inform">
            <div class="icon" :class="[$route.name == 'inform' ? 'message2' : 'message1']"></div>
            <span :class="[$route.name == 'inform' ? 'sp1' : '']">消息</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mineCenter">
            <div class="icon" :class="[$route.name == 'mineCenter' ? 'mine2' : 'mine1']"></div>
            <span :class="[$route.name == 'mineCenter' ? 'sp1' : '']">我的</span>
          </router-link>
        </li>
      </ul>
    </footer>
        <div class="aaa"></div>
  </div>
</template>

<script>
import loginPopUp from "./components/login_popUp";
export default {
  name: "app",
  data() {
    return {
      show:false
    };
  },
  components: {
    loginPopUp
  },
  methods: {
    changeState(s) {
      this.show = s;
    }
  },
  created() {
    this.$store.commit("getShow", this.show);
  },
  computed: {
    isFollow() {
      return this.$store.state.show; //需要监听的数据
    }
  },
  watch: {
    isFollow(newShow) {
      this.show = newShow;
    }
  },
};
</script>

<style>
#App {
  width: 100%;
  height: 100%;
}
.aaa {
  width: 100%;
  height: 1.2rem;
}
</style>
<style lang='scss'>
@import "./assets/css/base.scss";
@import "./assets/css/yjn.scss";
</style>
