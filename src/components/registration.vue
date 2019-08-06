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
      <div class="appointment_form" v-if="this.dataDetails!=null">
        <div class="doc_img">
          <img :src="this.dataDetails.doctorImg" alt />
        </div>
        <div class="appointment_details">
          <div class="details_up">
            <div class="doc_title">{{this.dataDetails.doctorChPosition}}</div>
            <div class="doc_name">{{this.dataDetails.doctorChName}}</div>
          </div>
          <div class="details_down">
            <div class="time">
              <img class="clock" src="../assets/img/index/appointment/clock.png" alt />
              <div class="CH">时间</div>
              <router-link to="/appointmentTime">
              <img class="icon" src="../assets/img/index/appointment/return.png" alt />
              </router-link>
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
  </div>
</template>

<script>
export default {
  name: "registration",
  data() {
    return {
      dataDetails: null
    };
  },
  created() {
    this.$request.bookingDetails(this.$route.query.id).then(res => {
      this.dataDetails = res.data.data;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#registration {
  width: 100%;
}
</style>
<style lang='scss'>
@import "../assets/css/registration.scss";
</style>