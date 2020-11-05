<template>
    <div class="info" :style="{ height: heightChange }">
        <heading>
            <generalNav
                :leftWidth="52"
                :leftHeight="52"
                :rightWidth="47"
                :rightHeight="47"
                :boxHeight="84"
                ><i class="headLogo"></i
            ></generalNav>
        </heading>
        <div :class="false ? 'infoHomePageLogo' : 'logInPageLogo'">
            <img src="./img/wyyx_1.png" alt="" />
        </div>
        <!-- 主界面 -->
        <div v-show="false">
            <div class="infoHomePageButton">
                <div>
                    <i class="iconfont icon-shouji1"></i>
                    <span>手机号快捷登录</span>
                </div>
                <div>
                    <i class="iconfont icon-youjian1"></i>
                    <span>邮箱账号登录</span>
                </div>
            </div>
            <div class="infoHomePageFooter">
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
        <!-- 登陆界面,手机验证码登录 -->
        <div v-show="false" class="authCodeBox">
            <form action="">
                <div>
                    <div class="authCodePhoneNumber">
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
                    <div class="authCodeNumber">
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
                        <div class="authCodeText">
                            <div>遇到问题？</div>
                            <div>使用密码验证登录</div>
                        </div>
                        <div class="authCodeButton">登录</div>
                        <div class="authCodeClause">
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
            <div class="logInPageRedirect">
                <span>其他登录方式</span>
                <i class="iconfont icon-iconfontyoujiantou-copy"></i>
            </div>
        </div>
        <!-- 手机密码登录页 -->
        <div v-show="false" class="pwdbox">
            <form action="">
                <div>
                    <div class="pwdPhoneNumber">
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
                    <div class="pwdNumber">
                        <input
                            type="password"
                            maxlength="6"
                            spellcheck="false"
                            tabindex="5"
                            autocomplete="off"
                            name="pwd"
                            placeholder="请输入密码"
                        />
                        <div class="iconfont icon-chahao"></div>
                    </div>
                    <div>
                        <div class="pwdText">
                            <div>忘记密码？</div>
                            <div>短信快捷登录</div>
                        </div>
                        <div class="pwdButton">登录</div>
                    </div>
                </div>
            </form>
            <div class="logInPageRedirect">
                <span>其他登录方式</span>
                <i class="iconfont icon-iconfontyoujiantou-copy"></i>
            </div>
        </div>
        <!-- 邮箱账号登录 -->
        <div class="emailBox">
            <form action="">
                <div>
                    <div class="emailAddress">
                        <input
                            type="email"
                            spellcheck="false"
                            tabindex="1"
                            autocomplete="off"
                            name="email"
                            placeholder="邮箱帐号"
                        />
                        <div class="iconfont icon-chahao"></div>
                    </div>
                    <div class="emailPwd">
                        <input
                            type="password"
                            maxlength="50"
                            spellcheck="false"
                            tabindex="2"
                            autocomplete="off"
                            name="password"
                            placeholder="密码"
                        />
                        <div class="iconfont icon-chahao"></div>
                    </div>
                    <div>
                        <div class="emailText">
                            <div>注册帐号</div>
                            <div>忘记密码</div>
                        </div>
                        <div class="emailButton">登录</div>
                    </div>
                </div>
            </form>
            <div class="logInPageRedirect">
                <span>其他登录方式</span>
                <i class="iconfont icon-iconfontyoujiantou-copy"></i>
            </div>
        </div>
    </div>
</template>
<script>
import heading from "../../components/Heading/Heading";
import generalNav from "../../components/Heading/generalNav";
export default {
    name: "PersonalInfo",
    data() {
        return {
            pageHeight: 0,
        };
    },
    methods: {
        _clientHeight() {
            const target = document.documentElement;
            const clientHeight = target.clientHeight;
            const scrollHeight = target.scrollHeight;
            clientHeight >= scrollHeight
                ? (this.pageHeight = clientHeight)
                : (this.pageHeight = scrollHeight);
        },
    },
    computed: {
        heightChange() {
            return !!this.pageHeight ? this.pageHeight + "px" : "100%";
        },
    },
    mounted() {
        this._clientHeight();
    },
    components: {
        heading,
        generalNav,
    },
};
</script>
<style lang="stylus" scoped>
.info
    width 100%
    position relative
    top 0px
    left 0px
    background-color #f2f5f4
.headLogo
    display block
    width 172px
    height 54px
    background-image url('../../assets/jltu_1.png')
    background-repeat no-repeat
    background-size 173px
    background-position 0px -125px
