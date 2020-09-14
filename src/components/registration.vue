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
              <router-link
                tag="div"
                class="tiemBtn"
                :to="{path:'/appointmentTime',query:{ id: this.$route.query.id }}"
              >
                <img class="clock" src="../assets/img/index/appointment/clock.png" alt />
                <div class="CH">预约时间</div>
                <img class="icon" src="../assets/img/index/appointment/return.png" alt />
              </router-link>
            </div>
            <div v-if="this.allData!=null">
              <div class="data">
                <span>{{allData.sDate | change}}</span>
              </div>
              <div class="hour">{{allData.sTime}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="userinfo">
      <div class="user_name">
        <div class="title">选择就诊人</div>
        <input
          type="text"
          ref="name"
          placeholder="姓名"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='姓名'"
        />
      </div>
      <div class="project" @click="showPJ">
        <div class="title">就诊项目</div>
        <input
          type="text"
          ref="pjt"
          placeholder="项目"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='项目'"
          v-model="PJname"
          readonly
        />
      </div>
      <div class="phone">
        <div class="title">短信接受号码</div>
        <input
          type="number"
          ref="mobile"
          placeholder="手机号码"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='手机号码'"
        />
      </div>
    </div>

    <div class="btn_yuyue" @click="submit">确定预约</div>

    <van-popup v-model="show" position="bottom" class="project_bottom">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "registration",
  data() {
    return {
      show: false,
      dataDetails: null,
      allData: {},
      projectList: { parentId: 0, style: 4 },
      columns: [],
      PJname: ""
    };
  },
  created() {
    this.getDocDetails(this.$route.query.id);
    this.allData = JSON.parse(sessionStorage.getItem("dataTime"));
    this.getProject(this.projectList);
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    back() {
      this.$router.push("/appointment");
    },
    getDocDetails(id) {
      this.$request.bookingDetails(id).then(res => {
        this.dataDetails = res.data.data;
      });
    },
    submit() {
      if (this.allData == null) {
        this.$toast({
          duration: 2000,
          message: "别急哈，点击'预约时间'先~"
        });
      } else if (this.$refs.name.value == "") {
        this.$toast({
          duration: 2000,
          message: "请输入姓名"
        });
      } else if (this.$refs.pjt.value == "") {
        this.$toast({
          duration: 2000,
          message: "请选择项目"
        });
      } else if (
        this.$refs.mobile.value == "" ||
        !/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
          this.$refs.mobile.value
        )
      ) {
        this.$toast({
          duration: 2000,
          message: "号码有误"
        });
      } else {
        this.allData.sPhone = this.$refs.mobile.value;
        this.allData.sName = this.$refs.name.value;
        this.allData.dId = this.$route.query.id;
        this.$request.addAppointmentTime(this.allData).then(res => {
          if (res.data.code == "200") {
            this.$router.push("/registration_success");
          } else {
            this.$toast({
              duration: 2000,
              message: "预约失败,是什么漏填了吗?"
            });
          }
        });
      }
    },
    getProject(obj) {
      this.$request.getProjects(obj).then(res => {
        res.data.data.forEach(e => {
          this.columns.push(e.chName);
        });
      });
    },
    showPJ() {
      this.show = true;
    },
    onChange(value, index) {
      this.$toast({
        duration: 2000,
        message: `就诊项目：${index}`
      });
      this.PJname = index;
      this.show = false;
    }
  },
  watch: {
    $route: {
      handler(route) {
        const that = this;
        if (route.name == "registration") {
          that.getDocDetails(this.$route.query.id);
          this.allData = JSON.parse(sessionStorage.getItem("dataTime"));
        }
      },
      deep: true
    }
  },
  filters: {
    change(value) {
      const time = new Date(value);
      const m = time.getMonth() + 1;
      const d = time.getDate();
      const w = time.getDay(); // 1...6,0
      let s = null;
      if (w === 0) {
        s = "星期日";
      } else if (w === 1) {
        s = "星期一";
      } else if (w === 2) {
        s = "星期二";
      } else if (w === 3) {
        s = "星期三";
      } else if (w === 4) {
        s = "星期四";
      } else if (w === 5) {
        s = "星期五";
      } else if (w === 6) {
        s = "星期六";
      }
      return m + "月" + d + "日" + s;
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