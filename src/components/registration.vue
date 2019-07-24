<template>
  <div id="registration">
    <div class="login_header">
      <div class="header_return">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">预约挂号</div>
      <div class="header_kong"></div>
    </div>

    <div class="underpainting">
      <div class="appointment_form">
        <div class="doc_img">
          <img src="../assets/img/index/appointment/gh_hx.png" alt />
        </div>
        <div class="appointment_details">
            <div class="details_up">
                <div class="doc_title">主治医师</div>
                <div class="doc_name">韩旭</div>
            </div>
            <div class="details_down">
                <div class="time">
                    <img class="clock" src="../assets/img/index/appointment/clock.png" alt="">
                    <div class="CH">时间</div>
                    <img class="icon" src="../assets/img/index/appointment/return.png" alt="">
                </div>
                <div class="data">
                    <span>6月10日</span>
                    <span>星期一</span>
                </div>
                <div class="hour">14:00</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration"
};
</script>

<style>
#registration {
  width: 100%;
  height: 100%;
}
</style>
<style lang='scss' scoped>
@import "../assets/css/registration.scss";
</style>