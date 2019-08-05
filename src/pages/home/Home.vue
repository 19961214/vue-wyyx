<template>
  <div>
    <header class="header">
      <div class="header_top">
        <h3 class="header_title">网易严选</h3>
        <router-link to="/seach">
          <div class="header_input">
            <span class="iconfont icon-seachx"></span>
            <p>搜索商品，共21607款好物</p>
          </div>
        </router-link>
        <span class="header_btn">登录</span>
      </div>
      <div class="header_bottom">
        <ul class="header_ul">
          <router-link
            v-for="(item,index) in this.categoryList"
            :key="index"
            :to="item.path+item.id"
            active-class="active"
            tag="li"
            class="header_list"
          >{{item.title}}</router-link>

          <!-- <NavLink to={item.path + item.id} className="header_list" key={index}>
                    <li>{item.title}</li>
          </NavLink>-->
        </ul>
      </div>
      <div class="header_arrows">
        <span class="iconfont icon-xialajiantou"></span>
      </div>
    </header>
    <swiper :imgs="imgs" />
    <div class="home_content">
      <div>
        <div class="home_content_top">
          <span class="iconfont icon-seachx"></span>
          <p>网易自营品牌</p>
        </div>
        <div class="home_content_top">
          <span class="iconfont icon-seachx"></span>
          <p>30天无忧退货</p>
        </div>
        <div class="home_content_top">
          <span class="iconfont icon-seachx"></span>
          <p>48小时快速退款</p>
        </div>
      </div>

      <div class="home_content_centre">
        <ul>
          <li>
            <img src="../../images/2/1.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/2.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/3.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/4.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/5.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/6.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/7.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/8.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/9.png" alt />
            <span>新品发布</span>
          </li>
          <li>
            <img src="../../images/2/10.gif" alt />
            <span>新品发布</span>
          </li>
        </ul>
        <div class="home_content_bottom"></div>
      </div>
    </div>
    <div class="home_content_bottom">
      <div class="content_bottom_top">
        <span class="ledgement"></span>
        <span>新人专享礼</span>
        <span class="ledgement"></span>
      </div>
      <div class="content_bottom">
        <div class="content_bottom_left">
          <p>新人专享礼包</p>
          <img src="../../images/3/1.png" alt />
        </div>
        <div class="content_bottom_right">
          <div class="right_top">
            <p>福利社</p>
            <p class="text2">今日特价</p>
            <img src="../../images/3/3.png" alt />
          </div>
          <div class="right_bottom">
            <p>新人拼团</p>
            <div>1元起包邮</div>
            <img src="../../images/3/4.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from "../../images/1/1.jpg";
import img2 from "../../images/1/2.jpg";
import img3 from "../../images/1/3.jpg";
import img4 from "../../images/1/4.jpg";
import img5 from "../../images/1/5.jpg";
import img6 from "../../images/1/6.jpg";
import img7 from "../../images/1/7.jpg";
import img8 from "../../images/1/8.jpg";
import swiper from "../../components/swiper/index";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      imgs: [img1, img2, img3, img4, img5, img6, img7, img8],
      categoryList: [
        {
          path: "/home/goods",
          title: "推荐",
          id: ""
        },
        {
          path: "/home/item/list",
          title: "居家生活",
          id: 2
        },
        {
          path: "/home/item/list",
          title: "服饰鞋包",
          id: 3
        },
        {
          path: "/home/item/list",
          title: "美食酒水",
          id: 4
        },
        {
          path: "/home/item/list",
          title: "个护清洁",
          id: 5
        },
        {
          path: "/home/item/list",
          title: "母婴亲子",
          id: 6
        },
        {
          path: "/home/item/list",
          title: "运动旅游",
          id: 7
        },
        {
          path: "/home/item/list",
          title: "数码家电",
          id: 8
        },
        {
          path: "/home/item/list",
          title: "全球特色",
          id: 9
        }
      ]
    };
  },
  mounted() {
    new BScroll(".header_bottom", {
      click: true,
      scrollX: true
    });
  },
  components: {
    swiper
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  width 100%
  background-color white
  .header_top
    width 100%
    height 35px
    display flex
    justify-content space-around
    align-items center
    .header_title
      margin-left 5px
      font-size 15px
      font-weight bold
    .header_input
      width 200px
      height 25px
      background-color #ededed
      border-radius 5px
      display flex
      justify-content center
      align-items center
      span
        font-size 15px
        margin-right 5px
      p
        font-size 12px
        color #666
    .header_btn
      width 25px
      height 15px
      line-height 15px
      border 1px solid #b4282d
      color #b4282d
      padding 3px
      font-size 12px
      border-radius 4px
      margin-right 8px
  .header_bottom
    width 80%
    height 20px
    margin-top 5px
    margin-left 15px
    position relative
    overflow hidden
    .header_ul
      margin-left 15px
      width 230%
      display flex
      .header_list
        margin-right 19px
        font-size 12px
        padding-bottom 7px
        &.active
          color #b4282d
          border-bottom 2px solid red
  .header_arrows
    width 10%
    height 20px
    float right
    transform translateY(-20px)
.home_content
  width 100%
  overflow hidden
  .home_content_top
    width 33.33%
    height 25px
    float left
    display flex
    justify-content center
    align-items center
    span
      font-size 11px
      color red
    p
      font-size 11px
      margin-left 2px
      color #333
  .home_content_centre
    width 100%
    height 160px
    margin-top 20px
    ul
      width 100%
      height 160px
      li
        width 20%
        height 70px
        display flex
        flex-direction column
        justify-content center
        align-items center
        float left
        img
          width 50px
          height 50px
        span
          font-size 10px
          color #333
          margin-top 4px
  .home_content_bottom
    width 100%
    height 12px
    margin-top -12px
    background-color #ccc
.home_content_bottom
  width 100%
  height 300px
  .content_bottom_top
    width 100%
    height 35px
    display flex
    justify-content center
    align-items center
    span
      font-size 14px
      margin-left 10px
      display inline-block
    .ledgement
      width 10px
      height 2px
      background-color black
  .content_bottom
    width 100%
    display flex
    justify-content center
    .content_bottom_left
      width 46%
      height 185px
      background-color #F9E9CF
      position relative
      p
        font-size 14px
        position absolute
        top 10%
        left 7%
      img
        width 80%
        position absolute
        left 10%
        bottom 12%
    .content_bottom_right
      margin-left 1px
      width 46%
      height 185px
      .right_top
        width 100%
        height 50%
        background-color #F9E9CF
        position relative
        p
          font-size 14px
          position absolute
          left 10%
          top 10%
        .text2
          font-size 8px
          color #7e8c8d
          position absolute
          left 10%
          top 28%
        img
          width 60%
          position absolute
          right 2%
          bottom 4%
      .right_bottom
        margin-top 1%
        width 100%
        height 49%
        background-color #F9E9CF
        position relative
        p
          font-size 13px
          position absolute
          left 10%
          top 10%
        div
          display inline-block
          background-color #CBB693
          font-size 10px
          color white
          position absolute
          left 10%
          top 28%
        img
          width 70%
          position absolute
          right -3%
          bottom -5%
</style>
