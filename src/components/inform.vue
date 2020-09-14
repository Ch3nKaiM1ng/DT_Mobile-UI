<template>
  <div id="inform">
    <!-- 搜索头 -->
    <div class="search_bar">
      <div class="icon_friend"></div>
      <router-link to="/search">
        <div class="search_box">
          <img src="../assets/img/index/glass.png" alt />
          <span>搜索</span>
        </div>
      </router-link>
    </div>
    <!-- 消息列表 -->
    <div class="message_list">
      <router-link to="/systemMessage">
        <div class="notification message">
          <div class="left_not"></div>
          <div class="right">
            <div class="up">
              <div class="keyword1">通知消息</div>
              <div class="time">16:56</div>
            </div>
            <div class="down">
              <div class="keyword2">你的牙真的健康吗?快来看看吧。</div>
              <div class="hint"></div>
            </div>
          </div>
        </div>
      </router-link>
      <div class="service message">
        <div class="left_ser"></div>
        <div class="right">
          <div class="up">
            <div class="keyword1">客服消息</div>
            <div class="time">星期五</div>
          </div>
          <div class="down">
            <div class="keyword2">你的牙齿最近怎么样了?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inform",
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  }
};
</script>

<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/inform.scss";
</style>