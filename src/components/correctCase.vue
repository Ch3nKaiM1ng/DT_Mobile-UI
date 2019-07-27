<template>
  <div class="correctCase">
    <div class="btn">
      <van-button type="default" @click="showPopup" plain>筛选</van-button>
      <van-popup v-model="show" position="right">
        <div class="gender">
          <div class="gender_title">性别</div>
          <div class="girlOrman">
            <div class="girl gd">女</div>
            <div class="man gd">男</div>
          </div>
        </div>
        <div class="age">
          <div class="age_title">年龄</div>
          <div class="age_segment">
            <div class="lowOrhigh">
              <input class="most" type="number" placeholder="最低" onfocus="this.placeholder=''" onblur="this.placeholder='最低'"  />
              <div class="line"></div>
              <input class="most" type="number" placeholder="最高" onfocus="this.placeholder=''" onblur="this.placeholder='最高'"  />
            </div>
          </div>
          <div class="age_select">
            <div class="select">
              <span>12-24</span>
              <span>40%的选择</span>
            </div>
            <div class="select">
              <span>25-32</span>
              <span>32%的选择</span>
            </div>
            <div class="select">
              <span>33-42</span>
              <span>30%的选择</span>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project_title">方案</div>
          <div class="label_box">
            <div class="label_list">隐形矫正</div>
            <div class="label_list">半隐形矫正</div>
            <div class="label_list">传统矫正</div>
          </div>
        </div>
        <div class="bottom_btn">
          <van-button type="primary" disabled class="cancel">取消</van-button>
          <van-button type="primary" class="confirm">确认</van-button>
        </div>
      </van-popup>
    </div>

    <div class="correctCase_show">
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
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang='scss'>
@import "../assets/css/correctCase.scss";
</style>