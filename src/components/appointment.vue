<template>
  <div id="appointment">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">预约</div>
      <div class="header_kong">
        <div class="icon_message"></div>
      </div>
    </div>

    <div class="appointment_bar">
      <div class="nav_list" @click="getDocsData('',10)" :class="{ 'active':current_inx == 10 }">综合</div>
      <div
        class="nav_list"
        v-for="(item,index) in docClassList"
        :key="index"
        :class="{ 'active':current_inx == index }"
        @click="getDocsData(item.classId,index)"
      >{{item.classChName}}</div>
    </div>

    <div class="select_list" v-loading="loading" element-loading-text="拼命加载中...">
      <div class="presentation" v-for="(item,index) in docsDataList" :key="index">
        <div class="doc_img">
          <img :src="item.doctorHeadImg" alt />
        </div>
        <div class="doc_information">
          <div class="doc_name">{{item.doctorChName}}</div>
          <div class="doc_title">{{item.doctorChPosition}}</div>
        </div>
        <div class="particulars_img" @click="getBookingDetailsId(item.doctorId)">
          <img src="../assets/img/index/appointment/appointment.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appointment",
  data() {
    return {
      loading: true,
      docClassList: [],
      docsDataList: [],
      current_inx: 10
    };
  },
  methods: {
    back() {
      if (this.$route.query.name == "doctor") {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    },
    getDocsData(id, index) {
      this.current_inx = index;
      this.$request.getDocsDatas(id).then(res => {
        this.docsDataList = res.data.data;
        this.loading = false;
      });
    },
    getBookingDetailsId(id) {
      this.$router.push({ path: "/registration", query: { id: id } });
    }
  },
  created() {
    this.$request.getDocClassList().then(res => {
      this.docClassList = res.data.data;
    });
    this.getDocsData("", 10);
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  }
};
</script>

<style>
#appointment {
  width: 100%;
  /* background-color: #f2f2f2; */
}
</style>
<style lang='scss' scoped>
@import "../assets/css/appointment.scss";
</style>
