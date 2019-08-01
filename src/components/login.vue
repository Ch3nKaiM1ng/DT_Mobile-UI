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
      <img src="../assets/img/login/logo.png" alt="美莱log" />
    </div>
    <div class="login_from">
      <span class="login_from_span">手机号码</span>
      <div class="login_from_iphone">
        <input type="number" placeholder="请输入手机号" v-model="ipone" onfocus="this.placeholder=''" onblur="this.placeholder='请输入手机号'" />
      </div>
      <span class="login_from_span">密码</span>
      <div class="login_from_password">
        <input type="number" v-model="logincode" placeholder="请输入动态密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入动态密码'" />
        <div class="login_from_password_btn" @click="onbtn">{{time | change}}</div>
      </div>
    </div>
    <div class="login_btn" v-on:click="loginBtn">登录</div>
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
  created() {
    this.$on("demo", () => {
      this.ziksang1++;
      if (this.ziksang1 == 5) {
        this.$off("demo");
      }
    });
    this.$once("demo2", value => {
      this.ziksang2 += value;
    });
  },
  data() {
    return {
      ziksang1: 0,
      ziksang2: 0,
      time: "获取动态密码",
      code: "",
      imgCode: "",
      CodeShow: false,
      ipone: "",
      logincode: "",
      fullscreenLoading: false
    };
  },
  mounted() {},
  methods: {
    onbtn() {
      console.log(1);
      if (flag == false) {
        console.log(1);
        let isTrue = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        let ipo = this.ipone;
        if (isTrue.test(ipo)) {
          this.CodeShow = !this.CodeShow;
        } else {
          alert("请填写正确的手机号码");
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
    ss() {
      this.$router.go(-1);
    },
    CodeBtn() {
      let vm = this;
      vm.fullscreenLoading = true;
      if (vm.code != "" && vm.code == vm.imgCode) {
        if (flag == false) {
          this.$api.article
            .register({
              phone: this.ipone
            })
            .then(res => {
              if (res.data == 0) {
                vm.fullscreenLoading = false;
                this.CodeShow = !this.CodeShow;

                this.countDown();
                flag = true;
                this.code = "";
                this.$refs.validcode.refreshCode();
              } else {
                vm.fullscreenLoading = false;
                this.$Alert.info({ content: res.content, duration: 2 });
              }
            });
        }
      } else {
        this.$Alert.info({ content: "图像验证码错误", duration: 4 });
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
        vm.code = "";
        vm.$refs.validcode.refreshCode();
        vm.$api.article
          .verification({
            phone: vm.ipone,
            verify: vm.logincode
          })
          .then(res => {
            if (res.data == 0) {
              sessionStorage.login = true;
              sessionStorage.phone = vm.ipone;
              vm.$router.go(-1);
            } else {
              alert(res.content);
            }
          });
      } else {
        this.$Alert.info({ content: "你是不是漏了什么啊", duration: 2 });
      }
    },
    aaa() {
      this.$api.article
        .register({
          phone: this.ipone
        })
        .then(res => {
          if (res.data == 0) {
            console.log("获取验证码");
            console.log(res);
          } else {
            alert(res.content);
          }
        });
    },
    aaa1() {
      this.$api.article
        .verification({
          phone: this.ipone,
          verify: this.logincode
        })
        .then(res => {
          console.log(res);
        });
    },
    back(){
      this.$router.push("/");
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
  },
  watch: {
    ipone: function() {
      //手机号正则
      var mPattern = /^1[34578]\d{9}$/; //http://caibaojian.com/regexp-example.html
      //输出 true
      if (mPattern.test(this.ipone)) {
        console.log(typeof parseInt(this.ipone));
        this.$api.article
          .addPhoneRecord({
            phone: this.ipone,
            remark: "登陆记录手机号码"
          })
          .then(res => {
            console.log(res);
          });
      }
    }
  }
};
</script>
