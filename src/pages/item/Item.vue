<template>
  <div>
    <div class="item_header">
      <router-link to="/seach"  class="item_header_input">
          <span class="iconfont icon-seachx"></span>
          <p>搜索商品, 共21703款好物</p>
      </router-link>
    </div>
    <div class="item_content">
      <div class="item_content_left">
        <ul>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
        </ul>
      </div>
      <div class="item_content_right">
        <div class="content_right_top">
          <img src="../../images/5/1.jpg" alt />
        </div>
        <ul class="content_right_bottom">
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="../../images/5/2.png" alt />
            <span>员工精选好货</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    new BScroll(".item_content_left", {
      click: true,
      scrollY: true
    });
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
body
  width 100%
  height 100%
  background-color white
  .item_header
    width 100%
    height 40px
    border-bottom 1px solid #f2f2f2
    background-color #ffffff
    padding 15px
    box-sizing border-box
    display flex
    align-items center
    justify-content center
    .item_header_input
      width 100%
      height 25px
      border-radius 5px
      background-color #ededed
      display flex
      justify-content center
      align-items center
      span
        font-size 15px
        color #797979
        margin-right 4px
      p
        font-size 12px
        color #666666
  .item_content
    width 100%
    background-color #ffffff
    position absolute
    top 40px
    left 0
    display flex
    .item_content_left
      width 23%
      height 500px
      padding-bottom 40px
      box-sizing border-box
      overflow hidden
      background-color white
      ul
        width 100%
        padding-bottom 20px
        margin-top 25px
        li
          width 100%
          height 25px
          font-size 12px
          color #333333
          text-align center
          margin-top 14px
          line-height 25px
          &:first-child
            border-left 2px solid #ab2b2b
            color #ab2b2b
    .item_content_right
      width 76%
      height 100%
      .content_right_top
        width 90%
        height 85px
        margin-top 12px
        img
          width 100%
          margin-left 15px
      .content_right_bottom
        width 90%
        margin-left 15px
        margin-top 5px
        li
          width 33.33%
          float left
          img
            width 90%
            transform translateY(10px)
          span
            color #333333
            font-size 10px
</style>
