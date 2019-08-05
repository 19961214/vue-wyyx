<template>
  <div>
    <header>
      <div class="cart_header">
        <div class="cart_header_top">
          <span class="text1">购物车</span>
          <span class="text2">领券</span>
        </div>
        <ul class="cart_header_bottom">
          <li>
            <span>30天无忧退货</span>
          </li>
          <li>
            <span>48小时快速退款</span>
          </li>
          <li>
            <span>满88元包邮</span>
          </li>
        </ul>
      </div>
    </header>
    <div>
      <div class="cart_content">
        <img src="../../images/4/car.png" alt />
        <span>去添加点什么吧</span>
        <div>登录</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
header
  width 100%
  background-color white
  .cart_header
    width 100%
    height 100%
    position relative
    .cart_header_top
      width 100%
      overflow hidden
      box-sizing border-box
      padding 10px
      .text1
        font-size 15px
        color #5f5f5f
      .text2
        font-size 13px
        float right
        margin-right 15px
        color #c5595d
    .cart_header_bottom
      width 100%
      height 28px
      background-color #f1f3f4
      // position absolute
      // left 0
      // bottom 0
      display flex
      li
        font-size 12px
        flex 1
        display flex
        align-items center
        justify-content center
        span
          position relative
          &:before
            content ''
            width 4px
            height 4px
            border 1px solid #cccccc
            border-radius 50%
            position absolute
            top 50%
            left -10px
            transform translateY(-50%)
.cart_content
  width 100%
  height 450px
  display flex
  flex-direction column
  align-items center
  justify-content center
  img
    width 40%
  span
    font-size 13px
    color #999999
  div
    width 60%
    height 40px
    background-color #b4282d
    text-align center
    line-height 40px
    color white
    margin-top 20px
</style>
