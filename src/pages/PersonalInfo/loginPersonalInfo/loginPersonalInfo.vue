<template>
    <div class="loginPersonalInfo">
        <div class="userHead">
            <div class="userHeadLeft">
                <img src="./img/userimage.png" alt="" />
                <div>
                    <p>用户72196289</p>
                    <div>
                        <span>普通用户</span>
                    </div>
                </div>
            </div>
            <div class="userHeadRight">
                <i></i>
                <div>
                    <i></i>
                    <div>
                        <div>Pro会员</div>
                        <div>
                            <span>立即试用</span>
                            <i></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="myAsset">
            <h2>我的资产</h2>
            <div class="assetDetails">
                <div v-for="(item, index) in myAsset" :key="item.text">
                    <p>
                        <span>{{ index === 0 || index === 3 ? "¥" : "" }}</span>
                        <span :class="{ activeRed: index === 0 }">{{
                            item.number
                        }}</span>
                    </p>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="publicity">
            <div>
                <span>
                    <i class="card"></i>
                    <span class="yueka">省钱月卡</span>
                    <span>|</span>
                    <span class="hongbao">每月可领32元无门槛红包</span>
                </span>
                <i class="iconfont icon-youjiantou-copy rightArrow"></i>
            </div>
        </div>
        <div class="openRedPacket">
            <img src="./img/hongbaozhuanshu.png" alt="" />
        </div>
        <div class="menus">
            <ul>
                <li v-for="(item, index) in menusList" :key="index">
                    <i
                        :style="{
                            'background-position':
                                '0' + ' ' + item.imgY / 75 + 'rem',
                        }"
                    ></i>
                    <span>{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <div class="exitButton">
            <button>退出登录</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "loginPersonalInfo",
    data() {
        return {
            myAsset: [
                {
                    number: 0,
                    text: "回馈金",
                },
                {
                    number: 9,
                    text: "红包",
                },
                {
                    number: 2,
                    text: "优惠券",
                },
                {
                    number: 0,
                    text: "津贴",
                },
                {
                    number: 0,
                    text: "礼品卡",
                },
            ],
            menusList: [
                {
                    name: "我的订单",
                    imgY: -990,
                },
                {
                    name: "帐号管理",
                    imgY: -811,
                },
                {
                    name: "周六一起拼",
                    imgY: -1158,
                },
                {
                    name: "售后服务",
                    imgY: -451,
                },
                {
                    name: "邀请返利",
                    imgY: -930,
                },
                {
                    name: "优先购",
                    imgY: -1278,
                },
                {
                    name: "积分中心",
                    imgY: -1218,
                },
                {
                    name: "会员俱乐部",
                    imgY: -1050,
                },
                {
                    name: "地址管理",
                    imgY: -391,
                },
                {
                    name: "支付安全",
                    imgY: -1398,
                },
                {
                    name: "帮助与客服",
                    imgY: -690,
                },
                {
                    name: "意见反馈",
                    imgY: -571,
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
.loginPersonalInfo
    padding-bottom 115px
.userHead
    height 270px
    background-image url('./img/bgc.png')
    background-repeat no-repeat
    background-size cover
    display flex
    flex-flow row nowrap
    justify-content space-between
    padding-left 30px
.userHeadLeft
    display flex
    flex-flow row nowrap
    align-items center
    img
        width 142px
        height 142px
        border-radius 50%
    &>div
        width 338px
        margin-left 30px
        color #fff
        p
            font-size 36px
            margin-bottom 0
            text-align left
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        div
            padding 3px 0
            span
                font-size 28px
.userHeadRight
    width 210px
    position relative
    top 0
    left 0
    overflow hidden
    &>i
        width 64px
        height 64px
        position absolute
        top 56px
        right 14px
        background-image url('./img/loginPersonalInfo.png')
        background-repeat no-repeat
        background-position 0 -190px
        background-size 84px 1448px
    &>div
        width 203px
        height 84px
        position absolute
        right -10px
        bottom 41px
        display flex
        align-items center
        background-image linear-gradient(180deg, #574E44 0, #0E0E0E 100%)
        border-top-left-radius 42px
        border-bottom-left-radius 42px
        -webkit-animation shake 1s linear 3
        animation shake 1s linear 3
        &>i
            width 56px
            height 56px
            margin 0 9px
            background-image url('./img/loginPersonalInfo.png')
            background-repeat no-repeat
            background-position 0px -70px
            background-size 55px 935px
        &>div
            padding-bottom 10px
            div
                color #f9e0c0
                &:first-child
                    font-size 26px
                    padding 6px 0 0 0
                &:last-child
                    display flex
                    flex-flow row nowrap
                    align-items center
                    padding 1px 0 0 0
                    span
                        font-size 20px
                    i
                        width 20px
                        height 20px
                        margin 3px 0 0 4px
                        background-image url('./img/loginPersonalInfo.png')
                        background-repeat no-repeat
                        background-position 0 -43px
                        background-size 58px 1034px
@keyframes shake
    50%, 0%, 100%
        -webkit-transform translateX(0)
        -moz-transform translateX(0)
        -ms-transform translateX(0)
        -o-transform translateX(0)
        transform translateX(0)
    25%
        -webkit-transform translateX(10px)
        -moz-transform translateX(10px)
        -ms-transform translateX(10px)
        -o-transform translateX(10px)
        transform translateX(10px)
    75%
        -webkit-transform translateX(-10px)
        -moz-transform translateX(-10px)
        -ms-transform translateX(-10px)
        -o-transform translateX(-10px)
        transform translateX(-10px)
.myAsset
    background-color #fff
    h2
        font-size 28px
        margin-left 30px
        color #333
        line-height 104px
        font-weight 400
        border-bottom 1px solid #d9d9d9
    .assetDetails
        padding-top 32px
        display flex
        flex-flow row nowrap
        div
            height 128px
            p
                color #333
                text-align center
                &:first-child
                    margin-bottom 4px
                    line-height 1.5
                    font-weight 700
                    span
                        &:nth-child(1)
                            font-size 24px
                            margin-right 4px
                        &:nth-child(2)
                            font-size 32px
                            position relative
                            top 0px
                            left 0px
                            &.activeRed::before
                                content ''
                                width 14px
                                height 14px
                                border-radius 50%
                                background-color #dd1a21
                                position absolute
                                top -2px
                                right -10px
                &:last-child
                    font-size 24px
                    line-height 36px
            &:nth-child(2n+1)
                width 160px
            &:nth-child(2n+2)
                width 136px
.publicity
    background-color #fff
    margin-bottom 20px
    padding 0 20px 20px 20px
    div
        width 710px
        height 90px
        padding 0 24px
        background-color #fae9e5
        color #dd1a21
        font-size 24px
        display flex
        flex-flow row nowrap
        align-items center
        justify-content space-between
        border-radius 16px
        span
            line-height 1
            .card
                display inline-block
                width 30px
                height 24px
                background-image url('./img/card.png')
                vertical-align top
            .yueka
                font-weight 700
                margin 0 13px 0 14px
            .hongbao
                font-weight lighter
                margin-left 7px
        .rightArrow
            font-size 22px
            font-weight 700
.openRedPacket
    padding 20px 30px
    background-color #fff
    border-bottom 1px solid rgba(0, 0, 0, 0.15)
    img
        width 100%
        display block
.menus
    background-color #fff
    ul
        display flex
        flex-flow row wrap
        li
            flex-shrink 0
            width 33.33333%
            height 181px
            padding-top 45px
            border-right 1px solid rgba(0, 0, 0, 0.15)
            border-bottom 1px solid rgba(0, 0, 0, 0.15)
            display flex
            flex-flow column nowrap
            align-items center
            &:nth-child(3n)
                border-right 0
            &:nth-last-child(-n+3)
                border-bottom 0
            i
                width 50px
                height 50px
                margin-bottom 16px
                background-image url('./img/loginPersonalInfo.png')
                background-repeat no-repeat
                background-size 84px 1448px
            span
                font-size 24px
                color #333
.exitButton
    margin-top 40px
    button
        width 100%
        height 100%
        border-radius 2px
        line-height 96px
        color #333
        background-color #fff
        font-size 28px
        border 1px solid #fff
</style>