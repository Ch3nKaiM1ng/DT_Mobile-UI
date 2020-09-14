<template>
  <div id="system_message">
    <!-- 通用头 -->
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">通知消息</div>
      <div class="header_kong"></div>
    </div>

    <div class="contents">
      <div class="case">
        <div class="case_title">牙齿矫正正确打开方式</div>
        <div class="case_img">
          <img src="../assets/img/index/header_message/3.jpg" alt />
        </div>
      </div>
      <div class="case">
        <div class="case_title">儿童牙齿保护应该注意什么？</div>
        <div class="case_img">
          <img src="../assets/img/index/header_message/2.jpg" alt />
        </div>
      </div>
      <div class="case">
        <div class="case_title">儿童牙齿保护应该注意什么？</div>
        <div class="case_img">
          <img src="../assets/img/index/header_message/1.jpg" alt />
        </div>
      </div>
      <div class="case">
        <div class="case_title">你的牙齿真的健康吗，快来看看吧？</div>
        <div class="case_img">
          <img src="../assets/img/index/header_message/4.png" alt />
        </div>
      </div>
      <div class="case">
        <div class="case_title">你的牙齿真的健康吗，快来看看吧？</div>
        <div class="case_img">
          <img src="../assets/img/index/header_message/5.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "system_message",
  methods: {
    back() {
      this.$router.push("/");
    }
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  }
};
</script>

<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/system_message.scss";
</style>
