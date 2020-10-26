<template>
    <div class="pullDownList">
        <div class="listImg">
            <img
                src="../../../DATA/dataimg/worthimg/listimg/5ab5bdae90ed9e1466d41d005bd3d633.jpg"
                alt=""
            />
        </div>
        <div class="listText">今日热销,超级宝贝,年度爆款！一篇搜罗~</div>
        <div class="listUser">
            <div class="screenName">
                <img
                    src="../../../DATA/dataimg/worthimg/listimg/3769578a6595d8e3c61d1186123141e0.png"
                    alt=""
                />
                <div>好物大赏</div>
            </div>
            <div class="viewNumber">
                <img
                    src="../../../DATA/dataimg/worthimg/listimg/5097bc5f2e1eb15f2a32b56895db073a.png"
                    alt=""
                />
                <div>9435</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.pullDownList
    width 100%
    border-radius 16px
    background-color #fff
    overflow hidden
    margin-bottom 20px
    .listImg
        width 100%
        height auto
        img
            width 100%
    .listText
        width 100%
        padding 18px 16px 0 16px
        margin-bottom 17px
        font-size 28px
        color #333
    .listUser
        width 100%
        padding 17px 16px 24px 16px
        display flex
        flex-flow row nowrap
        justify-content space-between
        font-size 24px
        color #7f7f7f
        .screenName
            display flex
            justify-content flex-start
            align-items center
            img
                width 44px
                height 44px
                margin 2px
                border-radius 22px
            div
                margin-left 8px
        .viewNumber
            display flex
            justify-content flex-end
            align-items center
            img
                width 32px
                height 32px
</style>