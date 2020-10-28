<template>
    <div class="bodyBox">
        <heading>
            <generalNav
                :leftWidth="52"
                :leftHeight="52"
                :rightWidth="47"
                :rightHeight="47"
                :boxHeight="88"
                ><i class="logo"></i
            ></generalNav>
        </heading>
        <div class="logoBox">
            <div class="logoImg">
                <img src="./img/wyyx_1.png" alt="" />
            </div>
            <div class="buttonBox">
                <div>
                    <i class="iconfont icon-shouji1"></i>
                    <span>手机号快捷登录</span>
                </div>
                <div>
                    <i class="iconfont icon-youjian1"></i>
                    <span>邮箱账号登录</span>
                </div>
            </div>
        </div>
        <div class="footerBox">
            <div>
                <i class="iconfont icon-weixin-copy"></i>
                <span>微信</span>
            </div>
            <div>
                <i class="iconfont icon-QQ-copy"></i>
                <span>QQ</span>
            </div>
            <div>
                <i class="iconfont icon-sinaweibo-copy"></i>
                <span>微博</span>
            </div>
        </div>
    </div>
</template>
<script>
import heading from "../../components/Heading/Heading";
import generalNav from "../../components/Heading/generalNav";
export default {
    name: "PersonalInfo",
    components: {
        heading,
        generalNav,
    },
};
</script>
<style lang="stylus" scoped>
.bodyBox
    width 100%
    height 1016px
    position relative
    top 0px
    left 0px
.logo
    display block
    width 172px
    height 54px
    background-image url('../../assets/jltu_1.png')
    background-repeat no-repeat
    background-size 173px
    background-position 0px -127px
.logoBox
    background-color #f2f5f4
    .logoImg
        width 100%
        height 482px
        img
            width 268px
            height 91px
            position relative
            top 50%
            left 50%
            transform translate(-50%, -90%)
    .buttonBox
        width 670px
        height 220px
        margin 0 40px
        div
            width 100%
            height 94px
            font-size 28px
            border-radius 4px
            display flex
            justify-content center
            align-items center
            i
                margin-right 16px
                font-size 38px
            &:first-child
                margin-bottom 32px
                background-color #dd1a21
                color #fff
            &:last-child
                color #dd1a21
                border 1px solid #dd1a21
.footerBox
    width 100%
    height 40px
    position absolute
    left 0
    bottom 80px
    display flex
    justify-content center
    div
        padding 0 43px
        color #7f7f7f
        display flex
        align-items center
        i
            font-size 35px
        span
            font-size 27px
            margin-left 5px
        &:first-child
            border-right 1px solid #7f7f7f
        &:last-child
            border-left 1px solid #7f7f7f
</style>