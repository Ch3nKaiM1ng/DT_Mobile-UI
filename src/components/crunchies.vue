<template>
  <div id="crunchies">
    <div class="crunchies_header">
      <div class="crunchies_return" @click="back">
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
      <div class="nav_list" :class="[$route.name == 'hot_crunchies' ? 'active' : '']">
        <router-link tag="span" to="/crunchies/">热搜榜</router-link>
      </div>
      <div class="line"></div>
      <div class="nav_list" :class="[$route.name == 'askPeople' ? 'active' : '']" @click="pullDown">
        <router-link tag="span" to="/crunchies/askPeople">
          问大家
          <i class="icon" ref="changeBg"></i>
        </router-link>
        <div class="pullDown_list" v-if="pullDown_show">
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
          <div class="list">矫正案例</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="nav_list" :class="[$route.name == 'correctCase' ? 'active' : '']">
        <router-link tag="span" to="/crunchies/correctCase">矫正案例</router-link>
      </div>
      <div class="line"></div>
      <div class="nav_list" :class="[$route.name == 'doctorList' ? 'active' : '']">
        <router-link tag="span" to="/doctorList">专家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="mask_show" v-if="pullDown_show" @click="pullDown"></div>
  </div>
</template>

<script>
export default {
  name: "crunchies",
  data() {
    return {
      pullDown_show: false,
      headerValue: 0,
      headerOption: [
        { text: "矫正榜", value: 0 },
        { text: "修复榜", value: 1 },
        { text: "种植榜", value: 2 },
        { text: "综合榜", value: 3 }
      ]
    };
  },
  methods: {
    pullDown() {
      this.pullDown_show = !this.pullDown_show;
      if(this.pullDown_show){
        this.$refs.changeBg.style.backgroundImage = "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564319722690&di=74aff7dc6df6cba6f97b1f90efaad0c6&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Flvpics%2Fw%3D600%2Fsign%3D5dc3621e19d5ad6eaaf967eab1c939a3%2F0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg)";
      } else {
        this.$refs.changeBg.style.backgroundImage = null;
      }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#crunchies {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
}
</style>
<style lang='scss'>
@import "../assets/css/crunchies.scss";
</style>
