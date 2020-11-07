<template>
    <div>
        <Heading>
            <div class="headNav">
                <div class="leftTitle">购物车</div>
                <div class="rightText">领券</div>
            </div>
        </Heading>
        <div class="boxBottom">
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
        <div class="shoppingCart">
            <div><img src="./img/gouwuche.png" alt="" /></div>
            <div>登录</div>
        </div>
    </div>
</template>
<script>
import Heading from "../../components/Heading/Heading";
export default {
    name: "ShoppingTrolley",
    data() {
        return {};
    },
    components: {
        Heading,
    },
};
</script>
<style lang="stylus" scoped>
.boxBottom
    margin-bottom 700px
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
        font-size 30px
        color #dd1a21
        margin-right 30px
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