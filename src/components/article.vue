<template>
    <swiper :options="swiper_Option" >
        <swiper-slide class="article_cen" >
            <div class="article">
                <!-- 固定大盒子 -->
                <div class="article_maxbox">
                    <!-- 小盒子 -->
                    <div class="article_box">
                        <!-- 文章标题 -->
                        <div class="article_head">
                            <div class="article_top">
                                深圳牙齿矫正全部下来要多少钱？
                            </div>
                            <div class="article_headimg">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1NkZGMDlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1NkZGMTlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjU2RkVFOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjU2RkVGOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hyBWTAAAA25JREFUeNrEV01IG1EQHtf4k5oYbYpV0QpCqRjEk6IIgkWKBy8W1IsiXjwoCMVLxUv1oD14Fk96EA9eehKRElDwUr2KIlQEUbSljTYxahJj7Hwv+7a7SZpuoIkDk03mvZ3vzcw3s5us454eYnnJ+pG1nbWQ0iM+Vjfre9avFv54xfqFtYjSKwjoLetr1iaFP6YzAKoXYE0ranozLW+UNNY0mdiUZKv5jY30YmWFns/MJFyHHeuOwcGUkRV6JLHEGSorqaA9WnaL0ymu2cXFWlTXbjdZysqip7ZatX3IjpSI30+h/f0Ugdmpo6PDaAOwagvu7VHJ2JhhvaChQaiU4NERfR8fTw04fH5O3vV1LRI4DF9e0vX2trYOx5Cc8nJS8vPF+j0rMpCjZiPlVIdPTsi7uKiRC8BwKm0QGQ3IlVddTRcLCxTY2RH7Y7NhGjgpEx2OP3X0ev8vuRIJyCWj+zk/T0W9vXR3diZ+y/QbDqiSLiVgW2cn5dXUUG5FhVYvkAsaCQQou6REOLa6XNHI2Yby6MVMneP6OKeqStRVf/MdR/RtcpJOBwboigfG2eioIJRwwOSSrYY6xw4g0xFfb2xQkHswdHgoWgtkidzexvWlPp1oNXSAZ3bWsMfR1UV2XvsxNfXviAFww+Cx6TM47OvT2uhiaUnr5SdtbVqrIVpw42/1Tkiu3NpaUmw2ylPrGMsBe2ur+C7bSAC3tIgDgwMgHaIFL4KcOdPABXxy6VwQiFMtx+nT/n7xHUNGgvpXV4WKUrHd1tysMT54cJC4U965XB/irFlZZCktFYMDJ76Ym6OHYJAiPh/dM4tDmG66gaIX7AvwWCUuRej4mHzLy+YjRiToTQf3q5dZrB8WN1tb2m+UJJcjk9EiI87hYQp7PHFEM/1YBCgIgyvEzlfx7GViSXEODYnUo+7Cmd0u5jfuk7aUgOWMxnBAxKJWu7viaq2r0/Zdud0asWRHeNfWoi9W3d0iA6aBsfnZyEjU8eam1lZwioOAqUixTDsERJIgGDBoKbQb0m4aGOmS0yqWQJjPAkiNGrW+BZGQpfp6bZ+HyYhDhk5PDQ8WA3/5hf4h0VNIKSyMGyIyKr0dNrA99mkFe7IhBGDvI7xp+hX1b0Wm5TOAJ1h/ZRAUWBMAxkxrYv0EUqYR8ErFANbBbwEGAPQrZE0qphsZAAAAAElFTkSuQmCC" alt="">
                            </div>
                        </div>
                        <!-- 文章题主 -->
                        <div class="article_info">
                            <div class="article_img">
                                <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                            </div>
                            <div class="article_message">
                                <p>月野兔</p>
                                <span>2019-06-12</span>
                            </div>
                        </div>
                        <!-- 文章内容 -->
                        <div class="article_content">
                            <div class="article_contentHead">
                                牙齿矫正是通过外力来达到让牙齿移动，恢复整齐的目的，一般矫正的话，青少年矫正时间在1年左右，矫正后需佩戴保持器2年，保证牙齿不会恢复到原来的样子。
                            </div>
                            <div class="article_banner"><img src="../\assets\img\index\ask\3.jpg" alt=""></div>
                            <div class="article_content2">
                                不同的办法适合不一样的体质，传统的方丝弓矫正成人是8000左右。 陶瓷托槽一般1w5左右。 舌侧矫正大致3w左右但必须要看所在城市消费水平 隐形矫正，是统一设计、统一送交外加工，所以没有最好，只有价格空间、服务的不同。
                                正畸这件重要的事一拖就是近十年，其实内心还是想让自己看起来完美些的。这十年间也有间断的去咨询过一些医生。直到有一次，我的一位德高望重的领导对我说，小樊你的牙齿弄一下会效果很好，你找一下刘进教授，虽然现在32岁年纪大了点，但是以后还有几个32年呢，要提高生活质量!我抱着试试看的想法，到深圳远东妇儿科医院口腔正畸科咨询刘（liu）慧医生和刘进教授。刚一见面，刘进教授就说：这个小姑娘看起来挺斯文，但是一说话牙齿全露出来了，还有牙周病，做了矫正效果一定很好。其实医生的自信对患者很重要，当一个患者的信心不足，犹豫、纠结的时候最需要的是医生能从专业的角度给我信心，帮助我做决定，那一刻我坚定了做牙齿矫治的决心。
                            </div>
                        </div>
                        <!-- 评论和点赞 -->
                        <div class="article_comment">
                            <div class="article_messageimg">
                                <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                <span>6463</span>
                            </div>
                            <div class="article_loveimg">
                                <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                <span>1564</span>
                            </div>
                        </div>
                        <!-- 暂无评论图片 -->
                        <div class="article_btn">
                            <img src="../\assets\img\index\ask\text@2x (3).png" alt="">
                        </div>
                        <!-- 填写评论 -->
                        <div class="article_reply">
                            <div class="article_input">
                                <input type="text" placeholder="可以评论哦...">
                                <img src="../\assets\img\index\ask\signature@2x.png" alt="">
                            </div>
                            <div class="article_comment2">评论</div>
                        </div>
                    </div>
                </div>
                <div class="article_maxbox2"></div>
                <div class="article_maxbox3"></div>
            </div>
        </swiper-slide>
        <swiper-slide class="article_cen" >
            <div class="article">
                <!-- 固定大盒子 -->
                <div class="article_maxbox">
                    <!-- 小盒子 -->
                    <div class="article_box">
                        <!-- 文章标题 -->
                        <div class="article_head">
                            <div class="article_top">
                                深圳牙齿矫正全部下来要多少钱？
                            </div>
                            <div class="article_headimg">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1NkZGMDlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1NkZGMTlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjU2RkVFOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjU2RkVGOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hyBWTAAAA25JREFUeNrEV01IG1EQHtf4k5oYbYpV0QpCqRjEk6IIgkWKBy8W1IsiXjwoCMVLxUv1oD14Fk96EA9eehKRElDwUr2KIlQEUbSljTYxahJj7Hwv+7a7SZpuoIkDk03mvZ3vzcw3s5us454eYnnJ+pG1nbWQ0iM+Vjfre9avFv54xfqFtYjSKwjoLetr1iaFP6YzAKoXYE0ranozLW+UNNY0mdiUZKv5jY30YmWFns/MJFyHHeuOwcGUkRV6JLHEGSorqaA9WnaL0ymu2cXFWlTXbjdZysqip7ZatX3IjpSI30+h/f0Ugdmpo6PDaAOwagvu7VHJ2JhhvaChQaiU4NERfR8fTw04fH5O3vV1LRI4DF9e0vX2trYOx5Cc8nJS8vPF+j0rMpCjZiPlVIdPTsi7uKiRC8BwKm0QGQ3IlVddTRcLCxTY2RH7Y7NhGjgpEx2OP3X0ev8vuRIJyCWj+zk/T0W9vXR3diZ+y/QbDqiSLiVgW2cn5dXUUG5FhVYvkAsaCQQou6REOLa6XNHI2Yby6MVMneP6OKeqStRVf/MdR/RtcpJOBwboigfG2eioIJRwwOSSrYY6xw4g0xFfb2xQkHswdHgoWgtkidzexvWlPp1oNXSAZ3bWsMfR1UV2XvsxNfXviAFww+Cx6TM47OvT2uhiaUnr5SdtbVqrIVpw42/1Tkiu3NpaUmw2ylPrGMsBe2ur+C7bSAC3tIgDgwMgHaIFL4KcOdPABXxy6VwQiFMtx+nT/n7xHUNGgvpXV4WKUrHd1tysMT54cJC4U965XB/irFlZZCktFYMDJ76Ym6OHYJAiPh/dM4tDmG66gaIX7AvwWCUuRej4mHzLy+YjRiToTQf3q5dZrB8WN1tb2m+UJJcjk9EiI87hYQp7PHFEM/1YBCgIgyvEzlfx7GViSXEODYnUo+7Cmd0u5jfuk7aUgOWMxnBAxKJWu7viaq2r0/Zdud0asWRHeNfWoi9W3d0iA6aBsfnZyEjU8eam1lZwioOAqUixTDsERJIgGDBoKbQb0m4aGOmS0yqWQJjPAkiNGrW+BZGQpfp6bZ+HyYhDhk5PDQ8WA3/5hf4h0VNIKSyMGyIyKr0dNrA99mkFe7IhBGDvI7xp+hX1b0Wm5TOAJ1h/ZRAUWBMAxkxrYv0EUqYR8ErFANbBbwEGAPQrZE0qphsZAAAAAElFTkSuQmCC" alt="">
                            </div>
                        </div>
                        <!-- 文章题主 -->
                        <div class="article_info">
                            <div class="article_img">
                                <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                            </div>
                            <div class="article_message">
                                <p>月野兔</p>
                                <span>2019-06-12</span>
                            </div>
                        </div>
                        <!-- 文章内容 -->
                        <div class="article_content">
                            <div class="article_contentHead">
                                牙齿矫正是通过外力来达到让牙齿移动，恢复整齐的目的，一般矫正的话，青少年矫正时间在1年左右，矫正后需佩戴保持器2年，保证牙齿不会恢复到原来的样子。
                            </div>
                            <div class="article_banner"><img src="../\assets\img\index\ask\3.jpg" alt=""></div>
                            <div class="article_content2">
                                不同的办法适合不一样的体质，传统的方丝弓矫正成人是8000左右。 陶瓷托槽一般1w5左右。 舌侧矫正大致3w左右但必须要看所在城市消费水平 隐形矫正，是统一设计、统一送交外加工，所以没有最好，只有价格空间、服务的不同。
                                正畸这件重要的事一拖就是近十年，其实内心还是想让自己看起来完美些的。这十年间也有间断的去咨询过一些医生。直到有一次，我的一位德高望重的领导对我说，小樊你的牙齿弄一下会效果很好，你找一下刘进教授，虽然现在32岁年纪大了点，但是以后还有几个32年呢，要提高生活质量!我抱着试试看的想法，到深圳远东妇儿科医院口腔正畸科咨询刘（liu）慧医生和刘进教授。刚一见面，刘进教授就说：这个小姑娘看起来挺斯文，但是一说话牙齿全露出来了，还有牙周病，做了矫正效果一定很好。其实医生的自信对患者很重要，当一个患者的信心不足，犹豫、纠结的时候最需要的是医生能从专业的角度给我信心，帮助我做决定，那一刻我坚定了做牙齿矫治的决心。
                            </div>
                        </div>
                        <!-- 评论和点赞 -->
                        <div class="article_comment">
                            <div class="article_messageimg">
                                <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                <span>6463</span>
                            </div>
                            <div class="article_loveimg">
                                <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                <span>1564</span>
                            </div>
                        </div>
                        <!-- 暂无评论图片 -->
                        <div class="article_btn">
                            <img src="../\assets\img\index\ask\text@2x (3).png" alt="">
                        </div>
                        <!-- 填写评论 -->
                        <div class="article_reply">
                            <div class="article_input">
                                <input type="text" placeholder="可以评论哦...">
                                <img src="../\assets\img\index\ask\signature@2x.png" alt="">
                            </div>
                            <div class="article_comment2">评论</div>
                        </div>
                    </div>
                </div>
                <div class="article_maxbox2"></div>
                <div class="article_maxbox3"></div>
            </div>
        </swiper-slide>
        <swiper-slide class="article_cen" >
            <div class="article">
                <!-- 固定大盒子 -->
                <div class="article_maxbox">
                    <!-- 小盒子 -->
                    <div class="article_box">
                        <!-- 文章标题 -->
                        <div class="article_head">
                            <div class="article_top">
                                深圳牙齿矫正全部下来要多少钱？
                            </div>
                            <div class="article_headimg">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1NkZGMDlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1NkZGMTlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjU2RkVFOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjU2RkVGOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hyBWTAAAA25JREFUeNrEV01IG1EQHtf4k5oYbYpV0QpCqRjEk6IIgkWKBy8W1IsiXjwoCMVLxUv1oD14Fk96EA9eehKRElDwUr2KIlQEUbSljTYxahJj7Hwv+7a7SZpuoIkDk03mvZ3vzcw3s5us454eYnnJ+pG1nbWQ0iM+Vjfre9avFv54xfqFtYjSKwjoLetr1iaFP6YzAKoXYE0ranozLW+UNNY0mdiUZKv5jY30YmWFns/MJFyHHeuOwcGUkRV6JLHEGSorqaA9WnaL0ymu2cXFWlTXbjdZysqip7ZatX3IjpSI30+h/f0Ugdmpo6PDaAOwagvu7VHJ2JhhvaChQaiU4NERfR8fTw04fH5O3vV1LRI4DF9e0vX2trYOx5Cc8nJS8vPF+j0rMpCjZiPlVIdPTsi7uKiRC8BwKm0QGQ3IlVddTRcLCxTY2RH7Y7NhGjgpEx2OP3X0ev8vuRIJyCWj+zk/T0W9vXR3diZ+y/QbDqiSLiVgW2cn5dXUUG5FhVYvkAsaCQQou6REOLa6XNHI2Yby6MVMneP6OKeqStRVf/MdR/RtcpJOBwboigfG2eioIJRwwOSSrYY6xw4g0xFfb2xQkHswdHgoWgtkidzexvWlPp1oNXSAZ3bWsMfR1UV2XvsxNfXviAFww+Cx6TM47OvT2uhiaUnr5SdtbVqrIVpw42/1Tkiu3NpaUmw2ylPrGMsBe2ur+C7bSAC3tIgDgwMgHaIFL4KcOdPABXxy6VwQiFMtx+nT/n7xHUNGgvpXV4WKUrHd1tysMT54cJC4U965XB/irFlZZCktFYMDJ76Ym6OHYJAiPh/dM4tDmG66gaIX7AvwWCUuRej4mHzLy+YjRiToTQf3q5dZrB8WN1tb2m+UJJcjk9EiI87hYQp7PHFEM/1YBCgIgyvEzlfx7GViSXEODYnUo+7Cmd0u5jfuk7aUgOWMxnBAxKJWu7viaq2r0/Zdud0asWRHeNfWoi9W3d0iA6aBsfnZyEjU8eam1lZwioOAqUixTDsERJIgGDBoKbQb0m4aGOmS0yqWQJjPAkiNGrW+BZGQpfp6bZ+HyYhDhk5PDQ8WA3/5hf4h0VNIKSyMGyIyKr0dNrA99mkFe7IhBGDvI7xp+hX1b0Wm5TOAJ1h/ZRAUWBMAxkxrYv0EUqYR8ErFANbBbwEGAPQrZE0qphsZAAAAAElFTkSuQmCC" alt="">
                            </div>
                        </div>
                        <!-- 文章题主 -->
                        <div class="article_info">
                            <div class="article_img">
                                <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                            </div>
                            <div class="article_message">
                                <p>月野兔</p>
                                <span>2019-06-12</span>
                            </div>
                        </div>
                        <!-- 文章内容 -->
                        <div class="article_content">
                            <div class="article_contentHead">
                                牙齿矫正是通过外力来达到让牙齿移动，恢复整齐的目的，一般矫正的话，青少年矫正时间在1年左右，矫正后需佩戴保持器2年，保证牙齿不会恢复到原来的样子。
                            </div>
                            <div class="article_banner"><img src="../\assets\img\index\ask\3.jpg" alt=""></div>
                            <div class="article_content2">
                                不同的办法适合不一样的体质，传统的方丝弓矫正成人是8000左右。 陶瓷托槽一般1w5左右。 舌侧矫正大致3w左右但必须要看所在城市消费水平 隐形矫正，是统一设计、统一送交外加工，所以没有最好，只有价格空间、服务的不同。
                                正畸这件重要的事一拖就是近十年，其实内心还是想让自己看起来完美些的。这十年间也有间断的去咨询过一些医生。直到有一次，我的一位德高望重的领导对我说，小樊你的牙齿弄一下会效果很好，你找一下刘进教授，虽然现在32岁年纪大了点，但是以后还有几个32年呢，要提高生活质量!我抱着试试看的想法，到深圳远东妇儿科医院口腔正畸科咨询刘（liu）慧医生和刘进教授。刚一见面，刘进教授就说：这个小姑娘看起来挺斯文，但是一说话牙齿全露出来了，还有牙周病，做了矫正效果一定很好。其实医生的自信对患者很重要，当一个患者的信心不足，犹豫、纠结的时候最需要的是医生能从专业的角度给我信心，帮助我做决定，那一刻我坚定了做牙齿矫治的决心。
                            </div>
                        </div>
                        <!-- 评论和点赞 -->
                        <div class="article_comment">
                            <div class="article_messageimg">
                                <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                <span>6463</span>
                            </div>
                            <div class="article_loveimg">
                                <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                <span>1564</span>
                            </div>
                        </div>
                        <!-- 暂无评论图片 -->
                        <div class="article_btn">
                            <img src="../\assets\img\index\ask\text@2x (3).png" alt="">
                        </div>
                        <!-- 填写评论 -->
                        <div class="article_reply">
                            <div class="article_input">
                                <input type="text" placeholder="可以评论哦...">
                                <img src="../\assets\img\index\ask\signature@2x.png" alt="">
                            </div>
                            <div class="article_comment2">评论</div>
                        </div>
                    </div>
                </div>
                <div class="article_maxbox2"></div>
                <div class="article_maxbox3"></div>
            </div>
        </swiper-slide>
      </swiper>
    
</template>

<script>
export default {
    
    data () {
	    return {
            swiperOption: {
            loop: true,
            autoplay: 3000,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination"
                }
            },
        }
    },
    methods:{
        
    },
    
}
</script>

<style>

</style>
<style lang='scss'>
 @import "../assets/css/article.scss";
</style>