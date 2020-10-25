<template>
    <div class="general">
        <div class="generalLeft">
            <img src="../../assets/house.png" />
        </div>
        <div class="generalCenter">值得买</div>
        <div class="generalRight">
            <img class="generalimg" src="../../assets/fangdaj.png" alt="" />
            <img src="../../assets/gouwuche.png" alt="" />
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.general
    height 100px
    padding 0 24px
    position relative
    top 0
    bottom 0
    left 0
    right 0
    display flex
    justify-content space-between
    align-items center
.generalLeft
    margin-right 86px
    img
        width 50px
        height 50px
        padding 4px 4px 0px 0
.generalCenter
    font-size 36px
.generalRight
    margin-right 3px
    img
        width 50px
        height 50px
        padding 4px 2px 0px 2px
.generalimg
    margin-right 36px
</style>
