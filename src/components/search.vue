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
                onfocus="this.placeholder=''" onblur="this.placeholder='牙齿矫正'" 
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
          <a v-for="i in showSearch" :key="i.index" :href="i.sUrl">{{i.sName}}</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
          <a href="#">我</a>
        </div>
      </div>
      <!-- 大家都在搜(公用模版) -->
      <div class="header_recording">
        <div class="header_recording_ranking">
          <!-- 1个模版 -->
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>1</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">2018双十一你剁手了啥11111111111</span>
                <span class="recording_module-righr-span2">剁手指南</span>
              </div>
            </div>
          </a>
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>2</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">美莱最新优惠</span>
                <span class="recording_module-righr-span2">终于可以买买买了！太便宜了！</span>
              </div>
            </div>
          </a>
          <a class="header_recording_module" href="http://m.mylikegd.com.cn/html/zt/213.html">
            <div class="recording_module">
              <span>3</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">洗牙能美白吗</span>
                <span class="recording_module-righr-span2">牙齿美白</span>
              </div>
            </div>
          </a>
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>4</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">牙齿矫正真的只要12个月吗</span>
                <span class="recording_module-righr-span2">大家都在搜</span>
              </div>
            </div>
          </a>
          <!-- 1个模版 -->
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>5</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">论牙齿对脸型的影响</span>
                <span class="recording_module-righr-span2">智齿拔不拔！</span>
              </div>
            </div>
          </a>
          <a href="http://m.mylikegd.com.cn/html/zt/213.html" class="header_recording_module">
            <div class="recording_module">
              <span>6</span>
              <div class="recording_module-righr">
                <span class="recording_module-righr-span1">牙齿矫正真的只要12个月吗</span>
                <span class="recording_module-righr-span2">大家都在搜</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- 大家都在搜(公用模版) -->
      <div class="header_recording">
        <span class="header_recording_title">历史记录</span>
        <!-- 垃圾桶 -->
        <div class="ashcan" v-on:click="delete_label"></div>
        <div class="header_recording_ranking">
          <a
            href="http://m.mylikegd.com.cn/html/zt/213.html"
            id="header_recording_ranking_Shelf"
            v-for="index in history_list"
            :key="index.id"
          >{{index.value}}</a>
        </div>
      </div>
    </div>

    <div class="search_footer_mask"></div>
  </div>
</template>

<script>
export default {
  name:'search',
  data() {
    return {
      search: "",
      value1: "",
      data1: [],
      showSearch: [],
      history_list: [
        {
          value: "美白"
        },
        {
          value: "牙齿美白"
        },
        {
          value: "隐适美"
        },
        {
          value: "无痛拔牙"
        },
        {
          value: "矫正牙齿要多久"
        },
        {
          value: "金属托槽矫正多少钱"
        },
        {
          value: "补单颗牙"
        },
        {
          value: "门牙掉了怎么办"
        }
      ],
      restaurants: [],
      state4: "",
      timeout: null
    };
  },
  mounted() {
    let vm = this;
    // this.$api.article
    //   .showSearch({
    //     sBelong: "hot_seek"
    //   })
    //   .then(res => {
    //     console.log("热搜");
    //     console.log(res);
    //     vm.showSearch = res;
    //   });
    // 关键字
    // this.$api.article
    //   .showSort({
    //     keyWord: ""
    //   })
    //   .then(res => {
    //     let a = res.obj;
    //     for (var i in a) {
    //       a[i]["value"] = a[i].sName;
    //       delete a[i].sName;
    //     }
    //     this.restaurants = a;
    //   });
  },
  methods: {
    delete_label() {
      this.history_list = [];
    },
    handleSearch1(value) {
      this.data1 = !value ? [] : [value, value + value, value + value + value];
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
        path: "/searchResult",
        query: { value: item.value }
      });
    },
    shous() {
      this.$router.push({
        path: "/searchResult",
        query: { value: this.state4 }
      });
    },
    Keybtn(event) {
      // this.$Alert.info({ content: "点击了确认按钮1:"+event.keyCode, duration: 2 });
      // console.log(event.keyCode)
      this.$router.push({
        path: "/searchResult",
        query: { value: this.state4 }
      });
    },
    back(){
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style>
</style>
<style lang='scss'>
@import "../assets/css/search.scss";
</style>
