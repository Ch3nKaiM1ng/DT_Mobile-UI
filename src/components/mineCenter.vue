<template>
  <div id="mineCenter">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">个人中心</div>
      <div class="header_kong"></div>
    </div>

    <div class="contentBox">
      <div class="mine" @click="redact">
        <div class="left_img">
          <img :src="userData.userImg" alt />
        </div>
        <div class="right_userMessage">
          <div class="up_userName">{{userData.userChName}}</div>
          <div class="down_diary" v-if="userData.userSign!==null">{{userData.userSign}}</div>
          <div class="down_diary" v-else>说点什么吧~</div>
        </div>
      </div>

      <div class="feedback">
        <div class="left_feedback">
          <div class="icon_fankui"></div>
          <div class="fankui">反馈</div>
        </div>
        <div class="right_icon_jiantou"></div>
      </div>
    </div>

    <div class="line"></div>

    <div class="s_z_y_box">
      <div class="collect row">
        <div class="left">
          <div class="icon_shou"></div>
          <div class="zi">收藏</div>
        </div>
        <div class="right_icon_jiantou"></div>
      </div>

      <div class="track row">
        <div class="left">
          <div class="icon_zu"></div>
          <div class="zi">足迹</div>
        </div>
        <div class="right_icon_jiantou"></div>
      </div>

      <div class="yuYue row">
        <div class="left">
          <div class="icon_yu"></div>
          <div class="zi">预约</div>
        </div>
        <div class="right_icon_jiantou"></div>
      </div>
    </div>

    <div class="line"></div>

    <div class="b_f_box">
      <div class="help row">
        <div class="left">
          <div class="icon_help"></div>
          <div class="zi">帮助</div>
        </div>
        <div class="right_icon_jiantou"></div>
      </div>

      <div class="share row">
        <div class="left">
          <div class="icon_share"></div>
          <div class="zi">分享网站</div>
        </div>
        <div class="right_icon_jiantou"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mineCenter",
  data() {
    return {
      userData: null
    };
  },
  created() {
    this.userData = JSON.parse(localStorage.getItem("token"));
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
    redact() {
      this.$router.push("/user_redact");
    }
  },
  computed: {
    isFollow() {
      return JSON.parse(localStorage.getItem("token")); //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      this.userData = JSON.parse(localStorage.getItem("token"));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mineCenter.scss";
</style>