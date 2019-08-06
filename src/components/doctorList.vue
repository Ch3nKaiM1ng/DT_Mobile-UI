<template>
  <div id="doctor">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">医生团队</div>
      <div class="header_kong">
        <div class="icon_message"></div>
      </div>
    </div>
    <div class="navigation_bar">
      <div class="nav_list" @click="getDocsData('',10)" :class="{ 'active':current_inx == 10 }">全部</div>
      <div class="nav_list" @click="getDocsData(item.classId,index)" v-for="(item,index) in docClassList" :key="index" :class="{ 'active':current_inx == index }">{{item.classChName}}</div>
    </div>
    <div class="doctor_list">
      <div class="doctor_synopsis" v-for="(item,index) in docsDataList" :key="index">
        <div class="doc_img">
            <img :src="item.doctorImg" alt="">
        </div>
        <div class="doc_name">{{item.doctorChName}}</div>
        <div class="doc_type">
            <div class="CN">{{item.doctorChPosition}}</div>
            <div class="EN">{{item.doctorEnPosition}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctor",
  data() {
    return {
      docClassList:[],
      docsDataList:[],
      current_inx:10
    }
  },
  methods: {
    back(){
      this.$router.push("/");
    },
    getDocsData(id,index){
      this.current_inx = index;
      this.$request.getDocsDatas(id).then(res=>{
        this.docsDataList=res.data.data;
      })
    }
  },
  created() {
    this.$request.getDocClassList().then(res=>{
      this.docClassList = res.data.data;
    });
    this.getDocsData('',10);
  },
};
</script>
<style>
</style>
<style lang='scss' scoped>
@import "../assets/css/doctorList.scss";
</style>