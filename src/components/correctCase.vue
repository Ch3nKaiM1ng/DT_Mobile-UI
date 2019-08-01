<template>
  <div class="correctCase">
    <div class="btn">
      <van-button type="default" @click="showPopup" plain>筛选</van-button>
      <van-popup v-model="show" position="right">
        <div class="gender">
          <div class="gender_title">性别</div>
          <div class="girlOrman">
            <div class="gd" :class="{active:current==index}" v-for="(item,index) in genderList" :key="index" @click="checked(index)">{{item.sex}}</div>
          </div>
        </div>
        <div class="age">
          <div class="age_title">年龄</div>
          <div class="age_segment">
            <div class="lowOrhigh">
              <input class="most" type="number" placeholder="最低" onfocus="this.placeholder=''" onblur="this.placeholder='最低'" />
              <div class="line"></div>
              <input class="most" type="number" placeholder="最高" onfocus="this.placeholder=''" onblur="this.placeholder='最高'" />
            </div>
          </div>
          <div class="age_select">
            <div class="select" v-for="(it,i) in chooseList" :key="i" @click="checked1(i)" :class="{active:current1==i}">
              <span>{{it.age}}</span>
              <span>{{it.percent}}的选择</span>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project_title">方案</div>
          <div class="label_box">
            <div class="label_list" v-for="(it,i) in projectList" :key="i" @click="checked2(i)" :class="{active:current2==i}">{{it.pj}}</div>
          </div>
        </div>
        <div class="bottom_btn">
          <van-button type="primary" class="cancel" @click="closePopup">取消</van-button>
          <van-button type="primary" class="confirm" @click="upPopup">确认</van-button>
        </div>
      </van-popup>
    </div>

    <div class="correctCase_show">
       <router-link to="/crunchies/askPeople">
      <div class="correctCase_list">
        <img src="../assets/img/index/crunchies/show1.png" alt />
        <div class="content">
          <div class="name">周扬青</div>
          <div class="title">24周变美计划</div>
          <div class="show_btn">查看</div>
        </div>
      </div>
      </router-link>
      <div class="correctCase_list">
        <img src="../assets/img/index/crunchies/show1.png" alt />
        <div class="content">
          <div class="name">周扬青</div>
          <div class="title">24周变美计划</div>
          <div class="show_btn">查看</div>
        </div>
      </div>
      <div class="correctCase_list">
        <img src="../assets/img/index/crunchies/show1.png" alt />
        <div class="content">
          <div class="name">周扬青</div>
          <div class="title">24周变美计划</div>
          <div class="show_btn">查看</div>
        </div>
      </div>
      <div class="correctCase_list">
        <img src="../assets/img/index/crunchies/show1.png" alt />
        <div class="content">
          <div class="name">周扬青</div>
          <div class="title">24周变美计划</div>
          <div class="show_btn">查看</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "correctCase",
  data() {
    return {
      show: false,
      genderList:[{sex:'女'},{sex:'男'}],
      current: 3,
      chooseList:[{age:'12-24',percent:'40%'},{age:'25-32',percent:'32%'},{age:'33-42',percent:'30%'}],
      current1: 4,
      projectList:[{pj:'隐形矫正'},{pj:'半隐形矫正'},{pj:'传统矫正'}],
      current2: 3,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
      this.current =10;
      this.current1 =10;
      this.current2 =10;
    },
    upPopup() {
      this.show = false;
      this.current =10;
      this.current1 =10;
      this.current2 =10;
    },
    checked(index,e){
      this.current = index;
    },
    checked1(index){
      this.current1 = index;
    },
    checked2(index){
      this.current2 = index;
    },
  }
};
</script>
<style>
</style>

<style lang='scss'>
@import "../assets/css/correctCase.scss";
</style>