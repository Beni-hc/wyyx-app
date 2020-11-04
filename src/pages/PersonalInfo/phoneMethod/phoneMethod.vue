<template>
    <div class="bgc">
        <div class="logoImg">
            <img src="../img/wyyx_1.png" alt="" />
        </div>
        <div class="logInBox">
            <form action="">
                <div class="logInForm">
                    <div class="onePhoneInput">
                        <input
                            type="tel"
                            maxlength="11"
                            spellcheck="false"
                            tabindex="1"
                            autocomplete="off"
                            name="email"
                            placeholder="请输入手机号"
                        />
                        <div class="iconfont icon-chahao"></div>
                    </div>
                    <div class="oneSecurityCode">
                        <input
                            type="tel"
                            maxlength="6"
                            spellcheck="false"
                            tabindex="5"
                            autocomplete="off"
                            name="email3"
                            placeholder="请输入短信验证码"
                        />
                        <div>获取验证码</div>
                    </div>
                    <div>
                        <div class="logInTop">
                            <div>遇到问题？</div>
                            <div>使用密码验证登录</div>
                        </div>
                        <div class="logInCenter">登录</div>
                        <div class="logInBottom">
                            <div>
                                <input
                                    type="checkbox"
                                    name="inputCheckbox"
                                    id="inputCheckbox"
                                />
                                <label
                                    for="inputCheckbox"
                                    class="iconfont"
                                ></label>
                            </div>
                            <div>
                                <span>我同意</span>
                                <a href="javascript:;"> 《服务条款》</a>
                                <span> 和 </span>
                                <a href="javascript:;">《网易隐私政策》</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div>
                <span>其他登录方式</span>
                <i class="iconfont icon-iconfontyoujiantou-copy"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.bgc
    width 100%
    height 100%
    padding-top 56px
    background-color #fff
.logoImg
    width 100%
    height 90px
    img
        display block
        width 268px
        height 100%
        margin 0 auto
.logInBox
    width 670px
    margin 0 auto
    form
        width 100%
        height 555px
        position relative
        top 0
        left 0
    &>div
        width 100%
        margin-top 46px
        text-align center
        span
            font-size 28px
            color #333
        i
            font-size 27px
            margin-left 4px
            color #7f7f7f
.logInForm
    width 100%
    position absolute
    left 0
    bottom 0
.onePhoneInput, .oneSecurityCode
    width 100%
    position relative
    top 0
    left 0
    input
        width 590px
        height 42px
        font-size 28px
        line-height 42px
        margin 30px 0 22px 0
        border 0
        color #333
    div
        position absolute
        top 50%
        transform translateY(-50%)
        color #333
        text-align center
    &::after
        content ''
        position absolute
        left -50%
        bottom 0
        width 200%
        height 1px
        background-color #d9d9d9
        transform scale(0.5)
.onePhoneInput
    div
        width 63px
        height 63px
        right 0
        line-height 63px
        color #ccc
        font-size 26px
.oneSecurityCode
    margin-top 34px
    div
        width 164px
        height 53px
        right 15px
        font-size 28px
        line-height 53px
        border-radius 6px
        border 1px solid #7f7f7f
.logInTop
    width 100%
    height 116px
    position relative
    top 0px
    left 0px
    div
        position absolute
        font-size 29px
        top 50%
        &:first-child
            left 0px
            color #7f7f7f
            transform translateY(-35%)
        &:last-child
            right 0px
            color #333
            transform translateY(-55%)
.logInCenter
    width 100%
    height 92px
    font-size 28px
    background-color #dd1a21
    color #fff
    text-align center
    line-height 92px
    border-radius 6px
.logInBottom
    height 68px
    display flex
    padding-top 25px
    div
        &:first-child
            width 35px
            height 35px
            margin-right 13px
            position relative
            top 0
            left 0
        &:last-child
            font-size 24px
            padding-bottom 6px
            span
                color #7f7f7f
            a
                color #007aff
#inputCheckbox
    visibility hidden
#inputCheckbox + label
    display block
    width 34px
    height 34px
    position absolute
    top 2px
    left 0
    background-color #fff
    border 1px solid #c3c3c3
    border-radius 4px
#inputCheckbox:checked + label::before
    display block
    content '\e62e'
    font-size 26px
    color #c3c3c3
    text-align center
    line-height 34px
</style>