<template>
  <div>
    <header>
      <div class="header_top">
        <router-link to="/home">
          <span class="iconfont icon-home icon1"></span>
        </router-link>
        <span class="text1">发现</span>
        <span class="text2">甄选家</span>
        <router-link to="/cart">
          <span class="iconfont icon-car icon2"></span>
        </router-link>
        <router-link to="/seach">
          <span class="iconfont icon-seachx icon3"></span>
        </router-link>
      </div>
      <div class="header_bottom2">
        <ul>
          <li>居家</li>
          <li>阿斯顿</li>
          <li class="active">推荐</li>
          <li>的速度111</li>
          <li>居家2222</li>
          <li>阿斯顿</li>
          <li>分公司的</li>
          <li>的速度</li>
        </ul>
      </div>
    </header>
    <div class="wrap">
      <div class="wrap_content">
        <div class="bigImg">
          <img src="../../images/4/1.jpg" alt />
        </div>

        <div v-for="(item,index) in datas" :key="index">
          <div class="topic_content_one" v-if="item.type===0">
            <div class="content_one_top">
              <img :src="item.avatar" alt />
              <span>{{item.nickname}}</span>
            </div>
            <p>{{item.title}}</p>
            <img :src="item.picUrl" alt />
            <div class="content_one_bottom">
              <span class="iconfont icon-seachx"></span>
              <span>{{item.readCount|date-format}}人看过</span>
            </div>
          </div>
          <!-- //222222222222222 -->
          <div class="topic_content_two" v-if="item.type===1 || item.type===2">
            <div class="content_two_left">
              <div>
                <img :src="item.avatar" alt />
                <span>{{item.nickname}}</span>
              </div>
              <p class="text1">{{item.title}}</p>
              <p class="text2">{{item.subTitle}}</p>
              <div class="two_left_bottom">
                <span class="iconfont icon-seachx"></span>
                <span>{{item.readCount|date-format}}人看过</span>
              </div>
            </div>
            <div class="content_two_right">
              <img :src="item.picUrl" alt />
            </div>
          </div>
        </div>

        <div class="aaa"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      // datas: [],
      page: 1
    };
  },
  computed: {
    ...mapState(['datas'])
  },
  mounted() {
    //console.log(this)
    //头部nav初始化滑动
    new BScroll(".header_bottom2", {
      click: true,
      scrollX: true
    });
//调用reqData和initScroll方法
    //this.reqData(this.page, 2);
    //console.log(this.datas);
    this.$store.dispatch('reqData',this.page,2)
    this.initScroll();
  },
  methods: {
    //reqData封装了请求数据的方法，初始化获取显示数据
    //async reqData(page, size) {
      // const result = await reqTopic(this.num, 2);
      //console.log(result.data.result)
      // const final = result.data.result;
      //console.log(final)
      // final.forEach((item, index) => {
      //   this.datas = [...this.datas, ...item.topics];
      // });
    initScroll() {
      //$nextTick方法当界面发生dom变化或跟新的时候触发后面的回掉函数
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(".wrap", {
            click: true,
            scrollX: true,
            scrollbar: true,
            //probeType滑动组件提供的方法，可以得到实时滑动的距离值
            probeType: 3
          });
        } else {
          //refresh是滑动插件里告诉我们需要调用，防止数据更新滑动出现问题
          this.scroll.refresh();
        }
        //touchEnd当手指抬起的时候触发，计算滑动的距离
        this.scroll.on("touchEnd", (pos) => {
          if (this.scroll.maxScrollY > pos.y - 10) {
            this.page++;
            //this.reqData(this.page, 2);
             this.$store.dispatch('reqData',this.page,2)
            this.scroll.refresh();
          }
        });
      });
    }
  }
};
</script>
import {reqTopic} from '../../api/index';
<style lang="stylus" rel="stylesheet/stylus" scoped>
header
  width 100%
  height 70px
  .header_top
    width 100%
    height 40px
    background-color white
    line-height 40px
    text-align center
    box-sizing border-box
    border-bottom 1px solid #d9d9d9
    .iconfont
      font-size 23px
      color black
      float right
    .icon1
      float left
      margin-left 10px
    .icon2
      margin-right 10px
    .icon3
      margin-right 15px
    .text1
      font-size 17px
      color #b4282d
      font-weight bold
      margin-left 30px
    .text2
      font-size 12px
      margin-left 10px
      color #7f7f7f
  .header_bottom2
    width 100%
    height 30px
    background-color white
    box-sizing border-box
    border-bottom 1px solid #d9d9d9
    overflow hidden
    ul
      height 30px
      width 200%
      li
        height 26px
        line-height 26px
        color #7f7f7f
        font-size 13px
        float left
        margin 0 15px
        padding 1px
      .active
        color red
        border-bottom 1px solid red
        z-index 10
.wrap
  width 100%
  height 480px
  overflow hidden
  .wrap_content
    width 100%
    .bigImg
      width 100%
      height 190px
      background-color #eeeeee
      margin-top 10px
      display flex
      justify-content center
      align-items center
      img
        width 90%
    .topic_content_one
      box-sizing border-box
      width 100%
      margin-top 10px
      padding 15px
      padding-top 17px
      background-color #eeeeee
      .content_one_top
        width 100%
        display flex
        align-items center
        img
          display block
          width 25px
          border-radius 50%
          margin-left 5px
        span
          font-size 13px
          margin-left 10px
      p
        font-size 15px
        margin-top 10px
      img
        width 100%
        margin-top 10px
        border-radius 5px
      .content_one_bottom
        margin-top 10px
        display flex
        align-items center
        span
          font-size 6px
          color #999999
        .iconfont
          font-size 13px
          margin-right 3px
    .topic_content_two
      width 100%
      background-color #eeeeee
      margin-top 10px
      box-sizing border-box
      padding 10px
      overflow hidden
      .content_two_left
        width 57%
        float left
        div
          display flex
          align-items center
          img
            width 25px
            border-radius 50%
            margin-left 5px
          span
            font-size 13px
            margin-left 10px
        .text1
          margin-top 10px
          margin-left 5px
          font-size 15px
        .text2
          margin-top 8px
          margin-left 5px
          font-size 12px
          color #7f7f7f
        .two_left_bottom
          margin-top 10px
          display flex
          align-items center
          .iconfont
            font-size 14px
          span
            font-size 6px
      .content_two_right
        width 38%
        float right
        img
          display block
          margin 0 auto
          border-radius 5px
          width 95%
    .aaa
      width 100%
      height 50px
</style>
