<template>
  <div>
    <div class="me">
      <div class="me_top">
        <router-link to="/home">
          <span class="iconfont icon-home left"></span>
        </router-link>
        <h3>网易严选</h3>
        <router-link to="/seach">
          <span class="iconfont icon-seachx right2"></span>
        </router-link>
        <router-link to="/cart">
          <span class="iconfont icon-car right1"></span>
        </router-link>
      </div>
      <div class="me_content1">
        <img src="../../images/4/9.png" alt />
      </div>
      <div class="me_content2">
        <div class="phone">手机号快捷登陆</div>
        <div class="email">邮箱账号登陆</div>
      </div>
      <div class="me_bottom">
        <ul>
          <li>微信</li>
          <li>QQ</li>
          <li>微博</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.me
  width 100%
  height 100%
  .me_top
    width 100%
    height 40px
    background-color white
    display flex
    align-items center
    justify-content center
    position relative
    .left
      color black
      font-size 25px
      position absolute
      top 8px
      left 10px
    .right1
      font-size 25px
      color black
      position absolute
      top 8px
      right 10px
    .right2
      color black
      font-size 25px
      position absolute
      top 8px
      right 50px
    h3
      font-size 20px
      font-weight bold
  .me_content1
    width 100%
    height 250px
    display flex
    align-items center
    justify-content center
    img
      width 50%
  .me_content2
    width 100%
    height 200px
    display flex
    flex-direction column
    align-items center
    .phone
      width 90%
      height 40px
      border-radius 5px
      background-color #dd1a21
      text-align center
      line-height 40px
      color white
      font-size 13px
    .email
      width 90%
      height 40px
      border-radius 5px
      background-color #dd1a21
      margin-top 15px
      text-align center
      line-height 40px
      color white
      font-size 13px
  .me_bottom
    width 100%
    height 50px
    ul
      width 100%
      display flex
      justify-content center
      li
        width 80px
        height 18px
        color #7f7f7f
        font-size 13px
        border-right 1px solid #ccc
        text-align center
        line-height 18px
        &:last-child
          border none
</style>
