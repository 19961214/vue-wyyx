<template>
  <div>
    <div class="seach">
      <div class="seach_top">
        <div class="seach_input">
          <span class="iconfont icon-seachx"></span>
          <input
            type="text"
            :placeholder="rotItem.defaultKeyword?rotItem.defaultKeyword.keyword:''"
            v-model="timeValue"
          />
        </div>
        <span @click="$router.back(-1)">取消</span>
      </div>
    </div>
    <div class="seach_bottom" v-show="!timeValue">
      <p class="seach_title">热门搜索</p>
      <ul>
        <li v-for="(item,index) in rotItem.hotKeywordVOList" :key="index">{{item.keyword}}</li>
        <!-- {
              this.state.rotWord.map((item,index)=>{
                return <li key={index}>{item.keyword}</li>
              })
        }-->
      </ul>
    </div>
    <div class="seach_list" v-show="timeValue">
      <ul>
        <li v-for="(item,index) in reqList" :key="index" >{{item}}</li>
        <!-- {
              this.state.data.map((item,index)=>{
                return <li key={index}>{item}</li>
              })
        }-->
      </ul>
    </div>
  </div>
</template>
<script>
import { reqRotItem, reqSeachList } from "../../api/index";
export default {
  data() {
    return {
      timeValue: "",
      rotItem: [],
      reqList:[]
    };
  },
  methods: {},
  watch: {
    async timeValue() {
      const result = await reqSeachList(this.timeValue);
      //console.log(result);
      this.reqList = result.data
    }
  },

  async mounted() {
    const result = await reqRotItem();
    //console.log(result)
    //console.log(result.data)
    this.rotItem = result.data;
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.seach
  width 100%
  height 40px
  background-color white
  .seach_top
    width 100%
    height 25px
    position relative
    display flex
    justify-content space-around
    span
      font-size 13px
      margin-top 7px
      line-height 25px
    .seach_input
      width 85%
      height 25px
      background-color #f4f4f4
      display inline-block
      margin-top 7px
      // margin-left 12px
      input
        width 85%
        background-color #f4f4f4
        outline-style none
        height 15px
        font-size 12px
      span
        color #8b8b8b
        line-height 25px
        margin-left 8px
        margin-right 10px
.seach_bottom
  width 100%
  height 240px
  background-color white
  // margin-top 8px
  position relative
  p
    color #8b8b8b
    font-size 12px
    position absolute
    top 10px
    left 10px
  ul
    width 100%
    height 150px
    transform translateY(20px)
    li
      display inline-block
      font-size 13px
      border 1px solid #8b8b8b
      border-radius 5px
      padding 5px
      margin 10px
.seach_list
  width 100%
  background-color white
  ul
    background-color white
    padding-left 10px
    li
      line-height 40px
      width 100%
      height 40px
      border-bottom 2px solid #ececec
      color #333333
      font-size 12px
      &:last-child
        border-bottom 2px solid #ffffff
</style>
