<template>
  <div id="doctor">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">医生团队</div>
      <div class="header_kong">
        <div class="icon_message"></div>
      </div>
    </div>
    <div class="navigation_bar">
      <div class="nav_list active">全部</div>
      <div class="line"></div>
      <div class="nav_list">牙齿矫正</div>
      <div class="line"></div>
      <div class="nav_list">牙齿种植</div>
      <div class="line"></div>
      <div class="nav_list">牙齿修复</div>
      <div class="line"></div>
      <div class="nav_list">综合</div>
    </div>
    <div class="doctor_list">
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zj_zw@2x.png" alt="">
        </div>
        <div class="doc_name">周炜</div>
        <div class="doc_type">
            <div class="CN">正畸专家</div>
            <div class="EN">Orthodontists</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zj_ll@2x.png" alt="">
        </div>
        <div class="doc_name">韩旭</div>
        <div class="doc_type">
            <div class="CN">正畸院长</div>
            <div class="EN">Orthodontists</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zj_yy@2x.png" alt="">
        </div>
        <div class="doc_name">于泳</div>
        <div class="doc_type">
            <div class="CN">种植专家</div>
            <div class="EN">Planting Specialist</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zj_ll@2x.png" alt="">
        </div>
        <div class="doc_name">李莉</div>
        <div class="doc_type">
            <div class="CN">正畸专家</div>
            <div class="EN">Orthodontists</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zj_ht@2x.png" alt="">
        </div>
        <div class="doc_name">黄涛</div>
        <div class="doc_type">
            <div class="CN">正畸专家</div>
            <div class="EN">Orthodontists</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zj_ldl@2x.png" alt="">
        </div>
        <div class="doc_name">廖定亮</div>
        <div class="doc_type">
            <div class="CN">种植专家</div>
            <div class="EN">Planting Specialist</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/lhy@2x.png" alt="">
        </div>
        <div class="doc_name">刘贺宇</div>
        <div class="doc_type">
            <div class="CN">综合主任</div>
            <div class="EN">Comprehensive</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/李超主治@2x.png" alt="">
        </div>
        <div class="doc_name">李超</div>
        <div class="doc_type">
            <div class="CN">修复专家</div>
            <div class="EN">Repair Specialist</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zjdt1@2x.png" alt="">
        </div>
        <div class="doc_name">吴中兴</div>
        <div class="doc_type">
            <div class="CN">种植专家</div>
            <div class="EN">Planting Specialist</div>
        </div>
      </div>
      <div class="doctor_synopsis">
        <div class="doc_img">
            <img src="../assets/img/index/doctorList/zjdt6@2x.png" alt="">
        </div>
        <div class="doc_name">蔡英英</div>
        <div class="doc_type">
            <div class="CN">正畸专家</div>
            <div class="EN">Orthodontists</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctor",
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
};
</script>
<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/doctorList.scss";
</style>