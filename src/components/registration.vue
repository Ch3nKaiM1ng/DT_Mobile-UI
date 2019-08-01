<template>
  <div id="registration">
    <div class="login_header">
      <div class="header_return" @click="back">
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
              <img class="clock" src="../assets/img/index/appointment/clock.png" alt />
              <div class="CH">时间</div>
              <img class="icon" @click="showPopup" src="../assets/img/index/appointment/return.png" alt />
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

    <div class="userinfo">
      <div class="user_name">
        <div class="title">选择就诊人</div>
        <input type="text" placeholder="姓名" />
      </div>
      <div class="project">
        <div class="title">就诊项目</div>
        <input type="text" placeholder="项目" />
      </div>
      <div class="phone">
        <div class="title">短信接受号码</div>
        <input type="text" placeholder="手机号码" />
      </div>
    </div>

    <div class="btn_yuyue">确定预约</div>

    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm='wc'
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "registration",
  data() {
    return {
      show: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    wc(){
      this.show = false;
    }
  }
};
</script>

<style>
#registration {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
<style lang='scss'>
@import "../assets/css/registration.scss";
</style>