<template>
  <div id="appointmentTime">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">预约时间</div>
      <div class="header_kong">
        <!-- <div class="icon_message"></div> -->
      </div>
    </div>

    <div class="calendar">
      <!-- 年份 月份 -->
      <div class="month">
        <ul>
          <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
          <li class="arrow" @click="pickPre(currentYear,currentMonth)">上个月</li>
          <li class="year-month">
            <span class="choose-year">{{ currentYear }}年</span>
            <span class="choose-month">{{ currentMonth }}月</span>
          </li>
          <li class="arrow" @click="pickNext(currentYear,currentMonth)">下个月</li>
        </ul>
      </div>
      <!-- 星期 -->
      <ul class="weekdays">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
      <!-- 日期 -->
      <ul class="days">
        <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
        <li v-for="(dayobject,i) in days" :key="i">
          <!--本月-->
          <!--如果不是本月  改变类名加灰色-->
          <span
            v-if="dayobject.day.getMonth()+1 != currentMonth"
            class="other-month"
            @click="getDayTime(dayobject.day)"
          >{{ dayobject.day.getDate() }}</span>
          <!--如果是本月  还需要判断是不是这一天-->
          <span v-else>
            <!--今天  同年同月同日-->
            <span
              :class="{active:currentNum==i}"
              @click="getDayTime(dayobject.day,i)"
            >{{ dayobject.day.getDate() }}</span>
          </span>
        </li>
      </ul>
    </div>

    <div class="btn-time">
      <div
        @click="changeBgc($event,item.t)"
        :class="{activee:currentIndex==index}"
        class="btn_list"
        v-for="(item,index) in timeList"
        :key="index"
      >{{item.t}}</div>
    </div>

    <div class="affirm" @click="submit">确认</div>
  </div>
</template>

<script>
export default {
  name: "appointmentTime",
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      days: [],
      currentNum: null,
      timeList: [
        { t: "09:00" },
        { t: "10:00" },
        { t: "11:00" },
        { t: "13:00" },
        { t: "14:00" },
        { t: "15:00" },
        { t: "16:00" },
        { t: "17:00" },
        { t: "18:00" },
        { t: "19:00" }
      ],
      currentIndex: 3,
      information: {}
    };
  },
  created: function() {
    // 在vue初始化时调用
    this.initData(null);
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    initData: function(cur) {
      // var leftcount = 0 // 存放剩余数量
      var date;
      if (cur) {
        date = new Date(cur);
      } else {
        var now = new Date();
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
        d.setDate(35);
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      }
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
      this.currentWeek = date.getDay(); // 1...6,0
      if (this.currentWeek === 0) {
        this.currentWeek = 7;
      }
      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个
      // 初始化本周
      for (var i = this.currentWeek; i >= 0; i--) {
        var d2 = new Date(str);
        d2.setDate(d2.getDate() - i);
        var dayobjectSelf = {}; // 用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobjectSelf.day = d2;
        this.days.push(dayobjectSelf); // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周
      for (var j = 1; j <= 35 - this.currentWeek; j++) {
        var d3 = new Date(str);
        d3.setDate(d3.getDate() + j);
        var dayobjectOther = {};
        dayobjectOther.day = d3;
        this.days.push(dayobjectOther);
      }
    },
    getDayTime(el, i) {
      if (
        el.getMonth() + 1 < new Date().getMonth() + 1 ||
        el.getDate() < new Date().getDate()
      ) {
        this.$toast({
          duration: 2000,
          message: "当前日期不可选"
        });
        return;
      }
      this.currentNum = i;
      this.information.sDate = this.formatDate(
        el.getFullYear(),
        el.getMonth() + 1,
        el.getDate()
      );
    },
    pickPre: function(year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickNext: function(year, month) {
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
    changeBgc(e, t) {
      if (e.currentTarget.getAttribute("class").indexOf("active") == -1) {
        let a = e.currentTarget;
        $(a)
          .addClass("active1")
          .siblings()
          .removeClass("active1");
      }
      this.information.sTime = t;
    },
    submit() {
      if (this.information.sDate == undefined) {
        this.$toast({
          duration: 2000,
          message: "请选择日期"
        });
      } else if (this.information.sTime == undefined) {
        this.$toast({
          duration: 2000,
          message: "请选择时间"
        });
      } else {
        window.sessionStorage.setItem(
          "dataTime",
          JSON.stringify(this.information)
        );
        this.$router.push({
          path: "/registration",
          query: { id: this.$route.query.id }
        });
      }
    }
  }
};
</script>

<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/appointmentTime.scss";
</style>