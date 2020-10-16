<template>
  <div class="top">
    <a href="javascript:;"></a>
    <div class="search">
      <i></i>
      <span>搜索商品，共37672款好物</span>
    </div>
    <div class="signIn">登录</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.top
  width 100%
  height 90px
  padding 16px 32px 16px 32px
  display flex
  justify-content space-between
  text-align center
  a
    width 140px
    height 36px
    margin 11px 20px 11px 0
    background-image url('../../assets/tubiao1.png')
    background-repeat no-repeat
    background-size 200px
    background-position -4px -4px
    background-origin content-box
  .search
    width 442px
    height 58px
    line-height 58px
    background-color #ededed
    border-radius 8px
    display flex
    justify-content center
    align-items center
    i
      width 34px
      height 34px
      margin 0 12px 0 0
      background-image url('../../assets/tubiao1.png')
      background-repeat no-repeat
      background-position -144px -56px
      background-size 250px
    span
      font-size 24px
      color #666666
  .signIn
    width 75px
    height 40px
    margin 9px 0 9px 15px
    line-height 40px
    text-align center
    border-radius 9px
    color #dd1a21
    border 1px solid #dd1a21
    font-size 24px
</style>
