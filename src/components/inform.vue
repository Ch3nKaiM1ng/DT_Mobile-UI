<template>
  <div id="inform">
    <!-- 搜索头 -->
    <div class="search_bar">
      <div class="icon_friend"></div>
      <div class="search_box">
        <img src="../assets/img/index/glass.png" alt />
        <span>搜索</span>
      </div>
    </div>
    <!-- 消息列表 -->
    <div class="message_list">
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
    <!-- 底部的导航 -->
    <footer id="footer" v-if="$route.meta.Deadad">
      <ul>
        <li>
          <a href="#">
            <img src="../assets/img/Bottom_bar/house1.png" alt />
            <span>首頁</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/Bottom_bar/location1.png" alt />
            <span>附近</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/Bottom_bar/message1.png" alt />
            <span>消息</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/Bottom_bar/mine1.png" alt />
            <span>我的</span>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "inform"
};
</script>

<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/inform.scss";
</style>