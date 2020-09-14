<template>
  <div id="specialist">
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

    <div class="select_list">
      <div class="presentation" v-for="(item,index) in docsDataList" :key="index">
        <div class="doc_img">
          <img :src="item.doctorImg" alt />
        </div>
        <div class="doc_information">
          <div class="doc_name">{{item.doctorChName}}</div>
          <div class="doc_title">{{item.doctorChPosition}}</div>
        </div>
        <div class="particulars_img" @click="tiaozhuan(item.doctorId)">
          <img src="../assets/img/index/appointment/appointment.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialist",
  data() {
    return {
      docClassList: [],
      docsDataList: [],
      current_inx: 10
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    getDocsData(id, index) {
      this.current_inx = index;
      this.$request.getDocsDatas(id).then(res => {
        this.docsDataList = res.data.data;
      });
    },
    tiaozhuan(id) {
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
</style>
<style lang='scss' scoped>
@import "../assets/css/specialist.scss";
</style>