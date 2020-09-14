<template>
  <!-- 关于登特 -->
  <div class="dental">
    <div class="dental_search">
      <div class="search">
        <div class="mine_icon">
          <router-link to="/mineCenter">
            <img src="../assets/img/index/mine.png" alt />
          </router-link>
        </div>
        <router-link to="/search">
          <div class="search_box">
            <img src="../assets/img/index/glass.png" alt />
            <span>搜索</span>
          </div>
        </router-link>
      </div>
      <div class="search_nav">
        <div class="nav_list" v-for="item in headerNav" :key="item.id">
          <a :href="item.url">{{item.chName}}</a>
        </div>
      </div>
    </div>
    <div class="dental_head">
      <img src="http://dt.szmlkq.com/dental-1.png" alt />
    </div>
    <!-- 登特介绍 -->
    <swiper :options="swiper_Option1">
      <swiper-slide>
        <div class="dental_establish">
          <div class="Introduction">
            <p>登特口腔由中华口腔医学会名誉会长张震康教授于2003年倡导创立，是国际化、全数字口腔优化践行者，大力推动了国内口腔医疗服务行业的前进步伐，长期致力于为市民提供专业的、科学的、个性化的口腔健康一站式解决方案。</p>
          </div>
          <div class="right_icon">
            <img src="../assets/img/dental/fh2@2x.png" alt />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dental_establish">
          <div class="Introduction">
            <p>16年来，登特口腔专注于牙齿的美丽与坚固，已先后在厦门、福州、上海、深圳等地开设多家口腔连锁医院，汇集了国内外口腔医疗专家，引进国际化数字化诊疗设备，运用优质技术材料，采用精湛微创技术，凭借贴心服务、诚信经营和国际先进的医疗管理模式，“一站式”全程预约、完善的牙齿修复保障体系为顾客提供家庭般温馨服务。</p>
          </div>
          <div class="right_icon">
            <img src="../assets/img/dental/fh2@2x.png" alt />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 品牌登特 -->
    <div class="dental_course">
      <div class="dental_title">
        <img src="../assets/img/dental/dental-2.png" alt />
        <img src="http://dt.szmlkq.com/dental-3.jpg" alt />
      </div>
    </div>
    <!-- 专家团队 -->
    <div class="dental_expert">
      <div class="dental_title">
        <img src="../assets/img/dental/dental-4.png" alt />
      </div>
      <swiper :options="swiper_Option1">
        <swiper-slide>
          <div class="doctor">
            <div class="doctor-lb">
              <img src="../assets/img/dental/tiantao.png" alt />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="doctor">
            <div class="doctor-lb">
              <img src="../assets/img/dental/xiongzhenwen.png" alt />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="doctor">
            <div class="doctor-lb">
              <img src="../assets/img/dental/yuguangxue.jpg" alt />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="doctor">
            <div class="doctor-lb">
              <img src="../assets/img/dental/zhagnlei.png" alt />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 口腔案例 -->
    <div class="Oralcase">
      <img src="../assets/img/dental/dental-6.png" alt />
      <swiper :options="swiper_Option">
        <swiper-slide>
          <div class="Oralcase-lb">
            <img src="../assets/img/dental/L-xiufu.png" alt />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Oralcase-lb">
            <img src="../assets/img/dental/C-jiaozheng.png" alt />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Oralcase-lb">
            <img src="../assets/img/dental/L-meibai.png" alt />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Oralcase-lb">
            <img src="../assets/img/dental/W-zhongzhi.png" alt />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Oralcase-lb">
            <img src="../assets/img/dental/Z-xiufu.png" alt />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 诊疗设备 -->
    <div class="instrument">
      <img src="http://dt.szmlkq.com/dental-8.jpg" alt />
    </div>
    <!-- 学术登特 砥砺前行-->
    <div class="xueshu">
      <img src="../assets/img/dental/dental-9.png" alt />
    </div>
    <!-- 人文登特 未来可期 -->
    <div class="renwen">
      <img src="../assets/img/dental/dental-10.png" alt />
    </div>
    <!-- 荣誉登特 践行责任 -->

    <div class="honor">
      <swiper :options="swiper_Option1">
        <swiper-slide>
          <div class="honor-img">
            <img src="../assets/img/dental/honor1.png" alt />
            <img src="../assets/img/dental/honor2.png" alt />
            <img src="../assets/img/dental/honor3.png" alt />
            <img src="../assets/img/dental/honor4.png" alt />
            <img src="../assets/img/dental/honor5.png" alt />
            <img src="../assets/img/dental/honor6.png" alt />
            <img src="../assets/img/dental/honor7.png" alt />
            <img src="../assets/img/dental/honor8.png" alt />
            <img src="../assets/img/dental/honor9.png" alt />
            <img src="../assets/img/dental/honor10.png" alt />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 连锁登特 -->
    <div class="chain">
      <div class="address">
        <span class="longgang1" @click="show1" v-show="showTitle1">龙&nbsp;岗&nbsp;机&nbsp;构</span>
        <span class="baoan1" @click="show2" v-show="showTitle1">宝&nbsp;安&nbsp;机&nbsp;构</span>
        <span class="longgang2" @click="show1" v-show="showTitle2">龙&nbsp;岗&nbsp;机&nbsp;构</span>
        <span class="baoan2" @click="show2" v-show="showTitle2">宝&nbsp;安&nbsp;机&nbsp;构</span>
      </div>
      <div class="address-img" v-show="showTitle1">
        <img src="../assets/img/dental/jihua@2x.png" alt />
      </div>
      <div class="address-img" v-show="showTitle2">
        <img src="../assets/img/dental/hxj@2x.png" alt />
      </div>
      <div class="huanjing" v-show="showTitle1">
        <img src="http://dt.szmlkq.com/dental-14.png" alt />
      </div>
      <div class="huanjing" v-show="showTitle2">
        <img src="../assets/img/dental/dental-14-1.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dental",
  data() {
    return {
      showTitle1: true,
      showTitle2: false,
      headerNav: null,
      swiper_Option: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiper_Option1: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  created() {
    this.$request.getheaderNav().then(res => {
      this.headerNav = res.data.data;
    });
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    show1() {
      this.showTitle1 = true;
      this.showTitle2 = false;
    },
    show2() {
      this.showTitle2 = true;
      this.showTitle1 = false;
    }
  }
};
</script>>

<style lang="scss">
@import "../assets/css/dental.scss";
</style>

<style scoped>
.router-link-exact-active {
  font-size: 0.3rem;
  font-weight: bold;
}
</style>