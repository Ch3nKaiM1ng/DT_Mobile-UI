<template>
  <div id="index">
    <!-- 头部区域 -->
    <header class="header" ref="header">
      <!-- 头-背景 -->
      <img class="header_bg" v-if="headerBg.length>0" :src="headerBg[0].bgImg" alt />

      <!-- 头-顶部 -->
      <div class="header_top">
        <div class="icon_left" @click="showNav"></div>

        <div class="icon_right">
          <div class="icon_en"></div>
          <div class="message">
            <router-link to="/login">
              <div class="icon_message"></div>
              <div class="message_num">{{random_Num()}}</div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- 头-导航栏 -->
      <div class="header_nav" :class="navShow?'showAll':''">
        <div class="nav_list" v-for="item in headerNav" :key="item.id">
          <router-link :to="item.url">{{item.chName}}</router-link>
        </div>
      </div>

      <!-- 头-搜索框 -->
      <router-link tag="div" to="/search">
        <div class="header_search">
          <div class="icon_glass">
            <img src="../assets/img/index/glass.png" alt />
            <span>搜索</span>
          </div>
        </div>
      </router-link>
    </header>

    <!-- 主体区域 -->
    <main class="main">
      <!-- 主体上半区 -->
      <div class="main_up">
        <!-- 热搜 -->
        <div class="hot">
          <!-- 热搜标题 -->
          <h3>#矫正热搜榜#</h3>

          <!-- 热搜问题 -->
          <div class="hot_modules" v-for="(item,index) in getHotList" :key="index">
            <div class="hot_question2" v-if="index==2">
              <!-- 问题(左) -->
              <div class="left" v-if="item.ac_artId!=null" @click="art_details(item.ac_artId)">
                <span>{{title_num(index)}}{{item.article.artTitle}}</span>
                <img src="../assets/img/index/new.png" v-if="item.article.label=='新'" alt />
                <img src="../assets/img/index/bomb.png" v-else-if="item.article.label=='爆'" alt />
                <img src="../assets/img/index/hot.png" v-else-if="item.article.label=='热'" alt />
              </div>
              <div class="left" v-else @click="ask_details(item.ac_askId)">
                <span>{{title_num(index)}}{{item.ask.askTitle}}</span>
                <img src="../assets/img/index/new.png" v-if="item.ask.askLabel=='新'" alt />
                <img src="../assets/img/index/bomb.png" v-else-if="item.ask.askLabel=='爆'" alt />
                <img src="../assets/img/index/hot.png" v-else-if="item.ask.askLabel=='热'" alt />
              </div>
              <!-- 讨论(右) -->
              <div class="discussion2" v-if="item.ac_artId!=null">
                <div class="up">
                  <span>{{item.article.checkNum}}W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+{{random_Num()}}</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>{{item.womanNum}}</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>{{item.manNum}}</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>
              <div class="discussion2" v-else>
                <div class="up">
                  <span>{{item.ask.askCheckNum}}W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+{{random_Num()}}</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>{{item.womanNum}}</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>{{item.manNum}}</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>
            </div>

            <div class="hot_question" v-else>
              <!-- 问题(左) -->
              <div class="left" v-if="item.ac_artId!=null" @click="art_details(item.ac_artId)">
                <span>{{title_num(index)}}{{item.article.artTitle}}</span>
                <img src="../assets/img/index/new.png" v-if="item.article.label=='新'" alt />
                <img src="../assets/img/index/bomb.png" v-else-if="item.article.label=='爆'" alt />
                <img src="../assets/img/index/hot.png" v-else-if="item.article.label=='热'" alt />
              </div>
              <div class="left" v-else @click="ask_details(item.ac_askId)">
                <span>{{title_num(index)}}{{item.ask.askTitle}}</span>
                <img src="../assets/img/index/new.png" v-if="item.ask.askLabel=='新'" alt />
                <img src="../assets/img/index/bomb.png" v-else-if="item.ask.askLabel=='爆'" alt />
                <img src="../assets/img/index/hot.png" v-else-if="item.ask.askLabel=='热'" alt />
              </div>
              <!-- 讨论(右) -->
              <div class="discussion" v-if="item.ac_artId!=null">
                <div class="up">
                  <span>{{item.article.checkNum}}W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+{{random_Num()}}</span>
                </div>

                <div class="down1">
                  <span>#{{item.article.artCommentNum}}</span>
                  <span>讨论</span>
                </div>
              </div>
              <div class="discussion" v-else>
                <div class="up">
                  <span>{{item.ask.askCheckNum}}W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+{{random_Num()}}</span>
                </div>

                <div class="down1">
                  <span>#{{item.ask.askCommentNum}}</span>
                  <span>讨论</span>
                </div>
              </div>
            </div>
          </div>
          <div class="more">
            <router-link to="/crunchies">查看更多>></router-link>
          </div>
        </div>
        <!-- 专家 -->
        <div class="specialist">
          <!-- 专家上半区 -->
          <div class="specialist_up">
            <div class="left_swiper">
              <swiper :options="swiperOption" v-if="bannerList.length">
                <swiper-slide v-for="item in bannerList" :key="item.id">
                  <a :href="item.bannerUrl">
                    <img :src="item.bannerImg" alt />
                  </a>
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <div class="contact_specialist">
              <a href="tel:4008018088" class="tel">
                <div class="we">联系我们</div>
              </a>
              <router-link tag="div" to="/doctorList">
                <div class="doctor">医生专家</div>
              </router-link>
            </div>
          </div>
          <!-- 专家下半区 -->
          <div class="specialist_down">
            <div class="help">
              <div class="content1">
                <span>帮助</span>
                <span>(人工客服)</span>
              </div>
            </div>
            <div class="ask">
              <div class="content2">免费提问</div>
            </div>
          </div>
        </div>

        <!-- 客户展示 -->
        <div class="user_show" :style="{height:scrollBoxHeight}">
          <div class="user_list" v-for="(item,index) in userShow_list" :key="index">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img :src="item.userData.userImg" preview="1" preview-text="展示图1" alt />
              <div class="user_picture">
                <img :src="it" v-for="(it,i) in imgList(item.caseImg)" :key="i" preview="1" alt />
              </div>
              <div class="user_question">
                <span>{{item.caseTitle}}</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>{{item.caseCommentnum}}</span>
              </div>
              <div class="zan_heart" @click="userShowDianZan(item.id,index)">
                <div class="heart" ref="changeHeart"></div>
                <span>{{item.caseThumbnum}}</span>
              </div>
            </div>
          </div>
          <div class="more">
            <router-link tag="div" to="/crunchies/correctCase">查看更多>></router-link>
          </div>
          <div class="mask">
            <img src="../assets/img/index/111.png" class="mask-bg" v-if="currentIndex!=3" alt />
            <div class="up-box" :style="currentIndex==3?'bottom:.5rem':'bottom:2.8rem'">
              <img
                v-if="currentIndex!=3"
                src="../assets/img/index/drop-down.png"
                @click="showMoreBox"
              />
              <img v-else src="../assets/img/index/drop-up.png" @click="showMoreBox" />
            </div>
          </div>
        </div>
      </div>
      <!-- 主体下半区 -->
      <div class="main_down">
        <!-- 不同人群 -->
        <div class="different_persons">
          <div class="persons_category">
            <div
              class="category"
              @click="difPep(item.id,index)"
              v-for="(item,index) in getAll_differentPersons"
              :key="index"
              :class="{'active':index==current}"
            >{{item.chName}}</div>
          </div>
          <div class="title_level1">
            <div
              class="level1_list"
              @click="difPep1(item.id,index)"
              v-for="(item,index) in sonList"
              :key="index"
              :class="{'active':index==current1}"
            >{{item.chName}}</div>
          </div>
          <div class="title_level2">
            <div
              class="level2_list"
              @click="difPep2(item.id,index)"
              v-for="(item,index) in grandsonList"
              :key="index"
              :class="{'active':index==current2}"
            >
              <span>{{item.chName}}</span>
            </div>
            <div class="tip_level2" v-if="grandsonList.length==0">此处内容为空~~</div>
          </div>
          <div class="persons_question">
            <div class="persons_question_list">
              <div class="question_details" v-for="(item,index) in blue_list" :key="index">
                <a :href="item.url">
                  <span>{{item.title}}</span>
                </a>
              </div>
              <div class="tip_question" v-if="blue_list.length==0"></div>
            </div>
            <div class="more">
              <a href="#">查看更多>></a>
            </div>
          </div>
          <div class="tooth_swiper" v-if="blueimg_list.length>0">
            <swiper :options="swiperOption1">
              <swiper-slide v-for="(item,index) in blueimg_list" :key="index">
                <a :href="item.url">
                  <img :src="item.img" alt />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <!-- 文章 -->
        <div class="article">
          <div class="article_title">
            <div class="title_hot active">热门</div>
            <div class="line">/</div>
            <div class="title_new">最新</div>
          </div>
          <div class="article_content" v-if="articleList[0]!=null">
            <div class="article_content_left">
              <div class="article_module">
                <div class="title">{{articleList[0].artTitle}}</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img :src="imgList(articleList[0].artImg)[0]" preview="7" alt />
                </div>
                <div class="article_details">{{articleList[0].artContent}}</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">{{articleList[0].checkNum}}</span>
                  </div>
                  <div class="right" @click="artDianZan(articleList[0])">
                    <div class="heart" ref="art1"></div>
                    <span class="zan">{{articleList[0].thumbNum}}</span>
                  </div>
                </div>
              </div>
              <div class="video_module">
                <div class="title">{{articleList[1].askTitle}}</div>
                <div class="icon">
                  <img src="../assets/img/index/answer.png" alt />
                </div>
                <div class="article_img">
                  <!-- <video
                    class="videoPlay"
                    src
                    poster="../assets/img/index/article2.png"
                    loop="loop"
                    x-webkit-airplay="true"
                    webkit-playsinline="true"
                  >您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
                  </video>-->
                  <img :src="imgList(articleList[1].askImg)[0]" preview="7" alt />
                </div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">{{articleList[1].askCheckNum}}</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">{{articleList[1].thumbNum}}</span>
                  </div>
                </div>
              </div>
              <div class="answer_module">
                <div class="title">{{articleList[2].artTitle}}</div>
                <div class="icon">
                  <img src="../assets/img/index/answer.png" alt />
                </div>
                <div class="article_details">{{articleList[2].artContent}}</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">{{articleList[2].checkNum}}</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">{{articleList[2].thumbNum}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="article_content_right">
              <div class="answer_module">
                <div class="title">{{articleList[3].askTitle}}</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_details">{{articleList[3].askContent}}</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">{{articleList[3].askCheckNum}}</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart2.png" alt />
                    <span class="zan">{{articleList[3].thumbNum}}</span>
                  </div>
                </div>
              </div>
              <div class="doc_module">
                <img :src="articleList[4].doctorImg" preview="8" alt />
                <div class="doc_name">
                  <span>{{articleList[4].doctorChName}}</span>
                  <span>{{articleList[4].doctorChPosition}}</span>
                </div>
              </div>
              <div class="article_module">
                <div class="title">{{articleList[5].artTitle}}</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img :src="imgList(articleList[5].artImg)[0]" preview="7" alt />
                </div>
                <div class="article_details">{{articleList[5].artContent}}</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">{{articleList[5].checkNum}}</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">{{articleList[5].thumbNum}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 深圳矫正100 -->
        <div class="SZ100">
          <div class="SZ100_title">#深圳矫正100问#</div>
          <div class="SZ100_img">
            <img src="../assets/img/index/SZ1.png" alt />
          </div>
          <div class="SZ_question">
            <div class="oneHundred_modules" v-for="(item,index) in getOneHundredList" :key="index">
              <div class="question_list2" v-if="index==2">
                <!-- 问题(左) -->
                <div class="left" v-if="item.ac_artId!=null" @click="art_details(item.ac_artId)">
                  <div class="question">
                    <span>{{title_num(index)}}{{item.article.artTitle}}</span>
                  </div>
                </div>
                <div class="left" v-else @click="ask_details(item.ac_askId)">
                  <div class="question">
                    <span>{{title_num(index)}}{{item.ask.askTitle}}</span>
                  </div>
                </div>
                <!-- 讨论(右) -->
                <div class="discussion2" v-if="item.ac_artId!=null">
                  <div class="up">
                    <span>{{item.article.checkNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>
                  <div class="down2">
                    <div class="girl">
                      <span>#</span>
                      <span>女</span>
                      <span>{{item.womanNum}}</span>
                    </div>
                    <div class="man">
                      <span>#</span>
                      <span>男</span>
                      <span>{{item.manNum}}</span>
                    </div>
                    <span>讨论</span>
                  </div>
                </div>
                <div class="discussion2" v-else>
                  <div class="up">
                    <span>{{item.ask.askCheckNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>
                  <div class="down2">
                    <div class="girl">
                      <span>#</span>
                      <span>女</span>
                      <span>{{item.womanNum}}</span>
                    </div>
                    <div class="man">
                      <span>#</span>
                      <span>男</span>
                      <span>{{item.womanNum}}</span>
                    </div>
                    <span>讨论</span>
                  </div>
                </div>
              </div>

              <div class="question_list0" v-else-if="index==0">
                <!-- 问题(左) -->
                <div class="left" v-if="item.ac_artId!=null">
                  <div class="question" @click="art_details(item.ac_artId)">
                    <span>{{title_num(index)}}{{item.article.artTitle}}</span>
                  </div>
                  <div class="question_img" v-if="index==1">
                    <img
                      :src="it"
                      v-for="(it,i) in imgList(item.article.artImg)"
                      :key="i"
                      preview="10"
                      alt
                    />
                  </div>
                </div>
                <div class="left" v-else>
                  <div class="question" @click="ask_details(item.ac_askId)">
                    <span>{{title_num(index)}}{{item.ask.askTitle}}</span>
                  </div>
                  <div class="question_img" v-if="index==1">
                    <img
                      :src="it"
                      v-for="(it,i) in imgList(item.ask.askImg)"
                      :key="i"
                      preview="10"
                      alt
                    />
                  </div>
                </div>
                <!-- 讨论(右) -->
                <div class="discussion" v-if="item.ac_artId!=null">
                  <div class="up">
                    <span>{{item.article.checkNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>

                  <div class="down">
                    <span>#{{item.article.artCommentNum}}</span>
                    <span>讨论</span>
                  </div>
                </div>
                <div class="discussion" v-else>
                  <div class="up">
                    <span>{{item.ask.askCheckNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>

                  <div class="down">
                    <span>#{{item.ask.askCommentNum}}</span>
                    <span>讨论</span>
                  </div>
                </div>
              </div>

              <div class="question_list1" v-else-if="index==1">
                <!-- 问题(左) -->
                <div class="left" v-if="item.ac_artId!=null">
                  <div class="question" @click="art_details(item.ac_artId)">
                    <span>{{title_num(index)}}{{item.article.artTitle}}</span>
                  </div>
                  <div class="question_img" v-if="index==1">
                    <img
                      :src="it"
                      v-for="(it,i) in imgList(item.article.artImg)"
                      :key="i"
                      preview="10"
                      alt
                    />
                  </div>
                </div>
                <div class="left" v-else>
                  <div class="question" @click="ask_details(item.ac_askId)">
                    <span>{{title_num(index)}}{{item.ask.askTitle}}</span>
                  </div>
                  <div class="question_img" v-if="index==1">
                    <img
                      :src="it"
                      v-for="(it,i) in imgList(item.ask.askImg)"
                      :key="i"
                      preview="10"
                      alt
                    />
                  </div>
                </div>
                <!-- 讨论(右) -->
                <div class="discussion" v-if="item.ac_artId!=null">
                  <div class="up">
                    <span>{{item.article.checkNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>

                  <div class="down">
                    <span>#{{item.article.artCommentNum}}</span>
                    <span>讨论</span>
                  </div>
                </div>
                <div class="discussion" v-else>
                  <div class="up">
                    <span>{{item.ask.askCheckNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>

                  <div class="down">
                    <span>#{{item.ask.askCommentNum}}</span>
                    <span>讨论</span>
                  </div>
                </div>
              </div>

              <div class="question_list" v-else>
                <!-- 问题(左) -->
                <div class="left" v-if="item.ac_artId!=null">
                  <div class="question" @click="art_details(item.ac_artId)">
                    <span>{{title_num(index)}}{{item.article.artTitle}}</span>
                  </div>
                  <div class="question_img" v-if="index==1">
                    <img
                      :src="it"
                      v-for="(it,i) in imgList(item.article.artImg)"
                      :key="i"
                      preview="10"
                      alt
                    />
                  </div>
                </div>
                <div class="left" v-else>
                  <div class="question" @click="ask_details(item.ac_askId)">
                    <span>{{title_num(index)}}{{item.ask.askTitle}}</span>
                  </div>
                  <div class="question_img" v-if="index==1">
                    <img
                      :src="it"
                      v-for="(it,i) in imgList(item.ask.askImg)"
                      :key="i"
                      preview="10"
                      alt
                    />
                  </div>
                </div>
                <!-- 讨论(右) -->
                <div class="discussion" v-if="item.ac_artId!=null">
                  <div class="up">
                    <span>{{item.article.checkNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>

                  <div class="down">
                    <span>#{{item.article.artCommentNum}}</span>
                    <span>讨论</span>
                  </div>
                </div>
                <div class="discussion" v-else>
                  <div class="up">
                    <span>{{item.ask.askCheckNum}}W</span>
                    <img src="../assets/img/index/up.png" alt />
                    <span>+{{random_Num()}}</span>
                  </div>

                  <div class="down">
                    <span>#{{item.ask.askCommentNum}}</span>
                    <span>讨论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <van-list
      class="moreArticle"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    ></van-list>

    <!-- 悬浮search-->
    <div class="suspend_search" v-show="search_show">
      <div class="search">
        <div class="mine_icon">
          <img src="../assets/img/index/mine.png" alt />
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
          <router-link tag="div" :to="item.url">{{item.chName}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // 上拉加载
      loading: false,
      finished: false,
      offset: 100,
      // 头部背景图
      headerBg: "",
      // 头部导航栏
      headerNav: [],
      // 头部导航栏显示
      navShow: true,
      // 头部高度
      header_scrollTop: 0,
      // 当前滚动距离
      current_scrollTop: 0,
      // 悬浮导航栏
      search_show: false,
      // 调取热搜榜数据
      allCrunchiesList: { hot: 1, oneHundred: 2 },
      // 拿到热搜榜数据
      getHotList: [],
      // 拿到100榜数据
      getOneHundredList: [],
      // 显示框当前下标
      currentIndex: 1,
      // 专家 轮播图
      swiperOption: {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      // 专家 banner图
      bannerList: [],
      // 不同人群 轮播图
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      },
      //查询所有不同人群数据
      queryAll_differentPersons: {
        level: 1,
        parentId: 0,
        style: 3
      },
      // 一级按钮列表
      getAll_differentPersons: [],
      // 二级按钮列表
      sonList: [],
      // 三级按钮列表
      grandsonList: [],
      // 一级当前选中
      current: "0",
      // 二级当前选中
      current1: "0",
      // 三级当前选中
      current2: "0",
      // 蓝色标签数据
      blue_list: [],
      // 蓝色标签对应的swiper图片
      blueimg_list: [],
      // 文章页码
      articleNum: 1,
      // 第一页 文章数据
      articleList: [],
      // 根据页码 文章数据
      articleList1: [],
      // 获取用户展示数据
      userShow: { limit: 6, offset: 1 },
      // 用户展示列表
      userShow_list: [],
      // 点赞功能
      zan:false,
      artZan:false
    };
  },
  methods: {
    // 上拉加载
    onLoad() {
      this.articleNum++;
      this.getArticleDataByNum(this.articleNum);
    },
    // 显示 黑色搜索框
    handleScroll(e) {
      // 获取当前滚动距离
      this.current_scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop; // 执行代码

      if (this.current_scrollTop >= this.header_scrollTop) {
        this.search_show = true;
      } else {
        this.search_show = false;
      }
    },
    // 显示隐藏 头部导航栏
    showNav() {
      this.navShow = !this.navShow;
    },
    // 获取文章详情
    art_details(id) {
      if (id == null) return;
      else {
        this.$request.getArticleDetailsById(id).then(res => {
          // 保存到仓库中
          this.$store.commit("getArtDetails", res.data.data);
          this.$router.push("/crunchies/");
        });
      }
    },
    // 获取问答详情
    ask_details(id) {
      if (id == null) return;
      else {
        this.$request.getAskDetailsById(id).then(res => {
          // 保存到仓库中
          this.$store.commit("getAskDetails", res.data.data);
          this.$router.push("/crunchies/askPeople");
        });
      }
    },
    // 显示隐藏 白色点击展示更多
    showMoreBox() {
      if (this.currentIndex == 3) {
        this.currentIndex = 1;
        return;
      }
      this.currentIndex++;
    },
    // 判断 不同人群的一级标签数据
    difPep(crid, index) {
      this.current1 = "0";
      this.current2 = "0";
      this.current = index;
      this.sonList = [];
      this.grandsonList = [];
      this.blue_list = [];
      this.blueimg_list = [];
      this.getAll_differentPersons.forEach(e => {
        if (e.id == crid) {
          this.sonList = e.sonList;
          this.grandsonList = this.sonList[0].sonList;
          if (!this.grandsonList[0]) {
            return;
          }
          this.queryblue_byId(this.grandsonList[0].id);
        }
      });
    },
    // 判断 不同人群的二级标签数据
    difPep1(crid1, index) {
      this.current2 = "0";
      this.current1 = index;
      this.grandsonList = [];
      this.blue_list = [];
      this.sonList.forEach(e => {
        if (e.id == crid1) {
          this.grandsonList = e.sonList;
          if (!this.grandsonList[0]) {
            return;
          }
          this.queryblue_byId(this.grandsonList[0].id);
        }
      });
    },
    // 判断 不同人群的三级标签数据
    difPep2(crid2, index) {
      this.blue_list = [];
      this.blueimg_list = [];
      this.current2 = index;
      this.grandsonList.forEach(e => {
        if (e.id == crid2) {
          this.queryblue_byId(crid2);
        }
      });
    },
    // 根据第三级分类ID查询蓝色标签
    queryblue_byId(id) {
      this.$request.getDifferentPersonsBlue_byId(id).then(res => {
        this.blue_list = res.data.data.dataList;
        this.blueimg_list = res.data.data.imgList;
      });
    },
    // 分割 图片
    imgList(img) {
      if (img == null) return;
      else {
        return img.split(",");
      }
    },
    // 随机红数字
    random_Num() {
      // 随机 + 值
      return parseInt(Math.random() * 10) + 1;
    },
    // 问答标题数字
    title_num(index) {
      if (index == 0) return "1、";
      else if (index == 1) return "2、";
      else if (index == 2) return "3、";
      else if (index == 3) return "4、";
      else if (index == 4) return "5、";
      else if (index == 5) return "6、";
      else if (index == 6) return "7、";
      else if (index == 7) return "8、";
    },
    // 根据页码获取文章数据
    getArticleDataByNum(num) {
      this.$request.getArticleDataList(num).then(res => {
        let newarticleList = [];
        if (num == 1) {
          this.articleList = res.data.data.dataList;
          console.log(this.articleList);
          
        } else {
          this.articleList1 = res.data.data.dataList;
          newarticleList.push(this.articleList1);
        }
        this.loading = false;
      });
    },
    // 用户展示 点赞功能
    userShowDianZan(id,index) {
      if(!this.zan){
        this.$request.userShowZan(id).then(res => {
        if (res.data.code == 200) {
          this.userShow_list[index].caseThumbnum = parseInt(this.userShow_list[index].caseThumbnum) + 1;
          this.$refs.changeHeart[index].style.backgroundImage = "url(http://pv2pjkuy1.bkt.clouddn.com/%E7%88%B1%E5%BF%83@2x@2x.png)";
        }
        this.zan = !this.zan;
      });
      } else {
        this.userShow_list[index].caseThumbnum = parseInt(this.userShow_list[index].caseThumbnum) - 1;
        this.zan = !this.zan;
        this.$refs.changeHeart[index].style.backgroundImage = null;
      }
      
    },
    // 文章 点赞功能
    artDianZan(data){
      if(!this.artZan){
        this.$request.art_Zan(data.artId).then(res => {
        if (res.data.code == 200) {
          data.thumbNum = parseInt(data.thumbNum) + 1;
          this.$refs.art1.style.backgroundImage = "url(http://pv2pjkuy1.bkt.clouddn.com/%E7%88%B1%E5%BF%83@2x@2x.png)";
        }
        this.artZan = !this.artZan;
      });
      } else {
        data.thumbNum = parseInt(data.thumbNum) - 1;
        this.artZan = !this.artZan;
        this.$refs.art1.style.backgroundImage = null;
      }
    }
  },
  mounted() {
    // 获取 头部高度
    this.header_scrollTop = this.$refs.header.offsetHeight;
    // 监听 页面高度
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    // 头部背景图
    this.$request.getheaderBg().then(res => {
      this.headerBg = res.data.data;
    });
    // 头部导航栏
    this.$request.getheaderNav().then(res => {
      this.headerNav = res.data.data;
    });
    // 热搜榜单
    this.$request.getHotList(this.allCrunchiesList).then(res => {
      this.getHotList = res.data.data;
    });
    // 矫正100榜单
    this.$request.getOneHundredList(this.allCrunchiesList).then(res => {
      this.getOneHundredList = res.data.data;
    });
    // 医生专家banner图
    this.$request.getbanner().then(res => {
      this.bannerList = res.data.data;
    });
    // 不同人群(所有)
    this.$request
      .getAll_differentPersons(this.queryAll_differentPersons)
      .then(res => {
        this.getAll_differentPersons = res.data.data;
        this.sonList = this.getAll_differentPersons[0].sonList;
        this.grandsonList = this.sonList[0].sonList;
        if (!this.grandsonList[0]) {
          return;
        }
        this.queryblue_byId(this.grandsonList[0].id);
      });
    // 开始获取第一页文章数据
    this.getArticleDataByNum(this.articleNum);
    // 用户展示
    this.$request.getUserShowList(this.userShow).then(res => {
      this.userShow_list = res.data.data.dataList;
    });
  },
  computed: {
    // 用户展示 点击计算
    scrollBoxHeight() {
      if (this.currentIndex < 3) {
        return this.currentIndex * 4.47 + 3.235 + "rem";
      } else {
        return this.currentIndex * 4.47 + 0.9 + "rem";
      }
    }
  }
};
</script>

<style>
#index {
  width: 100%;
  height: 100%;
}
</style>
<style lang='scss'>
@import "../assets/css/index.scss";
</style>


