<template>
  <div id="crunchies">
    <div class="crunchies_header">
      <div class="crunchies_return">
        <div class="icon_return"></div>
      </div>
      <div class="crunchies_title">
        <van-dropdown-menu active-color="#009965">
          <van-dropdown-item v-model="headerValue" :options="headerOption" />
        </van-dropdown-menu>
      </div>
      <div class="crunchies_search">
        <div class="icon_search"></div>
      </div>
    </div>
    <div class="crunchies_nav">
      <div class="nav_list">热搜榜</div>
      <div class="line"></div>
      <div class="nav_list" @click="pullDown">
        问大家<i class="icon" ref="bg"></i>
        <div class="pullDown_list" v-if="pullDown_show">
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="nav_list active">矫正案例</div>
      <div class="line"></div>
      <div class="nav_list">专家</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "crunchies",
  data() {
    return {
      pullDown_show:false,
      headerValue: 0,
      headerOption: [
        { text: "矫正榜", value: 0 },
        { text: "修复榜", value: 1 },
        { text: "种植榜", value: 2 },
        { text: "综合榜", value: 3 }
      ]
    };
  },
  methods:{
    pullDown(){
       this.pullDown_show = !this.pullDown_show;
      //  if(this.pullDown_show){
      //    this.$refs.bg.style.background = url('../assets/img/index/crunchies/return_top.png') + 'no-repeat';
      //  }
    }
  }
};
</script>

<style>
#crunchies {
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
}
</style>
<style lang='scss'>
@import "../assets/css/crunchies.scss";
</style>
