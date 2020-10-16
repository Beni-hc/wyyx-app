<template>
  <div>
    <div class="pad"></div>
    <div class="headPosition">
      <div>
        <img src="../../assets/HeadPop/HeadPop.png" alt="">
      </div>
      <div>
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
  div
    width 100px

    
    
</style>


