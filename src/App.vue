<template>
  <div id="App">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部的导航 -->
    <footer id="footer" v-if="$route.meta.Deadad">
      <ul>
        <li>
          <router-link to="/">
            <div class="icon" :class="[$route.name == 'index' ? 'house2' : 'house1']"></div>
            <span :class="[$route.name == 'index' ? 'sp1' : '']">首頁</span>
          </router-link>
        </li>
        <li>
          <router-link to="/crunchies/correctCase">
            <div class="icon" :class="[$route.name == 'correctCase' ? 'location2' : 'location1']"></div>
            <span :class="[$route.name == 'correctCase' ? 'sp1' : '']">同城</span>
          </router-link>
        </li>
        <li>
          <router-link to="/inform">
            <div class="icon" :class="[$route.name == 'inform' ? 'message2' : 'message1']"></div>
            <span :class="[$route.name == 'inform' ? 'sp1' : '']">消息</span>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <div class="icon" :class="[$route.name == 'login' ? 'mine2' : 'mine1']"></div>
            <span :class="[$route.name == 'login' ? 'sp1' : '']">我的</span>
          </router-link>
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
}
</style>
<style lang='scss'>
@import "./assets/css/base.scss";
@import "./assets/css/yjn.scss";
</style>
