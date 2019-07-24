<template>
  <div id="App">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部的导航 -->
    <footer id="footer" v-if="$route.meta.Deadad">
      <ul>
        <li>
          <a href="#">
            <img src='./assets/img/Bottom_bar/house1.png' alt />
            <span>首頁</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src='./assets/img/Bottom_bar/location1.png' alt />
            <span>附近</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src='./assets/img/Bottom_bar/message1.png' alt />
            <span>消息</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src='./assets/img/Bottom_bar/mine1.png' alt />
            <span>我的</span>
          </a>
        </li>
      </ul>
    </footer>
  </div>
  
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#App {
  width: 100%;
  height: 100%;
}
</style>
<style lang='scss'>
@import "./assets/css/base.scss";
@import "./assets/css/yjn.scss";
</style>
