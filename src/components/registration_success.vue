<template>
  <div id="registration_success">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">预约成功</div>
      <div class="header_kong"></div>
    </div>

    <div class="registration_box">
      <div class="img_success"></div>
      <div class="title1">预约成功</div>
      <div class="title2">请记得到店面就诊哦~</div>
      <div class="img_back" @click="back_yuYue"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration_success",
  data() {
    return {};
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
    back_yuYue() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/registration_success.scss";
</style>