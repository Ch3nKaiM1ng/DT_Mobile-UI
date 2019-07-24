<template>
  <div id="complain">
    <div class="login_header">
      <div class="header_return">
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
          v-model="data.advise"
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
        <input type="number" v-model="phone" placeholder="投诉结果第一时间通过短信通知您" />
      </div>
    </div>
    <div class="suggest_center suggest_center_padding1">
      <div class="suggest_center_btn" v-on:click="suggest_btn">提交</div>
    </div>
  </div>
</template>

<script>
import { print } from "util";
export default {
    namw:'complain',
  data() {
    return {
      data: { advise: "", phone: "", help: 1 },
      phone: "",
      placeholderText:
        "吐槽内容（内容/设计风格/板块设置……）\n吐槽客服（服务满意/不满意）…\n吐槽使用体验…",
      Radio: false
    };
  },
  mounted() {},
  methods: {
    backs() {
      this.$router.go(-1); //返回上一层
    },
    radio() {
      this.Radio = !this.Radio;
      if (this.Radio) {
        this.data.help = 1;
      } else {
        this.data.help = 0;
      }
    },
    suggest_btn() {
      let vm = this;
      var mPattern = /^1[34578]\d{9}$/; //http://caibaojian.com/regexp-example.html
      if (vm.phone == "" || !mPattern.test(vm.phone)) {
        vm.$Alert.info({ content: "请输入手机号码", duration: 2 });
      } else if (vm.data.advise == "") {
        vm.$Alert.info({ content: "内容未填写无法提交", duration: 2 });
      } else {
        vm.$api.article
          .addComplain({
            advise: vm.data.advise,
            phone: vm.phone,
            help: vm.data.help
          })
          .then(res => {
            console.log(res);
            if (res.data == 0) {
              vm.$Alert.info({ content: "提交成功", duration: 2 });
              vm.$router.go(-1); //返回上一层
            } else {
              vm.$router.go(0);
            }
          });
      }
    }
  },
  watch: {
    phone: function() {
      //手机号正则
      console.log(1);
      var mPattern = /^1[34578]\d{9}$/; //http://caibaojian.com/regexp-example.html
      //输出 true
      if (mPattern.test(this.phone)) {
        console.log(typeof parseInt(this.phone));
        this.$api.article
          .addPhoneRecord({
            phone: this.phone,
            remark: "投诉建议记录手机号码"
          })
          .then(res => {
            console.log(res);
          });
      }
    }
  }
};
</script>

<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/complain.scss";
</style>
