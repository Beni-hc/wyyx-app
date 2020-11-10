<template>
    <div>
        <Heading>
            <div class="headNav">
                <div class="leftTitle">购物车</div>
                <div :class="true ? 'rightTextActive' : 'rightText'">
                    <span>领券</span>
                    <span v-show="true">编辑</span>
                </div>
            </div>
        </Heading>
        <div>
            <ul class="description">
                <li>
                    <i></i>
                    <span>30天无忧退货</span>
                </li>
                <li>
                    <i></i>
                    <span>48小时快速退款</span>
                </li>
                <li>
                    <i></i>
                    <span>满99元免邮费</span>
                </li>
            </ul>
        </div>
        <!-- 未登录时显示登录提示 -->
        <div v-show="false" class="shoppingCart">
            <div><img src="./img/gouwuche.png" alt="" /></div>
            <div>登录</div>
        </div>
        <!-- 购物车每一项 -->
        <ShoppingTrolleyItem />
    </div>
</template>
<script>
import Heading from "../../components/Heading/Heading";
import ShoppingTrolleyItem from "./ShoppingTrolleyItem/ShoppingTrolleyItem";
export default {
    name: "ShoppingTrolley",
    data() {
        return {};
    },
    components: {
        Heading,
        ShoppingTrolleyItem,
    },
};
</script>
<style lang="stylus" scoped>
.headNav
    width 100%
    height 88px
    padding 0 30px
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #fff
    .leftTitle
        padding-bottom 5px
        font-size 36px
        color #333
    .rightText
        span
            font-size 30px
            color #dd1a21
            margin-right 30px
    .rightTextActive
        width 162px
        display flex
        justify-content space-between
        align-items center
        span
            &:first-child
                font-size 24px
                padding 4px 12px
                color #fff
                background-size 100%
                background-image linear-gradient(-45deg, #FC865F 0, #FC625F 100%)
                background-repeat no-repeat
                border-radius 2px
                position relative
                top 0
                left 0
                &::before, &::after
                    content ''
                    width 16px
                    height 16px
                    position absolute
                    top 50%
                    background-color #fff
                    transform translateY(-50%)
                &::before
                    left -10px
                    border-top-right-radius 50%
                    border-bottom-right-radius 50%
                &::after
                    right -10px
                    border-top-left-radius 50%
                    border-bottom-left-radius 50%
            &:last-child
                font-size 30px
                color #333
.description
    width 100%
    height 70px
    padding 0 30px
    background-color #eee
    display flex
    justify-content space-between
    align-items center
    li
        display flex
        align-items center
        i
            width 10px
            height 10px
            margin-right 6px
            background-image url('./img/yuanquan.png')
            background-repeat no-repeat
            background-size cover
        span
            font-size 24px
            color #666
.shoppingCart
    width 100%
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index -1
    background-color #f4f4f4
    &>div:first-child
        width 248px
        height 264px
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        padding-bottom 16px
        img
            width 100%
    &>div:last-child
        width 480px
        height 92px
        position absolute
        top 400px
        left 0
        right 0
        bottom 0
        font-size 30px
        margin auto
        color #fff
        background-color #dd1a21
        border-radius 5px
        text-align center
        line-height 92px
</style>