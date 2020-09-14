<template>
  <div class="correctCase">
    <div class="btn">
      <van-button type="default" @click="showPopup" plain>筛选</van-button>
      <van-popup v-model="show" position="right">
        <div class="gender">
          <div class="gender_title">性别</div>
          <div class="girlOrman">
            <div
              class="gd"
              :class="{active:current==index}"
              v-for="(item,index) in genderList"
              :key="index"
              @click="checked(index,item,$event)"
            >{{item.sex}}</div>
          </div>
        </div>
        <div class="age">
          <div class="age_title">年龄</div>
          <div class="age_segment">
            <div class="lowOrhigh">
              <input
                class="most"
                ref="mostS"
                type="number"
                placeholder="最低"
                @focus="myfocus"
                onblur="this.placeholder='最低'"
              />
              <div class="line"></div>
              <input
                class="most"
                ref="mostE"
                type="number"
                placeholder="最高"
                @focus="myfocus"
                onblur="this.placeholder='最高'"
              />
            </div>
          </div>
          <div class="age_select">
            <div
              class="select"
              v-for="(it,i) in chooseList"
              :key="i"
              @click="checked1(i,it,$event)"
              :class="{active:current1==i}"
            >
              <span>{{it.age}}</span>
              <span>{{it.percent}}的选择</span>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project_title">方案</div>
          <div class="label_box">
            <div
              class="label_list"
              v-for="(it,i) in projectList"
              :key="i"
              @click="checked2(i,it,$event)"
              :class="{active:current2==i}"
            >{{it.chName}}</div>
          </div>
        </div>
        <div class="case">
          <div class="case_title">案例</div>
          <div class="case_box">
            <div
              class="case_list"
              v-for="(it,i) in caseTitList"
              :key="i"
              @click="checked3(i,it,$event)"
              :class="{active:current3==i}"
            >{{it.cs}}</div>
          </div>
        </div>
        <div class="bottom_btn">
          <van-button type="primary" class="cancel" @click="closePopup">取消</van-button>
          <van-button type="primary" class="confirm" @click="upPopup">确认</van-button>
        </div>
      </van-popup>
    </div>

    <div class="correctCase_noMore" v-if="caseList.length == 0">暂无内容哦~</div>

    <div class="correctCase_show" v-else v-loading="loadingMore" element-loading-text="拼命加载中...">
      <van-list
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多内容了"
        @load="onLoad"
      >
        <div
          @click="tiao(item.id)"
          class="correctCase_list"
          v-for="(item,index) in caseList"
          :key="index"
        >
          <img :src="imgList(item.caseImg)[0]" alt />
          <div class="content">
            <div class="name">{{item.userData.userChName}}</div>
            <div class="title">{{item.caseTitle}}</div>
            <div class="show_btn">查看</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "correctCase",
  data() {
    return {
      loadingMore: true,
      show: false,
      // 性别
      genderList: [{ sex: "女" }, { sex: "男" }],
      current: 3,
      // 年龄
      chooseList: [
        { age: "12-24", percent: "40%" },
        { age: "25-32", percent: "32%" },
        { age: "33-42", percent: "30%" }
      ],
      current1: 4,
      // 获取案例数据
      getSchemeData: { parentId: 0, style: 1 },
      projectList: [],
      current2: 4,
      // 案例
      caseTitList: [
        { cs: "黄金案例", num: 1 },
        { cs: "白金案例", num: 2 },
        { cs: "钻石案例", num: 3 }
      ],
      current3: 4,
      // 获取第一次请求数据
      getCaseData: { classId: "", limit: 10, offset: 1 },
      // 案例数据
      caseList: [],
      // 加载更多
      loading: false,
      finished: false,
      offset: 10,
      getAllDatas: {
        ageE: null,
        ageS: null,
        caseClassId: null,
        classId: "",
        limit: 100,
        offset: 1,
        style: null,
        userSex: null
      }
    };
  },
  created() {
    console.log("created");
    this.getCaseData.classId = this.$store.state.getId;
    this.getAllDatas.classId = this.$store.state.getId;
    if (this.$store.state.getId != "") {
      this.getCaseDataByNum(this.getCaseData);
    }
    // this.getCaseDataByNum(this.getCaseData);
    this.$request.getAllCrunchies(this.getSchemeData).then(res => {
      this.projectList = res.data.data;
    });
  },
  updated() {
    console.log("updated");
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    // 展示筛选框
    showPopup() {
      this.show = true;
    },
    // 取消按钮
    closePopup() {
      this.show = false;
    },
    // 确认按钮
    upPopup() {
      if (this.$refs.mostS.value !== "" && this.$refs.mostE.value !== "") {
        if (
          parseInt(this.$refs.mostS.value) <= parseInt(this.$refs.mostE.value)
        ) {
          this.getAllDatas.ageS = parseInt(this.$refs.mostS.value);
          this.getAllDatas.ageE = parseInt(this.$refs.mostE.value);
        } else {
          this.$toast({
            duration: 2000,
            message: "年龄段不对"
          });
          return;
        }
      } else if (
        (this.$refs.mostS.value !== "" && this.$refs.mostE.value == "") ||
        (this.$refs.mostS.value == "" && this.$refs.mostE.value !== "")
      ) {
        this.$toast({
          duration: 2000,
          message: "年龄段不能有留空哦~"
        });
        return;
      }
      this.$request.getFiltrateData(this.getAllDatas).then(res => {
        if (res.data.code == "200") {
          this.caseList = res.data.data.dataList;
        }
      });
      this.show = false;
      // this.current = 10;
      // this.current1 = 10;
      // this.current2 = 10;
      // this.current3 = 10;
      // this.$refs.mostS.value = "";
      // this.$refs.mostE.value = "";
    },
    // 筛选内容
    checked(index, item, e) {
      let a = e.currentTarget;
      if (a.getAttribute("class").indexOf("active") != -1) {
        a.classList.remove("active");
        this.getAllDatas.userSex = null;
      } else {
        a.classList.add("active");
        if (item.sex == "女") {
          this.getAllDatas.userSex = 0;
        } else if (item.sex == "男") {
          this.getAllDatas.userSex = 1;
        }
      }
      this.current = index;
    },
    checked1(index, it, e) {
      let s;
      let end;
      let b = e.currentTarget;
      if (b.getAttribute("class").indexOf("active") != -1) {
        b.classList.remove("active");
        this.getAllDatas.ageS = null;
        this.getAllDatas.ageE = null;
      } else {
        b.classList.add("active");
      }
      this.current1 = index;
      if (s !== null && end !== null) {
        s = it.age.split("-")[0];
        end = it.age.split("-")[1];
      }
      this.$refs.mostS.value = "";
      this.$refs.mostE.value = "";
      if (this.getAllDatas.ageS !== null && this.getAllDatas.ageE !== null) {
        this.getAllDatas.ageS = parseInt(s);
        this.getAllDatas.ageE = parseInt(end);
      }
    },
    checked2(index, it, e) {
      let c = e.currentTarget;
      if (c.getAttribute("class").indexOf("active") != -1) {
        c.classList.remove("active");
        this.getAllDatas.caseClassId = null;
      } else {
        c.classList.add("active");
        this.getAllDatas.caseClassId = it.id;
      }
      this.current2 = index;
    },
    checked3(index, it, e) {
      let d = e.currentTarget;
      if (d.getAttribute("class").indexOf("active") != -1) {
        d.classList.remove("active");
        this.getAllDatas.style = null;
      } else {
        d.classList.add("active");
        this.getAllDatas.style = it.num;
      }
      this.current3 = index;
    },
    // 图片分割
    imgList(img) {
      if (img == null) return;
      else {
        return img.split(",");
      }
    },
    // 根据页码获取文章数据
    getCaseDataByNum(numObj) {
      this.loading = true;
      this.finished = false;
      this.$request.getCaseDatas(numObj).then(res => {
        this.caseList = [];
        if (res.data.data.dataList.length == 0) {
          this.loadingMore = false;
          return;
        }
        // this.caseList.push(res.data.data.dataList);
        res.data.data.dataList.forEach(e => {
          this.caseList.push(e);
          this.loadingMore = false;
        });
        this.loading = false;
        if (
          res.data.data.countNum <=
          res.data.data.limit * res.data.data.currpage
        ) {
          this.finished = true;
          this.loading = false;
          return;
        }
      });
    },
    getCaseDataByNum2(numObj) {
      this.loading = true;
      this.finished = false;
      this.$request.getCaseDatas(numObj).then(res => {
        // this.caseList = [];
        if (res.data.data.dataList.length == 0) {
          this.loadingMore = false;
          return;
        }
        // this.caseList.push(res.data.data.dataList);
        res.data.data.dataList.forEach(e => {
          this.caseList.push(e);
          this.loadingMore = false;
        });
        this.loading = false;
        if (
          res.data.data.countNum <=
          res.data.data.limit * res.data.data.currpage
        ) {
          this.finished = true;
          this.loading = false;
          return;
        }
      });
    },
    // 加载更多
    onLoad() {
      this.getCaseData.offset++;
      this.getCaseDataByNum2(this.getCaseData);
    },
    // 输入框
    myfocus() {
      this.current1 = 10;
      // this.getAllDatas.ageS = this.$refs.mostS.value;
      // this.getAllDatas.ageE = this.$refs.mostE.value;
    },
    tiao(id) {
      this.$router.push({ path: "/details_case", query: { id: id } });
    }
  },
  computed: {
    isFollow() {
      return this.$store.state.getId; //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      this.getCaseData.offset = 1;
      this.getCaseData.classId = this.$store.state.getId;
      this.getAllDatas.classId = this.$store.state.getId;
      this.getCaseDataByNum(this.getCaseData);
    }
  }
};
</script>
<style lang='scss'>
@import "../assets/css/correctCase.scss";

img {
  object-fit: cover !important;
}
</style>