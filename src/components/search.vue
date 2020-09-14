<template>
  <div id="search">
    <div class="search_header">
      <div class="search_header_input">
        <div class="search_header_input_n">
          <div class="search_header_input_in">
            <form action="javascript:true;" style="height: 100%;width: 100%;">
              <el-autocomplete
                style="height: 100%;width: 100%;"
                v-model="state4"
                type="search"
                :fetch-suggestions="querySearchAsync"
                :trigger-on-focus="false"
                placeholder="牙齿矫正"
                @select="handleSelect"
                @keyup.enter.native="Keybtn"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='牙齿矫正'"
              ></el-autocomplete>
            </form>
          </div>
        </div>
        <span @click="back" class="search_header_input_cancel">取消</span>
        <!-- <div class="search_header_input_cancel" v-on:click="shous">搜索</div> -->
      </div>
      <!-- 热搜 -->
      <div class="search_hot">
        <div class="search_hot_tit">热搜</div>
        <div class="search_hot_nav">
          <a v-for="(i,index) in getTopData" :key="index" :href="i.sUrl">{{i.sKeyword}}</a>
        </div>
      </div>
      <!-- 大家都在搜(公用模版) -->
      <div class="header_recording">
        <div class="header_recording_ranking">
          <!-- 1个模版 -->
          <a
            v-for="(i,index) in getHotData"
            :key="index"
            :href="i.sUrl"
            class="header_recording_module"
          >
            <div class="recording_module">
              <span>{{index+1}}</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">{{i.sKeyword}}</span>
                <span class="recording_module-righr-span2">{{i.sContent}}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- 大家都在搜(公用模版) -->
      <div class="header_recording">
        <span class="header_recording_title">历史记录</span>
        <!-- 垃圾桶 -->
        <div class="ashcan" @click="delete_label"></div>
        <div class="header_recording_ranking">
          <a
            :href="i.sUrl"
            id="header_recording_ranking_Shelf"
            v-for="(i,index) in getHistoryData"
            :key="index"
          >{{i.sKeyword}}</a>
        </div>
      </div>
    </div>

    <div class="search_footer_mask"></div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      restaurants: [],
      state4: "",
      timeout: null,
      getSearchData: { limit: 10, offset: 1, sBlong: "top" },
      getTopData: [],
      getSearchData1: { limit: 6, offset: 1, sBlong: "hot" },
      getHotData: [],
      getSearchData2: { limit: 8, offset: 1, sBlong: "history" },
      getHistoryData: []
    };
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  mounted() {
    this.$request.searchData(this.getSearchData).then(res => {
      this.getTopData = res.data.data.search;
    });
    this.$request.searchData(this.getSearchData1).then(res => {
      this.getHotData = res.data.data.search;
    });
    this.$request.searchData(this.getSearchData2).then(res => {
      this.getHistoryData = res.data.data.search;
    });
  },
  methods: {
    delete_label() {
      this.getHistoryData = [];
    },
    Switch(event) {
      this.$api.article
        .showSort({
          keyWord: ""
        })
        .then(res => {
          console.log(res);
        });
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 10 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
      console.log(11111);
      this.$router.push({
        path: "/search_details",
        query: { value: item.value }
      });
    },
    shous() {
      this.$router.push({
        path: "/search_details",
        query: { value: this.state4 }
      });
    },
    Keybtn(event) {
      // this.$Alert.info({ content: "点击了确认按钮1:"+event.keyCode, duration: 2 });
      // console.log(event.keyCode)
      this.$router.push({
        path: "/search_details",
        query: { value: this.state4 }
      });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
<style lang='scss'>
@import "../assets/css/search.scss";
</style>
