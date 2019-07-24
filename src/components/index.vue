<template>
  <div id="index">
    <!-- 头部区域 -->
    <header class="header" ref="header">
      <!-- 头-背景 -->
      <img class="header_bg" src="../assets/img/index/top_bg.jpg" alt />

      <!-- 头-顶部 -->
      <div class="header_top">
        <div class="icon_left" @click="showNav"></div>

        <div class="icon_right">
          <div class="icon_en"></div>
          <div class="message">
            <div class="icon_message"></div>
            <div class="message" v-if="isMessage">2</div>
          </div>
        </div>
      </div>

      <!-- 头-导航栏 -->
      <div class="header_nav" v-show="navShow" ref="iconLeft">
        <div class="nav_list">首页</div>
        <div class="nav_list">优惠</div>
        <div class="nav_list"><router-link tag="div" to="/doctorList">预约</router-link></div>
        <div class="nav_list">关于登特</div>
        <div class="nav_list"><router-link tag="div" to="/complain">投诉建议</router-link></div>
      </div>

      <!-- 头-搜索框 -->
      <div class="header_search">
        <div class="icon_glass">
          <img src="../assets/img/index/glass.png" alt />
          <span>搜索</span>
        </div>
      </div>
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
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>1、#牙齿矫正多少钱？</span>
              <img src="../assets/img/index/hot.png" alt />
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
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>2、#30-35岁还可以做牙齿矫正吗？</span>
              <img src="../assets/img/index/new.png" alt />
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
                <span>#2026</span>
                <span>讨论</span>
              </div>
            </div>
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>3、#牙齿不整齐怎么办？</span>
              <img src="../assets/img/index/bomb.png" alt />
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
                <span>3.9W</span>
                <img src="../assets/img/index/up.png" alt />
                <span>+6</span>
              </div>

              <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
              </div>
            </div>-->
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>4、#隐形牙齿矫正费用</span>
              <img src alt />
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
                <img src alt />
                <span></span>
              </div>

              <div class="down1">
                <span>#1234</span>
                <span>讨论</span>
              </div>
            </div>
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>5、#隐形矫正的效果好吗？</span>
              <img src alt />
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
                <img src="../assets/img/index/up.png" alt />
                <span>+6</span>
              </div>

              <div class="down1">
                <span>#1234</span>
                <span>讨论</span>
              </div>
            </div>
          </div>
          <div class="more">
            <a href="#">查看更多>></a>
          </div>
        </div>

        <!-- 专家 -->
        <div class="specialist">
          <!-- 专家上半区 -->
          <div class="specialist_up">
            <div class="left_swiper">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <img src="../assets/img/index/specialist1.jpg" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/index/specialist2.jpg" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/index/specialist1.jpg" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/index/specialist2.jpg" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/index/specialist1.jpg" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/index/specialist2.jpg" alt />
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <div class="contact_specialist">
              <div class="we">联系我们</div>
              <div class="doctor">医生专家</div>
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
        <div class="user_show" ref="userShow">
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
          <div class="mask">
            <img src="../assets/img/index/drop-down.png" alt @click="userHigh" />
          </div>
        </div>
      </div>
      <!-- 主体下半区 -->
      <div class="main_down">
        <!-- 不同人群 -->
        <div class="different_persons">
          <div class="persons_category">
            <div class="youth active">青年</div>
            <div class="old">老人</div>
            <div class="children">儿童</div>
          </div>
          <div class="title_level1">
            <div class="level1_list active">矫正</div>
            <div class="level1_list">拔牙</div>
            <div class="level1_list">美白</div>
            <div class="level1_list">治疗</div>
            <div class="level1_list">修复</div>
            <div class="level1_list">种植</div>
          </div>
          <div class="title_level2">
            <div class="level2_list active">
              <span>专业回答</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>矫正问题</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>查看费用</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>效果图</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>年龄</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>年龄</span>
              <span>(20)</span>
            </div>
          </div>
          <div class="persons_question">
            <div class="persons_question_list">
              <div class="question_details">
                <a href="#">
                  <span>牙齿矫正多少钱?>></span>
                </a>
              </div>
              <div class="question_details">
                <a href="#">
                  <span>龅牙>></span>
                </a>
              </div>
              <div class="question_details">
                <a href="#">
                  <span>隐形牙齿矫正费用</span>
                </a>
              </div>
              <div class="question_details">
                <a href="#">
                  <span>牙齿美白</span>
                </a>
              </div>
              <div class="question_details">
                <a href="#">
                  <span>牙齿不整齐怎么办?</span>
                </a>
              </div>
              <div class="question_details">
                <a href="#">
                  <span>35岁了还能做牙齿矫正吗?</span>
                </a>
              </div>
            </div>

            <div class="more">
              <a href="#">查看更多>></a>
            </div>
          </div>
          <div class="tooth_swiper">
            <swiper :options="swiperOption1">
              <swiper-slide>
                <img src="../assets/img/index/article5.png" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/index/article5.png" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/index/tooth_swiper2.png" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/index/tooth_swiper2.png" alt />
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
                  <video class="videoPlay" src="" poster="../assets/img/index/article2.png" loop="loop" x-webkit-airplay="true" webkit-playsinline="true">
                        您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
                    </video>
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
                  <img src="../assets/img/index/1.png" alt />
                  <span>問：深圳牙齒矯正全部下來要...</span>
                </div>
                <div class="question_img">
                  <img src='' alt />
                  <img src='' alt />
                  <img src='' alt />
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
              </div> -->
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
                  <img src="../assets/img/index/2.png" alt />
                  <span>問：深圳牙齒矯正全部下來要...</span>
                </div>
                <div class="question_img">
                  <img src='' alt />
                  <img src='' alt />
                  <img src='' alt />
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
              </div> -->
              <div class="discussion1">
                <div class="up">
                  <span>5.3W</span>
                  <img src="" alt />
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
                  <img src="../assets/img/index/3.png" alt />
                  <span>問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src='../assets/img/index/question_img1.png' alt />
                  <img src='../assets/img/index/question_img2.png' alt />
                  <img src='../assets/img/index/question_img3.png' alt />
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
              </div> -->
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <img src="../assets/img/index/3.png" alt />
                  <span>問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src='' alt />
                  <img src='' alt />
                  <img src='' alt />
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
              </div> -->
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
                  <img src="../assets/img/index/3.png" alt />
                  <span>問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src='' alt />
                  <img src='' alt />
                  <img src='' alt />
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
              </div> -->
              <div class="discussion1">
                <div class="up">
                  <span>2.6W</span>
                  <img src="" alt />
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
                  <img src="../assets/img/index/3.png" alt />
                  <span>問：牙齿矫正大概需要多久？</span>
                </div>
                <div class="question_img">
                  <img src='' alt />
                  <img src='' alt />
                  <img src='' alt />
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
              </div> -->
              <div class="discussion1">
                <div class="up">
                  <span>2.6W</span>
                  <img src="" alt />
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
    <div class="suspend_search" v-show="search_show" ref="suspend">
      <div class="search">
        <div class="mine_icon">
          <img src="../assets/img/index/mine.png" alt />
        </div>
        <div class="search_box">
          <img src="../assets/img/index/glass.png" alt />
          <span>搜索</span>
        </div>
      </div>
      <div class="search_nav">
        <div class="nav_list">首页</div>
        <div class="nav_list">优惠</div>
        <div class="nav_list">预约</div>
        <div class="nav_list">关于登特</div>
        <div class="nav_list">投诉建议</div>
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
      navShow:true,
      // 消息红点提示
      isMessage:false,
      // 客户展示高度
      // userShow_scrollTop:0,
      // 头部高度
      header_scrollTop: 0,
      // 当前滚动距离
      current_scrollTop: 0,
      // 悬浮导航栏
      search_show: false,
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
      }
    };
  },
  methods: {
    // 显示 黑色搜索框
    handleScroll(e) {
      // 获取当前滚动距离
      this.current_scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop; // 执行代码
      // console.log(this.current_scrollTop);

      if (this.current_scrollTop >= this.header_scrollTop) {
        this.search_show = true;
        // this.$refs.suspend.style.transform = 'translateY(100%)'
      } else {
        this.search_show = false;
      }
    },

    // 显示隐藏 头部导航栏
    showNav(){
      // const navTop = this.$refs.iconLeft.offsetHeight;
      // console.log(navTop);
      // const navWidth = this.$refs.iconLeft.offsetWidth;
      // // console.log(navWidth);
      // if(this.navShow){
      //   this.$refs.iconLeft.style.transform = 'translateY(-100%);';
      // }
      this.navShow=!this.navShow;
    },

    userHigh(){
      this.userShow_scrollTop +=280;
      this.$refs.userShow.style.height = this.userShow_scrollTop/100 +'rem';
    }
  },
  mounted() {
    // 获取 头部高度
    this.header_scrollTop = this.$refs.header.offsetHeight;
    // console.log(this.header_scrollTop);

    // 获取 客户展示高度
    this.userShow_scrollTop = this.$refs.userShow.offsetHeight;
    // console.log(this.userShow_scrollTop);

    // 监听页面高度
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
#index {
  width: 100%;
  height: 100%;
}
</style>
<style lang='scss' scoped>
@import "../assets/css/index.scss";
</style>