// 主界面
.infoHomePageLogo
    width 100%
    height 482px
    img
        width 272px
        height 96px
        padding 3px 2px
        position relative
        top 50%
        left 50%
        transform translate(-50%, -85%)
.infoHomePageButton
    width 670px
    height 300px
    margin 0 40px
    padding-bottom 80px
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
.infoHomePageFooter
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
// 登录界面LOGO
.logInPageLogo
    width 100%
    height 152px
    padding-top 62px
    background-color #fff
    img
        display block
        width 267px
        height 100%
        margin 0 auto
// 手机验证码登录页
.authCodeBox
    width 670px
    margin 0 auto
    padding-top 58px
.authCodePhoneNumber, .authCodeNumber
    width 100%
    position relative
    top 0
    left 0
    input
        height 42px
        font-size 28px
        line-height 42px
        border 0
        color #333
    div
        position absolute
        top 50%
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
.authCodePhoneNumber
    input
        width 590px
        margin 32px 0 20px 0
    div
        transform translateY(-45%)
        width 63px
        height 63px
        right 0
        line-height 63px
        font-size 26px
        color #ccc
.authCodeNumber
    margin-top 34px
    input
        width 380px
        margin 30px 0 22px 0
    div
        transform translateY(-50%)
        color #333
        width 164px
        height 53px
        right 15px
        font-size 28px
        line-height 53px
        border-radius 6px
        border 1px solid #7f7f7f
.authCodeText
    width 100%
    height 116px
    position relative
    top 0px
    left 0px
    div
        position absolute
        font-size 28px
        top 50%
        &:first-child
            left 0px
            color #7f7f7f
            transform translateY(-35%)
        &:last-child
            right 0px
            color #333
            transform translateY(-55%)
.authCodeButton
    width 100%
    height 92px
    font-size 28px
    background-color #dd1a21
    color #fff
    text-align center
    line-height 92px
    border-radius 6px
.authCodeClause
    height 68px
    display flex
    padding-top 25px
    margin-bottom 45px
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
// 手机密码登录页
.pwdbox
    width 670px
    margin 0 auto
    padding-top 152px
.pwdPhoneNumber, .pwdNumber
    width 100%
    position relative
    top 0
    left 0
    input
        width 590px
        height 42px
        font-size 28px
        line-height 42px
        border 0
        color #333
        margin 28px 0 23px
    div
        width 63px
        height 63px
        position absolute
        top 50%
        right 0
        line-height 63px
        font-size 26px
        color #ccc
        text-align center
        transform translateY(-45%)
    &::after
        content ''
        position absolute
        left -50%
        bottom 0
        width 200%
        height 1px
        background-color #d9d9d9
        transform scale(0.5)
.pwdText
    width 100%
    height 118px
    position relative
    top 0px
    left 0px
    div
        position absolute
        font-size 28px
        top 50%
        &:first-child
            left 0px
            color #7f7f7f
            transform translateY(-35%)
        &:last-child
            right 0px
            color #333
            transform translateY(-50%)
.pwdButton
    width 100%
    height 92px
    font-size 28px
    background-color #dd1a21
    color #fff
    text-align center
    line-height 92px
    border-radius 6px
    margin-bottom 66px
// 邮箱账号登录
.emailBox
    width 670px
    margin 0 auto
    padding-top 152px
.emailAddress, .emailPwd
    width 100%
    position relative
    top 0
    left 0
    input
        width 590px
        height 42px
        font-size 28px
        line-height 42px
        border 0
        color #333
        margin 28px 0 23px
    div
        width 63px
        height 63px
        position absolute
        top 50%
        right 0
        line-height 63px
        font-size 26px
        color #ccc
        text-align center
        transform translateY(-45%)
    &::after
        content ''
        position absolute
        left -50%
        bottom 0
        width 200%
        height 1px
        background-color #d9d9d9
        transform scale(0.5)
.emailText
    width 100%
    height 118px
    position relative
    top 0px
    left 0px
    div
        position absolute
        font-size 26px
        top 50%
        color #7f7f7f
        transform translateY(-55%)
        &:first-child
            left 0px
        &:last-child
            right 0px
.emailButton
    width 100%
    height 92px
    font-size 28px
    background-color #dd1a21
    color rgba(255, 255, 255, 0.5)
    text-align center
    line-height 92px
    border-radius 6px
    margin-bottom 66px
// 登录界面重定向
.logInPageRedirect
    width 100%
    text-align center
    span
        font-size 28px
        color #333
    i
        font-size 25px
        margin-left 5px
        color #7f7f7f
</style>