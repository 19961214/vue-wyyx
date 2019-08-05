<template>
  <div>
    <footer class="footer">
      <ul>
        <!-- active-class 点击样式 -->
        <!-- tag 声明式路由编译后的标签 -->
        <router-link to="/home" tag="li" active-class="active">
          <span class="iconfont icon-home"></span>
          <span class="footer_text">首页</span>
        </router-link>

        <router-link to="/item" tag="li" active-class="active">
          <span class="iconfont icon-classify"></span>
          <span class="footer_text">分类</span>
        </router-link>

        <router-link to="/topic" tag="li" active-class="active">
          <span class="iconfont icon-areachart"></span>
          <span class="footer_text">识物</span>
        </router-link>

        <router-link to="/cart" tag="li" active-class="active">
          <span class="iconfont icon-car"></span>
          <span class="footer_text">购物车</span>
        </router-link>

        <router-link to="/me" tag="li" active-class="active">
          <span class="iconfont icon-user"></span>
          <span class="footer_text">个人</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  width 100%
  height 45px
  background-color white
  position fixed
  bottom 0
  left 0
  ul
    width 100%
    height 45px
    li
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 20%
      height 45px
      float left
      color #868c8d
      &.active
        color red
      span
        font-size 20px
      .footer_text
        margin-top 2px
        font-size 13px
</style>
