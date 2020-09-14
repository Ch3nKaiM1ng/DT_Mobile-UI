<template>
  <div id="user_redact">
    <div class="login_header">
      <div class="header_return" @click="back">
        <div class="icon_return"></div>
      </div>
      <div class="header_title">编辑资料</div>
      <div class="header_kong"></div>
    </div>

    <div class="contentBox" v-if="currentUserData!=null">
      <van-uploader class="uploader" style="width:100%;" :after-read="afterRead">
        <div class="mine">
          <div class="left_img" v-loading="loading">
            <img :src="currentUserData.userImg" alt />
          </div>
          <div class="right_zi">头像</div>
          <div class="right_icon_jiantou"></div>
        </div>
      </van-uploader>

      <div class="qita_box">
        <div class="name row" @click="chageName">
          <div class="left">
            <div class="ming">昵称</div>
            <div class="zi">{{currentUserData.userChName}}</div>
          </div>
          <div class="right_icon_jiantou"></div>
        </div>

        <div class="diary row" @click="chageDiary">
          <div class="left">
            <div class="ming">个性签名</div>
            <div class="zi" v-if="currentUserData.userSign!==null">{{currentUserData.userSign}}</div>
            <div class="zi" v-else>说点什么吧~</div>
          </div>
          <div class="right_icon_jiantou"></div>
        </div>

        <div class="sex row" @click="chageSex">
          <div class="left">
            <div class="ming">性别</div>
            <div class="zi" v-if="currentUserData.userSex==1">男</div>
            <div class="zi" v-else>女</div>
          </div>
          <div class="right_icon_jiantou"></div>
        </div>

        <div class="age row" @click="chageAge">
          <div class="left">
            <div class="ming">年龄</div>
            <div class="zi">{{currentUserData.birthday}}</div>
          </div>
          <div class="right_icon_jiantou"></div>
        </div>

        <div class="address row" @click="chageAddress">
          <div class="left">
            <div class="ming">地址</div>
            <div class="zi" v-if="currentUserData.address!==null">{{currentUserData.address}}</div>
            <div class="zi" v-else>未填写地址</div>
          </div>
          <div class="right_icon_jiantou"></div>
        </div>
      </div>
    </div>

    <div class="redact_line"></div>

    <div class="out_btn" @click="out">退出登录</div>

    <van-popup v-model="showName" position="bottom">
      <div class="diary_header">
        <div class="diary_return" @click="back_user_redact">
          <div class="icon_return"></div>
        </div>
        <div class="diary_right">
          <div class="icon_finish" @click="wanchengName"></div>
        </div>
      </div>
      <van-cell-group class="diary_edit" :border="false">
        <van-field type="text" v-model="name_value" :border="false" :autosize="true" />
      </van-cell-group>
    </van-popup>

    <van-popup v-model="showDiary" position="bottom">
      <div class="diary_header">
        <div class="diary_return" @click="back_user_redact">
          <div class="icon_return"></div>
        </div>
        <div class="diary_right">
          <div class="icon_finish" @click="wanchengDiary"></div>
        </div>
      </div>
      <van-cell-group class="diary_edit" :border="false">
        <van-field
          type="textarea"
          v-model="diary_value"
          maxlength="50"
          :border="false"
          :autosize="true"
        />
        <span class="astrict_zi">50字</span>
      </van-cell-group>
    </van-popup>

    <van-popup class="vanSex" v-model="showSex" position="bottom">
      <van-picker
        class="picker"
        show-toolbar
        :columns="columns"
        @cancel="onCancelSex"
        @confirm="onConfirmSex"
      />
    </van-popup>

    <van-popup class="vanSex" v-model="showAge" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="onConfirmAge"
        @cancel="onCancelAge"
      />
    </van-popup>

    <van-popup class="vanSex" v-model="showAddress" position="bottom">
      <van-area
        :area-list="areaList"
        value="440300"
        @confirm="onConfirmAddress"
        @cancel="onCancelAddress"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "user_redact",
  data() {
    return {
      loading: true,
      userId: 0,
      columns: ["男", "女"],
      userData: null,
      currentUserData: null,
      showName: false,
      name_value: "",
      showDiary: false,
      diary_value: "",
      showSex: false,
      currentDate: new Date(),
      showAge: false,
      showAddress: false,
      areaList: {
        province_list: { 440000: "广东省" },
        city_list: {
          440100: "广州市",
          440200: "韶关市",
          440300: "深圳市",
          440400: "珠海市",
          440500: "汕头市",
          440600: "佛山市",
          440700: "江门市",
          440800: "湛江市",
          440900: "茂名市",
          441200: "肇庆市",
          441300: "惠州市",
          441400: "梅州市",
          441500: "汕尾市",
          441600: "河源市",
          441700: "阳江市",
          441800: "清远市",
          441900: "东莞市",
          442000: "中山市",
          445100: "潮州市",
          445200: "揭阳市",
          445300: "云浮市"
        },
        county_list: {
          440103: "荔湾区",
          440104: "越秀区",
          440105: "海珠区",
          440106: "天河区",
          440111: "白云区",
          440112: "黄埔区",
          440113: "番禺区",
          440114: "花都区",
          440115: "南沙区",
          440117: "从化区",
          440118: "增城区",
          440203: "武江区",
          440204: "浈江区",
          440205: "曲江区",
          440222: "始兴县",
          440224: "仁化县",
          440229: "翁源县",
          440232: "乳源瑶族自治县",
          440233: "新丰县",
          440281: "乐昌市",
          440282: "南雄市",
          440303: "罗湖区",
          440304: "福田区",
          440305: "南山区",
          440306: "宝安区",
          440307: "龙岗区",
          440308: "盐田区",
          440309: "龙华区",
          440310: "坪山区",
          440311: "光明区",
          440402: "香洲区",
          440403: "斗门区",
          440404: "金湾区",
          440507: "龙湖区",
          440511: "金平区",
          440512: "濠江区",
          440513: "潮阳区",
          440514: "潮南区",
          440515: "澄海区",
          440523: "南澳县",
          440604: "禅城区",
          440605: "南海区",
          440606: "顺德区",
          440607: "三水区",
          440608: "高明区",
          440703: "蓬江区",
          440704: "江海区",
          440705: "新会区",
          440781: "台山市",
          440783: "开平市",
          440784: "鹤山市",
          440785: "恩平市",
          440802: "赤坎区",
          440803: "霞山区",
          440804: "坡头区",
          440811: "麻章区",
          440823: "遂溪县",
          440825: "徐闻县",
          440881: "廉江市",
          440882: "雷州市",
          440883: "吴川市",
          440890: "经济技术开发区",
          440902: "茂南区",
          440904: "电白区",
          440981: "高州市",
          440982: "化州市",
          440983: "信宜市",
          441202: "端州区",
          441203: "鼎湖区",
          441204: "高要区",
          441223: "广宁县",
          441224: "怀集县",
          441225: "封开县",
          441226: "德庆县",
          441284: "四会市",
          441302: "惠城区",
          441303: "惠阳区",
          441322: "博罗县",
          441323: "惠东县",
          441324: "龙门县",
          441402: "梅江区",
          441403: "梅县区",
          441422: "大埔县",
          441423: "丰顺县",
          441424: "五华县",
          441426: "平远县",
          441427: "蕉岭县",
          441481: "兴宁市",
          441502: "城区",
          441521: "海丰县",
          441523: "陆河县",
          441581: "陆丰市",
          441602: "源城区",
          441621: "紫金县",
          441622: "龙川县",
          441623: "连平县",
          441624: "和平县",
          441625: "东源县",
          441702: "江城区",
          441704: "阳东区",
          441721: "阳西县",
          441781: "阳春市",
          441802: "清城区",
          441803: "清新区",
          441821: "佛冈县",
          441823: "阳山县",
          441825: "连山壮族瑶族自治县",
          441826: "连南瑶族自治县",
          441881: "英德市",
          441882: "连州市",
          441901: "中堂镇",
          441903: "南城街道办事处",
          441904: "长安镇",
          441905: "东坑镇",
          441906: "樟木头镇",
          441907: "莞城街道办事处",
          441908: "石龙镇",
          441909: "桥头镇",
          441910: "万江街道办事处",
          441911: "麻涌镇",
          441912: "虎门镇",
          441913: "谢岗镇",
          441914: "石碣镇",
          441915: "茶山镇",
          441916: "东城街道办事处",
          441917: "洪梅镇",
          441918: "道滘镇",
          441919: "高埗镇",
          441920: "企石镇",
          441921: "凤岗镇",
          441922: "大岭山镇",
          441923: "松山湖管委会",
          441924: "清溪镇",
          441925: "望牛墩镇",
          441926: "厚街镇",
          441927: "常平镇",
          441928: "寮步镇",
          441929: "石排镇",
          441930: "横沥镇",
          441931: "塘厦镇",
          441932: "黄江镇",
          441933: "大朗镇",
          441934: "东莞港",
          441935: "东莞生态园",
          441990: "沙田镇",
          442001: "南头镇",
          442002: "神湾镇",
          442003: "东凤镇",
          442004: "五桂山街道办事处",
          442005: "黄圃镇",
          442006: "小榄镇",
          442007: "石岐区街道办事处",
          442008: "横栏镇",
          442009: "三角镇",
          442010: "三乡镇",
          442011: "港口镇",
          442012: "沙溪镇",
          442013: "板芙镇",
          442015: "东升镇",
          442016: "阜沙镇",
          442017: "民众镇",
          442018: "东区街道办事处",
          442019: "火炬开发区街道办事处",
          442020: "西区街道办事处",
          442021: "南区街道办事处",
          442022: "古镇镇",
          442023: "坦洲镇",
          442024: "大涌镇",
          442025: "南朗镇",
          445102: "湘桥区",
          445103: "潮安区",
          445122: "饶平县",
          445202: "榕城区",
          445203: "揭东区",
          445222: "揭西县",
          445224: "惠来县",
          445281: "普宁市",
          445302: "云城区",
          445303: "云安区",
          445321: "新兴县",
          445322: "郁南县",
          445381: "罗定市"
        }
      }
    };
  },
  created() {
    this.userData = JSON.parse(localStorage.getItem("token"));
    this.userId = this.userData.userId;
    this.getUserInformation();
    // if (this.currentUserData.userSign !== null) {
    //   this.diary_value = this.currentUserData.userSign;
    // } else {
    //   this.diary_value = "说点什么吧~";
    // }
    // if (this.currentUserData.userChName !== null) {
    //   this.name_value = this.currentUserData.userChName;
    // } else {
    //   this.name_value = "";
    // }
  },
  updated() {
    if (localStorage.getItem("status") == "false") {
      this.$t2();
    }
  },
  methods: {
    // 获取用户信息
    getUserInformation() {
      this.$request.inquireUser(this.userId).then(res => {
        if (res.data.code == "200") {
          this.currentUserData = res.data.data;
          if (this.currentUserData.userSign !== null) {
            this.diary_value = this.currentUserData.userSign;
          } else {
            this.diary_value = "说点什么吧~";
          }
          if (this.currentUserData.userChName !== null) {
            this.name_value = this.currentUserData.userChName;
          } else {
            this.name_value = "";
          }
          this.loading = false;
        }
      });
    },
    back() {
      this.$router.go(-1);
      this.showName = false;
      this.showDiary = false;
      window.localStorage.setItem(
        "token",
        JSON.stringify(this.currentUserData)
      );
    },
    back_user_redact() {
      this.showName = false;
      this.showDiary = false;
    },
    out() {
      // localStorage.removeItem("token"); // 删除"token"项
      // this.$router.push("/");
      this.$dialog
        .confirm({
          message: "您确定要离开我了吗~~(>_<)~~"
        })
        .then(() => {
          // on confirm
          localStorage.removeItem("token"); // 删除"token"项
          this.$toast({
            duration: 2000,
            message: "退出成功!"
          });
          this.$router.push("/");
        })
        .catch(() => {
          // on cancel
          this.$toast({
            duration: 2000,
            message: "让我们继续遨游吧~"
          });
        });
    },
    // 修改用户信息
    updateUserInformation(data) {
      this.$request.updateUser(data).then(res => {
        this.getUserInformation();
      });
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let param = new FormData(); // FormData 对象
      param.append("file", file.file); // 文件对象
      this.$request.uploadingFile(param).then(res => {
        this.currentUserData.userImg = res.data.data;
        if (res.data.code == "200") {
          this.updateUserInformation({
            userId: this.userId,
            userImg: this.currentUserData.userImg
          });
        }
      });
    },
    chageName() {
      this.showName = true;
    },
    wanchengName() {
      this.currentUserData.userChName = this.name_value;
      this.updateUserInformation({
        userId: this.userId,
        userChName: this.name_value
      });
      this.showName = false;
    },
    chageDiary() {
      this.showDiary = true;
    },
    wanchengDiary() {
      this.currentUserData.userSign = this.diary_value;
      this.updateUserInformation({
        userId: this.userId,
        userSign: this.diary_value
      });
      this.showDiary = false;
    },
    chageSex() {
      this.showSex = true;
    },
    onConfirmSex(value, index) {
      this.$toast({
        duration: 2000,
        message: `性别：${value}`
      });
      if (value == "女") {
        this.currentUserData.userSex = 0;
        this.updateUserInformation({ userId: this.userId, userSex: 0 });
      } else if (value == "男") {
        this.currentUserData.userSex = 1;
        this.updateUserInformation({ userId: this.userId, userSex: 1 });
      }
      this.showSex = false;
    },
    onCancelSex() {
      this.showSex = false;
    },
    chageAge() {
      this.showAge = true;
    },
    onConfirmAge(value) {
      this.currentUserData.birthday = this.formatDate(
        value.getFullYear(),
        value.getMonth() + 1,
        value.getDate()
      );
      this.updateUserInformation({
        userId: this.userId,
        birthday: this.currentUserData.birthday
      });
      this.showAge = false;
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
    onCancelAge() {
      this.showAge = false;
    },
    chageAddress() {
      this.showAddress = true;
    },
    onConfirmAddress(arrs) {
      let province = arrs[0].name;
      let city = arrs[1].name;
      let district = arrs[2].name;
      this.currentUserData.address = province + "-" + city + "-" + district;
      this.updateUserInformation({
        userId: this.userId,
        address: this.currentUserData.address
      });
      this.showAddress = false;
    },
    onCancelAddress() {
      this.showAddress = false;
    }
  },
  computed: {
    isFollow() {
      return JSON.parse(localStorage.getItem("token")); //需要监听的数据
    }
  },
  watch: {
    isFollow(newId) {
      this.currentUserData = JSON.parse(localStorage.getItem("token"));
    }
  }
};
</script>

<style>
#user_redact {
  height: 100%;
  background-color: #f2f2f2;
}
</style>

<style lang="scss">
@import "../assets/css/user_redact.scss";
</style>

<style>
.van-uploader__input-wrapper {
  width: 100%;
}
</style>