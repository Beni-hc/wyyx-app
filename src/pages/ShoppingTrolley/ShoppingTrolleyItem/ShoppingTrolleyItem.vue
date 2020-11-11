<template>
    <div class="CommodityItem">
        <i
            @touchstart="isOptFor(IDIndex)"
            class="iconfont"
            :class="
                commodity.optFor
                    ? ['icon-check-copy', 'iconCheckRed']
                    : ['icon-check1', 'iconCheckQuan']
            "
        ></i>
        <div>
            <div class="itemTop">
                <div>
                    <img
                        :src="commodity.content.img"
                        :alt="commodity.content.title"
                    />
                </div>
                <div>
                    <div class="itemTitle">
                        <span>{{ commodity.content.title }}</span>
                    </div>
                    <div class="eachItem">
                        <span>{{ commodity.content.eachItem }}</span>
                        <i class="iconfont icon-arrow-down"></i>
                    </div>
                    <div class="itemPrice">
                        <span>¥{{ commodity.content.activityPrice }}</span>
                        <span v-if="!!commodity.content.originalPrice"
                            ><del
                                >¥{{ commodity.content.originalPrice }}</del
                            ></span
                        >
                    </div>
                    <div class="addNumber">
                        <div
                            @touchstart="addAndSubtract(false, IDIndex)"
                            class="iconfont icon-jianhao"
                        ></div>
                        <div>{{ commodity.count }}</div>
                        <div
                            @touchstart="addAndSubtract(true, IDIndex)"
                            class="iconfont icon-jiahao"
                        ></div>
                    </div>
                </div>
            </div>
            <div
                v-if="commodity.content.description.length > 0"
                class="itemBottom"
            >
                <div
                    v-for="(item, index) in commodity.content.description"
                    :key="index"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoppingTrolleyItem",
    props: {
        commodity: {
            type: Object,
            default: function () {
                return {
                    optFor: false,
                    count: 1,
                    content: {
                        img: require("./img/1_1.png"),
                        title: "谷风一木3层软抽面巾纸 6包/提",
                        eachItem: "6包/提",
                        activityPrice: 0,
                        originalPrice: 16.9,
                        description: [
                            "订单满159元可购买,还差159元",
                            "该商品不参加全场活动",
                            "该福利商品将于2020-11-12 14:05失效，请及时购买",
                        ],
                    },
                };
            },
        },
        IDIndex: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {};
    },
    methods: {
        isOptFor(IDIndex) {
            this.$emit("clickOptFor", IDIndex);
        },
        addAndSubtract(isAdd, IDIndex) {
            this.$emit("addAndSub", isAdd, IDIndex);
        },
    },
};
</script>

<style lang="stylus" scoped>
.iconCheckRed
    color #dc1a21
.iconCheckQuan
    color #d2d6d2
.CommodityItem
    background-color #fff
    padding-bottom 24px
    position relative
    top 0
    left 0
    &>i
        width 38px
        height 38px
        position absolute
        top 90px
        left 28px
        font-size 37px
    &>div
        padding-left 86px
.itemTop
    padding 24px 30px 0 0
    display flex
    &>div:first-child
        width 172px
        height 172px
        margin 0 20px 24px 0
        background-color #eee
        border-radius 5px
        img
            width 100%
            display block
    &>div:last-child
        width 442px
        height 196px
        position relative
        top 0
        left 0
.itemTitle
    font-size 28px
    color #333
.eachItem
    display inline-block
    margin-top 10px
    padding 0 10px
    border 1px solid #efefef
    background-color #fafafa
    border-radius 1px
    line-height 1.5
    span
        display inline-block
        max-width 326px
        font-size 24px
        color #7f7f7f
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        vertical-align middle
        line-height 1.5
    i
        display inline-block
        font-size 19px
        color #7f7f7f
        font-weight 700
        vertical-align middle
        margin 0 5px 0 9px
.itemPrice
    position absolute
    left 0
    bottom 18px
    span
        &:nth-child(1)
            font-size 28px
            color #333
            font-family 'PingFangSC-Medium'
        &:nth-child(2)
            font-size 24px
            color #999
            margin-left 8px
.addNumber
    position absolute
    right 2px
    bottom 20px
    display flex
    flex-flow row nowrap
    div
        width 59px
        height 52px
        flex-shrink 0
        text-align center
        line-height 52px
        color #ccc
        border-style solid
        border-color #e3e9e6
        &:nth-child(1)
            font-size 23px
            border-width 1px 0 1px 1px
            border-radius 4px 0 0 4px
        &:nth-child(2)
            width 58px
            font-size 24px
            border-width 1px
        &:nth-child(3)
            font-size 26px
            border-width 1px 1px 1px 0
            border-radius 0 4px 4px 0
.itemBottom
    padding 20px 0 20px 30px
    margin 0 30px 0 0
    background-color #f4f4f4
    color #7f7f7f
    font-size 24px
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