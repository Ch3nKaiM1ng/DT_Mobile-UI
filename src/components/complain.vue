<template>
  <div id="complain">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">投诉建议</div>
      <div class="header_kong"></div>
    </div>
    <!-- 填写投诉内容 -->
    <div class="suggest_center">
      <div class="suggest_center_title">1、我们的内容对您是否有帮助？</div>
      <div class="suggest_center_Radio display_flex" v-on:click="radio">
        <div class="suggest_center_Radio_icon icon" v-bind:class="[Radio ? 'Radio_a' : 'Radio_c']"></div>
        <div class="suggest_center_Radio_name">有</div>
      </div>
      <div class="suggest_center_Radio display_flex" v-on:click="radio">
        <div class="suggest_center_Radio_icon icon" v-bind:class="[!Radio ? 'Radio_a' : 'Radio_c']"></div>
        <div class="suggest_center_Radio_name">沒有</div>
      </div>
    </div>
    <div class="suggest_center suggest_center_padding">
      <div class="suggest_center_title">2、吐槽建议：</div>
      <div class="suggest_center_textarea">
        <el-input
          type="textarea"
          :placeholder="placeholderText"
          v-model="data.content"
          class="textarea"
          maxlength="5000"
          show-word-limit
        ></el-input>
      </div>
    </div>
    <div class="suggest_center suggest_center_padding1">
      <div class="suggest_center_iphone">
        <div class="center_iphone-div display_flex1">
          <span>*</span>手机：
        </div>
        <input
          type="number"
          v-model="phone"
          placeholder="投诉结果第一时间通过短信通知您"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='投诉结果第一时间通过短信通知您'"
        />
      </div>
    </div>
    <div class="suggest_center suggest_center_padding1">
      <div class="suggest_center_btn" v-on:click="suggest_btn">提交</div>
    </div>
  </div>
</template>

<script>
// import { print } from "util";
import { setTimeout } from "timers";
export default {
  namw: "complain",
  data() {
    return {
      data: { content: "", mobile: "", helpstatuts: 0 },
      phone: "",
      placeholderText:
        "吐槽内容（内容/设计风格/板块设置……）\n吐槽客服（服务满意/不满意）…\n吐槽使用体验…",
      Radio: false
    };
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    radio() {
      this.Radio = !this.Radio;
      if (this.Radio) {
        this.data.helpstatuts = 1;
      } else {
        this.data.helpstatuts = 0;
      }
    },
    suggest_btn() {
      var mPattern = /^1[345678]\d{9}$/; //http://caibaojian.com/regexp-example.html
      if (this.phone == "" || !mPattern.test(this.phone)) {
        this.$toast({
          duration: 2000,
          message: "手机号码有误"
        });
      }
      //  else if (this.data.content == "") {
      //   this.$toast({
      //     duration: 2000,
      //     message: "内容不能为空"
      //   });
      // }
      else {
        this.data.mobile = this.phone;
        this.$request.complaint(this.data).then(res => {
          if (res.data.code == "200") {
            this.$router.push("/complain_success");
          } else {
            this.$toast({
              duration: 2000,
              message: "提交失败,是什么漏填了吗?"
            });
          }
        });
      }
    }
  }
  // watch: {
  //   phone: function() {
  //     //手机号正则
  //     var mPattern = /^1[34578]\d{9}$/; //http://caibaojian.com/regexp-example.html
  //     //输出 true
  //     if (mPattern.test(this.phone)) {
  //       console.log(typeof parseInt(this.phone));
  //       this.$api.article
  //         .addPhoneRecord({
  //           phone: this.phone,
  //           remark: "投诉建议记录手机号码"
  //         })
  //         .then(res => {
  //           console.log(res);
  //         });
  //     }
  //   }
  // }
};
</script>

<style>
textarea {
  width: 100%;
  height: 100%;
  font-size: 0.3rem !important;
}
</style>
<style lang='scss' scoped>
@import "../assets/css/complain.scss";
</style>
