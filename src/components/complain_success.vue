<template>
  <div id="complain_success">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">投诉建议</div>
      <div class="header_kong"></div>
    </div>

    <div class="complain_box">
      <div class="img_success"></div>
      <div class="title1">提交成功</div>
      <div class="title2">感谢您的参与和支持!</div>
      <div class="img_back" @click="back_shouye"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "complain_success",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    back_shouye() {
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

<style lang="scss">
@import "../assets/css/complain_success.scss";
</style>