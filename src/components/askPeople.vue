<template>
    <swiper :options="swiper_Option">
        <!-- 第一 -->
        <swiper-slide class="wen_articlebox">
            <div class="ask_people">
                <div class="wen_article">
                    <div class="up_maximumbox">
                        <!-- 问答 -->
                        <div class="up_content">
                            <div class="up_top">
                                <div class="up_problem">
                                    问：深圳牙齿矫正全部下来要多少钱？
                                </div>
                                <div class="up_problemimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1NkZGMDlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1NkZGMTlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjU2RkVFOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjU2RkVGOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hyBWTAAAA25JREFUeNrEV01IG1EQHtf4k5oYbYpV0QpCqRjEk6IIgkWKBy8W1IsiXjwoCMVLxUv1oD14Fk96EA9eehKRElDwUr2KIlQEUbSljTYxahJj7Hwv+7a7SZpuoIkDk03mvZ3vzcw3s5us454eYnnJ+pG1nbWQ0iM+Vjfre9avFv54xfqFtYjSKwjoLetr1iaFP6YzAKoXYE0ranozLW+UNNY0mdiUZKv5jY30YmWFns/MJFyHHeuOwcGUkRV6JLHEGSorqaA9WnaL0ymu2cXFWlTXbjdZysqip7ZatX3IjpSI30+h/f0Ugdmpo6PDaAOwagvu7VHJ2JhhvaChQaiU4NERfR8fTw04fH5O3vV1LRI4DF9e0vX2trYOx5Cc8nJS8vPF+j0rMpCjZiPlVIdPTsi7uKiRC8BwKm0QGQ3IlVddTRcLCxTY2RH7Y7NhGjgpEx2OP3X0ev8vuRIJyCWj+zk/T0W9vXR3diZ+y/QbDqiSLiVgW2cn5dXUUG5FhVYvkAsaCQQou6REOLa6XNHI2Yby6MVMneP6OKeqStRVf/MdR/RtcpJOBwboigfG2eioIJRwwOSSrYY6xw4g0xFfb2xQkHswdHgoWgtkidzexvWlPp1oNXSAZ3bWsMfR1UV2XvsxNfXviAFww+Cx6TM47OvT2uhiaUnr5SdtbVqrIVpw42/1Tkiu3NpaUmw2ylPrGMsBe2ur+C7bSAC3tIgDgwMgHaIFL4KcOdPABXxy6VwQiFMtx+nT/n7xHUNGgvpXV4WKUrHd1tysMT54cJC4U965XB/irFlZZCktFYMDJ76Ym6OHYJAiPh/dM4tDmG66gaIX7AvwWCUuRej4mHzLy+YjRiToTQf3q5dZrB8WN1tb2m+UJJcjk9EiI87hYQp7PHFEM/1YBCgIgyvEzlfx7GViSXEODYnUo+7Cmd0u5jfuk7aUgOWMxnBAxKJWu7viaq2r0/Zdud0asWRHeNfWoi9W3d0iA6aBsfnZyEjU8eam1lZwioOAqUixTDsERJIgGDBoKbQb0m4aGOmS0yqWQJjPAkiNGrW+BZGQpfp6bZ+HyYhDhk5PDQ8WA3/5hf4h0VNIKSyMGyIyKr0dNrA99mkFe7IhBGDvI7xp+hX1b0Wm5TOAJ1h/ZRAUWBMAxkxrYv0EUqYR8ErFANbBbwEGAPQrZE0qphsZAAAAAElFTkSuQmCC" alt="">
                                </div>
                            </div>
                            <div class="up_article">
                                从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽...
                                <span>查看全部</span>
                            </div> 
                            <div class="up_bottom">
                                <div class="up_img">
                                    <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                </div>
                                <div class="up_message">
                                    <p>月野兔</p>
                                    <span>2019-06-12</span>
                                </div>
                                <div class="up_folat">
                                    <div class="up_lf">
                                        <span @click="reply" v-show="btnText">回复</span>
                                    </div>
                                    <div class="up_rf" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>162</span>
                                    </div>
                                    <div class="share">
                                        <img src="../\assets\img\index\ask\share(5)@2x.png" alt="">
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="commenta">
                            <div class="commentator">
                                <div class="commentator_img">
                                    <img src="../\assets\img\index\ask\849404f95c0bf469a932801f6c3de88f@2x.png" alt="">
                                </div>
                                <div class="commen_by">
                                    <div class="commen_name">波妞</div>
                                    <div class="commen_age">
                                        22岁<img src="../\assets\img\index\ask\woman@2x.png" alt="">
                                    </div>
                                    <div class="commen_time">65分钟前</div>
                                </div>
                            </div>
                            <div class="commen_articlerf">
                                <div class="commen_article">
                                    从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽然面积不大，却对
                                    <span @click="reply" v-show="btnText">回复</span>
                                </div>
                                <div class="commen_bottom">
                                    <div class="commen_messageimg" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>6463</span>
                                    </div>
                                    <div class="commen_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1564</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="commenta">
                            <div class="commentator">
                                <div class="commentator_img">
                                    <img src="../\assets\img\index\ask\849404f95c0bf469a932801f6c3de88f@2x.png" alt="">
                                </div>
                                <div class="commen_by">
                                    <div class="commen_name">波妞</div>
                                    <div class="commen_age">
                                        22岁<img src="../\assets\img\index\ask\woman@2x.png" alt="">
                                    </div>
                                    <div class="commen_time">65分钟前</div>
                                </div>
                            </div>
                            <div class="commen_articlerf">
                                <div class="commen_articlebox">
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio01@2x.png" alt="">
                                    </div>
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio02@2x.png" alt="">
                                    </div>
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio03@2x.png" alt="">
                                    </div>
                                </div>
                                <div class="commen_article">
                                    从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽然面积不大，却对
                                    <span @click="reply" v-show="btnText">回复</span>
                                </div>
                                <div class="commen_bottom">
                                    <div class="commen_messageimg" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>6463</span>
                                    </div>
                                    <div class="commen_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1564</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="comment_dialogue" v-show="isShow">
                            <div class="comment_top">
                                <div class="comment_center">
                                    <div class="comment_img">
                                        <img src="../\assets\img\index\ask\1a38f67b41f7d3e2723b3250ef681a9ce7c19b181bead-0BCBJh_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name">
                                        <p>白龙</p>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1553</span>
                                    </div>
                                </div>
                                <h6>可以讲中文吗?</h6>
                            </div>
                            <!-- 回复人 -->
                            <div class="comment_top2" v-show="isShow">
                                <div class="comment_center2">
                                    <div class="comment_img2">
                                        <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name2">
                                        <p>月野兔</p>
                                        <div id="host">题主</div>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg2">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1354</span>
                                    </div>
                                </div>
                                <h6>回复<span>@白龙：</span>HAHAHAHA..可以的呀</h6>
                            </div>
                            <div class="comment_top2">
                                <div class="comment_center2">
                                    <div class="comment_img2">
                                        <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name2">
                                        <p>月野兔</p>
                                        <div id="host">题主</div>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg2">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1354</span>
                                    </div>
                                </div>
                                <h6>回复<span>@白龙：</span>HAHAHAHA..可以的呀</h6>
                            </div>
                        </div>
                        <!-- 填写评论 -->
                        <div class="reply" v-show="isShow">
                            <div class="reply_input">
                                <input type="text" placeholder="可以评论哦...">
                                <img src="../\assets\img\index\ask\signature@2x.png" alt="">
                            </div>
                        <div class="reply_comment">评论</div>
                    </div>
                </div>
                </div>
                <div class="wen_article2"></div>
                <div class="wen_article3"></div>
            </div>
            
        </swiper-slide>
        <!-- 第二 -->
        <swiper-slide class="wen_articlebox">
            <div class="ask_people">
                <div class="wen_article">
                    <div class="up_maximumbox">
                        <!-- 问答 -->
                        <div class="up_content">
                            <div class="up_top">
                                <div class="up_problem">
                                    问：深圳牙齿矫正全部下来要多少钱？
                                </div>
                                <div class="up_problemimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1NkZGMDlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1NkZGMTlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjU2RkVFOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjU2RkVGOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hyBWTAAAA25JREFUeNrEV01IG1EQHtf4k5oYbYpV0QpCqRjEk6IIgkWKBy8W1IsiXjwoCMVLxUv1oD14Fk96EA9eehKRElDwUr2KIlQEUbSljTYxahJj7Hwv+7a7SZpuoIkDk03mvZ3vzcw3s5us454eYnnJ+pG1nbWQ0iM+Vjfre9avFv54xfqFtYjSKwjoLetr1iaFP6YzAKoXYE0ranozLW+UNNY0mdiUZKv5jY30YmWFns/MJFyHHeuOwcGUkRV6JLHEGSorqaA9WnaL0ymu2cXFWlTXbjdZysqip7ZatX3IjpSI30+h/f0Ugdmpo6PDaAOwagvu7VHJ2JhhvaChQaiU4NERfR8fTw04fH5O3vV1LRI4DF9e0vX2trYOx5Cc8nJS8vPF+j0rMpCjZiPlVIdPTsi7uKiRC8BwKm0QGQ3IlVddTRcLCxTY2RH7Y7NhGjgpEx2OP3X0ev8vuRIJyCWj+zk/T0W9vXR3diZ+y/QbDqiSLiVgW2cn5dXUUG5FhVYvkAsaCQQou6REOLa6XNHI2Yby6MVMneP6OKeqStRVf/MdR/RtcpJOBwboigfG2eioIJRwwOSSrYY6xw4g0xFfb2xQkHswdHgoWgtkidzexvWlPp1oNXSAZ3bWsMfR1UV2XvsxNfXviAFww+Cx6TM47OvT2uhiaUnr5SdtbVqrIVpw42/1Tkiu3NpaUmw2ylPrGMsBe2ur+C7bSAC3tIgDgwMgHaIFL4KcOdPABXxy6VwQiFMtx+nT/n7xHUNGgvpXV4WKUrHd1tysMT54cJC4U965XB/irFlZZCktFYMDJ76Ym6OHYJAiPh/dM4tDmG66gaIX7AvwWCUuRej4mHzLy+YjRiToTQf3q5dZrB8WN1tb2m+UJJcjk9EiI87hYQp7PHFEM/1YBCgIgyvEzlfx7GViSXEODYnUo+7Cmd0u5jfuk7aUgOWMxnBAxKJWu7viaq2r0/Zdud0asWRHeNfWoi9W3d0iA6aBsfnZyEjU8eam1lZwioOAqUixTDsERJIgGDBoKbQb0m4aGOmS0yqWQJjPAkiNGrW+BZGQpfp6bZ+HyYhDhk5PDQ8WA3/5hf4h0VNIKSyMGyIyKr0dNrA99mkFe7IhBGDvI7xp+hX1b0Wm5TOAJ1h/ZRAUWBMAxkxrYv0EUqYR8ErFANbBbwEGAPQrZE0qphsZAAAAAElFTkSuQmCC" alt="">
                                </div>
                            </div>
                            <div class="up_article">
                                从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽...
                                <span>查看全部</span>
                            </div> 
                            <div class="up_bottom">
                                <div class="up_img">
                                    <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                </div>
                                <div class="up_message">
                                    <p>月野兔</p>
                                    <span>2019-06-12</span>
                                </div>
                                <div class="up_folat">
                                    <div class="up_lf">
                                        <span @click="reply" v-show="btnText">回复</span>
                                    </div>
                                    <div class="up_rf" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>162</span>
                                    </div>
                                    <div class="share">
                                        <img src="../\assets\img\index\ask\share(5)@2x.png" alt="">
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="commenta">
                            <div class="commentator">
                                <div class="commentator_img">
                                    <img src="../\assets\img\index\ask\849404f95c0bf469a932801f6c3de88f@2x.png" alt="">
                                </div>
                                <div class="commen_by">
                                    <div class="commen_name">波妞</div>
                                    <div class="commen_age">
                                        22岁<img src="../\assets\img\index\ask\woman@2x.png" alt="">
                                    </div>
                                    <div class="commen_time">65分钟前</div>
                                </div>
                            </div>
                            <div class="commen_articlerf">
                                <div class="commen_article">
                                    从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽然面积不大，却对
                                    <span @click="reply" v-show="btnText">回复</span>
                                </div>
                                <div class="commen_bottom">
                                    <div class="commen_messageimg" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>6463</span>
                                    </div>
                                    <div class="commen_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1564</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="commenta">
                            <div class="commentator">
                                <div class="commentator_img">
                                    <img src="../\assets\img\index\ask\849404f95c0bf469a932801f6c3de88f@2x.png" alt="">
                                </div>
                                <div class="commen_by">
                                    <div class="commen_name">波妞</div>
                                    <div class="commen_age">
                                        22岁<img src="../\assets\img\index\ask\woman@2x.png" alt="">
                                    </div>
                                    <div class="commen_time">65分钟前</div>
                                </div>
                            </div>
                            <div class="commen_articlerf">
                                <div class="commen_articlebox">
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio01@2x.png" alt="">
                                    </div>
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio02@2x.png" alt="">
                                    </div>
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio03@2x.png" alt="">
                                    </div>
                                </div>
                                <div class="commen_article">
                                    从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽然面积不大，却对
                                    <span @click="reply" v-show="btnText">回复</span>
                                </div>
                                <div class="commen_bottom">
                                    <div class="commen_messageimg" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>6463</span>
                                    </div>
                                    <div class="commen_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1564</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="comment_dialogue" v-show="isShow">
                            <div class="comment_top">
                                <div class="comment_center">
                                    <div class="comment_img">
                                        <img src="../\assets\img\index\ask\1a38f67b41f7d3e2723b3250ef681a9ce7c19b181bead-0BCBJh_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name">
                                        <p>白龙</p>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1553</span>
                                    </div>
                                </div>
                                <h6>可以讲中文吗?</h6>
                            </div>
                            <!-- 回复人 -->
                            <div class="comment_top2" v-show="isShow">
                                <div class="comment_center2">
                                    <div class="comment_img2">
                                        <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name2">
                                        <p>月野兔</p>
                                        <div id="host">题主</div>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg2">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1354</span>
                                    </div>
                                </div>
                                <h6>回复<span>@白龙：</span>HAHAHAHA..可以的呀</h6>
                            </div>
                            <div class="comment_top2">
                                <div class="comment_center2">
                                    <div class="comment_img2">
                                        <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name2">
                                        <p>月野兔</p>
                                        <div id="host">题主</div>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg2">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1354</span>
                                    </div>
                                </div>
                                <h6>回复<span>@白龙：</span>HAHAHAHA..可以的呀</h6>
                            </div>
                        </div>
                        <!-- 填写评论 -->
                        <div class="reply" v-show="isShow">
                            <div class="reply_input">
                                <input type="text" placeholder="可以评论哦...">
                                <img src="../\assets\img\index\ask\signature@2x.png" alt="">
                            </div>
                        <div class="reply_comment">评论</div>
                    </div>
                </div>
                </div>
                <div class="wen_article2"></div>
                <div class="wen_article3"></div>
            </div>
            
        </swiper-slide>
        <!-- 第三 -->
        <swiper-slide class="wen_articlebox">
            <div class="ask_people">
                <div class="wen_article">
                    <div class="up_maximumbox">
                        <!-- 问答 -->
                        <div class="up_content">
                            <div class="up_top">
                                <div class="up_problem">
                                    问：深圳牙齿矫正全部下来要多少钱？
                                </div>
                                <div class="up_problemimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1NkZGMDlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1NkZGMTlFMjgxMUU5QTM0M0E4ODVCNTYyQTFCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjU2RkVFOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjU2RkVGOUUyODExRTlBMzQzQTg4NUI1NjJBMUJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hyBWTAAAA25JREFUeNrEV01IG1EQHtf4k5oYbYpV0QpCqRjEk6IIgkWKBy8W1IsiXjwoCMVLxUv1oD14Fk96EA9eehKRElDwUr2KIlQEUbSljTYxahJj7Hwv+7a7SZpuoIkDk03mvZ3vzcw3s5us454eYnnJ+pG1nbWQ0iM+Vjfre9avFv54xfqFtYjSKwjoLetr1iaFP6YzAKoXYE0ranozLW+UNNY0mdiUZKv5jY30YmWFns/MJFyHHeuOwcGUkRV6JLHEGSorqaA9WnaL0ymu2cXFWlTXbjdZysqip7ZatX3IjpSI30+h/f0Ugdmpo6PDaAOwagvu7VHJ2JhhvaChQaiU4NERfR8fTw04fH5O3vV1LRI4DF9e0vX2trYOx5Cc8nJS8vPF+j0rMpCjZiPlVIdPTsi7uKiRC8BwKm0QGQ3IlVddTRcLCxTY2RH7Y7NhGjgpEx2OP3X0ev8vuRIJyCWj+zk/T0W9vXR3diZ+y/QbDqiSLiVgW2cn5dXUUG5FhVYvkAsaCQQou6REOLa6XNHI2Yby6MVMneP6OKeqStRVf/MdR/RtcpJOBwboigfG2eioIJRwwOSSrYY6xw4g0xFfb2xQkHswdHgoWgtkidzexvWlPp1oNXSAZ3bWsMfR1UV2XvsxNfXviAFww+Cx6TM47OvT2uhiaUnr5SdtbVqrIVpw42/1Tkiu3NpaUmw2ylPrGMsBe2ur+C7bSAC3tIgDgwMgHaIFL4KcOdPABXxy6VwQiFMtx+nT/n7xHUNGgvpXV4WKUrHd1tysMT54cJC4U965XB/irFlZZCktFYMDJ76Ym6OHYJAiPh/dM4tDmG66gaIX7AvwWCUuRej4mHzLy+YjRiToTQf3q5dZrB8WN1tb2m+UJJcjk9EiI87hYQp7PHFEM/1YBCgIgyvEzlfx7GViSXEODYnUo+7Cmd0u5jfuk7aUgOWMxnBAxKJWu7viaq2r0/Zdud0asWRHeNfWoi9W3d0iA6aBsfnZyEjU8eam1lZwioOAqUixTDsERJIgGDBoKbQb0m4aGOmS0yqWQJjPAkiNGrW+BZGQpfp6bZ+HyYhDhk5PDQ8WA3/5hf4h0VNIKSyMGyIyKr0dNrA99mkFe7IhBGDvI7xp+hX1b0Wm5TOAJ1h/ZRAUWBMAxkxrYv0EUqYR8ErFANbBbwEGAPQrZE0qphsZAAAAAElFTkSuQmCC" alt="">
                                </div>
                            </div>
                            <div class="up_article">
                                从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽...
                                <span>查看全部</span>
                            </div> 
                            <div class="up_bottom">
                                <div class="up_img">
                                    <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                </div>
                                <div class="up_message">
                                    <p>月野兔</p>
                                    <span>2019-06-12</span>
                                </div>
                                <div class="up_folat">
                                    <div class="up_lf">
                                        <span @click="reply" v-show="btnText">回复</span>
                                    </div>
                                    <div class="up_rf" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>162</span>
                                    </div>
                                    <div class="share">
                                        <img src="../\assets\img\index\ask\share(5)@2x.png" alt="">
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="commenta">
                            <div class="commentator">
                                <div class="commentator_img">
                                    <img src="../\assets\img\index\ask\849404f95c0bf469a932801f6c3de88f@2x.png" alt="">
                                </div>
                                <div class="commen_by">
                                    <div class="commen_name">波妞</div>
                                    <div class="commen_age">
                                        22岁<img src="../\assets\img\index\ask\woman@2x.png" alt="">
                                    </div>
                                    <div class="commen_time">65分钟前</div>
                                </div>
                            </div>
                            <div class="commen_articlerf">
                                <div class="commen_article">
                                    从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽然面积不大，却对
                                    <span @click="reply" v-show="btnText">回复</span>
                                </div>
                                <div class="commen_bottom">
                                    <div class="commen_messageimg" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>6463</span>
                                    </div>
                                    <div class="commen_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1564</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="commenta">
                            <div class="commentator">
                                <div class="commentator_img">
                                    <img src="../\assets\img\index\ask\849404f95c0bf469a932801f6c3de88f@2x.png" alt="">
                                </div>
                                <div class="commen_by">
                                    <div class="commen_name">波妞</div>
                                    <div class="commen_age">
                                        22岁<img src="../\assets\img\index\ask\woman@2x.png" alt="">
                                    </div>
                                    <div class="commen_time">65分钟前</div>
                                </div>
                            </div>
                            <div class="commen_articlerf">
                                <div class="commen_articlebox">
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio01@2x.png" alt="">
                                    </div>
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio02@2x.png" alt="">
                                    </div>
                                    <div class="commen_articleimg">
                                        <img src="../\assets\img\index\ask\medical05_perio03@2x.png" alt="">
                                    </div>
                                </div>
                                <div class="commen_article">
                                    从美学的角度来说，牙齿、嘴唇、牙龈，包括面下的高度、颏部的形态、鼻唇角，这些都会影响人的面部美。鼻子一下的三分之一的脸，虽然面积不大，却对
                                    <span @click="reply" v-show="btnText">回复</span>
                                </div>
                                <div class="commen_bottom">
                                    <div class="commen_messageimg" @click="reply" v-show="btnText">
                                        <img src="../\assets\img\index\ask\ask_Message@2x.png" alt="">
                                        <span>6463</span>
                                    </div>
                                    <div class="commen_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1564</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 评论人 -->
                        <div class="comment_dialogue" v-show="isShow">
                            <div class="comment_top">
                                <div class="comment_center">
                                    <div class="comment_img">
                                        <img src="../\assets\img\index\ask\1a38f67b41f7d3e2723b3250ef681a9ce7c19b181bead-0BCBJh_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name">
                                        <p>白龙</p>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1553</span>
                                    </div>
                                </div>
                                <h6>可以讲中文吗?</h6>
                            </div>
                            <!-- 回复人 -->
                            <div class="comment_top2" v-show="isShow">
                                <div class="comment_center2">
                                    <div class="comment_img2">
                                        <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name2">
                                        <p>月野兔</p>
                                        <div id="host">题主</div>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg2">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1354</span>
                                    </div>
                                </div>
                                <h6>回复<span>@白龙：</span>HAHAHAHA..可以的呀</h6>
                            </div>
                            <div class="comment_top2">
                                <div class="comment_center2">
                                    <div class="comment_img2">
                                        <img src="../\assets\img\index\ask\a66f47c7f8dd5c94cdd260754d51c570a120d03a5d5c5-1tMp7Z_fw658@2x.png" alt="">
                                    </div>
                                    <div class="comment_name2">
                                        <p>月野兔</p>
                                        <div id="host">题主</div>
                                        <span>2019-6-12</span>
                                    </div>
                                    <div class="comment_loveimg2">
                                        <img src="../\assets\img\index\ask\ask_love@2x.png" alt="">
                                        <span>1354</span>
                                    </div>
                                </div>
                                <h6>回复<span>@白龙：</span>HAHAHAHA..可以的呀</h6>
                            </div>
                        </div>
                        <!-- 填写评论 -->
                        <div class="reply" v-show="isShow">
                            <div class="reply_input">
                                <input type="text" placeholder="可以评论哦...">
                                <img src="../\assets\img\index\ask\signature@2x.png" alt="">
                            </div>
                        <div class="reply_comment">评论</div>
                    </div>
                </div>
                </div>
                <div class="wen_article2"></div>
                <div class="wen_article3"></div>
            </div>
            
        </swiper-slide>
    </swiper>
</template>

<script>
export default {
    name:'ask_people',
    data () {
	      return {
            //评论输入框隐藏
	        isShow: false,
            btnText: "false",
            //轮播图
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
        //判断显示、隐藏
        reply(){
            this.isShow = !this.isShow
            if(this.isShow){
                this.btnText = "false"
            }else{
                this.btnText = "true"
            }
        },
        
    },
    
}
</script>

<style>

</style>
<style lang='scss'>
@import "../assets/css/ask_people.scss";
</style>