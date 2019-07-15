<template>
  <div id="index">
    <!-- 头部区域 -->
    <header id="header">
      <!-- 头-背景 -->
      <img class="header_bg" src="../assets/img/index/top_bg.jpg" alt />

      <!-- 头-顶部 -->
      <div class="header_top">
        <div class="icon_left"></div>

        <div class="icon_right">
          <div class="icon_en"></div>
          <div class="message">
            <div class="icon_message"></div>
            <div class="message">2</div>
          </div>
        </div>
      </div>

      <!-- 头-导航栏 -->
      <div class="header_nav">
        <div>首页</div>
        <div>优惠</div>
        <div>预约</div>
        <div>关于美莱</div>
        <div>投诉建议</div>
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
              <span>1、#牙齿矫正多少钱?</span>
              <img src="../assets/img/index/hot.png" alt />
            </div>
            <!-- 讨论(右) -->
            <div class="discussion">
              <div class="up">
                <span>9.9W</span>
                <img src="../assets/img/index/up.png" alt />
                <span>+3</span>
              </div>

              <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
              </div>
              <!-- <div class="down2">
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
              </div>-->
            </div>
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>1、#牙齿矫正多少钱?</span>
              <img src="../assets/img/index/new.png" alt />
            </div>
            <!-- 讨论(右) -->
            <div class="discussion">
              <div class="up">
                <span>9.9W</span>
                <img src alt />
                <span></span>
              </div>

              <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
              </div>
              <!-- <div class="down2">
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
              </div>-->
            </div>
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>1、#牙齿矫正多少钱?</span>
              <img src="../assets/img/index/bomb.png" alt />
            </div>
            <!-- 讨论(右) -->
            <div class="discussion">
              <div class="up">
                <span>9.9W</span>
                <img src="../assets/img/index/up.png" alt />
                <span>+6</span>
              </div>

              <!-- <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
              </div>-->
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
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>1、#牙齿矫正多少钱?</span>
              <img src alt />
            </div>
            <!-- 讨论(右) -->
            <div class="discussion">
              <div class="up">
                <span>9.9W</span>
                <img src alt />
                <span></span>
              </div>

              <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
              </div>
              <!-- <div class="down2">
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
              </div>-->
            </div>
          </div>
          <div class="hot_question">
            <!-- 问题(左) -->
            <div class="left">
              <span>1、#牙齿矫正多少钱?</span>
              <img src alt />
            </div>
            <!-- 讨论(右) -->
            <div class="discussion">
              <div class="up">
                <span>9.9W</span>
                <img src="../assets/img/index/up.png" alt />
                <span>+3</span>
              </div>

              <div class="down1">
                <span>#2026</span>
                <span>讨论</span>
              </div>
              <!-- <div class="down2">
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
              </div>-->
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
        <div class="user_show">
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
          <!-- <div class="mor">查看更多</div> -->
        </div>
      </div>
      <!-- 主体下半区 -->
      <div class="main_down">
        <!-- 不同人群 -->
        <div class="different_persons">
          <div class="persons_category">
            <div class="youth">青年</div>
            <div class="old">老人</div>
            <div class="children">儿童</div>
          </div>
          <div class="title_level1">
            <div class="level1_list">专业回答</div>
            <div class="level1_list">矫正问题</div>
            <div class="level1_list">查看费用</div>
            <div class="level1_list">效果图</div>
            <div class="level1_list">年龄</div>
            <div class="level1_list">年龄</div>
          </div>
          <div class="title_level2">
            <div class="level2_list">
              <span>矫正</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>矫正</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>矫正</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>矫正</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>矫正</span>
              <span>(20)</span>
            </div>
            <div class="level2_list">
              <span>矫正</span>
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
                <img src="../assets/img/index/article5.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/index/article5.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/index/tooth_swiper2.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/img/index/tooth_swiper2.png" alt="">
              </swiper-slide>
              <div class="swiper-pagination1" slot="pagination"></div>
            </swiper>
          </div>
        </div>

        <!-- 文章 -->
        <div class="article">
          <div class="article_title">
            <div class="title_hot">热门</div>
            <div class="line">/</div>
            <div class="title_new">最新</div>
          </div>
          <div class="article_content">
            <div class="article_content_left">
              <div class="article_list">
                <img src alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article1.png" alt />
                </div>
                <div
                  class="article_details"
                >There are many choices for orthodontics.For aesthetics,invisible orthodontics and</div>
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
              <div class="article_list">
                <img src alt />
                <div class="title">30-35岁还可以做牙齿矫正吗？</div>
                <div class="icon">
                  <img src="../assets/img/index/video.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article2.png" alt />
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
              <div class="article_list">
                <img src alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article3.png" alt />
                </div>
                <div class="article_details">
                  There are many choices for
                  orthodontics. For aesthetics,
                  invisible orthodontics and
                  semi-invisible orthodontics can be
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
              <div class="article_list">
                <img src="../assets/img/index/article_list_doc1.png" alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/answer.png" alt />
                </div>
                <div class="article_img">
                  <img src alt />
                </div>
                <div class="article_details">
                  There are many choices for orthodontics. For aesthetics, invisible orthodontics and
                  semi-invisible orthodontics can be chosen.
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
            </div>
            <div class="article_content_right">
              <div class="article_list">
                <img src alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/answer.png" alt />
                </div>
                <div class="article_img">
                  <img src alt />
                </div>
                <div
                  class="article_details"
                >There are many choices for orthodontics.For aesthetics,invisible orthodontics and</div>
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
              <div class="article_list_doc">
                <img src="../assets/img/index/article_list_doc2.png" alt />
                <div class="doc_name">
                  <span>蔡英英</span>
                  <span>正崎专家</span>
                </div>
              </div>
              <div class="article_list">
                <img src alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/article.png" alt />
                </div>
                <div class="article_img">
                  <img src alt />
                </div>
                <div
                  class="article_details"
                >There are many choices for orthodontics.For aesthetics,invisible orthodontics and</div>
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
              <div class="article_list">
                <img src alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/answer.png" alt />
                </div>
                <div class="article_img">
                  <img src="../assets/img/index/article4.png" alt />
                </div>
                <div
                  class="article_details"
                >There are many choices for orthodontics.For aesthetics,invisible orthodontics and</div>
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
              <div class="article_list">
                <img src alt />
                <div class="title">牙齿矫正多少钱?</div>
                <div class="icon">
                  <img src="../assets/img/index/answer.png" alt />
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
                  <span>#牙齿矫正多少钱?多少钱多少钱</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion">
                <div class="up">
                  <span>9.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+3</span>
                </div>

                <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>
                <!-- <div class="down2">
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
                  <div>讨论</div>
                </div>-->
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <img src="../assets/img/index/2.png" alt />
                  <span>#牙齿矫正多少钱?多少钱多少钱</span>
                </div>
                <div class="question_img">
                  <img src="../assets/img/index/question_img1.png" alt />
                  <img src="../assets/img/index/question_img2.png" alt />
                  <img src="../assets/img/index/question_img3.png" alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion">
                <div class="up">
                  <span>9.9W</span>
                  <img src alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>
                <!-- <div class="down2">
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
                  <div>讨论</div>
                </div>-->
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <img src="../assets/img/index/3.png" alt />
                  <span>#牙齿矫正多少钱?多少钱多少钱</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion">
                <div class="up">
                  <span>9.9W</span>
                  <img src="../assets/img/index/up.png" alt />
                  <span>+3</span>
                </div>

                <!-- <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>-->
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
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <img src="../assets/img/index/3.png" alt />
                  <span>#牙齿矫正多少钱?多少钱多少钱</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion">
                <div class="up">
                  <span>9.9W</span>
                  <img src="../assets/img/index/question_img4.png" alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>
                <!-- <div class="down2">
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
                </div>-->
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <img src="../assets/img/index/3.png" alt />
                  <span>#牙齿矫正多少钱?多少钱多少钱</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion">
                <div class="up">
                  <span>9.9W</span>
                  <img src alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>
                <!-- <div class="down2">
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
                </div>-->
              </div>
            </div>
            <div class="question_list">
              <!-- 问题(左) -->
              <div class="left">
                <div class="question">
                  <img src="../assets/img/index/3.png" alt />
                  <span>#牙齿矫正多少钱?多少钱多少钱</span>
                </div>
                <div class="question_img">
                  <img src alt />
                  <img src alt />
                  <img src alt />
                </div>
              </div>
              <!-- 讨论(右) -->
              <div class="discussion">
                <div class="up">
                  <span>9.9W</span>
                  <img src alt />
                  <span></span>
                </div>

                <div class="down1">
                  <span>#2026</span>
                  <span>讨论</span>
                </div>
                <!-- <div class="down2">
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
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 悬浮search-->
    <div class="suspend_search" v-show="search_show">
      <div class="search">
        <div class="mine_icon"></div>
        <div class="search_box">
          <a href="#">
            <img src="../assets/img/index/glass.png" alt />
            <input type="search" placeholder="搜索" />
          </a>
        </div>
      </div>
      <div class="search_nav">
        <ul>
          <li>首页</li>
          <li>优惠</li>
          <li>预约</li>
          <li>关于美莱</li>
          <li>投诉建议</li>
        </ul>
      </div>
    </div>
    <!-- ssss1111 -->
  
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      search_show: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOption1: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination1',
            clickable: true
          }
        }
    };
  }
};
</script>

<style>
#index {
  width: 100%;
  height: auto;
}
</style>
<style lang='scss'>
@import "../assets/css/index.scss";
</style>


