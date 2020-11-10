<template>
    <div class="CommodityItem">
        <i></i>
        <div>
            <div class="itemTop">
                <img src="" alt="" />
                <div>
                    <div class="itemTitle">
                        <span>谷风一木3层软抽面巾纸 6包/提</span>
                    </div>
                    <div class="eachItem">
                        <span>6包/提</span>
                        <i></i>
                    </div>
                    <div class="itemPrice">
                        <span>¥0</span>
                        <span>¥16.9</span>
                    </div>
                    <div class="addNumber">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </div>
            </div>
            <div class="itemBottom">
                <div>订单满159元可购买,还差159元</div>
                <div>该商品不参加全场活动</div>
                <div>该福利商品将于2020-11-12 14:05失效，请及时购买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.CommodityItem
    width 100%
    height 100%
    background-color #fff
    &>div
        padding-left 86px
.itemTop
    padding 12px 15px 0 0
    img
        width 172px
        height 172px
        display block
        margin 0 20px 48px 0
    &>div
        width 442px
.itemBottom
    padding 20px 0 20px 30px
    margin 0 30px 24px 0
    background-color #f4f4f4
    color #7f7f7f
    div
        padding-left 16px
        margin-right 40px
        position relative
        top 0px
        left 0px
        &::before
            content ''
            width 8px
            height 8px
            position absolute
            top 50%
            left 0px
            background-color #7f7f7f
            border-radius 50%
            transform translateY(-50%)
</style>