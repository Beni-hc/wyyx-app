<template>
  <div>
    <div class="pad"></div>
    <div class="headPosition" >
      <div class='topApp' v-show="!true">
        <div>
          <div class='iconfont icon-label-lt'>
            <i class='iconfont icon-svg--copy'></i>
          </div>
        </div>
        <div>
          <img src="../../assets/HeadPop/HeadPop.png" alt="">
        </div>
      </div>
      <div class='bottomNav'>
        <searchBox />
        <scrollNavX />
      </div>
    </div>
  </div>
</template>
<script>
import searchBox from "./searchBox";
import scrollNavX from "./scrollNavX";
export default {
  components: {
    searchBox,
    scrollNavX,
  },
};
</script>
<style lang="stylus" scoped>
.pad
  height 252px
.headPosition
  width 100%
  position fixed !important
  top 0
  left 0
  background-color #fff
  z-index 20 
.topApp
  width 100%
  height 104px
  position relative
  top 0
  left 0
  div
    &:first-child
      height 100%
      position absolute
      top 0
      left 0
      div
        position absolute
        top -1px
        left -1px
        font-size 38px
        color #5b5b5b
        i 
          position absolute
          top -1px
          left -3px
          font-size 30px
          color #adadad
    &:last-child
      width 100%
      height 100%
      img 
        width 100%
        height 100%



</style>


