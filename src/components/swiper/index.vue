<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in imgs" :key="index">
          <img :src="img" alt />
        </div>
        <!-- {
            this.props.imgs.map((item,index) => {
              return <div className="swiper-slide" key={index}><img src={item} alt=""/></div>
            })
        }-->
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import "../../../public/css/swiper.css";
import Swiper from "swiper";
export default {
  props: ["imgs"],
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
  width 100%
  height 100%
  margin-left auto
  margin-right auto
  transform translateY(-15px)
  .swiper-slide
    width 100%
    text-align center
    font-size 18px
    background #fff
    display -webkit-box
    display -ms-flexbox
    display -webkit-flex
    display flex
    -webkit-box-pack center
    -ms-flex-pack center
    -webkit-justify-content center
    justify-content center
    -webkit-box-align center
    -ms-flex-align center
    -webkit-align-items center
    align-items center
    img
      width 100%
</style>
