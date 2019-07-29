<template>
  <div id="details_case">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">白金案例</div>
      <div class="header_kong"></div>
    </div>
    <div class="beforetime_user">
        <div class="title">过去的她</div>
        <div class="userImg_show">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details_case",
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#details_case{
    width: 100%;
    height: 100%;
}
</style>
<style lang='scss' scoped>
@import "../assets/css/details_case.scss";
</style>