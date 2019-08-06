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
              <div class="message" v-if="isMessage">2</div>
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
    <main id="main">
      <!-- 主体上半区 -->
      <div class="main_up">
        <!-- 热搜 -->
        <div class="hot">
          <!-- 热搜标题 -->
          <h3>#矫正热搜榜#</h3>

          <!-- 热搜问题 -->
          <div class="hot_question" v-for="item in getHotList" :key="item.acId">
            <!-- 问题(左) -->
            <div class="left" v-if="item.ac_artId!=null">
              <span>{{item.article.artTitle}}</span>
              <img src="../assets/img/index/new.png" v-if="item.article.label=='新'" alt />
              <img src="../assets/img/index/bomb.png" v-else-if="item.article.label=='爆'" alt />
              <img src="../assets/img/index/hot.png" v-else-if="item.article.label=='热'" alt />
            </div>
            <div class="left" v-else>
              <span>{{item.ask.askTitle}}</span>
              <img src="../assets/img/index/new.png" v-if="item.ask.label=='新'" alt />
              <img src="../assets/img/index/bomb.png" v-else-if="item.ask.label=='爆'" alt />
              <img src="../assets/img/index/hot.png" v-else-if="item.ask.label=='热'" alt />
            </div>
            <!-- 讨论(右) -->
            <!-- <div class="discussion2">
              <div class="up">
                <span>3.9W</span>
                <img src="../assets/img/index/up.png" alt />
                <span>+6</span>
              </div>
              <div class="down2">
                <div class="girl">
                  <span>#</span>
                  <span>女</span>
                  <span>1234</span>
                </div>
                <div class="man">
                  <span>#</span>
                  <span>男</span>
                  <span>1234</span>
                </div>
                <span>讨论</span>
              </div>
            </div>-->
            <div class="discussion1">
              <div class="up">
                <span>9.9W</span>
                <img src="../assets/img/index/up.png" alt />
                <span>+3</span>
              </div>

              <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
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
              <swiper :options="swiperOption">
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
          <div class="user_list">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img src="../assets/img/index/user1.png" alt />
              <div class="user_picture">
                <img src="../assets/img/index/user2.png" alt />
                <img src="../assets/img/index/user3.png" alt />
              </div>
              <div class="user_question">
                <span>牙齿矫正多少钱？</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>12.5万</span>
              </div>
              <div class="zan_heart">
                <img src="../assets/img/index/heart1.png" alt />
                <span>12.5万</span>
              </div>
            </div>
          </div>
          <div class="user_list">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img src="../assets/img/index/user4.png" alt />
              <div class="user_picture">
                <img src="../assets/img/index/user5.png" alt />
                <img src="../assets/img/index/user6.png" alt />
              </div>
              <div class="user_question">
                <span>隐形牙齿矫正费用</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>12.5万</span>
              </div>
              <div class="zan_heart">
                <img src="../assets/img/index/heart1.png" alt />
                <span>12.5万</span>
              </div>
            </div>
          </div>
          <div class="user_list">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img src="../assets/img/index/user1.png" alt />
              <div class="user_picture">
                <img src="../assets/img/index/user2.png" alt />
                <img src="../assets/img/index/user3.png" alt />
              </div>
              <div class="user_question">
                <span>牙齿矫正多少钱？</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>12.5万</span>
              </div>
              <div class="zan_heart">
                <img src="../assets/img/index/heart1.png" alt />
                <span>12.5万</span>
              </div>
            </div>
          </div>
          <div class="user_list">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img src="../assets/img/index/user4.png" alt />
              <div class="user_picture">
                <img src="../assets/img/index/user5.png" alt />
                <img src="../assets/img/index/user6.png" alt />
              </div>
              <div class="user_question">
                <span>隐形牙齿矫正费用</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>12.5万</span>
              </div>
              <div class="zan_heart">
                <img src="../assets/img/index/heart1.png" alt />
                <span>12.5万</span>
              </div>
            </div>
          </div>
          <div class="user_list">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img src="../assets/img/index/user4.png" alt />
              <div class="user_picture">
                <img src="../assets/img/index/user5.png" alt />
                <img src="../assets/img/index/user6.png" alt />
              </div>
              <div class="user_question">
                <span>隐形牙齿矫正费用</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>12.5万</span>
              </div>
              <div class="zan_heart">
                <img src="../assets/img/index/heart1.png" alt />
                <span>12.5万</span>
              </div>
            </div>
          </div>
          <div class="user_list">
            <!-- 内容展示区 -->
            <div class="user_content">
              <img src="../assets/img/index/user4.png" alt />
              <div class="user_picture">
                <img src="../assets/img/index/user5.png" alt />
                <img src="../assets/img/index/user6.png" alt />
              </div>
              <div class="user_question">
                <span>隐形牙齿矫正费用</span>
              </div>
            </div>
            <!-- 点赞评论区 -->
            <div class="zan">
              <div class="zan_message">
                <img src="../assets/img/index/zanMeg.png" alt />
                <span>12.5万</span>
              </div>
              <div class="zan_heart">
                <img src="../assets/img/index/heart1.png" alt />
                <span>12.5万</span>
              </div>
            </div>
          </div>
          <div class="more">查看更多>></div>
          <div class="mask" v-if="currentIndex!=3" @click="showMoreBox">
            <img src="../assets/img/index/drop-down.png" alt />
          </div>
        </div>
      </div>
      <!-- 主体下半区 -->
      <div class="main_down">
        <!-- 不同人群 -->
        <div class="different_persons">
          <div class="persons_category">
            <div
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
          <div class="article_content">
            <div class="article_content_left">
              <div class="article_module">
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article1.png" alt />
                </div>
                <div
                  class="article_details"
                >牙齿是美丽的代表器官之一。因此，会有许多牙齿长的不好的朋友想要做牙齿矫正手术来让自己的牙齿变得更为漂亮。那对于牙齿矫正大家了解...</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
                  </div>
                </div>
              </div>
              <div class="video_module">
                <div class="title">30-35岁还可以做牙齿矫正吗？</div>
                <div class="icon">
                  <img src="../assets/img/index/video.png" alt />
                </div>
                <div class="article_img">
                  <video
                    class="videoPlay"
                    src
                    poster="../assets/img/index/article2.png"
                    loop="loop"
                    x-webkit-airplay="true"
                    webkit-playsinline="true"
                  >您的浏览器暂不支持播放该视频，请升级至最新版浏览器。</video>
                </div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
                  </div>
                </div>
              </div>
              <div class="article_module">
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article3.png" alt />
                </div>
                <div
                  class="article_details"
                >这是因为在进行牙齿矫正时，牙根表面也发生着吸收、增生这种重建活动。治疗后，牙根凭着自身修复能力而恢复正常，但如果治疗加力过大，会增加牙根吸收的危险性。</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
                  </div>
                </div>
              </div>
              <div class="doc_module">
                <img src="../assets/img/index/article_list_doc1.png" alt />
                <div class="doc_name">
                  <span>黄涛</span>
                  <span>正崎专家</span>
                </div>
              </div>
              <div class="answer_module">
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div
                  class="article_details"
                >这是因为在进行牙齿矫正时，牙根表面也发生着吸收、增生这种重建活动。治疗后，牙根凭着自身修复能力而恢复正常，但如果治疗加过大，会增加牙根吸收的危险性。orthodontics can be chosen.</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="article_content_right">
              <div class="answer_module">
                <div class="title">牙齿不整齐怎么办?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_details">矫正的危害对于那些牙齿长的不好的朋友来说，做牙齿矫正之前，先要了解一下它具有危...</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart2.png" alt />
                    <span class="zan">30.2万</span>
                  </div>
                </div>
              </div>
              <div class="doc_module">
                <img src="../assets/img/index/article_list_doc2.png" alt />
                <div class="doc_name">
                  <span>蔡英英</span>
                  <span>正崎专家</span>
                </div>
              </div>
              <div class="answer_module">
                <div class="title">牙齿不整齐怎么办?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div
                  class="article_details"
                >这是因为在进行牙齿矫正时，牙根表面也发生着吸收、增生这种重建活动。治疗后，牙根凭着自身修复能力而恢...正常，但如果治疗加力过大，会增加牙根吸收的危险性。 and see.</div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
                  </div>
                </div>
              </div>
              <div class="article_module">
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article4.png" alt />
                </div>
                <div class="article_details">
                  这是因为在进行牙齿矫正时，牙根表面也发生着吸收、增生这种重建活动。治疗后，牙根凭着自身修复能力而恢复正常，但如果治疗加力过大，会增加牙根吸...的危险性。
                  chosen.
                </div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
                  </div>
                </div>
              </div>
              <div class="article_module">
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article5.png" alt />
                </div>
                <div class="article_details"></div>
                <div class="read_Num">
                  <div class="left">
                    <span class="reading">阅读量</span>
                    <span class="readingNum">12121</span>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/heart1.png" alt />
                    <span class="zan">300</span>
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
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <span>1、問：深圳牙齒矯正全部下來要...</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <!-- <div class="discussion2">
                <div class="up">
                  <span>3.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+6</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>1234</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>1234</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>-->
              <div class="discussion1">
                <div class="up">
                  <span>9.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+3</span>
                </div>

                <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <span>2、問：深圳牙齒矯正全部下來要...</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <!-- <div class="discussion2">
                <div class="up">
                  <span>3.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+6</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>1234</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>1234</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>-->
              <div class="discussion1">
                <div class="up">
                  <span>5.3W</span>
                  <img src alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#1234</span>
                  <span>讨论</span>
                </div>
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <span>3、問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src="../assets/img/index/question_img1.png" alt />
                  <img src="../assets/img/index/question_img2.png" alt />
                  <img src="../assets/img/index/question_img3.png" alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion2">
                <div class="up">
                  <span>3.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+6</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>1234</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>1234</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>
              <!-- <div class="discussion1">
                <div class="up">
                  <span>5.3W</span>
                  <img src="" alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#1234</span>
                  <span>讨论</span>
                </div>
              </div>-->
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <span>4、問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <!-- <div class="discussion2">
                <div class="up">
                  <span>3.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+6</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>1234</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>1234</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>-->
              <div class="discussion1">
                <div class="up">
                  <span>3.5W</span>
                  <img src="../assets/img/index/question_img4.png" alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#1234</span>
                  <span>讨论</span>
                </div>
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <span>5、問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <!-- <div class="discussion2">
                <div class="up">
                  <span>3.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+6</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>1234</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>1234</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>-->
              <div class="discussion1">
                <div class="up">
                  <span>2.6W</span>
                  <img src alt />
                  <span>+6</span>
                </div>

                <div class="down1">
                  <span>#1234</span>
                  <span>讨论</span>
                </div>
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <span>6、問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <!-- <div class="discussion2">
                <div class="up">
                  <span>3.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+6</span>
                </div>
                <div class="down2">
                  <div class="girl">
                    <span>#</span>
                    <span>女</span>
                    <span>1234</span>
                  </div>
                  <div class="man">
                    <span>#</span>
                    <span>男</span>
                    <span>1234</span>
                  </div>
                  <span>讨论</span>
                </div>
              </div>-->
              <div class="discussion1">
                <div class="up">
                  <span>2.6W</span>
                  <img src alt />
                  <span>+6</span>
                </div>

                <div class="down1">
                  <span>#1234</span>
                  <span>讨论</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

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
      // 头部导航栏显示
      navShow: true,
      // 消息红点提示
      isMessage: false,
      // 头部高度
      header_scrollTop: 0,
      // 当前滚动距离
      current_scrollTop: 0,
      // 悬浮导航栏
      search_show: false,
      // 调取热搜榜数据
      hotList: { hot: 1 },
      // 拿到热搜榜数据
      getHotList: [],
      // 显示框当前下标
      currentIndex: 1,
      // 专家 轮播图
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
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
      // 医生专家banner图
      bannerList: [],
      // 头部背景图
      headerBg: "",
      // 头部导航栏
      headerNav: []
    };
  },
  methods: {
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
    // 显示隐藏 白色点击展示更多
    showMoreBox() {
      if (this.currentIndex == 3) return;
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
    //判断 不同人群的三级标签数据
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
    }
  },
  mounted() {
    // 获取 头部高度
    this.header_scrollTop = this.$refs.header.offsetHeight;
    // 监听 页面高度
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    // 医生专家banner图
    this.$request.getbanner().then(res => {
        this.bannerList = res.data.data;
    });
    // 头部背景图
    this.$request.getheaderBg().then(res => {
      this.headerBg = res.data.data;
    });
    // 头部导航栏
    this.$request.getheaderNav().then(res => {
      this.headerNav = res.data.data;
    });
    this.$request.getHotList(this.hotList).then(res => {
      this.getHotList = res.data.data;
      console.log(this.getHotList);
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
  },
  computed: {
    // 用户展示 点击计算
    scrollBoxHeight() {
      if (this.currentIndex < 3) {
        return this.currentIndex * 4.47 + 2.235 + "rem";
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


