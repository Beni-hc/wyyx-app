<template>
  <div class="bottom">
    <div v-show="isShow" class="navHead">全部频道</div>
    <div :class="isShow ? 'leftListShow' : 'leftList'">
      <div
        :class="isShow ? 'navListShow' : 'navList'"
        :style="roll"
        @touchstart.stop.prevent="rollStart($event)"
        @touchmove.stop.prevent="rollMove($event)"
        @touchend.stop.prevent="rollEnd($event)"
      >
        <span
          v-for="(lst, index) in listNav"
          :key="lst"
          :class="[
            isShow
              ? ['spanShow', { ['textShow']: colorIndex === index }]
              : ['isSpan', { ['red redText']: colorIndex === index }],
          ]"
          :data_index="index"
          >{{ lst }}</span
        >
        <!-- <span :class="isShow ? 'spanShow' : 'isSpan' ">居家生活</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">服饰鞋包</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">美食酒水</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">个护清洁</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">巨婴亲子</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">运动旅行</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">数码家电</span>
                            <span :class="isShow ? 'spanShow' : 'isSpan' ">严选全球</span> -->
      </div>
    </div>
    <div class="rightList">
      <div></div>
      <div @touchstart.stop.prevent="isShow = !isShow">
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="stylus" scoped>
.bottom
  width 100%
  height 57px
  position relative
  top 0
  left 0
  z-index 100
  .navHead
    width 720px
    height 57px
    line-height 57px
    margin-left 33px
    font-size 24px
  .rightList
    width 160px
    height 57px
    display flex
    position absolute
    top 0
    right 0
    z-index 2
    &>div:first-child
      width 60px
      height 57px
      background linear-gradient(to right, rgba(250, 255, 255, 0), rgba(250, 255, 255, 0.7), rgba(255, 255, 255, 1))
    &>div:last-child
      width 100px
      height 57px
      display flex
      justify-content center
      align-items center
      background-color #fff
      div
        width 32px
        height 20px
        background-image url('../../assets/tubiao2.png')
        background-origin content-box
        background-repeat no-repeat
        background-position -31px -4px
        background-size 86px
.leftListShow
  width 100%
  height 100%
.navListShow
  width 100%
  height 310px
  padding 28px 30px 40px
  display flex
  flex-direction row
  flex-flow wrap
  justify-content space-between
  align-content space-between
  background-color #fff
.spanShow
  width 150px
  height 57px
  text-align center
  line-height 57px
  border 1px solid #e9e9e9
  border-radius 8px
  font-size 24px
  background-color #fafafa
.textShow
  border 1px solid #f2a9ac
  color #dd1a21
.leftList
  width 100%
  height 100%
  overflow hidden
.navList
  width 1400px
  margin-left 33px
  height 57px
  display flex
  flex-direction row
  flex-wrap nowrap
  align-items center
  justify-content space-between
  font-size 24px
  transition-property transform
.isSpan
  position relative
  top 0
  left 0
  margin 0 18px
.red::after
  content ''
  position absolute
  left -16px
  bottom -12px
  width 100%
  padding 0 16px
  height 4px
  background-color #dd1a21
.redText
  color #dd1a21

</style>

