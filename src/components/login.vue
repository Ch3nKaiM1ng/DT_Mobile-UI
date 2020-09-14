<template>
  <div class="login" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">登录</div>
      <div class="header_kong"></div>
    </div>
    <div class="login_log">
      <img src="../assets/img/login/LOGO@2x.png" alt="美莱log" />
    </div>
    <div class="login_from">
      <span class="login_from_span">手机号码</span>
      <div class="login_from_iphone">
        <input
          type="number"
          placeholder="请输入手机号"
          v-model="ipone"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入手机号'"
        />
      </div>
      <span class="login_from_span">密码</span>
      <div class="login_from_password">
        <input
          type="number"
          v-model="logincode"
          placeholder="请输入动态密码"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='请输入动态密码'"
        />
        <div class="login_from_password_btn" @click="onbtn">{{time | change}}</div>
      </div>
    </div>
    <div class="login_btn" @click="loginBtn">登录</div>
    <div class="login_botem">
      <div class="login_botem_img"></div>
    </div>
    <!-- 图形验证码 -->
    <div class="login_code1" v-show="CodeShow">
      <div class="login_code_down">
        <i class="login_code_down_i el-icon-close" v-on:click="Down"></i>
      </div>
      <div class="login_code_title">请输入图像验证码</div>
      <div class="login_code_input">
        <input type="text" v-model="code" />
        <div class="login_code_nav">
          <validcode ref="validcode" :value.sync="imgCode"></validcode>
        </div>
      </div>
      <div class="login_code_btn" v-on:click="CodeBtn">确定</div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "../assets/css/login.scss";
</style>

<script>
let flag = false;
import validcode from "./validCode.vue";
export default {
  name: "login",
  data() {
    return {
      time: "获取动态密码",
      code: "",
      imgCode: "",
      CodeShow: false,
      ipone: "",
      logincode: "",
      fullscreenLoading: false
    };
  },
  created() {},
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    onbtn() {
      if (flag == false) {
        let isTrue = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        let ipo = this.ipone;
        if (isTrue.test(ipo)) {
          this.CodeShow = !this.CodeShow;
        } else {
          this.$toast({
            duration: 2000,
            message: "手机号码有误"
          });
        }
      }
    },
    countDown() {
      this.time = 60;
      let time = setInterval(() => {
        this.time--;
        if (this.time == 0) {
          this.$emit("countDown");
          this.time = "获取验证码";
          flag = false;
          clearInterval(time);
        }
      }, 1000);
    },
    CodeBtn() {
      let vm = this;
      vm.fullscreenLoading = true;
      if (vm.code != "" && vm.code == vm.imgCode) {
        if (flag == false) {
          vm.fullscreenLoading = false;
          this.CodeShow = !this.CodeShow;
          this.countDown();
          flag = true;
          this.code = "";
          this.$refs.validcode.refreshCode();
          this.$toast({
            message: "图像验证成功!等待手机验证信息",
            duration: 2000
          });
          vm.$request.login(this.ipone).then(res => {
            console.log(res);
          });
        }
      } else {
        this.$toast({ message: "图像验证码错误", duration: 2000 });
        vm.code = "";
        this.$refs.validcode.refreshCode();
        vm.fullscreenLoading = false;
      }
    },
    Down() {
      this.CodeShow = !this.CodeShow;
    },
    loginBtn() {
      let vm = this;
      if (vm.ipone != "" && vm.logincode != "") {
        vm.$refs.validcode.refreshCode();
        vm.$request
          .verificationCode({ userMobile: this.ipone, verify: this.logincode })
          .then(res => {
            if (res.data.code == "200") {
              window.localStorage.setItem(
                "token",
                JSON.stringify(res.data.data)
              );
              this.$toast.success({
                duration: 2000,
                message: "登录成功"
              });
              setTimeout(() => {
                this.$router.go(-1);
                vm.ipone = "";
                vm.logincode = "";
              }, 2000);
            } else {
              this.$toast({
                duration: 2000,
                message: "验证码有误"
              });
            }
          });
      } else {
        this.$toast({
          duration: 2000,
          message: "少填了啥？"
        });
      }
    },
    back() {
      this.$router.go(-1);
    }
  },
  filters: {
    change(value) {
      if (!value) return "";
      if (!isNaN(value)) {
        if (flag == true) {
          return `重新发送${value}S`;
        }
        return value + "S";
      } else {
        return value;
      }
    }
  },
  components: {
    validcode
  }
};
</script>
